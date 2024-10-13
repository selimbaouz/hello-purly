'use client';

import { Product } from '@/types/types';
import { useFormState } from 'react-dom';
import { addItem } from './actions';
import { useCartStore, useOpenCartStore } from '@/store/cart';
import { cn } from '@/lib/utils';

interface SubmitButtonProps {
  size?: "fullWidth" | "initial"
}
function SubmitButton({size = "initial"}: SubmitButtonProps) {
  return (
    <div className={cn("relative p-0.5 bg-gradient-to-l from-foreground to-[#899CAA]/30 rounded-full mx-auto w-full", size === "fullWidth" ? "w-full xl:w-max xl:mx-0" : "w-max")}>
        <div className="bg-background p-[3px] rounded-full text-sm font-bold">
          <button
            aria-label="Add to cart"
            className={cn(
              "bg-gradient-to-b from-background via-background via-50% to-foreground px-[96px] py-[14px] rounded-full text-white text-base font-medium",
              "hover:bg-gradient-to-b hover:from-foreground hover:via-background hover:via-50% hover:to-background",
              size === "fullWidth" ? "w-full" : "w-max"
          )}
          >
            Ajouter au panier
          </button>
        </div>
    </div>
  );
}

export function AddToCart({ product }: { product: Product }) {
  const { addCartItem } = useCartStore();
  const { setIsOpen } = useOpenCartStore();
  const [message, formAction] = useFormState(addItem, null);
  const variantId = product.variants.edges[0].node.id;
  const actionWithVariant = formAction.bind(null, variantId);

  return (
    <form
      action={async () => {
        addCartItem(product.variants.edges[0], product);
        await actionWithVariant();
      }}
      onClick={() => setIsOpen(true)}
    >
      <SubmitButton size="fullWidth" />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
