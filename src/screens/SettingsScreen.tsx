import React from 'react';
import { Text, StyleSheet, SafeAreaView } from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Acesta este Settings Screen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default SettingsScreen;
