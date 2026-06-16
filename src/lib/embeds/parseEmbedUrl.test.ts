import { describe, expect, it } from "vitest";
import { parseEmbedUrl } from "./parseEmbedUrl";

describe("parseEmbedUrl", () => {
  it("parses standard YouTube watch URLs", () => {
    const config = parseEmbedUrl(
      "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    );
    expect(config).toEqual({
      platform: "youtube",
      src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      aspectRatio: "16 / 9",
      title: "YouTube video player",
    });
  });

  it("parses youtu.be short links", () => {
    const config = parseEmbedUrl("https://youtu.be/dQw4w9WgXcQ");
    expect(config?.platform).toBe("youtube");
    expect(config?.src).toBe("https://www.youtube.com/embed/dQw4w9WgXcQ");
  });

  it("parses YouTube shorts URLs", () => {
    const config = parseEmbedUrl(
      "https://www.youtube.com/shorts/dQw4w9WgXcQ",
    );
    expect(config?.src).toBe("https://www.youtube.com/embed/dQw4w9WgXcQ");
  });

  it("parses Spotify track URLs into a compact embed", () => {
    const config = parseEmbedUrl(
      "https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp?si=abc123",
    );
    expect(config).toEqual({
      platform: "spotify",
      src: "https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp",
      aspectRatio: "3 / 1",
      title: "Spotify player",
    });
  });

  it("parses Spotify playlist URLs into a tall embed", () => {
    const config = parseEmbedUrl(
      "https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M",
    );
    expect(config?.aspectRatio).toBe("1 / 1");
    expect(config?.src).toBe(
      "https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M",
    );
  });

  it("parses Spotify URLs with an intl prefix", () => {
    const config = parseEmbedUrl(
      "https://open.spotify.com/intl-pt/track/3n3Ppam7vgaVa1iaRUc9Lp",
    );
    expect(config?.src).toBe(
      "https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp",
    );
  });

  it("parses SoundCloud track URLs", () => {
    const config = parseEmbedUrl("https://soundcloud.com/artist/track-name");
    expect(config?.platform).toBe("soundcloud");
    expect(config?.aspectRatio).toBe("4 / 1");
    expect(config?.src).toContain(
      encodeURIComponent("https://soundcloud.com/artist/track-name"),
    );
  });

  it("returns null for a SoundCloud homepage URL with no path", () => {
    expect(parseEmbedUrl("https://soundcloud.com")).toBeNull();
    expect(parseEmbedUrl("https://soundcloud.com/")).toBeNull();
  });

  it("returns null for unsupported platforms", () => {
    expect(parseEmbedUrl("https://vimeo.com/12345")).toBeNull();
  });

  it("returns null for malformed URLs", () => {
    expect(parseEmbedUrl("not a url")).toBeNull();
    expect(parseEmbedUrl("")).toBeNull();
  });

  it("returns null for non-http(s) protocols", () => {
    expect(parseEmbedUrl("javascript:alert(1)")).toBeNull();
    expect(parseEmbedUrl("ftp://soundcloud.com/artist/track")).toBeNull();
  });

  it("returns null for a YouTube URL with no video id", () => {
    expect(parseEmbedUrl("https://www.youtube.com/watch")).toBeNull();
    expect(parseEmbedUrl("https://www.youtube.com/")).toBeNull();
  });
});
