import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ImageBackground,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import StatusTopBar from '../Components/StatusTopBar';
import {COLOR} from '../constants/colorConstants';
const {width, height} = Dimensions.get('window');

const PrimaryAddress = (props) => {
  const navigation = props.navigation;

  return (
    <SafeAreaView>
      <StatusTopBar />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.hearding}>
            <TouchableOpacity>
              <Image
                style={styles.heardingArrowImg}
                source={require('../assets/icons/left-arrow.png')}
              />
            </TouchableOpacity>
            <Text style={styles.heardingTxt}>Primary Address</Text>
          </View>
          <View style={styles.SubHearding}>
            <View>
              <TextInput
                  style={styles.input}
                  placeholder="Address Line 1"
                  placeholderTextColor={COLOR.GRAY}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Address Line 2"
                  placeholderTextColor={COLOR.GRAY}
                  keyboardType='phone-pad'
                />
                <TextInput
                  style={styles.input}
                  placeholder="PinCode"
                  placeholderTextColor={COLOR.GRAY}
                />
                <TextInput
                  style={styles.input}
                  placeholder="City"
                  placeholderTextColor={COLOR.GRAY}
                />
                <TextInput
                  style={styles.input}
                  placeholder="State"
                  placeholderTextColor={COLOR.GRAY}
                  keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Country"
                  placeholderTextColor={COLOR.GRAY}
                  keyboardType="email-address"
                />
            </View>
          </View>
          
          <View style={{flexDirection:'row',justifyContent:'space-evenly'}}>
              <View style={styles.butttons}>
            <TouchableOpacity onPress={()=>navigation.navigate('BasicHelthDetails')}>
                <Text style={styles.loginbtn}>Continue</Text>
            </TouchableOpacity>
              </View>
              <View style={styles.butttons}>
            <TouchableOpacity>
                <Text style={styles.loginbtn}>Cancel</Text>
            </TouchableOpacity>
              </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrimaryAddress;
const styles = StyleSheet.create({
  container: {
    margin: width * 0.04,
  },
  hearding: {
    marginVertical: width * 0.01,
    flexDirection: 'row',
  },
  heardingTxt: {
    fontSize: width * 0.055,
    fontWeight: 'bold',
  },
  heardingArrowImg: {
    height: height * 0.04,
    width: width * 0.08,
    marginRight: width * 0.06,
  },
  SubHearding: {
    marginVertical: width * 0.02,
  },
  SubHeardingTxt: {
    fontSize: width * 0.05,
    fontWeight: '700',
  },
  butttons:{
      width:width*0.3
  },
  input: {
    backgroundColor: COLOR.WHITE,
    padding: width * 0.04,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.015,
    fontSize: width * 0.04,
     elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
 
  loginbtn: {
    color: COLOR.WHITE,
    backgroundColor: COLOR.BUTTON,
    paddingVertical: height * 0.02,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: '500',
    fontSize: width * 0.050,
    borderColor: '#9B333B',
    // marginTop: height * 0.05,
  },
});
