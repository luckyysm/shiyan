import React, { Component } from 'react';

import './imagecontainer.css'

class ImageContainer extends Component {
    render() {
        return (
            <div className="img-container" onMouseOver={this.props.onMouseOver}
                 onMouseOut={this.props.onMouseOut}>
                {this.props.imgs.map((d, i)=> {
                    //console.log(d);  Object {src: "img/yy1.jpg"}

                    //console.log(i);
                    return <div className={'img-items'+(Number(this.props.index)===i+1?' active':'')} key={i}><img
                        src={d.src} alt=""/></div>

                })

                }

            </div>

        )
    }
}
export default ImageContainer
