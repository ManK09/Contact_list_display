import Login from './components/Login'
import './App.css';
import Register from './components/Register';
import AddUser from './components/AddUser';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import HomePage from './components/HomePage';
import store from './store';
import EditUser from './components/EditUser';

function App() {
  return (
    <Provider store={store}>
    <div>
      <Router>
        <Switch>
          <Route path='/' exact component={Login} />
          <Route path='/register' exact component={Register} />
          <Route path='/homepage' exact component={HomePage} />
          <Route path='/adduser' exact component={AddUser} />
          <Route path='/:key' component={EditUser} />
      {/* <AddUser />
      {/* <Register /> */}
       {/* <Login /> */}
        </Switch>
       </Router>
    </div>
    </Provider>
  );
}

export default App;
