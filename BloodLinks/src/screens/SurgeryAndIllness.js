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
import StatusTopBar from '../Components/StatusTopBar';
import {COLOR} from '../constants/colorConstants';
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
const SurgeryAndIllness = (props) => {
  const [Value, setValue] = useState(0);
  const navigation = props.navigation;
  return (
    <SafeAreaView>
      <StatusTopBar />
      <View style={styles.container}>
        <View style={styles.hearding}>
          <TouchableOpacity>
            <Image
              style={styles.heardingArrowImg}
              source={require('../assets/icons/left-arrow.png')}
            />
          </TouchableOpacity>
          <Text style={styles.heardingTxt}>Surgery And Illness</Text>
        </View>
      </View>
      <ScrollView>
        <View style={{marginHorizontal: width * 0.08, borderWidth: 0.3}}>
          <View style={{marginHorizontal: width * 0.06}}>
            <Text style={{marginTop: 7}}>
              Have you donated blood priviously?
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              animation={true}
              labelStyle={{margin: 5}}
              //   onPress={(value) => {this.setState({value:value})}}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: width * 0.08,
            borderWidth: 0.3,
            marginTop: 10,
          }}>
          <View style={{marginHorizontal: width * 0.06}}>
            <Text style={{marginTop: 5, width: width * 0.9}}>
              Are you suffering from acute registry disease?
            </Text>
            <RadioForm
              radio_props={radio_props2}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              animation={true}
              labelStyle={{margin: 5}}
              //   onPress={(value) => {this.setState({value:value})}}
            />
          </View>
        </View>
        <View
          style={{
            marginHorizontal: width * 0.08,
            borderWidth: 0.3,
            marginTop: 10,
          }}>
          <View style={{marginHorizontal: width * 0.06}}>
            <Text style={{marginTop: 5, width: width * 0.9}}>
              Did you eat anything in last 4 hourse?
            </Text>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelHorizontal={true}
              buttonColor={'#2196f3'}
              animation={true}
              labelStyle={{margin: 5}}
              //   onPress={(value) => {this.setState({value:value})}}
            />
          </View>
        </View>
        
      
        
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 15,
          }}>
          <View style={styles.butttons}>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}>
              <Text style={styles.btnText}>Continue</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.cancelbutttons}>
            <TouchableOpacity>
              <Text style={{fontSize: 16}}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SurgeryAndIllness;
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
});
