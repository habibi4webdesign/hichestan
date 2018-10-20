import React from "react";
import { connect } from "react-redux";
import styles from "./LargeThumb.scss";

const LargeThumb = ({ imgUrl }) => (
  <div className={styles.LargeThumb}>
    <img
      src={imgUrl}
      alt="saloons"
    />
  </div>
);

export default connect(
  state => null,
  dispatch => null
)(LargeThumb);
