import React from "react";
import { TextField, Button ,Grid } from "@material-ui/core";
import { useReminderContext } from "./ReminderController";
import './style.css';

export default function Input() {
  const { input, setInput, onAdd } = useReminderContext();
  return (
    <Grid alignItems="center" justify="center" container>
      <Grid item>
        <div className="add-text">
        <TextField
          id="standard-basic"
          label="Text"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        </div>
      </Grid>
      <Grid item>
        <div className="add-btn">
        <Button variant="contained" color="primary" onClick={onAdd}>
          ADD
        </Button>
        </div>
      </Grid>
    </Grid>
  );
}
