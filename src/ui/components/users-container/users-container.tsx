"use client";
import { User } from "@/types/user";
import FormInput from "@/ui/shared/form-input/form-input";
import UserList from "../user-list/user-list";
import Pagination from "../pagination/pagination";
import { useClients } from "@/providers/clients/clients.provider";
import { useEffect, useState } from "react";

type UsersContainerProps = {
  readonly users: User[];
};

const UsersContainer = (props: UsersContainerProps) => {
  const { users } = props;
  const { clients, setClients } = useClients();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [pageSize, setPageSize] = useState(3);

  useEffect(() => {
    goToNextpage(0);
  }, []);

  const goToNextpage = (currentPage: number) => {
    const newIndex = currentPage * pageSize;
    setCurrentIndex(newIndex);
    setClients(users.slice(newIndex, newIndex + pageSize));
  };

  const search = (name: string) => {
    if (name.length !== 0) {
      const results = users.filter((user) =>
        user.name.includes(name)
      ) as unknown as User[];
      setClients(results);
    } else {
      goToNextpage(0);
    }
  };

  return (
    <div>
      <div className="w-full md:w-[800px] lg:w-[800px] m-auto shadow p-3">
        <FormInput
          onChange={(e) => search(e.target.value)}
          title="Buscar por nombre"
          placeholder="Nombre"
          name="search-input"
        />
        <UserList users={clients} />
        <Pagination
          currentPage={Math.round(currentIndex / 3)}
          total={users.length}
          goToPage={goToNextpage}
          size={pageSize}
        />
      </div>
    </div>
  );
};

export default UsersContainer;
