import axios from 'axios';
import { setFlash } from './flash';
import { setHeaders } from './headers';

export const updateAccount = (name, email, about, notes) => {
  return (dispatch) => {
    axios.put('/api/auth', {name, email, about, notes})
      .then( res => {
        const { data: { data: user }, headers } = res;
        dispatch(setFlash('Successfully Updated Account!', 'green'));
        dispatch({ type: 'LOGIN', user, headers });
      })
      .catch( res => {
        dispatch(setFlash(`Error Updating Account: ${res.response.data.errors.full_messages.join(',')}`, 'error'));
        dispatch(setHeaders(res.headers));
    });
  }
}