import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

export default function Input({
  style,
  onChangeText,
  value,
  placeholder,
  label,
  icon,
  iconPosition,
  error,
  ...restProps
}) {
  const [focused, setFocused] = useState(false);
  const placeholderText = placeholder || 'Enter here';
  const getIconPosition = () => {
    if (icon && iconPosition) {
      return iconPosition === 'right' ? 'row-reverse' : 'row';
    }
  };
  const getBorderColor = () => {
    if (error) return colors.danger;
    if (focused) return colors.primary;
    return colors.grey;
  };
  return (
    <View style={styles.inputContainer}>
      {label && <Text>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {alignItems: icon ? 'center' : 'baseline'},
          {flexDirection: getIconPosition(), borderColor: getBorderColor()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[styles.input, style]}
          onChangeText={onChangeText}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...restProps}
          placeholder={placeholderText}
          // keyboardType="numeric"
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}
