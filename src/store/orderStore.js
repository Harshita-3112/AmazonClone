import {create} from 'zustand';

export const useOrderStore = create(set => ({
  cart: [],
  setCart: data =>
    set(state => ({
      cart: [...state.cart, data],
    })),
}));
