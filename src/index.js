import React from 'react'
import ReactDOM from 'react-dom'

var port = chrome.extension.connect({
  name: 'test connection'
})

port.onMessage.addListener(function(message) {
  console.log('in this junk')
})

const render = () => {
    const Root = require('./root').default

    ReactDOM.render(<Root port={port} />, document.getElementById('app'))
}

render()
