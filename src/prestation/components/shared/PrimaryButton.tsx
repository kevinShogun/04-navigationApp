import {Pressable, Text} from 'react-native';
import {globlaStyles} from '../../theme/theme';

interface Props {
  label: string;
  onPress: () => void;
  icon?: JSX.Element;
}

export const PrimaryButton = ({label, onPress, icon}: Props) => {
  return (
    <Pressable style={globlaStyles.primaryButton} onPress={onPress}>
      <Text style={globlaStyles.buttonText}>{label}</Text>
      {icon}
    </Pressable>
  );
};
