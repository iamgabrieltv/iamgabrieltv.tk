<script lang="ts">
 import { page } from "$app/stores";
 import { queryBuilder } from "./planetscale";

 let email = $page.data.session?.user?.email;
 let username = $page.data.session?.user?.name;

 let body: string;

 async function sendMessage() {
  if ($page.data.session) {
   await queryBuilder
    .insertInto('guestbook')
    .values({
     email,
     body,
     created_by: username,
    })
    .execute();
 }
}
</script>

<form on:submit|preventDefault={sendMessage}>
 <input placeholder="Message" type="text" class="input w-full max-w-xs bg-base-200 m-2" bind:value={body} />
 <button type="submit" class="btn">Sign</button>
</form>