"use client";
import { ModalType, useModals } from "@/providers/modal/modal.provider";
import Button from "@/ui/shared/button/button";
import ConfirmationModal from "./confirmation-modal/confirmation.modal";

const Modal = () => {
  const { modal, closeModal, isOpen } = useModals();

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      {(modal as any)?.type === ModalType.ConfirmationModal && (
        <ConfirmationModal />
      )}
    </div>
  );
};

export default Modal;
