import React, { Component } from 'react';
import { updateAccount } from '../actions/accounts';
import { connect } from 'react-redux';
import { Button, Form, Grid, Input } from 'semantic-ui-react';
import TextArea from 'semantic-ui-react/dist/commonjs/addons/TextArea/TextArea';


export class Edit extends Component {
 state = {
   name: this.props.user.name, 
   email: this.props.user.email,
   about: this.props.user.about, 
   notes: this.props.user.notes,
 };

 handleChange = (e) => {
    let { target: { id, value }} = e;
    this.setState({ [id]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, about, notes } = this.state;
    this.props.dispatch(updateAccount(name, email, about, notes))
  }

  render () {
    const { name, about, notes, email } = this.state;

     return (
       <Grid>
         <Grid.Row>
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
              <Form>
                <TextArea
                  id="about"
                  value={about}
                  onChange={this.handleChange}
                  placeholder='about'
                />
              </Form>
              <Form>
                <TextArea
                  id="notes"
                  value={notes}
                  onChange={this.handleChange}
                  placeholder='notes'
                />
              </Form>
              <Form.Field>
                <Input
                  id="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                  placeholder='email'
                />
              </Form.Field>
              <Button color='grey' type='submit'>Add Info</Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
}

export default connect(mapStateToProps)(Edit);