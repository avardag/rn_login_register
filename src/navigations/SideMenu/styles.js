import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  navImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
  },
  menuItemsWrapper: {
    paddingHorizontal: 40,
  },
  menuItem: {
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 17,
    paddingVertical: 7,
    paddingLeft: 20,
  },
});
