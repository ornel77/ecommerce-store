<script lang="ts">
	import { get } from 'svelte/store';
	import { addItem, removeItem, cartItems } from '../cart';

	export let product: Product;
	const { id, name, price } = product;

	let cart = get(cartItems);

	let cartItemIndex = cart.findIndex((item) => item.id === id);
	let cartProduct = cart[cartItemIndex];

	cartItems.subscribe((newCartValue) => {
		cart = newCartValue;
		cartItemIndex = cart.findIndex((item) => item.id === id);
		cartProduct = cart[cartItemIndex];
		console.log(cart);
	});
</script>

<div class="card">
	<header class="card-header">
		<h2 class="text-2xl">{name}</h2>
	</header>

	{#if cartProduct != undefined}
		<div class="card-body px-4">
			Quantity: <strong>{cartProduct.quantity}</strong>
		</div>
	{/if}

	<div class="card-body px-4">Price: ${price}</div>
	<footer class="card-footer">
		<button class="p-2 rounded variant-glass-primary" on:click={() => addItem(id)}>Add</button>
		<button class="p-2 rounded variant-glass-error" on:click={() => removeItem(id)}>Remove</button>
	</footer>
</div>
