import * as firebase from 'firebase';
import 'firebase/firestore';

// Config for app
const firebaseConfig = {
  apiKey: "AIzaSyDSLiFD6g0s27QOb8A1fOEc5xXuAN5-4p0",
  projectId: 'sport-app-2e453',
  messagingSenderId: '975692550087'
};

// Check if app is already initialized
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

// Functions
export default Firebase = {
  getExercisesAll: () => {
    return firebase.firestore().collection('Exercises').get();
  },

  getExercises: () => {
    return firebase.firestore().collection('Exercises').doc('trainingset1').get();
  },
}