import React, { Component } from 'react';
import './pagination.css'

class Pagination extends Component{
    render(){

        //��ʼ������
        let{count , onMouseOver}=this.props;

        //��ʼ��ҳ�������
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