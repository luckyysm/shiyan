/**
 * Created by ysm on 2016/11/3.
 */
import React, { Component } from 'react';
import './message.css';
class Message extends Component{
    //声明构造函数
    //如果在React class 中需要设置state的初始值或者绑定事件，需要加上constructor(){},而且在this之前加上super();super()是继承了整个类的一个引用；若要是使用到this.props，则super()需要传递参数props,即super(props);
    constructor(props) {
        //必须加上super, super之前不能有关于this
        super(props);
        //this.a = '123';
        //声明state中的变量
        this.state = {values: '', fromValue:''};
    }
    arrstr=[];
    showMsg(e){
        //console.log(this);
        //console.log(e.target);//input
        if(e.keyCode===13){
            //操作Dom
            //enter键的keyCode是13；
            //document.getElementsByTagName('textarea')[0].value+=e.target.value+'\r';
            //e.target.value='';
            //不操作Dom，用react
            this.arrstr.push(e.target.value);
            //console.log(e.target.value);  //input框中的内容
            var str="";
            this.arrstr.forEach(function(d){
                //console.log(d);
                str+=d+'\n';
                //console.log(str);
            });
            this.setState({values:str});
            //e.target.value="";
            this.setState({fromValue:''})
        }
    }
    //更新input中的内容
    changeValue=(e)=>{
        this.setState({fromValue:e.target.value})
    };
    render(){
        return(
            <div className="container" >
                <div className="form-group col-xs-6 col-xs-offset-3">

                    <input onKeyDown={(e)=>this.showMsg(e)} type="text" className="form-control" placeholder="say your heart"
                           value={this.state.fromValue}
                           onChange={this.changeValue}
                    />
                </div>
                <div className="form-group col-xs-6 col-xs-offset-3">

                    <textarea className="form-control" rows="100" value={this.state.values} onChange={this.changeValue}></textarea>
                </div>
            </div>
        )
    }
}
export default Message;