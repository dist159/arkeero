"use client";
import { useState } from "react";

import { User } from "@/types/user";
import { useParams } from "next/navigation";
import ClientForm from "./client-form/client-form";

type ClientFormProps = {
  readonly submit?: (user: User) => void;
};

const UserForm = (props: ClientFormProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [clientOne, setClientOne] = useState<User | any>({});
  const params = useParams<{ id: string }>();

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };


  return (
    <div className="flex justify-center flex-col gap-10">
      <div className="m-auto mt-10">
        <button
          onClick={() => handleTabClick(0)}
          className={`mr-4 pb-2 ${
            activeTab === 0
              ? "border-b-2 border-arkeero-blue text-arkeero-blue"
              : "text-gray-500 hover:text-arkeero-blue"
          }`}
        >
          Cliente One Form
        </button>
        <button
          onClick={() => handleTabClick(1)}
          className={`mr-4 pb-2 ${
            activeTab === 1
              ? "border-b-2 border-arkeero-blue text-arkeero-blue"
              : "text-gray-500 hover:text-arkeero-blue"
          }`}
        >
          Cliente Two Form
        </button>
      </div>

      <div className="w-full md:w-[500px]  shadow-lg m-auto">
        {activeTab === 0 && (
          <ClientForm
            setClientOneData={setClientOne}
            clientId={params?.id ? params?.id[0] : ""}
          />
        )}
        {activeTab === 1 && <ClientForm clientOneData={clientOne} />}
      </div>
    </div>
  );
};

export default UserForm;
