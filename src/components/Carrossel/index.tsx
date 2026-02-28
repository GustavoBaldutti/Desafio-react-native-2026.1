import { FlatList, ImageSourcePropType, View } from "react-native";
import { Card } from "../Card";

interface dataprops {
  id: number;
  titulo: string;
  price: string;
  imagem: ImageSourcePropType;
}
interface CarrosselProps {
  data: dataprops[];
}

export default function Carrossel({ data }: CarrosselProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Card imageSource={item.imagem} price={item.price} title={item.titulo} />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10, gap: 20 }} 
      snapToAlignment="center" 
      decelerationRate="fast"
    />
  );
}