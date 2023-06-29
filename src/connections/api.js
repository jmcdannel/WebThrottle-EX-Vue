
let ws;

function onOpen() {
  console.log('[API] onOpen');
}

function onError(event) {
  console.log('[API] Websocket error', event);
}

function onMessage(event) {
  try {
    console.log('[API] onMessage', JSON.parse(event.data));
  } catch { 
    log.warn('Message not in JSON format.', event.data); 
  }
}

async function connect() {
  ws = new WebSocket('ws://localhost:8080');
  ws.onerror = onError;
  ws.addEventListener('open', onOpen);   
  ws.addEventListener('message',  onMessage);
}

async function getWS(type ) {
  try {    
    ws.send(JSON.stringify({
      action: type
    }));
  } catch (err) {
    console.error('api.get', err);
    throw new Error('Unable to read', err, type);
  }
}

async function putWS(action, payload) {
  try {
    console.log('putWS', { action, payload });
    ws.send(JSON.stringify({ action, payload }));
  } catch (err) {
    console.error('api.put', err)
    throw new Error('Unable to update', err, type, data);
  }
}

export const api = {
  connect,
  get: getWS,
  put: putWS,
  turnouts: {
    put: (...args)  => putWS('turnouts', ...args)
  },
  effects: {
    put: (...args) => putWS('effects', ...args)
  },
  ports: {
    get: (...args) => getWS('ports', ...args)
  }
}

export default api;
