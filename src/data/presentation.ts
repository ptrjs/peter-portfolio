type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "peterjose65@gmail.com",
  title: "Hi, I’m Peter Jose 👋",
  // profile: "/profile.webp",
  description:
    "Welcome to my personal space 🌌. I'm a software engineer based in Indonesia. Currently learning about web development using *HTML*, *CSS*, *JavaScript*, *Express.js* as Backend and cross-platform mobile apps development using *Flutter*.",
  socials: [
    {
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/peterjoseee/",
    },
    {
      label: "Github",
      link: "https://github.com/ptrjs",
    },
    
  ],
};

export default presentation;
