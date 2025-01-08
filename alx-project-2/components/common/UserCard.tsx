// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">{name}</h2>
      <p>Email: {email}</p>
      <p>
        Address: {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;

