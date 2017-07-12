import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
        <MuiThemeProvider>
          <Container />
        </MuiThemeProvider>
    );
  }
}
