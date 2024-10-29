'use client';

import { Product } from '@/types/types';
import { useFormState } from 'react-dom';
import { addItem } from './actions';
import { useCartStore, useOpenCartStore, useVisibleFloatingCartStore } from '@/store/cart';
import { cn } from '@/lib/utils';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { useEffect, useRef, useState } from 'react';
import ShimmerButton from '../ShimmerButton';

interface SubmitButtonProps {
  size?: "fullWidth" | "initial";
  color?: "gradient" | "foreground";
}
function SubmitButton({size = "initial", color = "gradient"}: SubmitButtonProps) {
  const buttonRef = useRef(null);
  const { setIsVisible } = useVisibleFloatingCartStore();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => {
      if (buttonRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(buttonRef.current);
      }
    };
  }, [setIsVisible]);

  return (
      <button
        aria-label="Add to cart"
        ref={buttonRef}
        className={cn(
          "py-[14px] rounded-full text-white text-base font-medium border-t border-foreground",
          size === "fullWidth" ? "min-w-full px-[96px]" : "w-max px-12",
          color === "gradient" ? 
          "bg-gradient-to-b from-background via-background via-50% to-foreground hover:bg-gradient-to-b hover:from-foreground hover:via-background hover:via-50% hover:to-background" : 
          "p-2 lg:px-6 bg-foreground hover:bg-transparent hover:border-foreground border border-transparent hover:text-foreground text-white font-bold",
      )}
      >
        {color !== "foreground" ? 
          <p>Ajouter au panier</p> : 
          <div>
              <TbShoppingCartPlus className={cn("text-2xl font-bold lg:hidden text-white")} />
              <p className={cn("hidden", "lg:block")}>
                Ajouter au panier
              </p>
          </div>
        }
      </button>
  );
}

export function AddToCart({ product, size = "initial", color = "gradient" }: { product: Product, size?: "fullWidth" | "initial", color?: "gradient" | "foreground" }) {
  const [isMounted, setIsMounted] = useState(true);
  const { addCartItem } = useCartStore();
  const { setIsOpenCart } = useOpenCartStore();
  const { setIsOpenFloatingBar } = useVisibleFloatingCartStore();
  const [message, formAction] = useFormState(addItem, null);
  const variantId = product.variants.edges[0].node.id;
  const actionWithVariant = formAction.bind(null, variantId);

  useEffect(() => {
    setIsMounted(false);
  }, [])

  return (
    <form
      action={async () => {
        addCartItem(product.variants.edges[0], product);
        await actionWithVariant();
        setIsOpenFloatingBar(false);
      }}
      onClick={() => setIsOpenCart(true)}
    >
      {color === "foreground" || isMounted ? (
        <SubmitButton size={size} color={color} />
      )
       : (
        <ShimmerButton shimmerColor='#319795' className={cn(size === "fullWidth" && "w-full")}>
          <SubmitButton size={size} color={color} />
        </ShimmerButton>
       )
      }
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
