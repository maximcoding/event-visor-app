import React, {useState, createRef, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Animated
} from 'react-native';
import {Loader} from '../components/Loader';
import {logoImg} from '../../assets/images';
import {colors} from '../theme/colors';
import {ScreenName} from '../navigation/RootNavigation';
import {FONT_WEIGHT_LIGHT, textStyle} from '../theme/typography';
import {Button, ButtonType} from '../components/Button';
import {spacing} from '../theme/spacing';
import {withTranslation} from 'react-i18next';
import {Storage} from '../services/storage/storage';

const LoginScreen = function({navigation}: any) {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errortext, setErrortext] = useState('');
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {toValue: 1, duration: 10000, useNativeDriver: true}).start();
  }, [fadeAnim]);
  const navigateLogin = () => navigation.navigate(ScreenName.LoginWithEmail);
  const navigateFacebook = () => navigation.navigate(ScreenName.LoginWithFacebook);
  const navigateToRegister = () => navigation.navigate(ScreenName.Register);
  return (
    <Animated.View style={styles.container}>
      <Loader loading={loading} />
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
        <KeyboardAvoidingView enabled><
          View style={{alignItems: 'center'}}>
          <Image source={(logoImg)}
                 style={{
                   height: 200,
                   marginBottom: spacing.medium,
                   resizeMode: 'contain'
                 }}
          />
        </View>
          <Text style={styles.title}>
          </Text>
          <Text style={styles.subTitle}>
            Your activities is our goal to get you started with your Business
          </Text>
          <Button
            type={ButtonType.login}
            title={'Login'}
            onPress={navigateLogin} />
          <Button
            type={ButtonType.facebook}
            title={'Login with Facebook'} onPress={navigateFacebook} />
        </KeyboardAvoidingView>
        <View>
          <Text style={styles.subTitle}>
            Don't Have an Account?
          </Text>
          <Button
            type={ButtonType.link}
            title={'Create an Account'}
            onPress={navigateToRegister} />
        </View>
      </ScrollView>
    </Animated.View>
  );
};
export default withTranslation()(LoginScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.backgroundPrimary,
    alignContent: 'center'
  },
  title: {
    ...textStyle.title,
    fontSize: 20,
    color: colors.text,
    fontWeight: 'bold'
  },
  subTitle: {
    ...textStyle.title,
    fontWeight: FONT_WEIGHT_LIGHT,
    paddingHorizontal: spacing.extraLarge,
    paddingBottom: spacing.medium,
    lineHeight: 20,
    color: colors.text
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10
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
    color: colors.text,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14
  }
});
