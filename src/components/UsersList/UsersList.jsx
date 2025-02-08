import React, { useState } from "react";
import { ListBox } from "primereact/listbox";

export default function UsersList() {
  const [selectedUser, setSelectedUser] = useState(null);
  const users = [
    { name: "New York", code: "NY" },
    { name: "Rome", code: "RM" },
    { name: "London", code: "LDN" },
    { name: "Istanbul", code: "IST" },
    { name: "Paris", code: "PRS" },
  ];

  return (
    <div>
      <ListBox
        filter
        value={selectedUser}
        onChange={(e) => setSelectedUser(e.value)}
        options={users}
        optionLabel="name"
      />
    </div>
  );
}
