import React from "react";
import { makeStyles } from "@material-ui/core/styles";
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

export default function ReminderList() {
  const { reminderlist , onDelete } = useReminderContext();

  return (
    <List>
      {reminderlist.map((item, key) => {
        const labelId = `checkbox-list-label-${key}`;

        return (
          <ListItem key={key} role={undefined} dense button>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={item.box}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": labelId }}
              />
              <FavouriteButton checked={item.star} />
            </ListItemIcon>
            <ListItemText id={labelId} primary={item.text} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments">
                <EditIcon />
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
        );
      })}
    </List>
  );
}