<script lang="ts">
	import ProductCard from '$lib/ProductCard.svelte';

	const products: Product[] = [
		{
			id: '1',
			name: 'Coffee',
			price: 5
		},
		{
			id: '2',
			name: 'Sunglasses',
			price: 10
		},
		{
			id: '3',
			name: 'Water Bottle',
			price: 15
		}
	];
</script>

<div class="container h-[100vh] mx-auto flex justify-center items-center">
	<div class="grid grid-cols-3 gap-4">
		<div class="col-span-3">
			<h1 class="text-3xl">SvelteKit 1.0 Store</h1>
		</div>
		{#each products as product}
			<ProductCard {product}/>
		{/each}
		<div class="col-span-3">
			<button class="btn variant-filled-primary">Checkout with Stripe API</button>
		</div>
	</div>
</div>
