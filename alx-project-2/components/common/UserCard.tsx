// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-sm">{email}</p>
      <p className="text-sm">{address}</p>
    </div>
  );
};

export default UserCard;
