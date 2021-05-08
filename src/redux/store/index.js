// Import libraries
import { createStore } from 'redux';
// Import reducers
import reducers from '../reducers';

// Create store
const storeFn = () => {
  return { ...createStore(reducers) }
};
export default storeFn;