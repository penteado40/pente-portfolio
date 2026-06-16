import { parseEmbedUrl } from "./parseEmbedUrl";

type TrackEmbedProps = {
  url: string;
  title: string;
};

/** Renders a SoundCloud, Spotify, or YouTube embed for a track URL. Skips silently if the URL is unrecognized. */
export function TrackEmbed({ url, title }: TrackEmbedProps) {
  const config = parseEmbedUrl(url);
  if (!config) return null;

  return (
    <div
      className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]"
      style={{ aspectRatio: config.aspectRatio }}
    >
      <iframe
        src={config.src}
        title={title}
        loading="lazy"
        allow="autoplay; encrypted-media; clipboard-write; picture-in-picture"
        className="h-full w-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
