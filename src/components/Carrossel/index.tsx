import { ScrollView } from "react-native";
import { Card } from "../Card";

interface dataprops {
  id: number;
  title: string;
  description: string;
  price: number;
  type: string;
  image: string;
  isFeatured: boolean;
  created_at: string;
  updated_at: string;
}
interface CarrosselProps {
  data: dataprops[];
}

export default function Carrossel({ data }: CarrosselProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 10, gap: 20 }}
      decelerationRate="fast"
    >
      {data.map((item) => (
        <Card
          key={item.id.toString()}
          imageSource={item.image}
          price={item.price}
          title={item.title}
        />
      ))}
    </ScrollView>
  );
}
