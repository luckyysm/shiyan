import React from 'react';
import ReactDOM from 'react-dom';

// ./是引入自定义组件
import MyRouter from './myrouter/myrouter'
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
 *   class MyRouter extends Component{
 *              render(){
 *                  return()
 *
 *              }
 *
 *   }
 *   export default MyRouter(组件名);
 *
 *
 * */

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
        <MyRouter/>
    </div>
//<App />
    , document.getElementById('root')
);