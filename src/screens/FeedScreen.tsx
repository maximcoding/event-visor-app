import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export const FeedScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 18}}>This is top Settings Screen</Text>
      <Text>This is bottom text.</Text>
    </View>
  );
};
