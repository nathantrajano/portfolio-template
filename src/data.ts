import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Nathan Trajano",
  role: "Game Developer",
  introduction: "Hi, I'm Nathan, a passionate game developer and software engineer.",
  description: "I love creating immersive experiences through games.",
  image: `${process.env.PUBLIC_URL}/images/IMG-20250401-WA0009.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/Curriculo GameDev Nathan Amaro Trajano.pdf`,
  links: {
    github: "https://github.com/nathantrajano",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/nathan-trajano-47264a288/",
  }
};

export const games: Game[] = [
  {
    name: "Apulgalipse",
    description: "Apulgalipse é um jogo desenvolvido como projeto da disciplina de Engenharia de Software da Universidade Federal de Campina Grande (UFCG), no período 2025.1.\nNeste jogo, o prédio do CAA enfrenta o pior pesadelo de sua história: uma infestação apocalíptica de pulgas. Prepare-se para encarar coceiras épicas, bosses pulguentos e salvar os alunos antes que seja tarde demais.",
    genres: ["Aventura", "Sátira"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/grupo5-ES-2025-1/Apulgalipse" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/image.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/imageEditor.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/MainMenu.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/P03wxXw1lo4", type: MediaType.YouTube },
    ],
  },
  {
    name: "MaquinoMaquia Arena",
    description: "O projeto MaquinoMaquia Arena é um fighting game que promete misturar elementos de fantasia e sci-fi em um universo rico e dinâmico. Atualmente em fase de prototipação, o jogo está sendo desenvolvido visando a sua apresentação no evento GameDev Quest.",
    genres: ["Luta", "Sci-Fi"],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/MaquinoMaquia/MaquinoMaquiaIdle.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/MaquinoMaquia/Chute.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/MaquinoMaquia/Soco.png", type: MediaType.Image },
    ],
  }
];