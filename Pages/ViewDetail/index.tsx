import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { ApiResponse, products } from "../../types";

const ViewDetail = () => {
  const [viewProduct, setViewProduct] = useState<products>();
  const route = useRoute();
  const { itemId }: any = route.params;

  useEffect(() => {
    ShowProductDetail();
  }, []);
  const ShowProductDetail = () => {
    fetch(`https://dummyjson.com/products/${itemId}`)
      .then((response) => response.json())
      .then((data) => setViewProduct(data))
      .catch((err) => console.log(err || "Error fatching product"));
  };
  console.log(viewProduct);
  return (
    <View>
      {/* <Image></Image> */}
      <Text>hello</Text>
    </View>
  );
};

export default ViewDetail;
