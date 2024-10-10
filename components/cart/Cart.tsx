"use client"
import Image from 'next/image';
import { useCartStore, useOpenCartStore } from '../../store/cart';
import { ShoppingCartIcon } from 'lucide-react';
import Price from '../Price';
import { DeleteItemButton } from '@/components/cart/delete-item-button';
import { EditItemQuantityButton } from './edit-item-quantity-button';
import { useFormStatus } from 'react-dom';
import { createCartAndSetCookie, redirectToCheckout } from './actions';
import { PulseLoader } from 'react-spinners';
import { useEffect, useRef } from 'react';
import { createUrl } from '@/lib/utils';
import Link from 'next/link';

type MerchandiseSearchParams = {
    [key: string]: string;
  };

export default function Cart() {
  const { cart, updateCartItem } = useCartStore();
  const {isOpen, setIsOpen} = useOpenCartStore();
  const quantityRef = useRef(cart?.totalQuantity);
  /* const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false); */

  useEffect(() => {
    if (!cart) {
      createCartAndSetCookie();
    }
  }, [cart]);

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current &&
      cart?.totalQuantity > 0
    ) {
      if (!isOpen) {
        setIsOpen(true);
      }
      quantityRef.current = cart?.totalQuantity;
    }
  }, [isOpen, cart?.totalQuantity, quantityRef, setIsOpen]);

  return (
    <div className="bg-background text-white h-full py-10">
        {!cart || cart.lines.length === 0 ? (
            <div className="pb-14 flex w-full h-full flex-col items-center justify-center overflow-hidden">
            <ShoppingCartIcon className="size-14" />
            <p className="mt-6 text-center text-2xl font-bold">Your cart is empty.</p>
            </div>
        ) : (
            <div className='h-full flex flex-col justify-between'>
                <ul className="flex-grow overflow-auto py-4">
                    {cart.lines
                    .sort((a, b) =>
                        a.merchandise.product.title.localeCompare(b.merchandise.product.title)
                    ).map((item) => {
                        const merchandiseSearchParams = {} as MerchandiseSearchParams;

                        /* item.merchandise.selectedOptions.forEach(({ name, value }) => {
                        if (value !== DEFAULT_OPTION) {
                            merchandiseSearchParams[name.toLowerCase()] = value;
                        }
                        }); */

                        const merchandiseUrl = createUrl(
                        `/product/${item.merchandise.product.handle}`,
                        new URLSearchParams(merchandiseSearchParams)
                        );

                        return (
                            <li key={item.id} className="flex w-full justify-between gap-2 items-center p-2">
                                <div className='relative'>
                                    <Image src={item.merchandise.product.featuredImage.node.originalSrc} alt={item.merchandise.product.featuredImage.node.altText} width={20} height={20} className="h-14 w-14 max-w-14 rounded-xl object-fill" />
                                    <div className="absolute z-40 -top-2 -left-2">
                                        <DeleteItemButton item={item} optimisticUpdate={updateCartItem} />
                                    </div>
                                </div>
                                <Link
                                    href={merchandiseUrl}
                                    onClick={() => setIsOpen(false)}
                                    className='ml-4 w-full'
                                >
                                    <div>
                                        <p className="text-lg">{item.merchandise.product.title}</p>
                                        <Price
                                            className="text-sm text-gray-500 font-montserrat"
                                            amount={item.cost.totalAmount.amount}
                                            currencyCode={item.cost.totalAmount.currencyCode}
                                        />
                                    </div>
                                </Link>
                                <div className="flex items-center">
                                <EditItemQuantityButton
                                    item={item}
                                    type="minus"
                                    optimisticUpdate={updateCartItem}
                                />
                                <span className="mx-3">{item.quantity}</span>
                                <EditItemQuantityButton
                                    item={item}
                                    type="plus"
                                    optimisticUpdate={updateCartItem}
                                />
                                </div>
                            </li>
                            )
                    })}
                </ul>

                <div className="mt-6">
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 dark:border-neutral-700">
                        <p>Taxes</p>
                        <span className='ml-1 inline'>
                            <Price
                                className="flex justify-end space-y-2 text-right text-sm"
                                amount={cart.cost.totalTaxAmount.amount}
                                currencyCode={cart.cost.totalTaxAmount.currencyCode}
                            />
                        </span>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Expédition</p>
                        <p className="text-right text-sm text-white/40">Livraison Offerte</p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-neutral-200 pb-1 pt-1 dark:border-neutral-700">
                        <p>Total</p>
                        <span className='ml-1 inline'>
                        <Price
                            className="flex justify-end space-y-2 text-right text-sm"
                            amount={cart.cost.totalAmount.amount}
                            currencyCode={cart.cost.totalAmount.currencyCode}
                        />
                        </span>
                    </div>
                    <form onClick={() => redirectToCheckout}>
                        <CheckoutButton />
                    </form>
                </div>
            </div>
        )}
    </div>
  );
}


function CheckoutButton() {
    const { pending } = useFormStatus();
  
    return (
      <button
        className="bg-foreground rounded-3xl text-white py-3 w-full mt-6"
        type="submit"
        disabled={pending}
      >
        {pending ? <PulseLoader className="bg-white" /> : 'Proceed to Checkout'}
      </button>
    );
  }