import { getUsers } from "@/api/users/users";
import UserList from "@/ui/components/user-list/user-list";
import UsersContainer from "@/ui/components/users-container/users-container";

const UsersPage = async () => {
  const user = await getUsers();

  return (
    <div>
      <div className="text-center text-2xl font-bold mt-3">
        Lista de clientes
      </div>
      <div className="m-auto">
        <UsersContainer users={user} />
      </div>
    </div>
  );
};

export default UsersPage;
