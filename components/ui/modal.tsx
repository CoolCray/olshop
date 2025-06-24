'use client'

import { DialogDescription, DialogTitle } from '@radix-ui/react-dialog';
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
                <DialogTitle className="text-lg font-semibold">
                    {title}
                </DialogTitle>
                <DialogDescription className="text-sm text-muted-foreground">
                    {description}
                </DialogDescription>
                <div>
                    {children}
                </div>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}

export default Modal;