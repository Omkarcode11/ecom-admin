'use client'

import { useStoreModal } from "@/hooks/use-store-modal"
import Modal from "@/components/ui/modal"



export const StoreModal = () =>{
    const storeModal = useStoreModal()

    return (
        <Modal description="this is a description" isOpen={storeModal.isOpen} title="nextjs" onClose={storeModal.onClose}>
            new Store
        </Modal>
    )
} 