import { useState } from "react";
import { CheckerType, CheckType } from "./group.types";

export const useCheckGroupState = () => {
  const [check, setCheck] = useState<CheckType[]>([
    {
      name: "Futebol",
      checked: false,
      onPress: () => handelerCheck("Futebol"),
    },
    {
      name: "Design",
      checked: true,
      onPress: () => handelerCheck("Design"),
    },
    {
      name: "Economia",
      checked: false,
      onPress: () => handelerCheck("Economia"),
    },
    {
      name: "Atletismo",
      checked: false,
      onPress: () => handelerCheck("Atletismo"),
    },
    {
      name: "Café",
      checked: false,
      onPress: () => handelerCheck("Café"),
    },
    {
      name: "Pesca",
      checked: false,
      onPress: () => handelerCheck("Pesca"),
    },
  ]);

  const handelerCheck = (name: CheckerType) => {
    const list = check.map((item) => {
      if (item.name === name) {
        item.checked = !item.checked;
      }

      return item;
    });

    setCheck(list);
  };

  const getCheckedColor = (checked: boolean) => {
    return checked ? "dark:bg-dark-secondary-2" : "dark:bg-dark-primary-1";
  };

  return {
    check,
    getCheckedColor,
  };
};
