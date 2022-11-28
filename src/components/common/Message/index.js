import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from './styles';

export default function Message({
  message,
  primary,
  danger,
  info,
  success,
  retry,
  retryFn,
  onDismiss,
}) {
  const [userDismissed, setUserDismissed] = useState(false);
  const getBgColor = () => {
    if (primary) return colors.primary;
    if (info) return colors.secondary;
    if (success) return colors.success;
    if (danger) return colors.danger;
  };
  if (userDismissed) return null;
  return (
    <TouchableOpacity style={[styles.wrapper, {backgroundColor: getBgColor()}]}>
      <View style={styles.messageContents}>
        <Text style={styles.messageText}>{message}</Text>
        {retry && typeof onDismiss !== 'function' && (
          <TouchableOpacity onPress={retryFn}>
            <Text style={styles.retryBtn}>Retry</Text>
          </TouchableOpacity>
        )}
        {typeof onDismiss === 'function' && (
          <TouchableOpacity
            onPress={() => {
              setUserDismissed(true);
              onDismiss();
            }}>
            <Text style={styles.retryBtn}>X</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}
