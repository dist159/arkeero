import HomeActionsContainer from "@/ui/components/home-actions-container/home-actions-container";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-0 md:p-24 lg:p-24">
      <div className="text-center p-8 w-full sm:w-full md:w-[500px]  lg:w-[500px] shadow mb-5">
        Bienvenido por favor selecciona una opcion a continuacion, si deseas ver
        la lista de clientes o deseas agregar un nuevo cliente. Cualquier duda
        que tengas no dudes en contactar a nuestro equipo de soporte
      </div>
      <HomeActionsContainer />
    </main>
  );
}
