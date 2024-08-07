export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Backend POS Ticketing",
    techs: ["PHP (Laravel)", "Laravel Sanctum (API)", "Bootstrap"],
    link: "https://github.com/ptrjs/laravel-wisata-backend",
  },
  {
    title: "Inventory System",
    techs: ["Node.js (Express.js)", "HTML", "CSS", "JavaScript", "EJS", "Bootstrap"],
    link: "https://github.com/ptrjs/inventory-system",
  },
  {
    title: "Kaomoji App",
    techs: ["Dart (Flutter)"],
    link: "https://github.com/ptrjs/kaomoji_app",
  },
  {
    title: "News App",
    techs: ["Dart (Flutter)"],
    link: "https://github.com/ptrjs/news_app",
  },
  {
    title: "Jago Clone",
    techs: ["Dart (Flutter)"],
    link: "https://github.com/ptrjs/jago_clone",
  },
  {
    title: "Gojek Clone",
    techs: ["Dart (Flutter)"],
    link: "https://github.com/ptrjs/gojek_clone",
  },
  {
    title: "OVO Clone",
    techs: ["Dart (Flutter)"],
    link: "https://github.com/ptrjs/ovo_clone",
  },



];

export default projects;
