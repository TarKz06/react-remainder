import React from "react";
import Typography from "@material-ui/core/Typography";
import { useReminderContext } from './ReminderController'
export default function Summary() {
  const {
  allrRemainder,
  allList,
  allFev
    
  } = useReminderContext()
  return (
    <div>
      <div>
        
        <Typography variant="body1" gutterBottom>
          Progress : {allList}/{allrRemainder}
        </Typography>
      </div>
      <div>
        <Typography variant="body1" gutterBottom>
          Favourite : {allFev}/{allrRemainder}
        </Typography>
      </div>
    </div>
  );
}
