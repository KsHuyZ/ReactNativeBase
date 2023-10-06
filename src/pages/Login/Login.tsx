import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  Image,
  TextInput,
  Button,
} from 'react-native';
import React from 'react';
import logo from '../../assets/images/logo.png';
import styles from './login.styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
const Login = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={'#3BCCBB'} />
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoTitle}>VnCare</Text>
        <View style={styles.pageContainer}>
          <Text style={styles.pageTitle}>Dang Nhap</Text>
          <View style={styles.btnPhoneContainer}>
            <Button title="Thay so dien thoai" />
            <View style={styles.formGroup}>
              <Text style={styles.formLabel}>So dien thoai</Text>
              <TextInput
                style={styles.formControl}
                placeholder="Nhap so dien thoai"
              />
            </View>
            <View>
              <Text>Mat khau</Text>
              <TextInput placeholder="Nhap mat khau" secureTextEntry={true} />
            </View>
            <View>
              <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                text="Ghi nho"
                iconStyle={{borderColor: 'red'}}
                innerIconStyle={{borderWidth: 2}}
                textStyle={{fontFamily: 'JosefinSans-Regular'}}
                onPress={(isChecked: boolean) => {}}
              />
              <Button title="Quen mat khau" />
            </View>
            <View>
              <Button title="Dang nhap" />
            </View>
            <View>
              <Button title="Dang ky" />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;
