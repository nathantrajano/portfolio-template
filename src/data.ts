import { AboutMeData, Game, GameEngine, LinkImageSource, MediaType, Platform } from "./types";

export const PersonalInfo: AboutMeData = {
  name: "Nathan Amaro Trajano",
  role: "Game Developer",
  introduction: "Hi, I'm Nathan, a passionate game developer.",
  description: "I love creating immersive experiences through games.",
  image: `${process.env.PUBLIC_URL}/images/Profile.jpg`,
  cvUri: `${process.env.PUBLIC_URL}/files/YOUR_CV.pdf`,
  links: {
    github: "https://github.com/nathantrajano",
    itchIO: "https://NAME.itch.io",
    linkedIn: "https://www.linkedin.com/in/NAME",
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
    ],
  },
  {
    name: "GAME_NAME",
    description: "GAME_DESCRIPTION",
    genres: ["GAME_GENRE", "GAME_GENRE..."],
    platforms: [Platform.Windows],
    engine: GameEngine.Unity,
    links: [
      { source: LinkImageSource.Github, url: "https://github.com/YOUR_REPO" },
      { source: LinkImageSource.ItchIo, url: "https://YOUR_ITCH.itch.io/GAME_NAME" },
    ],
    media: [
      { source: "/images/games/GAME_NAME/Screenshot_1.png", type: MediaType.Image },
      { source: "https://www.youtube.com/embed/dQw4w9WgXcQ", type: MediaType.YouTube },
      { source: "/images/games/GAME_NAME/Screenshot_2.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_3.png", type: MediaType.Image },
      { source: "/images/games/GAME_NAME/Screenshot_4.png", type: MediaType.Image },
    ],
  }
];