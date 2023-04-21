import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import {useState} from 'react';
import {colors} from '../theme/colors';

export interface IModelScreenParams {
  isVisible: boolean;
  children: any;
}

export const ModalScreen = ({isVisible, children}: IModelScreenParams) => {
  const [isClose, setIsClose] = useState(false);
  return (
    <Modal
      animationType="slide"
      visible={isVisible}
      presentationStyle={"pageSheet"}
      onRequestClose={() => setIsClose(!isClose)}>
      <View style={{backgroundColor: colors.backgroundDark}}>
        <Pressable
          onPress={() => setIsClose(!isClose)}>
          <Text>Hide Modal</Text>
        </Pressable>
        {children}
      </View>
    </Modal>);
};

