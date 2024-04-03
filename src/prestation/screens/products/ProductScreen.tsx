/* eslint-disable react-native/no-inline-styles */
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../routes/StackNavigator';
import {globlaStyles} from '../../theme/theme';
import {useEffect} from 'react';

export const ProductScreen = () => {
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params.name]);

  return (
    <View style={globlaStyles.contianer}>
      <Text style={{marginBottom: 10, fontSize: 30, color: '#222'}}>
        Products
      </Text>

      <Text style={{marginBottom: 10, fontSize: 20, color: '#222'}}>
        {params.id} - {params.name}
      </Text>
    </View>
  );
};
