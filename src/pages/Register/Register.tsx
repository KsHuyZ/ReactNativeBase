import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {TextInput, Checkbox, Button} from 'react-native-paper';
import CustomTextInput from '../../components/CustomTextInput';
import styles from './register.styles';

export default function Register() {
  const [inputValue, setInputValue] = useState({
    fullName: '',
    phoneNumber: '',
    password: '',
    rePassword: '',
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.childContainer}>
        <StatusBar />
        <View style={styles.header}>
          <TouchableOpacity>
            <Icon name="left" size={30} color={'black'} />
          </TouchableOpacity>
          <Text style={styles.registerTitle}>Đăng ký</Text>
        </View>
        <View style={styles.inputForm}>
          <View>
            <CustomTextInput
              label="Họ và tên"
              value={inputValue.fullName}
              // onChangeText={text => setText(text)}
            />
          </View>
          <View>
            <CustomTextInput
              label="Số điện thoại"
              value={inputValue.phoneNumber}
              // onChangeText={text => setText(text)}
            />
          </View>
          <View>
            <CustomTextInput
              label="Mật khẩu"
              value={inputValue.password}
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              // onChangeText={text => setText(text)}
            />
            <CustomTextInput
              label="Nhập lại mật khẩu"
              value={inputValue.rePassword}
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              // onChangeText={text => setText(text)}
            />
          </View>
        </View>
        <View>
          <Text style={styles.note}>Lưu ý:</Text>
          <Text style={styles.text}>
            Họ tên phải là tên trên các giấy tờ tùy thân như CMND/ CCCD/ Hộ
            Chiếu
          </Text>
          <Text style={styles.text}>
            Mật khẩu phải có độ dài ít nhất 6 ký tự, bao gồm ít nhất:
          </Text>
          <Text>• 1 ký tự hoa</Text>
          <Text>• 1 ký tự số</Text>
        </View>

        <TouchableOpacity style={{marginVertical: 20}}>
          <View style={styles.checkBox}>
            <Checkbox status="checked" color="#3BCCBB" />
            <Text>
              Tôi đã đọc và đồng ý với{' '}
              <Text style={styles.rules}>Điều khoản sử dụng</Text>
            </Text>
          </View>
        </TouchableOpacity>

        <Button mode="contained" buttonColor="#3BCCBB" textColor="#fff">
          Đăng ký tài khoản
        </Button>
      </View>
    </SafeAreaView>
  );
}
