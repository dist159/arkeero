"use client";
import { User } from "@/types/user";
import ListItem from "../list-item/list-item";
import { useRouter } from "next/navigation";
import { use, useCallback, useEffect } from "react";
import { useClients } from "@/providers/clients/clients.provider";
import Pagination from "../pagination/pagination";

type UserListProps = {
  readonly users: User[];
};

const UserList = (props: UserListProps) => {
  const { users } = props;
  const router = useRouter();
  const { toggleClientStatus } = useClients();

  const checkChange = useCallback((userId: string) => {
    toggleClientStatus(userId);
  }, []);

  const navigateTo = useCallback((userId: string) => {
    router.push(`add-user/${userId}`);
  }, []);

  return (
    <div>
      <table className="m-auto mt-5">
        <thead>
          <tr>
            <th className="border border-gray-300">Modificar Estado</th>
            <th className="border border-gray-300">Estado</th>
            <th className="border border-gray-300">Nombre</th>
            <th className="border border-gray-300">Descripcion</th>
            <th className="border border-gray-300">Tipo de cuenta</th>
            <th className="border border-gray-300">Accion</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <ListItem
              key={user.id}
              id={user.id}
              name={user.name}
              status={user.status}
              description={user.description}
              accountType={user.accountType}
              onCheckChange={checkChange}
              action={navigateTo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
