import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Modal from "./Modal";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

export default function BucketCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={CardDivStyle}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.gyazo.com/91e6545d64ab0a2a14eb2c596f0e29c8.png"
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <IconButton aria-label="share">
          <DeleteIcon onClick={() => props.deleteList(props.id)} />
        </IconButton>
        <IconButton aria-label="share">
          <Modal />
        </IconButton>
      </CardActions>
    </Card>
  );
}

const CardDivStyle = {
  margin: "10px",
  border: "3px solid green",
  boxShadow: "4px 4px 7px #888888"
};
