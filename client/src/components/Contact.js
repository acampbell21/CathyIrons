import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

class Contact extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>Cathys Contact Will Go Here!</Header>
    );
  }
}

export default connect()(Contact);