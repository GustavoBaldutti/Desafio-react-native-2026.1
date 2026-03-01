import { Stack } from "expo-router";
import { AuthProvider } from "../contextos/authcont";

export default function rootlayout() {
  return (
    <AuthProvider> 
   <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="login" />
      <Stack.Screen name="modais"  />
      <Stack.Screen name="Navbar"  />
      <Stack.Screen name="pagInicial"  />
      <Stack.Screen name="contatos"  />
    </Stack>
     </AuthProvider>
  );
}
