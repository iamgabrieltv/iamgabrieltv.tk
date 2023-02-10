<script lang="ts">
 import { page } from "$app/stores";

 let email = $page.data.session?.user?.email;
 let username = $page.data.session?.user?.name;

 let body: string;

 async function sendMessage() {
  if ($page.data.session) {
   
 }
}
</script>

<form on:submit|preventDefault={sendMessage}>
 <input placeholder="Message" type="text" class="input w-full max-w-xs bg-base-200 m-2" bind:value={body} />
 <button type="submit" class="btn btn-ghost bg-base-300"><p>Sign</p></button>
</form>