export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  label: string;
  onClick?: () => void;
}

// If there are other interfaces or code, just add this below or in the relevant place

export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

// interfaces/index.ts

export interface UserProps {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
  };
}

