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

const BecomeDonor1 = () => {
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
            <Text style={styles.heardingTxt}>Become Donor</Text>
          </View>
          <View style={styles.SubHearding}>
            <View>
              <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor={COLOR.GRAY}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  placeholderTextColor={COLOR.GRAY}
                  keyboardType='phone-pad'
                />
                <TextInput
                  style={styles.input}
                  placeholder="Age"
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
                  multiline={true}
                  numberOfLines={4}
                  placeholder="Address"
                  placeholderTextColor={COLOR.GRAY}
                  keyboardType="email-address"
                />
            </View>
          </View>
          
          <View style={styles.btns}>
            <TouchableOpacity>
              <View style={styles.butttons}>
                <Text style={styles.loginbtn}>SUBMIT</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BecomeDonor1;
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
  input: {
    backgroundColor: COLOR.DROPDOWNBG,
    padding: width * 0.04,
    borderRadius: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.015,
    fontSize: width * 0.04,
    
  },
 
  loginbtn: {
    color: COLOR.WHITE,
    backgroundColor: COLOR.BUTTON,
    paddingVertical: height * 0.02,
    textAlign: 'center',
    borderRadius: 50,
    fontWeight: '500',
    fontSize: width * 0.050,
    borderColor: '#9B333B',
    // marginTop: height * 0.05,
  },
});
