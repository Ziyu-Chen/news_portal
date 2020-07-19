import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  },
  actionArea: {
    "&:hover $focusHighlight": {
      opacity: 0
    }
  }
});

function ArticlePreview(props) {
  const classes = useStyles();
  return (
    <div id="article-preview">
      <Card className={classes.root} variant="outlined">
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.media}
            image={props.article.thumbnail}
            title={props.article.title}
          />
          <br />
          <CardActions>
            {props.article.tags.map(tag => (
              <Button size="small" color="primary">
                {tag}
              </Button>
            ))}
          </CardActions>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.article.title}
            </Typography>
            <br />
            <Typography variant="body2" color="textSecondary" component="p">
              {props.article.abstract}
            </Typography>
          </CardContent>
          <CardActions>
            <Typography>{props.article.timestamp}</Typography>
            <Typography>BY {props.article.authors.join(", ")}</Typography>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default ArticlePreview;
