
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vishal Krishna Kumar</Text>
      <Text style={styles.text}>MSCS</Text>
      <Text style={styles.text}>City University of Seattle</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    marginVertical: 4,
  },
});

export default App;
