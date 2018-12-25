import React, { Component } from "react";
import { connect } from "react-redux";
import "./SecondIcon.css";

import Trash from "./Trash.js";
import Like from "./Like.js";

class SecondIcon extends Component {
  render() {
    const { video, auth } = this.props;
    if (!Object.keys(video).length) return <React.Fragment />;

    // The uploader shouldn't be able to like their own videos,
    // so instead of a like, show an option to delete the video
    const userId = auth.isAuthenticated ? auth.user.id : null;

    const isLiked = Boolean(
      video.likes.map(like => like._id).filter(like => like === userId).length
    );

    const showTrashIcon = userId === video.user._id;

    return showTrashIcon ? (
      <Trash video={video} />
    ) : (
      <Like isLiked={isLiked} video={video} />
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(SecondIcon);