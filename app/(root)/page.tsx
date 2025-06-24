'use client';

import Image from "next/image";
import Modal from "@/components/ui/modal";

const SetupPage = () =>  {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-100">
      <Modal isOpen onClose={() => {}} title="Welcome" description="This is a sample modal">
        children
      </Modal>
    </div>
  );
}

export default SetupPage;