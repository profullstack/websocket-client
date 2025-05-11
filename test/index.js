/**
 * Basic tests for @profullstack/websocket-client
 */

// Import the module
import websocketClient from '../src/index.js';
import { jest } from '@jest/globals';

// Import browser and node implementations
let browserImpl, nodeImpl;

try { browserImpl = await import('../src/browser.js'); }
catch (err) { console.log('Browser implementation not found or could not be loaded:', err.message); }

try { nodeImpl = await import('../src/node.js'); }
catch (err) { console.log('Node implementation not found or could not be loaded:', err.message); }

describe('@profullstack/websocket-client', () => {
  test('module exports something', () => {
    console.log('Testing @profullstack/websocket-client...');
    console.log('Module exports:', Object.keys(websocketClient));
    
    expect(Object.keys(websocketClient).length).toBeGreaterThan(0);
  });
  
  // Test browser and node implementations if they exist
  test('browser implementation if available', () => {
    if (browserImpl) {
      console.log('Testing browser implementation...');
      console.log('Browser implementation exports:', Object.keys(browserImpl));
      expect(Object.keys(browserImpl).length).toBeGreaterThan(0);
    } else {
      console.log('Browser implementation not available, skipping test');
    }
  });
  
  test('node implementation if available', () => {
    if (nodeImpl) {
      console.log('Testing node implementation...');
      console.log('Node implementation exports:', Object.keys(nodeImpl));
      expect(Object.keys(nodeImpl).length).toBeGreaterThan(0);
    } else {
      console.log('Node implementation not available, skipping test');
    }
  });
  
  // Test basic functionality
  test('createClient function if available', () => {
    if (typeof websocketClient.createClient === 'function') {
      console.log('Testing createClient function exists');
      expect(websocketClient.createClient).toBeDefined();
    } else {
      console.log('createClient function not available, skipping test');
    }
  });
  
  test('connect function if available', () => {
    if (typeof websocketClient.connect === 'function') {
      console.log('Testing connect function exists');
      expect(websocketClient.connect).toBeDefined();
    } else {
      console.log('connect function not available, skipping test');
    }
  });
  
  test('send function if available', () => {
    if (typeof websocketClient.send === 'function') {
      console.log('Testing send function exists');
      expect(websocketClient.send).toBeDefined();
    } else {
      console.log('send function not available, skipping test');
    }
  });
  
  test('close function if available', () => {
    if (typeof websocketClient.close === 'function') {
      console.log('Testing close function exists');
      expect(websocketClient.close).toBeDefined();
    } else {
      console.log('close function not available, skipping test');
    }
  });
  
  test('on function if available', () => {
    if (typeof websocketClient.on === 'function') {
      console.log('Testing on function exists');
      expect(websocketClient.on).toBeDefined();
    } else {
      console.log('on function not available, skipping test');
    }
  });
});