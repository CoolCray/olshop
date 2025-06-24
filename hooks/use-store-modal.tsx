import {create} from 'zustand';

interface UseStoreModalStore {
    isOpen: boolean;
    OnOpen: () => void
    OnClose: () => void
}

export const useStoreModal = create<UseStoreModalStore>((set) => ({
    isOpen: false,
    OnOpen: () => set({ isOpen: true }),
    OnClose: () => set({ isOpen: false }),
}));