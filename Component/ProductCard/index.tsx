import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { products } from "../../types";

const ProductCard: React.FC<{ product: products; onPress: () => void }> = ({
  product,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.card, styles.shadowProp]}
      onPress={onPress}
    >
      <View>
        <Image source={{ uri: product.thumbnail }} style={styles.image} />
      </View>
      <View>
        <Text style={styles.heading}>{product?.brand}</Text>
        <Text>Price: {product?.price}</Text>
        <Text>Availabe: {product?.stock}</Text>

        {product?.rating !== undefined && (
          <View style={styles.rating}>
            <Text> Rate: {product?.rating}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 13,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 25,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    marginBottom: 16,
    gap: 16,
  },
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
export default ProductCard;
