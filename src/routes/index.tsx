import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Contatos from "../app/contatos";
import  LoginView  from "../app/login";
import Criar from "../app/modais/criar";
import Gerenciar from "../app/modais/editar";

type RootStackParamList = {
  Index: undefined;
  Criar: undefined;
  Contatos: undefined;
  Gerenciar: undefined;
  Login: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginView} />
      <Stack.Screen name="Criar" component={Criar} />
      <Stack.Screen name="Contatos" component={Contatos} />
      <Stack.Screen name="Gerenciar" component={Gerenciar} />
    </Stack.Navigator>
  );
}
