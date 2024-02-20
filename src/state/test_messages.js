import * as yup from 'yup'
import { writable } from 'svelte/store'
import { test_messages_api } from '$lib/api/test_messages_api'

function newTestMessagesStore() {
  const { subscribe, set, update } = writable([])

  const TMessageNew = yup.object({
    message: yup.string().required()
  })
  const TMessage = yup.object({
    id: yup.number().required(),
    message: yup.string().required()
  })
  const TMessageArray = yup.array().of(TMessage)

  async function send(message) {
    await test_messages_api.send(await TMessageNew.validate(message))
  }

  async function sendBroadcast(message) {
    await test_messages_api.sendBroadcast(await TMessageNew.validate(message))
  }

  async function reqLastMessages() {
    await test_messages_api.getLastMessages(resLastMessages)
  }

  async function resLastMessages(response) {
    if (!response.ok) {
      return
    }
    const raw_data = response.json()
    try {
      const new_messages = await TMessage.validate(raw_data)
      update((messages) => [...messages, ...new_messages])
    } catch (err) {
      console.error(JSON.stringify(err))
    }
  }

  return {
    subscribe,
    send,
    sendBroadcast,
    reqLastMessages
  }
}

export const test_messages_store = newTestMessagesStore()
