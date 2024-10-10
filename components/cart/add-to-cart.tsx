'use client';

import { Product } from '@/types/types';
import { useFormState } from 'react-dom';
import { addItem } from './actions';
import { useCartStore, useOpenCartStore } from '@/store/cart';
import { cn } from '@/lib/utils';

function SubmitButton() {
  const buttonClasses =
    'relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white';

  return (
    <button
      aria-label="Add to cart"
      className={cn(buttonClasses, {
        'hover:opacity-90 bg-foreground': true
      })}
    >
      Ajouter au panier
    </button>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { addCartItem } = useCartStore();
  const { setIsOpen } = useOpenCartStore();
  const [message, formAction] = useFormState(addItem, null);

  return (
    <form
      action={async () => {
        addCartItem(product);
        await formAction(product.id);
      }}
      onClick={() => setIsOpen(true)}
    >
      <SubmitButton />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
