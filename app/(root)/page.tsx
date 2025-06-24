'use client';

import Image from "next/image";
import Modal from "@/components/ui/modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () =>  {

  const isOpen = useStoreModal((state) => state.isOpen);
  const onOpen = useStoreModal((state) => state.OnOpen);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
        Root Page
    </div>
  );
}

export default SetupPage;