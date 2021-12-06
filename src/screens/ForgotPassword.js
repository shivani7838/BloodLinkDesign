import React, {useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import StatusTopBar from '../Components/StatusTopBar';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {COLOR} from '../constants/colorConstants';
const {width, height} = Dimensions.get('window');
import OTPInputView from '@twotalltotems/react-native-otp-input';
const ForgotPassword = props => {
  const navigation = props.navigation;
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ScrollView>
      <StatusTopBar />
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView>
          <TouchableOpacity style={styles.heardingArrow}>
            <Image
              style={styles.heardingArrowImg}
              source={require('../assets/icons/left-arrow.png')}
            />
          </TouchableOpacity>
          <View>
            <Text style={styles.loginTitle}>Forgot Password</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.number}>+91</Text>
            <TextInput
              style={[styles.input, {width: width * 0.7}]}
              placeholder="Enter Your Phone Number"
            />
          </View>

          <TextInput style={styles.input} placeholder="Enter Your Email" />
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Text style={styles.loginbtn}>GET OTP</Text>
          </TouchableOpacity>
        </KeyboardAwareScrollView>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Confirm verification code</Text>

              <OTPInputView
                style={{width: '80%', height: 200}}
                pinCount={4}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />
              {/* <View style={styles.otpTop}>
                <View style={styles.otp}>
                  <TextInput style={styles.otpTxt} />
                </View>
              </View> */}
              <View>
                <Pressable>
                  <Text>Re-send</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text style={styles.textStyle}>Ok</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    </ScrollView>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height * 1,
    backgroundColor: COLOR.WHITE,
    paddingHorizontal: width * 0.05,
  },
  loginTitle: {
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: width * 0.05,
    letterSpacing: 1,
    paddingVertical: height * 0.008,
  },
  input: {
    height: height * 0.08,
    marginVertical: 12,
    backgroundColor: COLOR.DROPDOWNBG,
    paddingHorizontal: width * 0.05,
    borderRadius: 100 / 2,
    fontSize: width * 0.045,
  },
  number: {
    height: height * 0.08,
    width: width * 0.16,
    marginVertical: width * 0.03,
    marginRight: width * 0.03,
    backgroundColor: COLOR.DROPDOWNBG,
    // paddingHorizontal: width * 0.05,
    borderRadius: 100 / 2,
    fontSize: width * 0.045,
    textAlign: 'center',
    paddingVertical: height * 0.022,
  },
  loginbtn: {
    color: COLOR.WHITE,
    backgroundColor: '#85060F',
    paddingVertical: height * 0.016,
    textAlign: 'center',
    borderRadius: 40,
    fontWeight: '500',
    fontSize: width * 0.05,
    borderWidth: 2,
    borderColor: '#9B333B',
    marginTop: width * 0.03,
  },
  heardingArrow: {
    marginVertical: 0.03,
  },
  heardingArrowImg: {
    height: height * 0.04,
    width: width * 0.08,
    marginRight: width * 0.06,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: "center",
    // marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: "center",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    // marginBottom: 15,
    // textAlign: "center"
    fontSize: width * 0.045,
    fontWeight: '400',
  },
  otp: {
    // height: height * 0.06,
    // width: width * 0.11,
    borderWidth: 3,
    borderRadius: 100,
    borderTopLeftRadius: 0,
    borderColor: '#9B333B',
    shadowColor: '#9B333B',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    // transform: [{rotate: '45deg'}],
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpTop: {},
  otpTxt: {
    transform: [{rotate: '-45deg'}],
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },

  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    height: height * 0.06,
    width: width * 0.11,
    borderWidth: 3,
    borderRadius: 100,
    borderTopLeftRadius: 0,
    borderColor: '#9B333B',
    shadowColor: '#9B333B',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    transform: [{rotate: '45deg'}],
    justifyContent: 'center',
    alignItems: 'center',
  },

  // underlineStyleHighLighted: {
  //   borderColor: '#03DAC6',
  // },
});
