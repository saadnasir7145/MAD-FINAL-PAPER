import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const ProductSearchAndDiscoveryScreen = ({ navigation }: { navigation: any }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categories] = useState([
    'Electronics',
    'Clothing',
    'Home & Kitchen',
    'Books',
    'Sports',
  ]);
  const [filters] = useState([
    'Price: Low to High',
    'Price: High to Low',
    'Location: Nearby',
    'Top Ratings',
  ]);
  const [recommendations] = useState([
    'Laptop Deals',
    'Best-Selling Novels',
    'Sports Gear Discounts',
  ]);
  const [products] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics' },
    { id: 2, name: 'T-Shirt', category: 'Clothing' },
    { id: 3, name: 'Microwave', category: 'Home & Kitchen' },
    { id: 4, name: 'Novel', category: 'Books' },
    { id: 5, name: 'Football', category: 'Sports' },
  ]);
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = () => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(results);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Search and Discovery</Text>

      {/* Search Bar */}
      <TextInput
        style={styles.searchBar}
        placeholder="Search for products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
        <Text style={styles.searchButtonText}>Search</Text>
      </TouchableOpacity>

      {/* Categories */}
      <Text style={styles.sectionTitle}>Categories</Text>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryButtonText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Filters */}
      <Text style={styles.sectionTitle}>Filters</Text>
      <FlatList
        data={filters}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.filterButton}>
            <Text style={styles.filterButtonText}>{item}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Personalized Recommendations */}
      <Text style={styles.sectionTitle}>Personalized Recommendations</Text>
      <FlatList
        data={recommendations}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Text style={styles.recommendationItem}>{item}</Text>
        )}
      />

      {/* Search Results */}
      <Text style={styles.sectionTitle}>Search Results</Text>
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={styles.productItem}>{item.name}</Text>
        )}
        ListEmptyComponent={
          <Text style={styles.noResultsText}>No products found.</Text>
        }
      />
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
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  searchButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
  },
  categoryButton: {
    backgroundColor: '#eee',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  categoryButtonText: {
    fontSize: 14,
  },
  filterButton: {
    backgroundColor: '#ddd',
    padding: 8,
    borderRadius: 8,
    marginRight: 8,
  },
  filterButtonText: {
    fontSize: 14,
  },
  recommendationItem: {
    fontSize: 16,
    marginBottom: 8,
  },
  productItem: {
    fontSize: 16,
    marginBottom: 8,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  noResultsText: {
    fontSize: 16,
    color: '#777',
    textAlign: 'center',
    marginTop: 16,
  },
});

export default ProductSearchAndDiscoveryScreen;
