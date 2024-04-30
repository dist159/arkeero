import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { useClients } from "@/providers/clients/clients.provider";
import { User } from "@/types/user";
import Button from "@/ui/shared/button/button";
import FormInput from "@/ui/shared/form-input/form-input";
import FormSelector from "@/ui/shared/form-selector/form-selector";
import { ModalType, useModals } from "@/providers/modal/modal.provider";
import Textarea from "@/ui/shared/textarea/textarea";
import { submit } from "@/helpers/submit";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserOneSchema } from '../schemas/user-one.schema';




type ClientFormProps = {
  readonly clientId?: string;
  readonly clientOneData?: User | any;
  readonly setClientOneData?: (user: User) => void;
};

const ClientForm = (props: ClientFormProps) => {
  const { clientOneData, clientId, setClientOneData } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({ resolver: yupResolver(UserOneSchema) });
  const { clients } = useClients();
  const { openModal } = useModals();
  const watchedFields = watch();

  useEffect(() => {
    if (clientId) {
      const currentClient: User | any = clients.find(
        (client) => client.id === clientId
      );

      if (currentClient) {
        Object.keys(currentClient).forEach((key: any) => {
          setValue(key, currentClient[key]);
        });
      }
    }
  }, []);

  useEffect(() => {
    const subscription = watch(() => {
      if (setClientOneData) setClientOneData(watchedFields as any);
    });
    return () => subscription.unsubscribe();
  }, [watchedFields]);

  const openConfimationModal = (data: SubmitHandler<User> | any) => {
    openModal(ModalType.ConfirmationModal, {
      submit: () => submitForm(data),
    });
  };

  const submitForm = async (data: User) => {
    const statusCode = await submit(data);
    if (statusCode === 200) {
      reset();
    }
  };

  const loadClientOne = () => {
    if (clientOneData)
      Object.keys(clientOneData).forEach((key: any) => {
        setValue(key, clientOneData[key]);
      });
  };

  return (
    <form
      onSubmit={handleSubmit(openConfimationModal)}
      className="flex flex-col gap-10 p-10"
    >
      {clientOneData && (
        <div className="flex flex-row justify-around">
          <label>Cargar datos del ClienteOne</label>
          <input type="radio" onClick={loadClientOne} />
        </div>
      )}
      <FormInput
        title="Nombre"
        register={register("name", { required: true })}
        error={errors.name as unknown as boolean}
        errorMessage={errors.name?.message}
      />
      <FormSelector
        title={"Estado"}
        items={[
          { name: "Activo", value: "active" },
          { name: "Deshabilitado", value: "disabled" },
        ]}
        register={register("status", { required: true })}
        error={errors.status as unknown as boolean}
        errorMessage={errors.status?.message}
      />

      <Textarea
        register={register("description", { required: true, maxLength: 150 })}
        title={"Descripcion"}
        error={errors.description as unknown as boolean}
        errorMessage={errors.description?.message}
        placeholder="Description"
      />

      <FormSelector
        title={"Tipo de cuenta"}
        items={[
          { name: "Master", value: "master" },
          { name: "Owner", value: "owner" },
          { name: "Basic", value: "basic" },
        ]}
        register={register("accountType", { required: true })}
        error={errors.accountType as unknown as boolean}
        errorMessage={errors.accountType?.message}
      />
      <FormInput
        title="Contactos"
        error={errors.contacts as unknown as boolean}
        errorMessage={errors.contacts?.message}
        register={register("contacts", { required: true })}
      />

      <Button type="submit">Guardar</Button>
    </form>
  );
};

export default ClientForm;
