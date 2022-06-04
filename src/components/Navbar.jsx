import React, { Component } from "react";
// import "./app.css";

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <i class='fas fa-chevron-circle-down nav-icon'></i>
        <h1 className='navbar-title'>Habit Tracker</h1>
        <span className='total-count'>{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;
