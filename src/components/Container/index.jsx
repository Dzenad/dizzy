import React, { Component } from 'react';
import SideBar from '../SideBar';
import PropTypes from 'prop-types';

export default class Container extends Component {
  render() {
    return (
      <div>
        Container
        <SideBar/>
      </div>
    );
  }
}
