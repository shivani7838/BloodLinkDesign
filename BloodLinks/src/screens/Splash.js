import React, {useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import {Dimensions} from 'react-native';
// import {COLOR} from '../constants/colorConstants';
import StatusTopBar from '../Components/StatusTopBar';
const {width, height} = Dimensions.get('window');
const Splash = props => {
  const navigation = props.navigation;
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("Slider")
    }, 2000);
    // return () => clearTimeout(timer);
  },);
  return (
    <SafeAreaView>
      <StatusTopBar />
      <View style={styles.container}>
        <Image
          source={require('../assets/Images/splash.png')}
          style={styles.image}
        />
      </View>
      {/* <Button
        title="Go to LoginScreen"
        onPress={() => navigation.navigate('Slider')}
      /> */}
    </SafeAreaView>
  );
};
export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: height * 1,
    width: width * 1,
  },
});

