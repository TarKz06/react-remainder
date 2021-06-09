import React from "react";
import Typography from "@material-ui/core/Typography";

export default function Summary() {
  return (
    <div>
      <div>
        
        <Typography variant="body1" gutterBottom>
          Progress : 1.4
        </Typography>
      </div>
      <div>
        <Typography variant="body1" gutterBottom>
          Favourite : 1/4
        </Typography>
      </div>
    </div>
  );
}
