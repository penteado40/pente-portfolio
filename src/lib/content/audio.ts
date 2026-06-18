import type { Language } from "@/lib/i18n";
import type { AudioContent } from "./types";

// TODO: replace bio, tracks, gear, and credits with Felipe's real work.
const en: AudioContent = {
  bio: [
    "I'm an audio engineer specializing in mixing and mastering for independent artists, working out of a treated home studio in the evenings and on weekends.",
    "My approach starts with the arrangement: a mix that needs heavy correction usually needed a conversation earlier. From there it's about clarity, dynamics, and translation across headphones, car speakers, bigger systems.",
  ],
  tracks: [
    // {
    //   title: "Late Hours (mix & master)",
    //   artist: "Sample placeholder track",
    //   // TODO: swap for Felipe's own mix.
    //   url: "https://soundcloud.com/forss/flickermood",
    //   cover: "https://picsum.photos/seed/pente-track-late-hours/800/800",
    // },
    {
      title: "Penteado's Mixes",
      artist: "Playlist on Spotify",
      // TODO: swap for Felipe's own mix.
      url: "https://open.spotify.com/playlist/0U64yQ2gcfF4di63dp9Gdt?si=57a49c9703f1469d",
      cover: "",
    },
    {
      title: "FOH for Vocal Livre's show",
      artist: "Vocal Livre",
      // TODO: swap for Felipe's own session breakdown video.
      url: "https://youtu.be/xFA-36yV4Iw",
      cover: "",
    },
    {
      title: "FOH for Vocal Livre's show",
      artist: "Vocal Livre",
      // TODO: swap for Felipe's own session breakdown video.
      url: "https://youtu.be/vQ9FtkHUTW0",
      cover: "",
    },
    {
      title: "FOH for Vocal Livre's show",
      artist: "Vocal Livre",
      // TODO: swap for Felipe's own session breakdown video.
      url: "https://youtu.be/8cDzRdb7AdA",
      cover: "",
    },
    {
      title: "FOH for Vocal Livre's show",
      artist: "Vocal Livre",
      // TODO: swap for Felipe's own session breakdown video.
      url: "https://youtu.be/sV7bTqrZ9qE",
      cover: "",
    },
  ],
  services: [
    {
      title: "Mixing",
      description:
        "Full multitrack mixing from session stems, with up to two rounds of revisions and stem exports on request.",
    },
    {
      title: "Mastering",
      description:
        "Loudness, tonal balance, and translation checks across playback systems, delivered in streaming-ready formats.",
    },
    {
      title: "Recording",
      description:
        "Vocal and instrument tracking sessions at a treated home studio, with same-day rough mixes.",
    },
    {
      title: "Live Sound",
      description:
        "FOH for live events, focusing on clarity, dynamics, emotion, and sound quality.",
    },
  ],
  gear: [
    {
      category: "Monitoring",
      items: ["Apple AirPods Max", "Beyerdynamic DT 1990 Pro MKII"],
    },
    {
      category: "Audio Interface",
      items: ["Apogee Duet 3"],
    },
    {
      category: "DAW",
      items: ["Avid Pro Tools"],
    },
    {
      category: "Consoles",
      items: ["Yamaha Rivage/DM7/CL Series", "Waves eMotion LV1", "Digico", "Soundcraft"],
    },
  ],
  credits: [
    // { name: "Marina Tavares", role: "Singer-songwriter" },
    // { name: "Bruno Aragao", role: "Hip-hop producer" },
    // { name: "Coletivo Varanda", role: "Indie band" },
    // { name: "Studio Lumen", role: "Podcast production" },
  ],
};

const pt: AudioContent = {
  bio: [
    "Sou engenheiro de audio especializado em mixagem e masterizacao para artistas independentes, trabalhando em um home studio tratado acusticamente nas noites e fins de semana.",
    "Minha abordagem comeca pelo arranjo: uma mixagem que precisa de muita correcao geralmente precisava de uma conversa antes. A partir dali e sobre clareza, dinamica e como o som se traduz em fones, carros e sistemas maiores.",
  ],
  tracks: [
    {
      title: "Penteado's Mixes",
      artist: "Playlist on Spotify",
      // TODO: swap for Felipe's own mix.
      url: "https://open.spotify.com/playlist/0U64yQ2gcfF4di63dp9Gdt?si=57a49c9703f1469d",
      cover: "",
    },
    {
      title: "FOH for Vocal Livre's show",
      artist: "Vocal Livre",
      // TODO: swap for Felipe's own session breakdown video.
      url: "https://youtu.be/xFA-36yV4Iw",
      cover: "",
    },
    {
      title: "FOH for Vocal Livre's show",
      artist: "Vocal Livre",
      // TODO: swap for Felipe's own session breakdown video.
      url: "https://youtu.be/vQ9FtkHUTW0",
      cover: "",
    },
    {
      title: "FOH for Vocal Livre's show",
      artist: "Vocal Livre",
      // TODO: swap for Felipe's own session breakdown video.
      url: "https://youtu.be/8cDzRdb7AdA",
      cover: "",
    },
    {
      title: "FOH for Vocal Livre's show",
      artist: "Vocal Livre",
      // TODO: swap for Felipe's own session breakdown video.
      url: "https://youtu.be/sV7bTqrZ9qE",
      cover: "",
    },
  ],
  services: [
    {
      title: "Mixagem",
      description:
        "Mixagem completa a partir dos stems da sessao, com ate duas rodadas de ajustes e exportacao de stems sob demanda.",
    },
    {
      title: "Masterizacao",
      description:
        "Ajuste de loudness, balanco tonal e checagem em diferentes sistemas de reproducao, entregue em formatos prontos para streaming.",
    },
    {
      title: "Gravacao",
      description:
        "Sessoes de gravacao de vocais e instrumentos em studio tratado, com mix preliminar no mesmo dia.",
    },
    {
      title: "Som Ao Vivo",
      description:
        "Mixagem de eventos ao vivo, com foco em claridade, dinamica, emoção e qualidade de som.",
    },
  ],
  gear: [
    {
      category: "Monitoramento",
      items: ["Apple AirPods Max", "Beyerdynamic DT 1990 Pro MKII"],
    },
    {
      category: "Interface de Audio",
      items: ["Apogee Duet 3"],
    },
    {
      category: "DAW",
      items: ["Avid Pro Tools"],
    },
    {
      category: "Mesas de Som",
      items: ["Yamaha Rivage/DM7/CL Series", "Waves eMotion LV1", "Digico", "Soundcraft"],
    },
  ],
  credits: [
    // { name: "Marina Tavares", role: "Cantora e compositora" },
    // { name: "Bruno Aragao", role: "Produtor de hip-hop" },
    // { name: "Coletivo Varanda", role: "Banda indie" },
    // { name: "Studio Lumen", role: "Producao de podcast" },
  ],
};

export const audioContent: Record<Language, AudioContent> = { en, pt };
