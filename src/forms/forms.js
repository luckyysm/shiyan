import React, { Component } from 'react';

class Forms extends Component{
    constructor() {
        super();
        //super关键字用于访问父对象上的函数
        this.state = {radioValue: '女神'}

    }
    changeValue=(e)=>{
        this.setState({radioValue:e.target.value});
    };

    showValue=()=>{
        console.log(this.state)
    };

    render(){
        return(
            //defaultChecked是单选框的默认值，true就是默认选中，false默认不选中

            <div>
                <input type="radio" name='yanzhi' value='女神' defaultChecked={true}
                    onChange={this.changeValue}/>
                <input type="radio" name='yanzhi' value='美女' onChange={this.changeValue}/>

                <input type="radio" name='yanzhi' value='女神经' onChange={this.changeValue}/>

                <input type="button" value="点我点我" onClick={this.showValue}/>
            </div>
        )
    }
}
export default Forms;