'use client'

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "../ui/modal"

export const StoreModal = () => {

    const storeModal = useStoreModal();
    return (
        <Modal 
        title="buat store"
        description="Tambah store anda di sini"
        isOpen={storeModal.isOpen}
        onClose={storeModal.OnClose}
        >
                Store Form
        </Modal>)
}