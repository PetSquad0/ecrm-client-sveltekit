<script>
  import { test_messages } from '../state'
</script>

<button on:click={() => test_messages.send({ message: 'Message to myself' })}>
  Message to myself
</button>
<button on:click={() => test_messages.sendBroadcast({ message: 'Message to all' })}>
  Message to all
</button>
<button on:click={() => test_messages.reqLastMessages()}> Update messages </button>

<h1>Messages</h1>
{#each $test_messages as { id, message }}
  <li data-id={id}>{message}</li>
{/each}
