<script lang="ts">
	export let data;
	let { apiResponse } = data;
	$: ({ apiResponse } = data);

	console.log(apiResponse);
</script>

<div
	class="card m-1 hover:scale-[1.025] transition-all duration-75 cursor-pointer shadow-xl h-auto w-auto rounded-lg bg-base-300 p-4"
>
	<figure>
		<img src="https://bungie.net{apiResponse.data.character.emblem}" alt="Shoes" />
	</figure>
	<div class="card-body">
		<h2 class="card-title">Shoes!</h2>
		<p>If a dog chews shoes whose shoes does he choose?</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Buy Now</button>
		</div>
	</div>
</div>
