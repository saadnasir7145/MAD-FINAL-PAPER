import { Image, StyleSheet, Platform } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '@/components/MainScree';
import BuyersScreen from '@/components/BuyersScreen';
import SellerScreen from '@/components/SellerScreen';
import RegistrationAndProfileScreen from '@/components/Registration';
import ProductSearchAndDiscoveryScreen from '@/components/ProductSearch';
import ProductDetailsPage from '@/components/ProfileDetails';

const Stack = createStackNavigator();
export default function HomeScreen() {
  return (
    
    <Stack.Navigator initialRouteName="MainScreen">
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="BuyersScreen" component={BuyersScreen} />
      <Stack.Screen name="SellerScreen" component={SellerScreen} />
      <Stack.Screen name="RegistrationScreen" component={RegistrationAndProfileScreen} />
      <Stack.Screen name="SearchScreen" component={ProductSearchAndDiscoveryScreen} />
      <Stack.Screen name="DetailsScreen" component={ProductDetailsPage} />
      
      {/* <Stack.Screen name="RegisterEmailScreen" component={RegisterEmailScreen} />
        <Stack.Screen name="RegisterPhoneScreen" component={RegisterPhoneScreen} />
        <Stack.Screen name="RegisterSocialScreen" component={RegisterSocialScreen} />
        <Stack.Screen name="ProfileSetupScreen" component={ProfileSetupScreen} />
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} /> */}
      
      </Stack.Navigator>
  
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
