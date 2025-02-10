import React, { useState } from 'react';
import { View, Button, Image, Alert, ScrollView, StyleSheet } from 'react-native';
import DocumentScanner from 'react-native-document-scanner-plugin';

const DocumentScannerComponent: React.FC = () => {
  const [scannedImages, setScannedImages] = useState<string[]>([]);

  const scanDocument = async () => {
    try {
      const { scannedImages: newScannedImages } = await DocumentScanner.scanDocument();
      if (scannedImages && scannedImages.length > 0) {
        if (newScannedImages) {
          setScannedImages(prevImages => [...prevImages, ...newScannedImages]); // Adaugă noile imagini scanate la listă
        } else {
          Alert.alert('Scanare anulată', 'Nu s-a detectat niciun document.');
        }
      } else {
        Alert.alert('Scanare anulată', 'Nu s-a detectat niciun document.');
      }
    } catch (error) {
      Alert.alert('Eroare la scanare', (error as any)?.message || 'A apărut o eroare.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Scanează documente" onPress={scanDocument} />
      <ScrollView contentContainerStyle={styles.imageContainer}>
        {scannedImages.map((imageUri, index) => (
          <Image key={index} source={{ uri: imageUri }} style={styles.scannedImage} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 10,
  },
  imageContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  scannedImage: {
    width: 300,
    height: 400,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#000',
    marginBottom: 10,
  },
});

export default DocumentScannerComponent;
