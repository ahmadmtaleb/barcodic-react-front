import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './components/sideNav/SideNav';
import Home from './pages/HomePage/HomePage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import Header from '../src/components/Header/Header';
import AuthForm from './components/AuthForm';
import Register from './components/Register/Register';


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      info: []
    }
  }
  async componentDidMount() {
    const token = localStorage.getItem('token');
    const url = window.$url;
    if (token !== undefined && token !== null) {

      try {
        // const response = await fetch(`http://192.168.1.3:8000/api/items?token=${token}`);
        const response = await fetch(`http://`+url+`:8000/api/check-user?token=${token}`, {method:"POST"});
        const result = await response.json();

        this.setState({
          loggedIn: true          
        })
      } 
      catch (error) {}
    
    //  this.getUser();
    }
}
  //  getUser=async()=>{
  //   try{
  //     const token = localStorage.getItem('token');
  //     const response = await fetch(`http://192.168.1.3:8000/api/check-user?token=${token}`, {method:"POST"});
  //     const json = await response.json();
  //     if (json.success === true) {
  //         this.setState({
  //             UserName: json.data.username
  //         })
  //     }
  //   }
  //   catch(error){}
  // }
  
  handleLogin =  () => {
    
    this.setState({
      loggedIn: true
    })
  }
  handleLogout=()=>{
    localStorage.removeItem("token");
    this.setState({loggedIn: false})
  }


  render() 
  {
    return (
      <>
        <BrowserRouter>

        {
          !this.state.loggedIn ? <AuthForm handleLogin={this.handleLogin} /> : (

            <div>
            <Header></Header>
            <Sidebar name={this.state.UserName} onClick={this.handleLogout}></Sidebar>

            <div>

              <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/Category' component={CategoryPage}></Route>
                <Route path='/Register' component={Register}></Route>

              </Switch>


            </div>
        </div>

          )
        }

        </BrowserRouter>


      </>
    );
  }
}