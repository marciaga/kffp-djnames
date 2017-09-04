import React from 'react';
import { render } from 'react-dom';
import App from './app';

export const init = (config) =>
  render(<App config={config} />, document.getElementById('root'));
