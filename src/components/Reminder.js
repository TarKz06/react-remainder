import React from "react";
import {withController} from "../hoc/withController";
import {ReminderController} from "./ReminderController";
import ReminderList from "./ReminderList";
import Summary from "./Summary";
import Input from "./Input";
import './style.css';

function Reminder() {
  return (
    <div>
      <center>
        <header className="list-header">
        Reminder
        </header>
        <Input />
        <ReminderList />
        <div className="footer">
        <Summary />
        </div>
      </center>
    </div>
  );
}
export default withController(ReminderController)(Reminder);
