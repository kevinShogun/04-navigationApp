import React, {useRef, useEffect} from 'react';
import {Animated, Text, View} from 'react-native';
import {HamburgerMenu} from '../../components/shared/HamburgerMenu';
import {IonIcon} from '../../components/shared/IonIcons';

export const Tab1Screen = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 9000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={{flex: 1}}>
      <HamburgerMenu />
      <Text>Tab1Screen</Text>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View // Special animatable View
          style={{
            opacity: fadeAnim,
          }}>
          <IonIcon name="rocket-outline" size={230} color="crimson" />
        </Animated.View>
      </View>
    </View>
  );
};
