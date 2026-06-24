import type { Language } from "@/lib/i18n";
import type { AudioContent, Photo, Production } from "./types";

// TODO: add photos to each subfolder under /public/photos/ and update links.
export const audioProductionMedia: Pick<Production, "photos" | "link">[] = [
  {
    photos: [], // TODO: add to /public/photos/dvd-temporal/
    link: undefined,
  },
  {
    photos: [], // TODO: add to /public/photos/dvd-15anos/
    link: undefined,
  },
  {
    photos: [], // TODO: add to /public/photos/dvd-novo-tempo/
    link: undefined,
  },
];

// TODO: update alt text for each photo.
export const audioPhotos: Photo[] = [
  { src: "/photos/photo_1.jpg", alt: "Photo 1", width: 3456, height: 5184 },
  { src: "/photos/photo_2.jpg", alt: "Photo 2", width: 3456, height: 5184 },
  { src: "/photos/photo_5.jpg", alt: "Photo 5", width: 3456, height: 5184 },
  { src: "/photos/photo_7.jpg", alt: "Photo 7", width: 3456, height: 5184 },
  { src: "/photos/photo_9.jpg", alt: "Photo 9", width: 3456, height: 5184 },
  { src: "/photos/photo_10.jpg", alt: "Photo 10", width: 3456, height: 5184 },
  { src: "/photos/photo_12.jpg", alt: "Photo 12", width: 3456, height: 5184 },
  { src: "/photos/photo_13.jpg", alt: "Photo 13", width: 3456, height: 5184 },
  { src: "/photos/photo_15.jpg", alt: "Photo 15", width: 1536, height: 1920 },
  { src: "/photos/photo_16.jpg", alt: "Photo 16", width: 6240, height: 4160 },
  { src: "/photos/photo_17.png", alt: "Photo 17", width: 1920, height: 1081 },
  { src: "/photos/photo_18.PNG", alt: "Photo 18", width: 2048, height: 1365 },
  { src: "/photos/photo_19.PNG", alt: "Photo 19", width: 1365, height: 2048 },
  { src: "/photos/photo_20.PNG", alt: "Photo 20", width: 2048, height: 1365 },
  { src: "/photos/photo_21.PNG", alt: "Photo 21", width: 1365, height: 2048 },
  { src: "/photos/photo_22.jpg", alt: "Photo 22", width: 4128, height: 6192 },
  { src: "/photos/photo_23.jpg", alt: "Photo 23", width: 4057, height: 6086 },
];

// TODO: replace bio, tracks, gear, and credits with Felipe's real work.
const en: AudioContent = {
  bio: [
    "I'm Felipe Penteado, an audio engineer specializing in vocal music. I work with live events, DVDs, and studio mixing — alongside vocal groups, choirs, bands, and independent artists.",
    "I've been messing around with cables and gear since I was 12, always curious about the sound equipment at church. I'm not sure exactly when it became a calling — I think it always was. At 15, at boarding school, I was already helping with events at school and at the university. At 18, I took my first professional step joining the audio team at Ministério VOX.",
    "To me, the audio engineer's role is to be invisible. No one in the audience should notice I'm there. My job is to amplify what the stage delivers — and let the message land with even more force in every person in the crowd. When the mix is right, I can feel the energy alongside the audience, get moved by the music, feel what the musicians and singers are giving. That's when I disconnect from everything around me and just enjoy the show.",
    "That's the feeling I chase in every project — whether it's a major DVD or a studio session.",
    '“Music touches hearts. But when the sound is right, the message gets amplified even further.”',
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
        "I take your session stems and build the mix from the ground up — balancing every voice and instrument until the song hits the way it should. Two rounds of revisions included.",
    },
    {
      title: "Mastering",
      description:
        "Final polish for streaming, vinyl, or broadcast. I check translation across systems so your track sounds consistent everywhere it plays.",
    },
    {
      title: "Recording",
      description:
        "Vocal and instrument sessions at my treated studio. You walk out with a rough mix the same day.",
    },
    {
      title: "Live Sound",
      description:
        "FOH mixing for concerts, DVDs, and events — with a focus on clarity, dynamics, and letting the performance breathe.",
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
  credits: [],
  timeline: [
    { year: 2017, description: "Left home for boarding school at UNASP-HT, where he started running audio for school and university events." },
    { year: 2020, description: "Joined the audio team at Ministério VOX." },
    { year: 2021, description: "Took over leadership of the audio team at Igreja do UNASP-HT." },
    { year: 2022, description: "Became technical director of Vocal Livre." },
    { year: 2024, description: "Expanded into studio mixing, with releases on major streaming platforms." },
  ],
  featuredProductions: [
    {
      title: "DVD Temporal — Vocal Livre",
      description: "Technical direction and FOH mixing for Vocal Livre's live DVD recording.",
      roles: ["Technical Direction", "FOH"],
      ...audioProductionMedia[0],
    },
    {
      title: "DVD 15 Anos — Ao Vivo em Recife — Vocal Livre",
      description: "FOH mixing for Vocal Livre's 15th anniversary concert, recorded live in Recife.",
      roles: ["Technical Direction", "FOH"],
      ...audioProductionMedia[1],
    },
    {
      title: "Novo Tempo In Concert: 30 Anos",
      description: "FOH mixing for Novo Tempo label's 30th anniversary concert production.",
      roles: ["FOH"],
      ...audioProductionMedia[2],
    },
  ],
  otherProductions: [
    "DVD Gabro Ao Vivo",
    'Live Session "Em Ti" — Luz e Rimas',
    "Live Session NT Play: Especial de Natal",
    "DVD Liz Avancini",
    "DVD Coral Livre feat. Marcos Almeida e Paulo Nazareth",
  ],
  studioArtists: [
    "Alice e Amanda", "Vocal Livre", "Vocal NV", "Letícia Cordeiro",
    "Paula Schneider", "Ministério Sence", "Macakitos",
  ],
};

const pt: AudioContent = {
  bio: [
    "Sou Felipe Penteado, engenheiro de áudio especializado em música vocal. Trabalho com eventos ao vivo, DVDs e mixagem de estúdio, atuando ao lado de grupos vocais, corais, bandas e artistas independentes.",
    "Desde os 12 anos eu já mexia em cabos e ficava curioso com os equipamentos de som da igreja. Não sei exatamente quando isso virou vocação — acho que sempre foi. Aos 15, no colégio interno, já estava ajudando nos eventos da escola e da universidade. Aos 18, dei meu primeiro passo profissional integrando a equipe de áudio do Ministério VOX.",
    "Pra mim, o papel do engenheiro de áudio é ser invisível. Ninguém no público precisa reparar que eu estou ali. O meu trabalho é amplificar o que o palco entrega — e deixar a mensagem chegar com ainda mais força em cada pessoa da plateia. Quando a mixagem está boa, eu consigo vibrar junto com o público, me emocionar com as músicas, sentir o que os músicos e cantores estão entregando. É nesse momento que eu me desligo de tudo ao redor e simplesmente curto o show.",
    "É esse sentimento que eu busco em cada trabalho — seja num grande DVD ou numa sessão de estúdio.",
    '“As músicas tocam os corações. Mas quando o som está bom, a mensagem consegue ser ainda mais amplificada.”',
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
        "Pego os stems da sua sessao e construo a mix do zero — equilibrando cada voz e instrumento ate a musica bater do jeito certo. Duas rodadas de ajuste incluidas.",
    },
    {
      title: "Masterizacao",
      description:
        "Acabamento final para streaming, vinil ou broadcast. Checo a traducao em diferentes sistemas para que a faixa soe consistente em qualquer lugar.",
    },
    {
      title: "Gravacao",
      description:
        "Sessoes de vocal e instrumento no meu estudio tratado. Voce sai com uma mix preliminar no mesmo dia.",
    },
    {
      title: "Som Ao Vivo",
      description:
        "Mixagem FOH para shows, DVDs e eventos — com foco em clareza, dinamica e deixar a performance respirar.",
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
  credits: [],
  timeline: [
    { year: 2017, description: "Vai para o internato do UNASP-HT e começa a operar o áudio nos eventos da escola e da universidade." },
    { year: 2020, description: "Integra a equipe de áudio do Ministério VOX." },
    { year: 2021, description: "Assume a liderança da equipe de áudio da Igreja do UNASP-HT." },
    { year: 2022, description: "Assume a direção técnica do Vocal Livre." },
    { year: 2024, description: "Expande para mixagem de estúdio, com trabalhos lançados nas principais plataformas digitais." },
  ],
  featuredProductions: [
    {
      title: "DVD Temporal — Vocal Livre",
      description: "Direção técnica e mixagem FOH do DVD ao vivo do Vocal Livre.",
      roles: ["Direção Técnica", "FOH"],
      ...audioProductionMedia[0],
    },
    {
      title: "DVD 15 Anos — Ao Vivo em Recife — Vocal Livre",
      description: "Mixagem FOH do show de 15 anos do Vocal Livre, gravado ao vivo em Recife.",
      roles: ["Direção Técnica", "FOH"],
      ...audioProductionMedia[1],
    },
    {
      title: "Novo Tempo In Concert: 30 Anos",
      description: "Mixagem FOH da produção do show de 30 anos da Gravadora Novo Tempo.",
      roles: ["FOH"],
      ...audioProductionMedia[2],
    },
  ],
  otherProductions: [
    "DVD Gabro Ao Vivo",
    'Live Session "Em Ti" — Luz e Rimas',
    "Live Session NT Play: Especial de Natal",
    "DVD Liz Avancini",
    "DVD Coral Livre feat. Marcos Almeida e Paulo Nazareth",
  ],
  studioArtists: [
    "Alice e Amanda", "Vocal Livre", "Vocal NV", "Letícia Cordeiro",
    "Paula Schneider", "Ministério Sence", "Macakitos",
  ],
};

export const audioContent: Record<Language, AudioContent> = { en, pt };
