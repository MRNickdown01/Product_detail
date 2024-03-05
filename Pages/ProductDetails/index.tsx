import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { ApiResponse, products } from "../../types";
import ProductCard from "../../Component/ProductCard";

const ProductDetails = ({ navigation }: any) => {
  const [isLoading, setIsLoading] = useState(false);
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

  // call first api all product getting //
  const ShowProductDetail = () => {
    setIsLoading(true);
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data: ApiResponse) => setisProductDetail(data.products))
      .catch((err) => console.log(err || "Error fatching product"))
      .finally(() => {
        setIsLoading(false);
      });
  };

  console.log(isProductDetail);

  return (
    <View style={styles.container}>
      <ScrollView>
        {!isLoading ? (
          <FlatList
            data={isProductDetail}
            renderItem={({ item }) => (
              <ProductCard product={item} onPress={() => navigate(item)} />
            )}
            keyExtractor={(item) => item.id.toLocaleString()}
          />
        ) : (
          <View style={styles.Loading}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        )}
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
  Loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductDetails;
