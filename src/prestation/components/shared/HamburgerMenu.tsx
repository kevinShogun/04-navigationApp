import React, {useEffect} from 'react';
import {Pressable} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {IonIcon} from './IonIcons';

export const HamburgerMenu = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigator.dispatch(DrawerActions.toggleDrawer)}
          style={{marginLeft: 5}}>
          <IonIcon name="menu" />
        </Pressable>
      ),
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <></>;
};
