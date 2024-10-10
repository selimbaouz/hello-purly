import { Cart, CartItem, Product } from '@/types/types';
import { create } from 'zustand';

type UpdateType = 'plus' | 'minus' | 'delete';

interface CartState {
  cart: Cart;
  addCartItem: (product: Product) => void;
  updateCartItem: (merchandiseId: string, updateType: UpdateType) => void;
}

interface OpenCartState {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

function calculateItemCost(quantity: number, price: string): string {
  return (Number(price) * quantity).toString();
}

function updateCartItem(item: CartItem, updateType: UpdateType): CartItem | null {
  if (updateType === 'delete') return null;

  const newQuantity = updateType === 'plus' ? item.quantity + 1 : item.quantity - 1;
  if (newQuantity === 0) return null;

  const singleItemAmount = Number(item.cost.totalAmount.amount) / item.quantity;
  const newTotalAmount = calculateItemCost(newQuantity, singleItemAmount.toString());

  return {
    ...item,
    quantity: newQuantity,
    cost: {
      ...item.cost,
      totalAmount: {
        ...item.cost.totalAmount,
        amount: newTotalAmount
      }
    }
  };
}

function createOrUpdateCartItem(
  existingItem: CartItem | undefined,
  product: Product
): CartItem {
  const quantity = existingItem ? existingItem.quantity + 1 : 1;
  const totalAmount = calculateItemCost(quantity, product.priceRange.minVariantPrice.amount);

  return {
    id: existingItem?.id,
    quantity,
    cost: {
      totalAmount: {
        amount: totalAmount,
        currencyCode: product.priceRange.minVariantPrice.currencyCode
      }
    },
    merchandise: {
      id: product.id,
      title: product.title,
      product: {
        id: product.id,
        handle: product.handle,
        title: product.title,
        featuredImage: product.images.edges[0]
      },
      selectedOptions: []
    }
  };
}

function updateCartTotals(lines: CartItem[]): Pick<Cart, 'totalQuantity' | 'cost'> {
  const totalQuantity = lines.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = lines.reduce((sum, item) => sum + Number(item.cost.totalAmount.amount), 0);
  const currencyCode = lines[0]?.cost.totalAmount.currencyCode ?? 'EUR';

  return {
    totalQuantity,
    cost: {
      subtotalAmount: { amount: totalAmount.toString(), currencyCode },
      totalAmount: { amount: totalAmount.toString(), currencyCode },
      totalTaxAmount: { amount: '0', currencyCode }
    }
  };
}

function createEmptyCart(): Cart {
  return {
    id: undefined,
    checkoutUrl: '',
    totalQuantity: 0,
    lines: [],
    cost: {
      subtotalAmount: { amount: '0', currencyCode: 'EUR' },
      totalAmount: { amount: '0', currencyCode: 'EUR' },
      totalTaxAmount: { amount: '0', currencyCode: 'EUR' }
    }
  };
}

export const useOpenCartStore = create<OpenCartState>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
}))

export const useCartStore = create<CartState>((set) => ({
  cart: createEmptyCart(),

  addCartItem: (product) =>
    set((state) => {
      const existingItem = state.cart.lines.find(
        (item) => item.merchandise.id === product.id
      );
      const updatedItem = createOrUpdateCartItem(existingItem, product);

      const updatedLines = existingItem
        ? state.cart.lines.map((item) =>
            item.merchandise.id === product.id ? updatedItem : item
          )
        : [...state.cart.lines, updatedItem];

      return { cart: { ...state.cart, ...updateCartTotals(updatedLines), lines: updatedLines } };
    }),

  updateCartItem: (merchandiseId, updateType) =>
    set((state) => {
      const updatedLines = state.cart.lines
        .map((item) =>
          item.merchandise.id === merchandiseId ? updateCartItem(item, updateType) : item
        )
        .filter(Boolean) as CartItem[];

      if (updatedLines.length === 0) {
        return {
          cart: {
            ...state.cart,
            lines: [],
            totalQuantity: 0,
            cost: {
              ...state.cart.cost,
              totalAmount: { ...state.cart.cost.totalAmount, amount: '0' }
            }
          }
        };
      }

      return { cart: { ...state.cart, ...updateCartTotals(updatedLines), lines: updatedLines } };
    })
}));
