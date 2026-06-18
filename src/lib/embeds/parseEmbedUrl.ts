export type EmbedPlatform = "youtube" | "spotify" | "soundcloud";

export type EmbedConfig = {
  platform: EmbedPlatform;
  /** Source URL for the embed iframe. */
  src: string;
  /** CSS aspect-ratio value for the embed's container. Mutually exclusive with height. */
  aspectRatio?: string;
  /** CSS height value for the embed's container. Mutually exclusive with aspectRatio. */
  height?: string;
  /** Accessible title for the embed iframe. */
  title: string;
};

const YOUTUBE_HOSTS = new Set(["youtube.com", "youtu.be", "m.youtube.com"]);

function stripWww(hostname: string): string {
  return hostname.replace(/^www\./, "");
}

function extractYouTubeId(url: URL, host: string): string | null {
  if (host === "youtu.be") {
    return url.pathname.slice(1) || null;
  }

  if (url.pathname === "/watch") {
    return url.searchParams.get("v");
  }

  const embedMatch = url.pathname.match(/^\/embed\/([a-zA-Z0-9_-]+)/);
  if (embedMatch) return embedMatch[1];

  const shortsMatch = url.pathname.match(/^\/shorts\/([a-zA-Z0-9_-]+)/);
  if (shortsMatch) return shortsMatch[1];

  return null;
}

function parseYouTube(url: URL, host: string): EmbedConfig | null {
  const videoId = extractYouTubeId(url, host);
  if (!videoId) return null;

  return {
    platform: "youtube",
    src: `https://www.youtube.com/embed/${videoId}`,
    aspectRatio: "16 / 9",
    title: "YouTube video player",
  };
}

function parseSpotify(url: URL): EmbedConfig | null {
  const match = url.pathname.match(
    /\/(?:intl-[a-z]{2}\/)?(track|album|playlist|episode|show)\/([a-zA-Z0-9]+)/,
  );
  if (!match) return null;

  const [, type, id] = match;
  const isCompact = type === "track" || type === "episode";

  return {
    platform: "spotify",
    src: `https://open.spotify.com/embed/${type}/${id}`,
    aspectRatio: isCompact ? "3 / 1" : undefined,
    height: isCompact ? undefined : "380px",
    title: "Spotify player",
  };
}

function parseSoundCloud(url: URL): EmbedConfig | null {
  if (url.pathname === "" || url.pathname === "/") return null;

  return {
    platform: "soundcloud",
    src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(url.toString())}&color=%23ff6a1f&auto_play=false&show_user=true`,
    aspectRatio: "4 / 1",
    title: "SoundCloud player",
  };
}

/**
 * Parses a track/mix URL (SoundCloud, Spotify, or YouTube) into an embed
 * config, or returns `null` for unsupported/malformed URLs so the UI can
 * skip invalid entries instead of crashing.
 */
export function parseEmbedUrl(rawUrl: string): EmbedConfig | null {
  let url: URL;
  try {
    url = new URL(rawUrl);
  } catch {
    return null;
  }

  if (url.protocol !== "https:" && url.protocol !== "http:") return null;

  const host = stripWww(url.hostname);

  if (YOUTUBE_HOSTS.has(host)) return parseYouTube(url, host);
  if (host === "open.spotify.com") return parseSpotify(url);
  if (host === "soundcloud.com") return parseSoundCloud(url);

  return null;
}
