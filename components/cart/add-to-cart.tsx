'use client';

import { Product } from '@/types/types';
import { useFormState } from 'react-dom';
import { addItem } from './actions';
import { useCartStore, useOpenCartStore } from '@/store/cart';
import { cn } from '@/lib/utils';
import { FiPlus } from 'react-icons/fi';

interface SubmitButtonProps {
  size?: "fullWidth" | "initial";
  color?: "gradient" | "foreground";
}
function SubmitButton({size = "initial", color = "gradient"}: SubmitButtonProps) {
  return (
    <div className={cn(
      "relative p-0.5 rounded-full mx-auto w-full", 
      size === "fullWidth" ? "w-full xl:w-max xl:mx-0" : "w-max xl:w-max",
      color === "gradient" && "bg-gradient-to-l from-foreground to-[#899CAA]/30"
      )}
    >
        <div className={cn(
          "p-[3px] rounded-full text-sm font-bold",
          color === "gradient" && "bg-background"
          )}
        >
          <button
            aria-label="Add to cart"
            className={cn(
              "py-[14px] rounded-full text-white text-base font-medium",
              size === "fullWidth" ? "w-full px-[96px]" : "w-max px-12",
              color === "gradient" ? 
              "bg-gradient-to-b from-background via-background via-50% to-foreground hover:bg-gradient-to-b hover:from-foreground hover:via-background hover:via-50% hover:to-background" : 
              "p-2 lg:px-6 bg-foreground hover:bg-transparent hover:border-foreground border border-transparent hover:text-foreground text-white font-bold"
          )}
          >
            {color !== "foreground" ? 
              <p>Ajouter au panier</p> : 
              <div>
                  <FiPlus className={cn("text-2xl font-bold lg:hidden")} />
                  <p className={cn("hidden", "lg:block")}>
                    Ajouter au panier
                  </p>
              </div>
            }
          </button>
        </div>
    </div>
  );
}

export function AddToCart({ product, size = "initial", color = "gradient" }: { product: Product, size?: "fullWidth" | "initial", color?: "gradient" | "foreground" }) {
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
      <SubmitButton size={size} color={color} />
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
