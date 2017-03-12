import React, { Component } from 'react';
import './pagination.css'

class Pagination extends Component{
    render(){

        //初始化变量
        let{count , onMouseOver}=this.props;

        //初始化页码的数组
        var arr=[];
        for(let i=0;i<count; i++){
            arr.push(<li onMouseOver={onMouseOver} key={i} className={(Number(this.props.index)===i+1?'active':'')}>{i+1}</li>)
        }
        return(
            <div className='pagination'>
                <ul>
                    {arr}
                </ul>
            </div>
        )
    }
}
export default Pagination;