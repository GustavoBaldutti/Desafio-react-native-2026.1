import { useContext } from "react";
import { AuthContext } from "../contextos/authcont";

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
