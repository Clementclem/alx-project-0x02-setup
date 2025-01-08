import React from "react";
import { PostProps } from "@/interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="border p-4 m-2 rounded-md shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <p className="text-sm text-gray-400">User ID: {userId}</p>
    </div>
  );
};

export default PostCard;
