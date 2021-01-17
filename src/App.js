import React, { Component } from 'react';
import Home from './components/Home/Home';
import { Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Navbar from './components/Navbar/Navbar';
import BookingCar from './components/BookingCar/BookingCar';
import BookingAuto from './components/BookingAuto/BookingAuto';
import Form from './components/Form/Form';
import AdminLogin from './components/AdminLogin/AdminLogin';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import Booked from './components/Booked/Booked';
import axios from 'axios';
class App extends Component {
  state = {
    auth: {
      token: localStorage.getItem('token'),
      user: JSON.parse(localStorage.getItem('user')),
    },
    email: '',
    password: '',
    name: '',
    dashboard: {
      customers: [],
      vehicles: [],
    },
    cname: '',
    cemail: '',
    cmobile: '',
    csource: '',
    cdestination: '',
    cdistance: '',
    booked: {
      status: false,
      available: false,
    },
  };
  changeBookingStatus = () => {
    this.setState({
      booked: {
        status: false,
        available: false,
      },
    });
  };
  login = async () => {
    const auth = await axios.post('http://localhost:8000/login', {
      email: this.state.email,
      password: this.state.password,
    });
    if (auth.data.token) {
      localStorage.setItem('token', auth.data.token);
      localStorage.setItem('user', JSON.stringify(auth.data.user));
      this.setState({
        auth: auth.data,
        name: auth.data.user.name,
      });
    }
  };
  signUp = async () => {
    const auth = await axios.post('http://localhost:8000/signup', {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
    localStorage.setItem('token', auth.data.token);
    localStorage.setItem('user', JSON.stringify(auth.data.user));
    this.setState({
      auth: auth.data,
    });
  };
  logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({ auth: { token: null, user: null } });
  };
  changed = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  booked = async (e, type) => {
    e.preventDefault();
    console.log('booked', type);
    const v = await axios.get(`http://localhost:8000/show/${type}`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    });
    console.log(v);
    console.log(v.data);
    let vcount = 0;
    if (type == 'auto') {
      vcount = v.data.auto[0].count;
    } else if (type == 'mini') {
      vcount = v.data.mini[0].count;
    } else {
      vcount = v.data.macro[0].count;
    }
    console.log(vcount);
    if (vcount > 0) {
      const customer = await axios.post(
        `http://localhost:8000/add_customer/${type}`,
        {
          name: this.state.cname,
          email: this.state.cemail,
          mobile: this.state.cmobile,
          source: this.state.csource,
          destination: this.state.cdestination,
        },
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      );
      console.log(customer, localStorage.getItem('token'));
      await axios.put(
        `http://localhost:8000/remove-vehicle/${customer.data.customer._id}`,
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      );
      setTimeout(async () => {
        await axios.put(
          `http://localhost:8000/add-vehicle/${customer.data.customer._id}`,
          {
            headers: {
              token: localStorage.getItem('token'),
            },
          }
        );
        this.getDetails();
      }, 60000);
      this.setState({
        booked: {
          status: true,
          available: true,
        },
      });
    } else {
      this.setState({
        booked: {
          status: true,
          available: false,
        },
      });
    }
  };

  getDetails = async (e) => {
    try {
      console.log(localStorage.getItem('token'));
      const details = await axios.get(
        'http://localhost:8000/admin/availability',
        {
          headers: {
            token: localStorage.getItem('token'),
          },
        }
      );
      console.log(details.data);
      this.setState({
        dashboard: {
          customers: details.data.customers,
          vehicles: details.data.vehicles,
          show: 1,
        },
      });
    } catch (e) {
      this.setState({
        dashboard: {
          customers: [],
          vehicles: [],
          show: 0,
        },
      });
    }
  };

  render() {
    let routes;
    if (this.state.auth.token) {
      routes = (
        <Switch>
          <Route
            exact
            path='/booking_car'
            render={(props) => (
              <BookingCar {...props} booking={this.changeBookingStatus} />
            )}
          />
          <Route
            exact
            path='/booking_auto'
            render={(props) => (
              <BookingAuto {...props} booking={this.changeBookingStatus} />
            )}
          />
          <Route
            exact
            path='/fill_form/:type'
            render={(props) => (
              <Form
                {...props}
                distance={this.state.cdistance}
                booked={this.booked}
                changed={this.changed}
                confirmation={this.state.booked}
              />
            )}
          />
          <Route
            exact
            path='/Booked/:distance/:status'
            render={(props) => <Booked {...props} />}
          />
          <Route
            exact
            path='/admin/dashboard'
            render={(props) => (
              <AdminDashboard
                {...props}
                getDetails={this.getDetails}
                dashboard={this.state.dashboard}
              />
            )}
          />
          <Redirect to='/' />
        </Switch>
      );
    } else {
      routes = (
        <Switch>
          <Route
            exact
            path='/login'
            render={(props) => (
              <Login {...props} login={this.login} changed={this.changed} />
            )}
          />
          <Route
            exact
            path='/admin/login'
            render={(props) => (
              <AdminLogin
                {...props}
                login={this.login}
                changed={this.changed}
              />
            )}
          />
          <Route
            exact
            path='/signup'
            render={(props) => (
              <SignUp {...props} signUp={this.signUp} changed={this.changed} />
            )}
          />
          <Redirect to='/login' />
        </Switch>
      );
    }
    return (
      <>
        <Navbar user={this.state.auth.user} logout={this.logout} />
        <Switch>
          <Route exact path='/' render={(props) => <Home {...props} />} />
          {routes}
        </Switch>
      </>
    );
  }
}

export default App;
