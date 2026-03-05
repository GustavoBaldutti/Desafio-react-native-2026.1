import { Stack } from "expo-router";
import { AuthProvider } from "../contextos/authcont";

export default function rootlayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="login/index" />
        <Stack.Screen name="modais/criar" />
        <Stack.Screen name="modais/editar" />
        <Stack.Screen name="modais/deletar" />
        <Stack.Screen name="pagInicial/index" />
        <Stack.Screen name="contatos/index" />
      </Stack>
    </AuthProvider>
  );
}
