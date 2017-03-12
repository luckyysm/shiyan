/**
 * Created by ysm on 2016/11/4.
 */
import React, { Component } from 'react';
import Showname from './show';//这里的名字比如 Showname要与下面的Showname标签一致

var tvshow={

    tv:'mango',
    show:'快乐大本营',
    people:'five',
    long:'forever',
    cycle:'a week'

};
class Propstext extends Component{
    render(){
        return(
            //<div>
            //    <p>{tvshow.tv}</p>
            //    <p>{tvshow.show}</p>
            //    <p>{tvshow.people}</p>
            //    <p>{tvshow.long}</p>
            //</div>

            <Showname tvs={tvshow}></Showname>
        )
    }
}
export default Propstext;