import React from "react";
import {withController} from "../hoc/withController";
import {ReminderController} from "./ReminderController";
import ReminderList from "./ReminderList";
import Summary from "./Summary";
import Input from "./Input";

function Reminder() {
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
