import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  AppRegistry,
  Dimensions,
  ImageBackground,
} from 'react-native';
import {COLOR} from '../constants/colorConstants';
import StatusTopBar from '../Components/StatusTopBar';

const {width, height} = Dimensions.get('window');
const Slider = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Slider 1 */}
        {/* <ImageBackground
          source={require('../assets/Images/slider1.png')}
          style={styles.image}>
          <View style={styles.setmargin}>
            <View style={styles.imgTxt}>
              <Text style={styles.Txt}>Donate Blood</Text>
              <Text style={[styles.Txt,{fontWeight:'400',
            fontSize:width*0.05}]}>
                Donate Blood - Help Building Community
              </Text>
            </View>
          </View>
        </ImageBackground> */}
        {/* Slider 2 */}
        {/* <ImageBackground
          source={require('../assets/Images/slider2.png')}
          style={styles.image}>
          <View style={styles.setmargin}>
            <View style={styles.imgTxt}>
              <Text style={styles.Txt}>Ralse Request</Text>
              <Text style={[styles.Txt,{fontWeight:'400',
            fontSize:width*0.05}]}>
               Building Nation
              </Text>
            </View>
          </View>
        </ImageBackground> */}
        {/* Slider 3 */}
        {/* <ImageBackground
          source={require('../assets/Images/slider3.png')}
          style={styles.image}>
          <View style={styles.setmargin}>
            <View style={styles.imgTxt}>
              <Text style={styles.Txt}>Discover Products</Text>
              <Text style={[styles.Txt,{fontWeight:'400',
            fontSize:width*0.05}]}>
                Automated WorkFlows
              </Text>
            </View>
          </View>
        </ImageBackground> */}
        {/* Slider 4 */}
        <ImageBackground
          source={require('../assets/Images/slider4.png')}
          style={styles.image}>
          <View style={styles.setmargin}>
            <View style={styles.imgTxt}>
              <Text style={styles.Txt}>Security and Privacy</Text>
              <Text style={[styles.Txt,{fontWeight:'400',
            fontSize:width*0.05}]}>
               Adherence to health and data 
              </Text>
              <Text style={[styles.Txt,{fontWeight:'400',
            fontSize:width*0.05, marginTop:0,}]}>Privacy standards</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Slider;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    height: height * 1,
    width: width * 1,
  },
  setmargin: {
    top: width * 1.18,
  },
  imgTxt: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Txt: {
    color: COLOR.WHITE,
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginTop: height * 0.025,
  },
});
