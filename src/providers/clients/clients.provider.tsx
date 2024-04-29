"use client";
import { User } from "@/types/user";
import React, { ReactNode, createContext, useContext, useState } from "react";

const ClientsContext = createContext({
  clients: [] as User[],
  setClients: (clients: User[]) => {},
  addClient: (client: User) => {},
  editClient: (updatedClient: User) => {},
  toggleClientStatus: (clientId: string) => {},
});

export const useClients = () => useContext(ClientsContext);

export const ClientsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [clients, setClients] = useState<User[]>([]);

  const addClient = (client: User) => {
    setClients([...clients, client]);
  };

  const editClient = (updatedClient: User) => {
    setClients(
      clients.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );
  };

  const toggleClientStatus = (clientId: string) => {
    setClients((currentClients) =>
      currentClients.map((client) =>
        client.id === clientId
          ? {
              ...client,
              status: client.status === "active" ? "disabled" : "active",
            }
          : client
      )
    );
  };

  return (
    <ClientsContext.Provider
      value={{
        clients,
        setClients,
        addClient,
        editClient,
        toggleClientStatus,
      }}
    >
      {children}
    </ClientsContext.Provider>
  );
};
