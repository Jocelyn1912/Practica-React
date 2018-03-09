import { createStore } from 'redux';

// Vincular plugin redux devtools con nuestra aplicación
export const store = createStore(() => {},
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__());
