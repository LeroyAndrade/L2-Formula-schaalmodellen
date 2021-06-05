import React, { Component } from 'react';

class FunctionClick extends Component {
 clickHandler(){
  window.alert('button clicked');
  console.log('button clicked');
 }
 
 render() {
  return (
   <div>
    <button onClick={this.clickHandler}>Klik mij 1</button>
   </div>
  )
 }
}

export default FunctionClick
