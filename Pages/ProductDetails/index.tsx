import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import { ApiResponse, products } from "../../types";
import ProductCard from "../../Component/ProductCard";

const ProductDetails = ({ navigation }: any) => {
  const [isProductDetail, setisProductDetail] = useState<
    ApiResponse["products"]
  >([]);
  useEffect(() => {
    ShowProductDetail();
  }, []);

  const navigate = (itemId: products) => {
    navigation.navigate("viewDetail", {
      itemId: itemId.id,
    });
  };

  const ShowProductDetail = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data: ApiResponse) => setisProductDetail(data.products))
      .catch((err) => console.log(err || "Error fatching product"));
  };

  console.log(isProductDetail);

  return (
    <View style={styles.container}>
      <ScrollView>
        <FlatList
          data={isProductDetail}
          renderItem={({ item }) => (
            <ProductCard product={item} onPress={() => navigate(item)} />
          )}
          keyExtractor={(item) => item.id.toLocaleString()}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    padding: 16,
  },
});

export default ProductDetails;
