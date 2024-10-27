'use server';

import { addToCart, createCart, getCart, getCheckoutURL, removeFromCart, updateCart } from '@/data/shopify';
import { TAGS } from '@/lib/constants';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function addItem(prevState: any, variantId: string | undefined) {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId || !variantId) {
    return 'Error adding item to cart';
  }

  try {
    await addToCart(cartId, [{ merchandiseId: variantId, quantity: 1 }]);
    revalidateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return 'Error adding item to cart';
  }
}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function removeItem(prevState: any, merchandiseId: string) {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  try {
    const cart = await getCart(cartId);

    if (!cart) {
      return 'Error fetching cart';
    }

    const lineItem = cart.lines.find((line) => line.merchandise.id === merchandiseId);

    if (lineItem && lineItem.id) {
      await removeFromCart(cartId, [lineItem.id]);
      revalidateTag(TAGS.cart);
    } else {
      return 'Item not found in cart';
    }
  } catch (e) {
    console.error(e);

    return 'Error removing item from cart';
  }
}

export async function updateItemQuantity(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  payload: {
    merchandiseId: string;
    quantity: number;
  }
) {
  const cartId = cookies().get('cartId')?.value;

  if (!cartId) {
    return 'Missing cart ID';
  }

  const { merchandiseId, quantity } = payload;

  try {
    const cart = await getCart(cartId);

    if (!cart) {
      return 'Error fetching cart';
    }

    const lineItem = cart.lines.find((line) => line.merchandise.id === merchandiseId);

    if (lineItem && lineItem.id) {
      if (quantity === 0) {
        await removeFromCart(cartId, [lineItem.id]);
      } else {
        await updateCart(cartId, [
          {
            id: lineItem.id,
            merchandiseId,
            quantity
          }
        ]);
      }
    } else if (quantity > 0) {
      // If the item doesn't exist in the cart and quantity > 0, add it
      await addToCart(cartId, [{ merchandiseId, quantity }]);
    }

    revalidateTag(TAGS.cart);
  } catch (e) {
    console.error(e);
    return 'Error updating item quantity';
  }
}

export async function redirectToCheckoutUrl() {
  const cookiesCartId = cookies().get('cartId')?.value;
  const cart = await getCart(cookiesCartId);
  /* getCheckoutUrl */

  if (!cookiesCartId) {
    return 'Missing cart ID';
  }

  if (!cart) {
    return 'Error fetching cart';
  }

  const cartId = cookiesCartId ?? cart;

  const checkoutUrl = await getCheckoutURL(cartId);

  const url = checkoutUrl ?? cart.checkoutUrl;
  if(url) {
    return url;
  } else {
    return console.error("No Checkout URL Found");
  }
}

export async function createCartAndSetCookie() {
  const cart = await createCart();
  /* cookies().set('cartId', cart.id!); */
  if (cart && cart.id) {
    cookies().set('cartId', cart.id!, {
      path: '/',
      sameSite: 'none',
      secure: true,
      domain: '.hellopurly.fr', // Mettez votre domaine ici
    });
  }
}