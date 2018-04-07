import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import { connect } from 'react-redux';

export class Reel extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>Cathys Reel Will Go Here!</Header>
    );
  }
}

export default connect()(Reel);