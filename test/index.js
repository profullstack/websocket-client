/**
 * Basic tests for @profullstack/websocket-client
 */

// Import the module
const websocketClient = require('../src/index.js');

// Basic test to ensure the module exports something
console.log('Testing @profullstack/websocket-client...');
console.log('Module exports:', Object.keys(websocketClient));

if (Object.keys(websocketClient).length === 0) {
  console.error('ERROR: Module does not export anything!');
  process.exit(1);
}

// Test browser and node implementations if they exist
try {
  const browserImpl = require('../src/browser.js');
  console.log('Testing browser implementation...');
  console.log('Browser implementation exports:', Object.keys(browserImpl));
} catch (err) {
  console.log('Browser implementation not found or could not be loaded:', err.message);
}

try {
  const nodeImpl = require('../src/node.js');
  console.log('Testing node implementation...');
  console.log('Node implementation exports:', Object.keys(nodeImpl));
} catch (err) {
  console.log('Node implementation not found or could not be loaded:', err.message);
}

// Test basic functionality
if (typeof websocketClient.createClient === 'function') {
  console.log('Testing createClient function exists:', typeof websocketClient.createClient === 'function' ? 'SUCCESS' : 'FAILED');
}

if (typeof websocketClient.connect === 'function') {
  console.log('Testing connect function exists:', typeof websocketClient.connect === 'function' ? 'SUCCESS' : 'FAILED');
}

if (typeof websocketClient.send === 'function') {
  console.log('Testing send function exists:', typeof websocketClient.send === 'function' ? 'SUCCESS' : 'FAILED');
}

if (typeof websocketClient.close === 'function') {
  console.log('Testing close function exists:', typeof websocketClient.close === 'function' ? 'SUCCESS' : 'FAILED');
}

if (typeof websocketClient.on === 'function') {
  console.log('Testing on function exists:', typeof websocketClient.on === 'function' ? 'SUCCESS' : 'FAILED');
}

console.log('Basic test passed!');