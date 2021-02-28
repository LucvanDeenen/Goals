// Base imports
import { View } from 'react-native';
import React from 'react';

// Views
import Home from './views/homeScreen/Home';

// Styling
import styles from './views/globalStyle';

// Application
export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}
