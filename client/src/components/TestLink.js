import React, { Component } from 'react';
import { addDetails } from '../actions/details';
import { connect } from 'react-redux';
import { Button, Form, Grid, Input } from 'semantic-ui-react';


export class AddDetails extends Component {
 state = {
   name: this.state, about: this.state, notes: this.state,
   details: this.state
 };

 handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, about, notes, details } = this.state;
    this.props.dispatch(addPatient(name, about, notes, details))
  }

  render () {
    const { name, about, notes, details } = this.state;

     return (
       <Grid.Column mobile={16} tablet={8} computer={4}>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <Input
              id="name"
              value={name}
              onChange={this.handleChange}
              required
              placeholder='Name'
            />
          </Form.Field>
          <Form.Field>
            <Input
              id="about"
              value={about}
              onChange={this.handleChange}
              required
              placeholder='about'
            />
          </Form.Field>
          <Form.Field>
            <Input
              id="notes"
              value={notes}
              onChange={this.handleChange}
              required
              placeholder='notes'
            />
          </Form.Field>
          <Form.Field>
            <Input
              id="details"
              value={details}
              onChange={this.handleChange}
              required
              placeholder='details'
            />
          </Form.Field>
          <Button color='grey' type='submit'>Add Patient</Button>
        </Form>
      </Grid.Column>
    )
  }
}


export default connect()(Testlink);