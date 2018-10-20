import React from "react";
import { connect } from "react-redux";
import styles from "./InfoBox.scss";

const InfoBox = ({ text, imgUrl }) => (
  <div className={styles.Box}>
    <div>
      <img
        alt="icon"
        src={imgUrl}
      />
      <span>{text}</span>
    </div>
  </div>
);

export default connect(
  state => null,
  dispatch => null
)(InfoBox);
