import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import CheckBox from "expo-checkbox";

const Login = ({ navigation }) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setChecked] = useState(false);
  
const submit = () => {
  if(name === 'Umesh' && password === 'umesh@123') {
    Alert.alert(`Thank You ${name}`);
    navigation.navigate('dashboard', { myName: `${name}` });
  } else {
    Alert.alert('Username and Password is not correct');
  }
  
}

  return (
    <View style={styles.pageWrapper}>
      <View style={styles.textCenter}>
        <Image style={styles.img} source={require('../images/logo.png')} />
        <Text style={styles.title}>Delivery order and earn more</Text>
      </View>
      <View style={styles.formcontainer}>
        <View style={styles.forminput}>
          <TextInput 
            style={styles.inputStyle} 
            placeholder='Enter Email id' 
            autoCapitalize='none' 
            autoCorrect={false}
            value={name}
            onChangeText={(fieldData) => setName(fieldData)}
          />
        </View>
        <View style={styles.forminput}>
          <TextInput 
            style={styles.inputStyle}
            placeholder='Enter Your Password' 
            autoCapitalize='none' 
            autoCorrect={false} 
            secureTextEntry={true} 
            value={password}
            onChangeText={(passData) => setPassword(passData)}
          />
        </View>
        <View style={styles.formcheckbox}>
        <CheckBox
          style={styles.checkbox}
          value={isChecked}
          onValueChange={setChecked}
          color={isChecked ? '#4630EB' : undefined}
        />
        <Text style={styles.paragraph}>Custom colored checkbox</Text>
      </View>
      <TouchableOpacity style={[styles.formButton, {backgroundColor: isChecked ? '#A94545' : '#dddddd'}]} disabled={!isChecked} onPress={() => submit()}>
        <Text style={styles.buttontext} >Login</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pageWrapper: {
     width: '100%',
     paddingLeft: 20,
     paddingRight: 20,
     height: '100%',
     backgroundColor: '#ffffff',
  },
  textCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
  height: 62,
  width: 200,
  },
  title: {
    marginTop: 30,
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
  },
  formcontainer: {
    paddingTop: 40,
  },
  forminput: {
    paddingVertical: 20,
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: '#6e6e6e',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 3,
    fontSize: 18,
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
  },
  formcheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  formButton: {
    paddingHorizontal: 10,
    paddingVertical: 13,
    backgroundColor: '#dddddd',
    borderRadius: 3,
    marginTop: 30,
  },
  buttontext: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
  }
});


export default Login