import React, {Component} from 'react';
import {Link} from 'react-router'; 

class Header extends Component {
  render() {
    return (
      <div>
          <header className="header">
            <Link to="/" className="header-title">Users List</Link>
          </header>
      </div>
    );
  }
}

export default Header;