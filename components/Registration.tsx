import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Screens
const RegistrationAndProfileScreen = ({ navigation }: { navigation: any }) => {
  const features = [
    { id: 1, name: 'Register via Email', screen: 'RegisterEmailScreen' },
    { id: 2, name: 'Register via Phone', screen: 'RegisterPhoneScreen' },
    { id: 3, name: 'Register via Social Media', screen: 'RegisterSocialScreen' },
    { id: 4, name: 'Profile Setup', screen: 'ProfileSetupScreen' },
    { id: 5, name: 'Wishlist', screen: 'WishlistScreen' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Registration and Profile Management</Text>
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

// Feature 1: Register via Email
const RegisterEmailScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Register via Email</Text>
    <TextInput placeholder="Email" style={styles.input} />
    <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    <TouchableOpacity style={styles.submitButton}>
      <Text style={styles.submitButtonText}>Register</Text>
    </TouchableOpacity>
  </View>
);

// Feature 2: Register via Phone
const RegisterPhoneScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Register via Phone</Text>
    <TextInput placeholder="Phone Number" style={styles.input} />
    <TextInput placeholder="Password" secureTextEntry style={styles.input} />
    <TouchableOpacity style={styles.submitButton}>
      <Text style={styles.submitButtonText}>Register</Text>
    </TouchableOpacity>
  </View>
);

// Feature 3: Register via Social Media
const RegisterSocialScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Register via Social Media</Text>
    <Text style={styles.text}>Coming soon: Integration with social platforms like Google and Facebook.</Text>
  </View>
);

// Feature 4: Profile Setup
const ProfileSetupScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Profile Setup</Text>
    <TextInput placeholder="Name" style={styles.input} />
    <TextInput placeholder="Address" style={styles.input} />
    <TextInput placeholder="Payment Details" style={styles.input} />
    <TextInput placeholder="Preferences" style={styles.input} />
    <TouchableOpacity style={styles.submitButton}>
      <Text style={styles.submitButtonText}>Save Profile</Text>
    </TouchableOpacity>
  </View>
);

// Feature 5: Wishlist
const WishlistScreen = () => (
  <View style={styles.screenContainer}>
    <Text style={styles.screenTitle}>Wishlist</Text>
    <Text style={styles.text}>Your favorite items will appear here!</Text>
  </View>
);

// Navigation Setup
const Stack = createStackNavigator();

const App = () => {
  return (
    
      <Stack.Navigator initialRouteName="RegistrationAndProfileScreen">
        <Stack.Screen
          name="RegistrationAndProfileScreen"
          component={RegistrationAndProfileScreen}
          options={{ title: 'Registration & Profile Management' }}
        />
        <Stack.Screen name="RegisterEmailScreen" component={RegisterEmailScreen} />
        <Stack.Screen name="RegisterPhoneScreen" component={RegisterPhoneScreen} />
        <Stack.Screen name="RegisterSocialScreen" component={RegisterSocialScreen} />
        <Stack.Screen name="ProfileSetupScreen" component={ProfileSetupScreen} />
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
      </Stack.Navigator>
    
  );
};

export default App;

// Styles
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
    textAlign: 'center',
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
  screenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  screenTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#495057',
  },
  input: {
    width: '90%',
    height: 50,
    marginVertical: 10,
    paddingHorizontal: 10,
    borderColor: '#ced4da',
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  submitButton: {
    width: '90%',
    padding: 15,
    backgroundColor: '#28a745',
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  submitButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});
