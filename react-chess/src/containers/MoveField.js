import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as horseActions from '../actions/HorseActions'
import * as changeActions from '../actions/ChangeActions'
import { bindActionCreators } from 'redux'

@connect(mapStateToProps, mapDispatchToProps)
export default class MoveField extends Component {

  render() {
    let input;

    return(
    <div>
      <form onSubmit={e => { 
         e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        
        var location = input.value.split(',').map(Number);
        this.props.horseActions.moveHorse(location);
      }}
      onChange={(e)=>{
        const { name, value } = e.target;
        console.log(name)
        this.props.changeActions.changeField(value);
        console.log('str_location:' + this.props.str_location)
      }}
      >

      <input ref={node => {
          input = node
        }} value={this.props.str_location}/>
        <button type="submit">
          Move
        </button>
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
    horseActions: bindActionCreators(horseActions, dispatch),
    changeActions: bindActionCreators(changeActions, dispatch)
  }
}

