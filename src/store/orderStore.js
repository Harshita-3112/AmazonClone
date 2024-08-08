import {create} from 'zustand';

export const useOrderStore = create(set => ({
  order: [],
  setOrder: data =>
    set(state => ({
      order: [...state.order, data],
    })),
}));
