import { useModals } from "@/providers/modal/modal.provider";
import { User } from '@/types/user';
import Button from "@/ui/shared/button/button";

const ConfirmationModal = () => {
  const { modal, closeModal } = useModals();

  const confirmAction = () => {
    modal.metadata.submit();
    closeModal();
  };
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg z-30 bg-white p-10">
      <div className="text-center">
        Estas seguro que desear guardar el cliente?
      </div>
      <div className="flex flex-row justify-center gap-2 mt-3 ">
        <Button onClick={confirmAction}>Confirmar </Button>
        <Button
          className="bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 border border-gray-400 rounded shadow"
          onClick={closeModal}
        >
          Cancelar
        </Button>
      </div>
    </div>
  );
};

export default ConfirmationModal;
