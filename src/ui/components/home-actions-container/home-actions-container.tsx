"use client";
import Card from "@/ui/shared/card/card";
import { useRouter } from "next/navigation";

const HomeActionsContainer = () => {
  const router = useRouter();
  const goToPage = (path: string) => {
    router.push(path);
  };
  return (
    <div className="flex flex-col gap-5 md:flex-row lg:flex-row">
      <Card
        className={""}
        src={"/users-icon.png"}
        title="Buscar usuarios"
        description="Busca un usuario especifico."
        action={() => goToPage("users")}
        buttonTittle={"Continuar"}
      />
      <Card
        className={""}
        src={"/add-user-icon.png"}
        title="Agregar usuario"
        description="Agrega un nuevo usuario"
        action={() => goToPage("add-user")}
        buttonTittle={"Continuar"}
      />
    </div>
  );
};

export default HomeActionsContainer;
