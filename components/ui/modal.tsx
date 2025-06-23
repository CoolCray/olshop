'use client'

import {Dialog, DialogContent, DialogHeader} from './dialog'

interface ModalProps {
    title: string;
    description: string;
    onClose: () => void;
    isOpen: boolean;
    children?: React.ReactNode;
}

const Modal = ({title, description, isOpen, onClose, children} : ModalProps) => {
    
    const onChange = (open: boolean) => {
        if (!open) {
            onClose()
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                <DialogHeader/>
            </DialogContent>
        </Dialog>
    );
}