import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header/>
        <Container/>
      </div>
    );
  }
}
