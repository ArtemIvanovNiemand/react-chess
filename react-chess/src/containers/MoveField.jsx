import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as knightActions from '../actions/KnightActions'

import { bindActionCreators } from 'redux'
import autobind from 'autobind-decorator'

import { canMoveKnight } from './Utils';

@connect(mapStateToProps, mapDispatchToProps)
export default class MoveField extends Component {

  @autobind
  onSubmit(e, input){
    e.preventDefault()
    let value = input.value;
    let notValidInput = value.search(/^[0-7],[0-7]$/) !== 0;

    if(notValidInput){
      alert('Wrong input');
      return;
    }

    let fromLocation = this.props.location;
    let toLocation = input.value.split(',').map(Number);

    if(canMoveKnight(fromLocation, toLocation)){
      this.props.knightActions.moveKnight(toLocation);
    }
    else{
      alert('Knight can not move this way');
      return;
    }      
  }

  @autobind
  onChange(e){
    const value = e.target.value;
    this.props.knightActions.changeField(value);
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
    location: state.knight.location,
    str_location: state.knight.str_location
  }
}

function mapDispatchToProps(dispatch) {
  return {
    knightActions:  bindActionCreators(knightActions, dispatch)
  }
}