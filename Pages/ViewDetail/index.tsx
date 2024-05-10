import { useRoute } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  ActivityIndicator,
  Button,
} from "react-native";
import { products } from "../../types";
import Carousel from "react-native-snap-carousel";
const SLIDER_WIDTH = 330;
const ITEM_WIDTH = 300;

const ViewDetail = ({ navigation }: any) => {
  const [viewProduct, setViewProduct]: any = useState(null);
  const isCarousel = useRef(null);
  const route = useRoute();
  const [isLoading, setIsLoading] = useState(false);
  const { itemId }: any = route.params; // Destructure itemId directly

  useEffect(() => {
    ShowProductDetail();
  }, []);
  // call second api get only one product show
  const ShowProductDetail = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`https://dummyjson.com/products/${itemId}`);
      const data = await response.json();
      setViewProduct(data);
    } catch (err) {
      console.log(err || "Error fetching product");
    } finally {
      setIsLoading(false);
    }
  };
  console.log(viewProduct);

  const CarouselCardItem = ({ item }: any) => (
    <View style={styles.cardContainer}>
      <Image source={{ uri: item }} style={styles.image} />
    </View>
  );

  const navigate = () => {
    navigation.navigate("device");
  };

  return (
    <View style={styles.container}>
      <Button title="click" onPress={() => navigate()} />
      {!isLoading ? (
        <View style={{ height: "auto" }}>
          {viewProduct && (
            <Carousel
              layout="stack"
              sliderWidth={SLIDER_WIDTH}
              itemWidth={ITEM_WIDTH}
              ref={isCarousel}
              data={viewProduct?.images}
              renderItem={CarouselCardItem}
            />
          )}
          <View style={styles.details}>
            <Text style={styles.heading}>{viewProduct?.title}</Text>
            <Text>Product: {viewProduct?.brand}</Text>
            <Text>Detail: {viewProduct?.description}</Text>
            <Text>Discount: {viewProduct?.discountPercentage}</Text>
            <Text>Price: {viewProduct?.price}</Text>
            <Text>Available: {viewProduct?.stock}</Text>
            <Text>Rating: {viewProduct?.rating}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.Loading}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cardContainer: {
    height: 350,
    maxWidth: "100%",
    backgroundColor: "lightgray",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    flex: 1,
    borderRadius: 10,
    height: 200,
  },
  heading: {
    fontSize: 24,
    textAlign: "center",
  },
  details: {
    marginTop: 20,
  },
  Loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ViewDetail;
