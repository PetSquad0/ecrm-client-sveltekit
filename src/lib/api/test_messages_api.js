async function send(data, resHandler) {
  console.log(data)
  const response = await fetch(`/messages`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (resHandler) {
    resHandler(response)
  }
  return response
}

async function sendBroadcast(data, resHandler) {
  const response = await fetch(`/messages/broadcast`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  if (resHandler) {
    resHandler(response)
  }
  return response
}

async function getLastMessages(resHandler) {
  const response = await fetch(`/messages/last`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  if (resHandler) {
    await resHandler(response)
  }
  return response
}

export const test_messages_api = {
  send,
  sendBroadcast,
  getLastMessages
}
