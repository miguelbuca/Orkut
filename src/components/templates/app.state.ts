import { MenuType } from "@components/organisms";

/**
 * icons
 */
import home from "@assets/svg/home.svg";
import user from "@assets/svg/user.svg";
import heart from "@assets/svg/heart.svg";
import image from "@assets/svg/image.svg";
import game from "@assets/svg/game.svg";

export const useAppTemplateState = () => {
  const menu: MenuType = [
    {
      title: "Início",
      imageURL: home,
    },
    {
      title: "Adicionar",
      imageURL: user,
      count: 114,
    },
    {
      title: "Depoimentos",
      imageURL: heart,
      count: 1,
    },
    {
      title: "Galeria",
      imageURL: image,
    },
    {
      title: "Jogos",
      imageURL: game,
    },
  ];

  return {
    menu,
  };
};
