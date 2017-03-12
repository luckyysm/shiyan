import React from 'react';
import ReactDOM from 'react-dom';
//import {Route, Router, browserHistory} from 'react-router';
import {Route, Router, hashHistory} from 'react-router';

// ./是引入自定义组件
import App from './App';
import './index.css';
import './css/bootstrap.min.css';


/**
 * browserHistory 跳转新的页面   '/'
 * hashHistory  本页面加载       '#/'
 */

/*
 * 声明组件
 *   1. 在同一个文件
 *       const 类的名字 = React.createClass({类的内容})
 *           类的名字 , 首字母必须大写
 *
 *           render(){
 *               return (html)
 *           }
 *           ***** html 只能有一个父级标签 *****
 *
 *   2. 单独模块/组件
 *
 * */
const HelloWorld = React.createClass({
    render(){
        return (
            <div>
                <h1>Hello World!!!</h1>

                <h1>Hello World!!!</h1>
            </div>
        )
    }
});


const Haa = React.createClass({
    render(){

        return (
            <div>
                <h1>时刻保持着自己</h1>

                <h1>你很好哦</h1>

                <h1>微笑，Smile！</h1>
            </div>

        )
    }
});
/*
 * React 路由
 *   Router
 *       路由容器
 *       history={browserHistory}
 *
 *   Route
 *       路由配置内容
 *          path='资源地址'
 *          component='对应组件'
 *
 * router={
 *  index :0, // #index
 *  classify :1 // #classify
 * }
 *

 <Router history={browserHistory}>
 <Route path='/' component={App}/>
 ==> http://localhost:3000/

 <Route path='/helloworld' component={HelloWorld}/>
 ==> http://localhost:3000/helloworld

 ..
 </Router>


 * */
ReactDOM.render(
    <div>

        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="#/">App</a></li>
                        <li><a href="#/helloworld">HelloWorld</a></li>
                        <li><a href="#/haa">Haa</a></li>
                    </ul>
                </div>
            </div>
        </nav>
        <Router history={hashHistory}>
            <Route path='/' component={App}/>
            <Route path='/helloworld' component={HelloWorld}/>
            <Route path='/haa' component={Haa}/>
        </Router>
    </div>
//<App />
    , document.getElementById('root')
);