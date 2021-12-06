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
  Pressable,
} from 'react-native';
import StatusTopBar from '../Components/StatusTopBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLOR} from '../constants/colorConstants';
const {width, height} = Dimensions.get('window');

const SignUp = (props) => {
  const navigation = props.navigation;
  return (
    <>
      <StatusTopBar />
      <SafeAreaView style={styles.container}>
        <View>
          <ScrollView>
            <ImageBackground
              style={styles.loginbg}
              source={require('../assets/Images/loginBG.png')}>
              <View style={styles.loginTopimg}>
                <Image
                  style={styles.loginTopimgs}
                  source={require('../assets/Images/loginTopImage.png')}
                />
              </View>

              <View style={styles.loginBtmimg}>
                <Image
                  style={styles.loginbtmimgs}
                  source={require('../assets/Images/loginBtmImage.png')}
                />

                <KeyboardAwareScrollView style={styles.forms}>
                  <View style={styles.loginTitle}>
                    <Text style={styles.loginTitle}>welcome to bloodlinks</Text>
                  </View>
                  <View style={{alignItems: 'center'}}>
                    <View>
                      <TextInput
                        style={styles.input}
                        placeholder="Name"
                        placeholderTextColor="#6B6B6B"
                        // keyboardType="email-address"
                        inlineImageLeft="../assets/icons/name.png"
                      />
                      {/* <Image source={require('../assets/icons/name.png')}/> */}
                    </View>

                    <TextInput
                      style={styles.input}
                      placeholder="Email"
                      placeholderTextColor="#6B6B6B"
                      keyboardType="email-address"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Phone"
                      placeholderTextColor="#6B6B6B"
                      keyboardType="phone-pad"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Password"
                      placeholderTextColor="#6B6B6B"
                      keyboardType="visible-password"
                    />
                    <TextInput
                      style={styles.input}
                      placeholder="Confirm Password"
                      placeholderTextColor="#6B6B6B"
                      keyboardType="visible-password"
                    />
                  </View>
                  <View style={styles.btns}>
                  <TouchableOpacity onPress={()  => navigation.navigate("Home")}>
                      <View style={styles.butttons}>
                        <Text style={styles.loginbtn}>Signup</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', margin: 13}}>
                    <Text style={{fontSize: 15, fontWeight: '500'}}>
                      Allready have an account{'  '}
                    </Text>
                    <TouchableOpacity
                      onPress={() => (navigation.navigate('Login'))}>
                      <Text
                        style={{
                          textDecorationLine: 'underline',
                          fontSize: 15,
                          fontWeight: '500',
                        }}>
                        Login
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/* <View style={styles.googlebtns}>
                    <View style={styles.gimgs}>
                      <Image
                        style={styles.gimg}
                        source={require('../assets/icons/google-symbol.png')}
                      />
                    </View>
                    <View style={styles.gbtns}>
                      <Text style={styles.gbtn}>Google</Text>
                    </View>
                  </View> */}
                </KeyboardAwareScrollView>
              </View>
            </ImageBackground>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    //   flex: 1,
    //   height: height * 0.9,
  },
  loginbg: {
    // justifyContent:'center',
    //   height: height * 1,
  },
  loginTopimg: {
    justifyContent: 'center',
    height: height * 0.35,
    width: width * 0.4,
    paddingHorizontal: width * 0.1,
    marginTop: height * 0.04,
  },
  loginTopimgs: {
    height: height * 0.45,
    width: width * 0.8,
  },
  loginBtmimg: {
    // height: height * 0.15,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  loginbtmimgs: {
    //   paddingBottom: 70,
    height: height * 0.7,
    width: width * 1,
  },
  forms: {
    marginTop: height * 0.06,
    position: 'absolute',
  },
  loginTitle: {
    // marginTop: height*0.02,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: width * 0.06,
    letterSpacing: 1,
    paddingVertical: height * 0.008,
  },
  input: {
    height: height * 0.06,
    width: width * 0.75,
    marginVertical: 8,
    borderWidth: 0.01,
    padding: width * 0.03,
    borderRadius: 10,
    fontSize: width * 0.04,
    // paddingLeft:0.07,
    //   textAlign: 'center',
    fontWeight: '400',
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    elevation: 2,
  },
  btns: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  butttons: {},
  loginbtn: {
    color: COLOR.WHITE,
    backgroundColor: '#85060F',
    paddingVertical: height * 0.012,
    width: width * 0.75,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: '500',
    fontSize: width * 0.039,
    // elevation:10,
    borderWidth: 2,
    borderColor: '#9B333B',
    marginTop: 10,
  },
  googlebtns: {
    height: 55,
    marginVertical: 12,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: COLOR.GRAY,
  },
  gbtns: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  gbtn: {
    fontSize: width * 0.048,
    textAlign: 'center',
    fontWeight: '400',
    // textAlign:'center',
    bottom: width * 0.02,
  },
  gimgs: {
    // height: 10,
    // width: 10,
    marginHorizontal: width * 0.08,
    top: width * 0.04,
    alignSelf: 'flex-start',
  },
  gimg: {
    height: height * 0.025,
    width: width * 0.045,
    // paddingTop:10,
  },
});
