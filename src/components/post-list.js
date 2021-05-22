import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./user-header";

// MAterial Design Imports
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  text: {
    fontSize: "1.5rem",
  },
}));
const PostList = (props) => {
  const { fetchPosts, posts } = props;
  useEffect(() => {
    fetchPosts();
  }, []);

  const classes = useStyles();
  return (
    <>
      <Typography
        component="span"
        variant="body1"
        className={classes.text}
        color="textSecondary"
      >
        My Blog Posts
      </Typography>
      {posts.map((post) => {
        return (
          <>
            <List className={classes.root} key={post.id}>
              <ListItem dense alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt="Remy Sharp"
                    src="https://picsum.photos/200/300"
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <>
                      <Typography
                        component="span"
                        variant="body1"
                        className={classes.text}
                        color="textPrimary"
                      >
                        {post.title}
                      </Typography>
                    </>
                  }
                  secondary={
                    <>
                      <Typography
                        component="span"
                        variant="body2"
                        className={classes.inline}
                        color="textPrimary"
                      >
                        {post.body}
                      </Typography>
                      <UserHeader userId={post.userId} />
                    </>
                  }
                />
              </ListItem>

              <Divider variant="inset" component="li" />
            </List>
          </>
        );
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  return { posts: state.posts };
};
export default connect(mapStateToProps, { fetchPosts })(PostList);
