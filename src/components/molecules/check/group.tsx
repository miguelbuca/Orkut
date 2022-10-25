import React from "react";
import { useCheckGroupState } from "./group.state";

export const CheckGroup = () => {
  const { check, getCheckedColor } = useCheckGroupState();
  return (
    <div className="grid grid-cols-3 gap-[4px]">
      {check.map(({ name, onPress, checked }, index) => (
        <small
          className={`flex rounded-[100px] items-center justify-center cursor-pointer ${getCheckedColor(
            checked
          )} p-[5px_17px]`}
          onClick={()=>onPress()}
          key={index}
        >
          {name}
        </small>
      ))}
    </div>
  );
};
