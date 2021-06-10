import React, { createContext, useContext, useState } from "react";
import ReminderList from "./ReminderList";
export const ReminderContext = React.createContext();
export const useReminderContext = () => useContext(ReminderContext);
export const ReminderController = ({ children }) => {
  const listElement = [{ text: "tar", box: false, star: true }];
  const [input, setInput] = useState("");
  const [reminderlist, setReminderlist] = useState(listElement);
  const [index, setIndex] = useState(-1);

  // add list
  const onAdd = () => {
    if (index === -1) {
      setReminderlist([
        ...reminderlist,
        {
          // textbox : check box : fev box
          text: input,
          box: false,
          star: false,
        },
      ]);
    } else {
      let tmp = reminderlist;
      tmp[index] = {
        ...tmp[index],
        text: input,
      };
    }
    setInput("");
    setIndex(-1);
  };

  // remove list
  const onDelete = (item) =>
    setReminderlist([...reminderlist.filter((temp) => temp !== item)]);

  // Edit list
  const onEdit = (item) => {
    setInput(item.text);
    const editIndex = reminderlist.findIndex((temp) => temp === item);
    setIndex(editIndex);
  };

  //Check Box
  const onCheckBox = (item) =>{
    const editIndex = reminderlist.findIndex((temp) => temp === item);
    let temp = reminderlist
    temp[editIndex] = {
      ...temp[editIndex],
      box: !temp[editIndex].box
    }
    setReminderlist([...temp])
  }

  return (
    <ReminderContext.Provider
      value={{
        // State
        input,
        reminderlist,

        // function
        onAdd,
        onEdit,
        onDelete,
        setInput,
        onCheckBox
      }}
    >
      {children}
    </ReminderContext.Provider>
  );
};
