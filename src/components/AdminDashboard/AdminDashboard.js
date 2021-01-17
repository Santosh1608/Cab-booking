import React, { Component } from 'react';
import Moment from 'react-moment';
class AdminDashboard extends Component {
  componentDidMount = async () => {
    this.props.getDetails();
  };
  render() {
    let dashboard = 'loading...';
    if (
      this.props.dashboard.vehicles.length > 0 &&
      this.props.dashboard.show == 1
    ) {
      console.log(this.props.dashboard.customers);
      dashboard = (
        <div className='container'>
          <div
            className='mt-4 p-4'
            style={{ border: '1px solid rgb(205,205,250)' }}
          >
            <h2 style={{ fontWeight: '900' }}>Availability</h2>
            <h4>Cars</h4>
            <p>
              <strong>Mini Cars: </strong>
              <span>{this.props.dashboard.vehicles[0].count}</span>
            </p>
            <p>
              <strong>Macro Cars: </strong>
              <span>{this.props.dashboard.vehicles[1].count}</span>
            </p>
            <h4>Auto</h4>
            <p>
              <strong>Auto: </strong>
              <span>{this.props.dashboard.vehicles[2].count}</span>
            </p>
          </div>
          <table class='table caption-top'>
            <caption>List of users Booked</caption>
            <thead>
              <tr>
                <th scope='col'>#</th>
                <th scope='col'>Name</th>
                <th scope='col'>Mobile</th>
                <th scope='col'>Source</th>
                <th scope='col'>Destination</th>
                <th scope='col'>Type</th>
                <th scope='col'>Date</th>
                <th scope='col'>Alloted</th>
              </tr>
            </thead>
            <tbody>
              {this.props.dashboard.customers.map((customer, index) => (
                <tr key={customer._id}>
                  <th scope='row'>{index}</th>
                  <td>{customer['name']}</td>
                  <td>{customer.mobile}</td>
                  <td>{customer.source}</td>
                  <td>{customer.destination}</td>
                  <td>{customer.booked}</td>
                  <td>
                    <Moment format='YYYY/MM/DD'>{customer.date}</Moment>
                  </td>
                  <td>
                    <input type='radio' checked={customer.alloted} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (this.props.dashboard.show == 0) {
      dashboard = 'Not authorized';
    }
    return dashboard;
  }
}

export default AdminDashboard;
