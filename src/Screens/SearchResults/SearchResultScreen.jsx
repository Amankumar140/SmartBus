// src/screens/SearchResultsScreen.jsx
import React, { useState } from 'react'; // 1. Import useState
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { buses } from '../../Utils/DummyDataBus';
import BusCard from '../../Components/Buses/BusCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapViewComponent from '../../Components/Map/MapViewComponent';

const SearchResultsScreen = () => {
  // 2. Add state to track the selected bus. It's null initially.
  const [selectedBus, setSelectedBus] = useState(null);

  const availableBuses = buses.filter(bus => bus.type === 'available');
  const alternateBuses = buses.filter(bus => bus.type === 'alternate');

  // 3. This function will be called from the BusCard
  const handleBusSelect = bus => {
    console.log('Selected bus:', bus.busId);
    setSelectedBus(bus);
  };

  const openChatbotLink = () => {
    const chatbotUrl = 'https://google.com'; // <-- REPLACE WITH YOUR ACTUAL LINK
    Linking.openURL(chatbotUrl).catch(err =>
      console.error("Couldn't load page", err),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {selectedBus && <MapViewComponent selectedBus={selectedBus} />}

      <ScrollView>
        <Text style={styles.sectionTitle}>Available Buses</Text>
        {availableBuses.map(bus => (
          <BusCard key={bus.id} bus={bus} onPress={handleBusSelect} />
        ))}

        <Text style={styles.sectionTitle}>Alternate Buses</Text>
        {alternateBuses.map(bus => (
          <BusCard key={bus.id} bus={bus} onPress={handleBusSelect} />
        ))}
      </ScrollView>

      {/* 2. Add the Chatbot button here, after the ScrollView */}
      <TouchableOpacity
        style={styles.chatbotButton}
        onPress={openChatbotLink} // Use the new function here
      >
        <Image
          source={require('../../Assets/ChatBot/bot.png')} // Use your PNG image
          style={styles.chatbotIconImage}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F2F1',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  chatbotButton: {
    position: 'absolute',
    bottom: 100,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#FFFFFF', // Changed to white for better image visibility
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    zIndex: 10,
  },
  // New style for the Image component
  chatbotIconImage: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
  },
});

export default SearchResultsScreen;
