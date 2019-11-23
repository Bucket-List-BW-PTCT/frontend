import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { updateList } from "../../actions/listHandlers";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import Modal from "./Modal";

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

const CardDivStyle = {
  margin: "10px",
  border: "3px solid green",
  boxShadow: "4px 4px 7px #888888"
};

function BucketCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.card} style={CardDivStyle}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.gyazo.com/5c32bda440d33c7f4e5f8bf76cbd7d4c.png"
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
          <Modal list_id={props.id} />
        </IconButton>
      </CardActions>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    ...state
  };
}

const mapDispatchToProps = {
  updateList
};

export default connect(mapStateToProps, mapDispatchToProps)(BucketCard);
