import { router } from "expo-router";
import { createContext, PropsWithChildren, useState } from "react";

type AuthProp = {
    logado:boolean
    login:() =>void
    logout:() =>void
};

export const AuthContext = createContext<AuthProp>({} as AuthProp);

export function AuthProvider({ children }: PropsWithChildren) {
    const [logado,setLogado] = useState(false); // criando variaveis
  function login() {
    setLogado(true);
    router.replace("/");
  }
  function logout() {
    setLogado(false);
    router.replace("/login");
  }
  return <AuthContext.Provider value={{logado,login,logout}}>{children}</AuthContext.Provider>; //contexto de autentificação
}
