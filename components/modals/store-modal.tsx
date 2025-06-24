'use client'

import { useStoreModalStore } from "@/hooks/use-store-modal"
import Modal from "../ui/modal"

export const StoreModal = () => {
    const StoreModal = useStoreModalStore();
    return (
        <Modal title="Store Modal"
               description="Tambah store anda di sini"
               isOpen={StoreModal.isOpen}
               onClose={StoreModal.OnClose}
               >
                Store Form
        </Modal>)
}