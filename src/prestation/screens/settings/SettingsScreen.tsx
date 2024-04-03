/* eslint-disable react-native/no-inline-styles */
import {Text, View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';
import {globlaStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const SettingsScreen = () => {
  const navigator = useNavigation();

  return (
    <View style={globlaStyles.contianer}>
      <Text style={{marginBottom: 10, fontSize: 30, color: '#222'}}>
        Settings
      </Text>

      <PrimaryButton label="Regresar" onPress={() => navigator.goBack()} />

      <PrimaryButton
        label="Regresar al Home"
        onPress={() => navigator.dispatch(StackActions.popToTop())}
      />
    </View>
  );
};
