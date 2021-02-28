// Base imports
import React , { useEffect } from 'react';
import { View } from 'react-native';

// Libraries
import { Text } from 'react-native-elements';

// Styling
import globalStyle from '../globalStyle';
import styles from './style';

// Database
import firebase from '../../components/firebase';

// Application
const Home = () => {
    // View
    return (
        <View style={globalStyle.container}>
            <Text> Welcome to the application
                feel free to do stuff here! </Text>
        </View>
    );
}

export default Home;