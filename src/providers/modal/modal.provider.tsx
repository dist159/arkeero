"use client";
import React, { ReactNode, createContext, useContext, useState } from "react";

export enum ModalType {
  ConfirmationModal = "confimationModal",
}

type ModalContextType<T> = {
  openModal: (type: ModalType, metadata: T) => void;
  closeModal: () => void;
  isOpen: boolean;
  modal: { type: ModalType | null; metadata: any };
};

const ModalContext = createContext<ModalContextType<any>>({
  openModal: (type: ModalType, metadata: any) => {},
  closeModal: () => {},
  isOpen: false,
  modal: { type: ModalType.ConfirmationModal, metadata: {} },
});

export const useModals = <T,>() =>
  useContext<ModalContextType<T>>(ModalContext);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [modal, setModal] = useState<{ type: ModalType | null; metadata: any }>(
    {
      type: null,
      metadata: {},
    }
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (type: ModalType, metadata: any) => {
    setIsOpen(true);
    setModal({ type, metadata });
  };

  const closeModal = () => {
    setIsOpen(false);
    setModal(undefined as any);
  };

  return (
    <ModalContext.Provider value={{ closeModal, openModal, modal, isOpen }}>
      {children}
    </ModalContext.Provider>
  );
};
