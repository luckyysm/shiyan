import React, { Component } from 'react';
import './arrow.css'

class Arrow extends Component{
    render(){
        var{left,right}=this.props.onClick;
        return(
            <div className='arrowAll'>
                <div className='arrow left' onClick={left} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}>&lt;</div>
                <div className='arrow right' onClick={right} onMouseOver={this.props.onMouseOver} onMouseOut={this.props.onMouseOut}>&nbsp;&gt;</div>
            </div>
        )
    }
}
export  default Arrow;