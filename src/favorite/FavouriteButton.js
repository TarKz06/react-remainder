import React from "react";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import { IconButton } from "@material-ui/core";
const FavouriteButton = ({ checked, onClick = () => {} }) => {
    if (checked) {
    return (
        <IconButton onClick={onClick} edge="end" aria-label="comments">
        <StarIcon style={{ color: "#1e1f26" }} />
        </IconButton>
    );
} else {
        return (
        <IconButton onClick={onClick} edge="end" aria-label="comments">
        <StarBorderIcon style={{ color: "1e1f26" }} />
        </IconButton>
        );
    }
};
export default FavouriteButton;
