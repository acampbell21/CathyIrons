import React, { Component } from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';

export class Home extends Component {
 render () {
   return (
     <Grid centered columns={12}>
       <Grid.Row>
         <Grid.Column mobile={16} tablet={8} computer={4}>
           <Segment>
             This is a test
           </Segment>
           <Segment>
             This is also a test
           </Segment>
         </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={4}>
            <Segment>
              This is another test
            </Segment>
          </Grid.Column>
        </Grid.Row>
     </Grid>
   )
 }
}
  



export default Home;
