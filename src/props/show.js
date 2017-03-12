import React, { Component } from 'react';

class Showname extends Component{
    render(){

        //var{tv,show,people,long}=this.props.tvs;

        return(
            <div>
                <p>{this.props.tvs.tv}</p>

                <p>{this.props.tvs.show}</p>

                <p>{this.props.tvs.people}</p>

                <p>{this.props.tvs.long}</p>

                <p>{this.props.tvs.cycle}</p>
            </div>

        )
    }

}
export default Showname;