import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component {
  static contextTypes = {
    port: PropTypes.any
  }

  componentWillMount() {
    console.log('will mount!!', this.context.port);
    // const { port } = this.context;
  }

  postMessage = () => {
    console.log('context son!!', this.context)
    const { port } = this.context;

    // port.postMessage({
    //   message: 'stuff!!!'
    // })
    chrome.extension.sendMessage('this is working.');
  }

  render() {
    return (
      <div>
        {`<Declarity />`}
        <button onClick={this.postMessage}>Click me</button>
      </div>
    )
  }
}

export default App;
