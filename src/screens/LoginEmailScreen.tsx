import React, {useState, createRef} from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
  Keyboard,
  TouchableOpacity
} from 'react-native';
import {Storage} from '../services/storage/storage';
import {colors} from '../theme/colors';
import {ScreenName} from '../navigation/RootNavigation';
import {FONT_WEIGHT_MEDIUM, fontSize} from '../theme/typography';
import {withTranslation} from 'react-i18next';

const Screen = (props: any) => {
  const {navigation, i18n} = props;
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();
  return (
    <View style={styles.container}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <View style={styles.footer}>
          <View style={styles.section}>
            <TextInput
              style={styles.inputEmail}
              onChangeText={UserEmail => setUserEmail(UserEmail)}
              placeholder="Enter Email" //dummy@abc.com
              placeholderTextColor={colors.placeholder}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              underlineColorAndroid="#f000"
              blurOnSubmit={false}
            />
          </View>
          <View style={styles.section}>
            <TextInput
              style={styles.inputPassword}
              onChangeText={UserPassword => setUserPassword(UserPassword)}
              placeholder="Enter Password"
              placeholderTextColor={colors.placeholder}
              keyboardType="default"
              ref={passwordInputRef}
              onSubmitEditing={Keyboard.dismiss}
              blurOnSubmit={false}
              secureTextEntry={true}
              underlineColorAndroid="#f000"
              returnKeyType="next"
            />
          </View>
          {errortext != '' ? (
            <Text style={styles.errorText}>{errortext}</Text>
          ) : null}
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => navigation.navigate(ScreenName.Register)}>
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please fill Email');
      return;
    }
    if (!userPassword) {
      alert('Please fill Password');
      return;
    }

    setLoading(true);
    let dataToSend = {email: userEmail, password: userPassword};
    let formBody = [];
    for (let key in dataToSend) {
      let encodedKey = encodeURIComponent(key);
      let encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');

    fetch('http://localhost:3000/api/user/login', {
      method: 'POST',
      body: formBody,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        setLoading(false);
        console.log(responseJson);
        if (responseJson.status === 'success') {
          Storage.save('user_id', responseJson.data.email);
          console.log(responseJson.data.email);
          navigation.replace(ScreenName.Home);
        } else {
          setErrortext(responseJson.msg);
          console.log('Please check your email id or password');
        }
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  };
};
const LoginEmailScreen = withTranslation()(Screen);
export default LoginEmailScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrimary,
    alignContent: 'center'
  },
  footer: {
    flex: 1,
    height: '80%',
    backgroundColor: colors.backgroundDark,
    justifyContent: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  section: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10
  },
  buttonTitle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16
  },
  inputEmail: {
    flex: 1,
    color: colors.text,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderRadius: 1,
    borderColor: colors.border
  },
  inputPassword: {
    flex: 1,
    color: colors.text,
    paddingLeft: 15,
    paddingRight: 15,
    borderBottomWidth: 1,
    borderRadius: 1,
    borderColor: colors.border
  },
  forgotPassword: {
    textAlign: 'center',
    alignSelf: 'center',
    padding: 10
  },
  forgotPasswordText: {
    color: colors.text,
    fontWeight: FONT_WEIGHT_MEDIUM,
    fontSize: fontSize.medium
  },
  errorText: {
    color: colors.error,
    textAlign: 'center',
    fontSize: fontSize.medium
  }
});
