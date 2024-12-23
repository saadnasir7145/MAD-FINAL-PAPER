import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SellerScreen = ({ navigation }: { navigation: any }) => {
  const features = [
    { id: 1, name: 'Seller Registration and Dashboard', screen: 'DashboardScreen' },
    { id: 2, name: 'Product Listing and Management', screen: 'ListingScreen' },
    { id: 3, name: 'Order Management', screen: 'OrderScreen' },
    { id: 4, name: 'Earnings and Payouts', screen: 'EarningsScreen' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seller Features</Text>
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

export default SellerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#343a40',
  },
  button: {
    width: '90%',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#28a745',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
