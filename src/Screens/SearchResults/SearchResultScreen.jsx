// src/screens/SearchResultsScreen.jsx
import React, { useState } from 'react'; // 1. Import useState
import { StyleSheet, View, Text, ScrollView, StatusBar } from 'react-native';
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* 4. Conditionally render the map. It only shows if 'selectedBus' is not null. */}
      {selectedBus && <MapViewComponent selectedBus={selectedBus} />}

      <ScrollView>
        <Text style={styles.sectionTitle}>Available Buses</Text>
        {availableBuses.map(bus => (
          // 5. Pass the handleBusSelect function to each card
          <BusCard key={bus.id} bus={bus} onPress={handleBusSelect} />
        ))}

        <Text style={styles.sectionTitle}>Alternate Buses</Text>
        {alternateBuses.map(bus => (
          <BusCard key={bus.id} bus={bus} onPress={handleBusSelect} />
        ))}
      </ScrollView>
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
});

export default SearchResultsScreen;
