import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BuyersScreen = ({ navigation }: { navigation: any }) => {
  const features = [
    { id: 1, name: 'User Registration and Profile', screen: 'RegistrationScreen' },
    { id: 2, name: 'Product Search and Discovery', screen: 'SearchScreen' },
    { id: 3, name: 'Product Details', screen: 'DetailsScreen' },
    { id: 4, name: 'Cart and Checkout', screen: 'CartScreen' },
    { id: 5, name: 'Order Tracking', screen: 'TrackingScreen' },
    { id: 6, name: 'Ratings and Reviews', screen: 'ReviewsScreen' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buyer Features</Text>
      {features.map((feature) => (
        <TouchableOpacity
          key={feature.id}
          style={styles.button}
          onPress={() => navigation.navigate(feature.screen)}
        >
          <Text style={styles.buttonText}>{feature.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default BuyersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    width: '90%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#007bff',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
