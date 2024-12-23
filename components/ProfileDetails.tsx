import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Image,
} from 'react-native';

// Sample product details data
const sampleProduct = {
  id: 1,
  name: 'High-Performance Laptop',
  image: 'https://via.placeholder.com/300', // Replace with a real URL
  description: 'This is a high-performance laptop suitable for gaming and productivity.',
  specifications: {
    Processor: 'Intel Core i7',
    RAM: '16GB',
    Storage: '512GB SSD',
    Display: '15.6-inch FHD',
  },
  price: '$1,299.99',
  seller: {
    name: 'TechStore',
    rating: 4.8,
    contact: 'techstore@example.com',
  },
};

const ProductDetailsPage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{sampleProduct.name}</Text>

      {/* Product Image */}
      <Image source={{ uri: sampleProduct.image }} style={styles.productImage} />

      {/* Product Description */}
      <Text style={styles.sectionTitle}>Description</Text>
      <Text style={styles.description}>{sampleProduct.description}</Text>

      {/* Specifications */}
      <Text style={styles.sectionTitle}>Specifications</Text>
      {Object.entries(sampleProduct.specifications).map(([key, value]) => (
        <Text key={key} style={styles.specification}>
          <Text style={styles.specKey}>{key}:</Text> {value}
        </Text>
      ))}

      {/* Pricing */}
      <Text style={styles.sectionTitle}>Price</Text>
      <Text style={styles.price}>{sampleProduct.price}</Text>

      {/* Seller Information */}
      <Text style={styles.sectionTitle}>Seller Information</Text>
      <Text style={styles.sellerInfo}>
        <Text style={styles.specKey}>Name:</Text> {sampleProduct.seller.name}
      </Text>
      <Text style={styles.sellerInfo}>
        <Text style={styles.specKey}>Rating:</Text> {sampleProduct.seller.rating} ★
      </Text>
      <Text style={styles.sellerInfo}>
        <Text style={styles.specKey}>Contact:</Text> {sampleProduct.seller.contact}
      </Text>

      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f8f8',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  productImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  specification: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 8,
  },
  specKey: {
    fontWeight: 'bold',
  },
  price: {
    fontSize: 24,
    color: '#007bff',
    fontWeight: 'bold',
    marginTop: 8,
  },
  sellerInfo: {
    fontSize: 16,
    marginTop: 4,
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ProductDetailsPage;
