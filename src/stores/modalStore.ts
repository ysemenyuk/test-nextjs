import { create } from 'zustand';

// State types
interface States {
  isOpen: boolean;
}

// Action types
interface Actions {
  open: () => void;
  close: () => void;
}

// useCounterStore
export const useCountStore = create<States & Actions>((set) => ({
  // States
  isOpen: false,
    
  // Actions
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));