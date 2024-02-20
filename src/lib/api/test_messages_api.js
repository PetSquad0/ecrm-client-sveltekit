async function send(body, resHandler) {
  const response = await fetch(`/messages`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      message: body.message
    }
  })
  if (resHandler) {
    resHandler(response)
  }
  return response
}

async function sendBroadcast(body, resHandler) {
  const response = await fetch(`/messages/broadcast`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      message: body.message
    }
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
