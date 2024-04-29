import React, { ChangeEvent } from "react";
import Button from "@/ui/shared/button/button";

type ListItemProps = {
  readonly id: string;
  readonly name: string;
  readonly status: string;
  readonly description: string;
  readonly accountType: string;
  readonly action: (userId: string) => void;
  readonly onCheckChange: (userId: string) => void;
};

const ListItem = (props: ListItemProps) => {
  const { name, status, description, accountType, action, onCheckChange, id } =
    props;

  return (
    <tr>
      <td className="p-3">
        <input
          type="checkbox"
          className="form-checkbox h-5 w-5 text-blue-600"
          checked={status === "active"}
          onChange={() => onCheckChange(id)}
          name={`${id}-checkbox`}
        />
      </td>
      <td className="p-3">{status}</td>
      <td className="p-3">{name}</td>
      <td className="p-3">{description}</td>
      <td className="p-3">{accountType}</td>
      <td className="p-3">
        <Button onClick={() => action(id)}>Editar</Button>
      </td>
    </tr>
  );
};

ListItem.displayName = "ListItem";

export default React.memo(ListItem);
