import React, { Component } from 'react';

import ImageContainer from './imagecontainer/imagecontainer'
import Pagination from './pagination/pagination'
import Arrow from './arrow/arrow'

var imgs=[
    {src:'img/yy1.jpg'},
    {src:'img/yy2.jpg'},
    {src:'img/yy3.jpg'},
    {src:'img/yy4.jpg'}
];

class Carousel extends Component{

    constructor(props){
        super(props);
        this.state={index:1};
    }

    changeImage=(e)=>{
        this.setState({index:Number(e.target.innerHTML)});
        //console.log(this.state.index);
    };
    clickImage={

        left:()=>{

            if(this.state.index===1||this.state.index===String(1)){
                this.setState({index:4});
            }else{

                this.setState({index:Number(this.state.index)-1});
            }

            console.log(this.state.index);
            console.log(typeof this.state.index);

        },
        right:()=>{

            if(this.state.index===String(4)||this.state.index===4){
                this.setState({index:1});
            }else{

                this.setState({index:Number(this.state.index)+1});
            }
        }
    };
    //componentDidMount  组件加载完成
    //componentWillMount  组件加载中

    //自动播放
//    componentDidMount=()=>{
//
//        this.timer=setInterval(function(){
//
//            //var right=this.clickImage.right;
//                if(this.state.index===String(4)||this.state.index===4){
//                //if(this.state.index===4){
//                    this.setState({index:1});
//                }
//                else{this.setState({index:Number(this.state.index)+1})}
//
//        }.bind(this),3000)
//
//};
    startPlay=()=>{
        //alert('fgf');
        this.timer=setInterval(function(){


            if(this.state.index===String(4)||this.state.index===4){
            //if(this.state.index===4){
                this.setState({index:1});
            }
            else{this.setState({index:Number(this.state.index)+1})}

        }.bind(this),3000)
    };
    //鼠标放上去，停止自动播放
    stopPlay=()=>{
        //alert('fs');
        clearInterval(this.timer);
        //alert('fs33');

    };
    //销毁计时器  componentWillUnmount组件将要移除的时候做一些事情
    componentWillUnmount=()=>{

        clearInterval(this.timer);

    };
    render(){
        //alert(this.state.index);
        return(

            <div>
                <ImageContainer imgs={imgs} index={this.state.index} onMouseOver={this.stopPlay} onMouseOut={this.startPlay}/>
                <Pagination onMouseOver={this.changeImage} index={this.state.index} count={imgs.length}/>
                <Arrow onClick={this.clickImage}  onMouseOver={this.stopPlay} onMouseOut={this.startPlay}></Arrow>
            </div>
        )
    }
}
export default Carousel;