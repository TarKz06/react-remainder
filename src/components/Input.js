import React from "react";
import { TextField, Button ,Grid } from "@material-ui/core";
import { useReminderContext } from "./ReminderController";

export default function Input() {
  const { input, setInput, onAdd } = useReminderContext();
  return (
    <Grid alignItems="center" justify="center" container>
      <Grid item>
        <TextField
          id="standard-basic"
          label="Text"
          variant="outlined"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" onClick={onAdd}>
          ADD
        </Button>
      </Grid>
    </Grid>
  );
}
