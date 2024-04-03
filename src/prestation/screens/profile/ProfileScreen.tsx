/* eslint-disable react-native/no-inline-styles */
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const ProfileScreen = () => {
  const {top} = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top + 2,
      }}>
      <Text style={{color: '#222'}}>ProfileScreen</Text>
      <PrimaryButton
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        label="abrir Menú"
      />
    </View>
  );
};
