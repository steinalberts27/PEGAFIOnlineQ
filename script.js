// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "your-project-id.firebaseapp.com",
  databaseURL: "https://your-project-id.firebaseio.com",
  projectId: "your-project-id",
  storageBucket: "your-project-id.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the Firebase database
const database = firebase.database();

// Example of storing data in Firebase
const dataToStore = {
  key1: 'value1',
  key2: 'value2'
};

// Push data to Firebase (creates a new unique key)
database.ref('data').push(dataToStore);

// Read data from Firebase
database.ref('data').once('value').then(snapshot => {
  const retrievedData = snapshot.val();
  console.log('Data retrieved from Firebase:', retrievedData);
});

