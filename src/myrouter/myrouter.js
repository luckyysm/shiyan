/**
 * Created by ysm on 2016/11/3.
 */
import React ,{Component} from 'react';
import {Route, Router, hashHistory} from 'react-router';

import App from '../App';
import HelloWorld from '../helloworld/helloworld';
import Haa from '../haa/haa';
import Message from '../message/message';
import Propstext from '../props/props';
import Forms from '../forms/forms';
import Carousel from '../carousel/carousel';
import Good from '../good/good';
import Swiperer from '../swiper/swiper';

class MyRouter extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container">
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li><a href="#/">App</a></li>
                                <li><a href="#/helloworld">HelloWorld</a></li>
                                <li><a href="#/haa">Haa</a></li>
                                <li><a href="#/message">Message</a></li>
                                <li><a href="#/propstext">Propstext</a></li>
                                <li><a href="#/forms">Forms</a></li>
                                <li><a href="#/carousel">Carousel</a></li>
                                <li><a href="#/good">Good</a></li>
                                <li><a href="#/swiper">Swiperer</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container">
                    <Router history={hashHistory}>
                        <Route path='/' component={App}/>
                        <Route path='/helloworld' component={HelloWorld}/>
                        <Route path='/haa' component={Haa}/>
                        <Route path='/message' component={Message}/>
                        <Route path='/propstext' component={Propstext}/>
                        <Route path='/forms' component={Forms}/>
                        <Route path='/carousel' component={Carousel}/>
                        <Route path='/good' component={Good}/>
                        <Route path='/swiper' component={Swiperer}/>
                    </Router>
                </div>
            </div>
        )

    }
}
export default MyRouter;