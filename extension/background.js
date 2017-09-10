chrome.extension.onConnect.addListener(function(port) {
  console.log('added!', port);
  var thing = function(message, sender, sendResponse) {
    console.log('thing!!', message, sender)
  }

  chrome.extension.onMessage.addListener(thing)

  port.onDisconnect.addListener(function(port) {
    console.log('disconnect')
    chrome.extension.onMessage.removeListener(thing)
  })
})
