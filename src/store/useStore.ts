import create, { SetState } from "zustand";

interface storeState {
  count: number;
  setCount: (value: number) => void;
  increaseCount: (value: number) => void; //not using anywhere
  decreaseCount: (value: number) => void; //not using anywhere
}

export const useStore = create(
  (set: SetState<storeState>): storeState => ({
    count: 0,
    setCount: (value) => set((state) => ({ count: value })),
    increaseCount: () => set((state) => ({ count: state.count + 1 })), //not using anywhere
    decreaseCount: () => set((state) => ({ count: state.count - 1 })) //not using anywhere
  })
);
