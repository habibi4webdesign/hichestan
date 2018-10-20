import React from "react";
import { connect } from "react-redux";
import styles from "./SmallThumb.scss";

const SmallThumb = ({ imgUrl, marginBottom, marginTop }) => (
  <div
    style={{ marginTop: marginTop, marginBottom: marginBottom }}
    className={styles.SmallThumb}
  >
    <img src={imgUrl} alt="saloons" />
  </div>
);

export default connect(
  state => null,
  dispatch => null
)(SmallThumb);
