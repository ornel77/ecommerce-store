import { writable, get } from 'svelte/store';

// le tableau des items est composé d'objet avec un id et une quantité
export const cartItems = writable<CartItem[]>([]);

// add to cart
export const addItem = (id: string) => {
	const items = get(cartItems);
	const itemPosition = items.findIndex(
		(item) => item.id == id // does the current item have an id already present in the cart
	);

	if (itemPosition !== -1) {
		// item is in the cart
		cartItems.update(() => {
			const updatedItems = items.map((item) => {
				if (item.id === id) {
					return { ...item, quantity: item.quantity + 1 };
				}
				return item;
			});
			return updatedItems;
		});
	} else {
		// item is not in the cart
		cartItems.update(() => {
			return [...items, { id: id, quantity: 1 }];
		});
	}
};

// remove from cart
export const removeItem = (id: string) => {
	const items = get(cartItems);
	const itemPosition = items.findIndex(
		(item) => item.id == id // does the current item have an id already present in the cart
	);

    if(items[itemPosition]?.quantity - 1 === 0) {
        items.splice(itemPosition, 1)
    }

    cartItems.update(() => {
        const updatedItems = items.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        return updatedItems;
    });
};
