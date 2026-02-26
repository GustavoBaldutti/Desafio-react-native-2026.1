import { useState } from 'react';
import { Menu } from "./pagInicial/menu";

export default function SplashScreen() {
  const [menuVisible, setMenuVisible] = useState(true);

  return (
    <Menu 
      visible={menuVisible} 
      onClose={() => setMenuVisible(false)} 
    />
  );
}
