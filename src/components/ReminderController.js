import React, {createContext, useContext, useState} from "react";
import ReminderList from "./ReminderList";
export const ReminderContext = React.createContext()
export const useReminderContext = () => useContext(ReminderContext)
export const ReminderController = ({ children }) => {
  
  const listElement = [
    { text: "tar", box: false, star: true },
  
  ]
  const [input , setInput] = useState('')
  const [text, setText] = useState('')
  const [reminderlist, setReminderlist] = useState(listElement)
  const [index, setIndex] = useState(-1)

  
// add list
  const onAdd = () => {
    if(index == -1){
      setReminderlist([
        ...reminderlist,
        {
          // textbox : check box : fev box
          text: input, box: false, star: false }
      ])
    }
    else {
      let tmp = reminderlist
      tmp[index] = {
          ...tmp[index],
          title: input
      }
      setInput("")
      setIndex(-1)
  }
  };

  // remove list
  const onDelete = (item) => (
    setReminderlist([
        ...reminderlist.filter(temp => temp !== item)
    ])
)

    


  return (
    <ReminderContext.Provider
      value={{
        text,
        setText,
        onAdd,
        onDelete,
        reminderlist,
        setInput,
        input
      }}
    >
      {children}
    </ReminderContext.Provider>
  );
};
