import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//JSX
//
var user = {
    fname: 'First',
    lname: 'Last'
};
//虚拟节点
const el = <h1>{showName(user)}</h1>;
//const el = <h1>{user.fname + ' ' + user.lname}</h1>;

function showName(u){
    return u.fname + '&' + u.lname;
}

//一个类 就是一个 组件  ( html + js )
//面向组件开发
class App extends Component {
    render() {
        return (
            el

            //<div className="App">
            //  <div className="App-header">
            //    <img src={logo} className="App-logo" alt="logo" />
            //    <h2>Welcome to React</h2>
            //  </div>
            //  <p className="App-intro">
            //    To get started, edit <code>src/App.js</code> and save to reload.
            //  </p>
            //</div>
        );
    }
}

export default App;
