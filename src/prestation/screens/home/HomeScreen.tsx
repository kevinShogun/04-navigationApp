/* eslint-disable react/no-unstable-nested-components */
import {useEffect} from 'react';
import {View, Pressable} from 'react-native';
import {
  type NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';
import {type RootStackParams} from '../../routes/StackNavigator';
import {globlaStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import {IonIcon} from '../../components/shared/IonIcons';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu" />
        </Pressable>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View style={globlaStyles.contianer}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Productos"
        icon={<IonIcon name="grid-outline" color="white" />}
      />

      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Settings"
        icon={<IonIcon name="cog-outline" color="white" />}
      />
    </View>
  );
};
