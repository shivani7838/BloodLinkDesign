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
import * as Animatable from 'react-native-animatable';
import StatusTopBar from '../Components/StatusTopBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLOR} from '../constants/colorConstants';
const {width, height} = Dimensions.get('window');
const Login = (props) => {
  const navigation = props.navigation;
  return (
    <ScrollView>
      <StatusTopBar />
      <SafeAreaView style={styles.container}>
        <View>
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

                <TextInput
                  style={styles.input}
                  placeholder="Email/Phone"
                  placeholderTextColor="#000"
                  // keyboardType="email-address"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="#000"
                  keyboardType="visible-password"
                />
                <View style={styles.btns}>
                  <TouchableOpacity >
                    <Animatable.View animation="bounceInLeft" style={styles.butttons}>
                      <Text
                        style={[styles.loginbtn, {backgroundColor: '#BF3741'}]}>
                        Login
                      </Text>
                    </Animatable.View>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()  => navigation.navigate("SignUp")}>
                    <Animatable.View animation="bounceInRight" style={styles.butttons}>
                      <Text style={styles.loginbtn}>Signup</Text>
                    </Animatable.View>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.forgotPass} onPress={()=>(navigation.navigate('ForgotPassword'))}>
                  <Text style={styles.forgotPassTxt}>Forgot Password</Text>
                </TouchableOpacity>
                <View style={styles.googlebtns}>
                  <View style={styles.gimgs}>
                    <Image
                      style={styles.gimg}
                      source={require('../assets/icons/google-symbol.png')}
                    />
                  </View>
                  <View style={styles.gbtns}>
                    <Text style={styles.gbtn}>Google</Text>
                  </View>
                </View>
              </KeyboardAwareScrollView>
            </View>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 1,
  },
  loginbg: {
    // justifyContent:'center',
    height: height * 0.6,
  },
  loginTopimg: {
    justifyContent: 'center',
    // height: height * 0.5,
    width: width * 0.4,
    paddingHorizontal: width * 0.1,
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
    bottom: 40,
    height: height * 0.7,
    width: width * 1,
  },
  forms: {
    marginTop: height * 0.02,
    position: 'absolute',
  },
  loginTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: width * 0.06,
    letterSpacing: 1,
    paddingVertical: height * 0.008,
  },
  input: {
    height: 55,
    marginVertical: 12,
    borderWidth: 1.5,
    borderColor: COLOR.GRAY,
    padding: width * 0.01,
    borderRadius: 25,
    fontSize: width * 0.05,
    textAlign: 'center',
    fontWeight: '400',
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
    width: width * 0.33,
    textAlign: 'center',
    borderRadius: 40,
    fontWeight: '500',
    fontSize: width * 0.039,
    // elevation:10,
    borderWidth: 2,
    borderColor: '#9B333B',
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
  forgotPass:{
    justifyContent:'flex-end',
    alignItems:'flex-end',
  },
  forgotPassTxt:{
    textDecorationLine:'underline',
    fontWeight:'600',
    fontSize:width*0.035,
  }
});
