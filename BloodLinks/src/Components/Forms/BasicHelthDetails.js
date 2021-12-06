import React, {useState} from 'react';
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
import StatusTopBar from '../StatusTopBar';
import {COLOR} from '../../constants/colorConstants';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';
const {width, height} = Dimensions.get('window');
var radio_props = [
  {label: 'Yes', value: 0},
  {label: 'No', value: 1},
];
var radio_props2 = [
  {label: 'Yes', value: 0},
  {label: 'No', value: 1},
  {label: 'Not Sure', value: 2},
];
const BasicHelthDetails = props => {
  const [Value, setValue] = useState(0);
  const navigation = props.navigation;

  return (
    <SafeAreaView>
      <StatusTopBar />
      <View style={styles.container}>
            <View style={styles.hearding}>
              {/* <TouchableOpacity>
                <Image
                  style={styles.heardingArrowImg}
                  source={require('../assets/icons/left-arrow.png')}
                />
              </TouchableOpacity> */}
              <Text style={styles.heardingTxt}>3. Basic Helth Details</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.forms}>
              <View style={{marginHorizontal: width * 0.06}}>
                <Text style={{marginTop: 7}}>
                  Have you donated blood priviously?
                </Text>
                <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={COLOR.GRAY}
                  animation={true}
                  buttonSize={10}
                  buttonOuterSize={22}
                  selectedButtonColor={COLOR.PRIMARY}
                  labelStyle={styles.radioLabel}
                  style={styles.radiostyle}
                  //   onPress={(value) => {this.setState({value:value})}}
                />
              </View>
            </View>
            <View style={styles.forms}>
              <View style={{marginHorizontal: width * 0.06}}>
                <Text style={{marginTop: 5, width: width * 0.9}}>
                  Are you suffering from acute registry disease?
                </Text>
                <RadioForm
                  radio_props={radio_props2}
                  initial={0}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={COLOR.GRAY}
                  animation={true}
                  buttonSize={10}
                  buttonOuterSize={22}
                  selectedButtonColor={COLOR.PRIMARY}
                  labelStyle={styles.radioLabel}
                  style={styles.radiostyle}
                  //   onPress={(value) => {this.setState({value:value})}}
                />
              </View>
            </View>
            <View style={styles.forms}>
              <View style={{marginHorizontal: width * 0.06}}>
                <Text style={{marginTop: 5, width: width * 0.9}}>
                  Did you eat anything in last 4 hourse?
                </Text>
                <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={COLOR.GRAY}
                  animation={true}
                  buttonSize={10}
                  buttonOuterSize={22}
                  selectedButtonColor={COLOR.PRIMARY}
                  labelStyle={styles.radioLabel}
                  style={styles.radiostyle}
                  //   onPress={(value) => {this.setState({value:value})}}
                />
              </View>
            </View>
            <View style={styles.forms}>
              <View style={{marginHorizontal: width * 0.06}}>
                <Text style={{marginTop: 5, width: width * 0.7}}>
                  Are you air crow member or long distance vehicle driver?
                </Text>
                <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={COLOR.GRAY}
                  animation={true}
                  buttonSize={10}
                  buttonOuterSize={22}
                  selectedButtonColor={COLOR.PRIMARY}
                  labelStyle={styles.radioLabel}
                  style={styles.radiostyle}
                  //   onPress={(value) => {this.setState({value:value})}}
                />
              </View>
            </View>
            <View style={styles.forms}>
              <View style={{marginHorizontal: width * 0.06}}>
                <Text style={{marginTop: 5, width: width * 0.7}}>
                  Any travell to geographical area,endemic disease?
                </Text>
                <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={COLOR.GRAY}
                  animation={true}
                  buttonSize={10}
                  buttonOuterSize={22}
                  selectedButtonColor={COLOR.PRIMARY}
                  labelStyle={styles.radioLabel}
                  style={styles.radiostyle}
                  //   onPress={(value) => {this.setState({value:value})}}
                />
              </View>
            </View>
            <View style={styles.forms}>
              <View style={{marginHorizontal: width * 0.06}}>
                <Text style={{marginTop: 5, width: width * 0.9}}>
                  Any skin deaseses at the site of phelbotomy
                </Text>
                <RadioForm
                  radio_props={radio_props}
                  initial={0}
                  formHorizontal={true}
                  labelHorizontal={true}
                  buttonColor={COLOR.GRAY}
                  animation={true}
                  buttonSize={10}
                  buttonOuterSize={22}
                  selectedButtonColor={COLOR.PRIMARY}
                  labelStyle={styles.radioLabel}
                  style={styles.radiostyle}
                  //   onPress={(value) => {this.setState({value:value})}}
                />
              </View>
            </View>
            {/* <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                marginTop: 15,
              }}>
              <View style={styles.butttons}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('SurgeryAndIllness')}>
                  <Text style={styles.btnText}>Continue</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.cancelbutttons}>
                <TouchableOpacity>
                  <Text style={{fontSize: 16}}>Cancel</Text>
                </TouchableOpacity>
              </View>
            </View> */}
          
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasicHelthDetails;
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
  butttons: {
    backgroundColor: COLOR.BUTTON,
    width: width * 0.3,
    height: height * 0.06,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelbutttons: {
    justifyContent: 'center',
    marginLeft: 15,
    alignItems: 'center',
  },
  btnText: {
    color: COLOR.WHITE,
    // textAlign:'center'
    fontWeight: '500',
    fontSize: width * 0.05,
  },
  input: {
    backgroundColor: COLOR.DROPDOWNBG,
    padding: width * 0.04,
    borderRadius: 5,
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
    borderRadius: 10,
    fontWeight: '500',
    fontSize: width * 0.05,
    borderColor: '#9B333B',
    // marginTop: height * 0.05,
  },
  forms:{
    marginHorizontal: width * 0.08,
    marginVertical: width * 0.02,
    paddingVertical: width * 0.02,
    // borderWidth: 0.3,
    backgroundColor: COLOR.WHITE,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.7,
    shadowRadius: 8,
  },
});
