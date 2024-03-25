import { jsx } from "@emotion/react";
import { Navigate } from "react-router-dom";

export interface Props {
  children: React.ReactNode;
  isAuthenticated: boolean;
}

const Protected = ({ children, isAuthenticated }: Props) => {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

export default Protected;
