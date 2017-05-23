import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as horseActions from '../actions/HorseActions'
import * as changeActions from '../actions/ChangeActions'

import { bindActionCreators } from 'redux'
import autobind from 'autobind-decorator'

@connect(mapStateToProps, mapDispatchToProps)
export default class MoveField extends Component {

  @autobind
  onSubmit(e, input){
    e.preventDefault()
    var location = input.value.split(',').map(Number);
    this.props.horseActions.moveHorse(location);
  }

  @autobind
  onChange(e){
    const value = e.target.value;
    this.props.changeActions.changeField(value);
  }

  render() {
    let input;

    return(
    <div>
      <form 
        onSubmit={e => {this.onSubmit(e, input)}}
        onChange={this.onChange}>
      
      <input 
        ref={node => { input = node }}
        value={this.props.str_location}/>

        <button type="submit">Move</button>
      </form>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    location: state.horse.location,
    str_location: state.horse.str_location
  }
}

function mapDispatchToProps(dispatch) {
  return {
    horseActions:  bindActionCreators(horseActions, dispatch),
    changeActions: bindActionCreators(changeActions, dispatch)
  }
}