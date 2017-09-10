import React from 'react';
import PropTypes from 'prop-types';

import App from './components/App'

class Root extends React.Component {
  port = null

  static childContextTypes = {
    port: PropTypes.any
  }

  getChildContext() {
    return {
      port: this.port
    }
  }


  componentWillMount() {
    this.port = chrome.extension.connect({
      name: 'declarity_devtools'
    })
  }

  render() {
      return this.port && <App />
  }
}

export default Root
