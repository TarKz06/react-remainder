import React from "react";
import {withController} from "../hoc/withController";
import {ReminderController, useReminderContext} from "./ReminderController";
import ReminderList from "./ReminderList";
import Summary from "./Summary";
import Input from "./Input";

function Reminder() {
  const {showYo} = useReminderContext();
  return (
    <div>
      <center>
        Reminder
        <Input />
        <ReminderList />
        <Summary />
      </center>
    </div>
  );
}
export default withController(ReminderController)(Reminder);
