import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 4,
    justifyContent: 'space-evenly',
  },
  messageContents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageText: {
    color: colors.white,
  },
  retryBtn: {
    color: colors.white,
  },
});
