import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import FavouriteButton from "../favorite/FavouriteButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useReminderContext } from "./ReminderController";
import CreateIcon from "@material-ui/icons/Create";
import "./style.css";
export default function ReminderList() {
  const { reminderlist, onDelete, onEdit, onCheckBox, onCheckFev } =
    useReminderContext();

  return (
    <List>
      {reminderlist.map((item, key) => {
        const labelId = `checkbox-list-label-${key}`;

        return (
          <div className="container">
            <div className="test1">
              <ListItem key={key} role={undefined} dense button>
                <ListItemIcon>
                  <Checkbox
                    style={{color:"#867666"}}
                    edge="start"
                    checked={item.box}
                    tabIndex={-1}
                    disableRipple
                    onClick={() => onCheckBox(item)}
                    inputProps={{ "aria-labelledby": labelId }}
                  />
                  <FavouriteButton
                    checked={item.star}
                    onClick={() => onCheckFev(item)}
                  />
                </ListItemIcon>
                <ListItemText id={labelId} primary={item.text} />
                <ListItemSecondaryAction>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => onEdit(item)}
                  >
                    <CreateIcon />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="comments"
                    onClick={() => onDelete(item)}
                  >
                    <DeleteIcon style={{ color: "red" }} />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            </div>
          </div>
        );
      })}
    </List>
  );
}
