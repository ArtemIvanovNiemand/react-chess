import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Square.css';

export default class Square extends Component {
  static propTypes = {
    black: PropTypes.bool
  };

  render() {
    const { black } = this.props;
    const style = black ? styles.BlackSquare : styles.WhiteSquare;

    return (
      <div className={style}>
        {this.props.children}
      </div>
    );
  }
}