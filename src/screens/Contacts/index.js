import {useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Container from '../../components/common/Container';

export default function Contacts() {
  const {setOptions, toggleDrawer} = useNavigation();
  React.useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Text style={{padding: 5}}>|||</Text>
        </TouchableOpacity>
      ),
    });
  }, [setOptions, toggleDrawer]);
  return (
    <Container>
      <Text>Hi from Contacts Screen</Text>
    </Container>
    // <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
    //   <Text>Hi from Contacts Screen</Text>
    // </View>
  );
}
