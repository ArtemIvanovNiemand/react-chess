import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Picker extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
  };

  generateOptions(options){
    return(
      options.map(option =>
        <option value={option} key={option}>
          {option}
        </option>
      )
    );
  }

  render() {
    const { value, onChange, options } = this.props;
    const lines = this.generateOptions(options);

    return(
      <span>
        <h1>{value}</h1>
        <select onChange={e => onChange(e.target.value)} value={value}>
          {lines}
        </select>
      </span>
    );
  }
}
