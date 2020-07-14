import React, { Component } from 'react';
import { NeuButton } from 'neumorphic-ui';

export class Neobutton extends Component {
  constructor(props){
    super(props);
    this.state = {
      hovered: false,
      clicked: false
    }
  }
  onClick = () => {
  this.setState({ hovered:false, clicked: !this.state.clicked });  }
  mouseOver = () => {
    !this.state.clicked && this.setState({hovered:true})
  }
  mouseOut = () => {
    this.setState({hovered: false})
  }
  render () {
    return (
  <NeuButton hovered={this.state.hovered} clicked={this.state.clicked} onClick={this.onClick} mouseOver={this.mouseOver} mouseOut={this.mouseOut} text="Neumorhpic Button" />
    )
  }
}