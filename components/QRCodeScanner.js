import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
export default function QRCodeScanner({route,  navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const { orderid, amount, description} =  route.params;
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true);
    console.log("date :" , data)
    alert("Quét thành công !!");
    let paymentCode = data.substring(2);
    let body = {
        orderid : orderid,
        amount : Number(amount),
        merchantid: 1,
        paymentchannel: "momo",
        paymenttype: "scanqr",
        paymentcode:  paymentCode,
        description: description
    }
    console.log("body :", body)
    fetch('http://paymentpaylinks.herokuapp.com/app/payment/momo/scanqr', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(response => response.text())
    .then(data => {
        fetch("http://paymentpaylinks.herokuapp.com/app/query/gettrans/" + data)
        .then(res => res.text())
        .then(data => {
          console.log(data)
            navigation.navigate('TransitionNoti', { result: data})
          }
        )
    } );
    
  };

  if (hasPermission === null) {
    return <Text>Yêu cầu quyền truy cập camera</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style = {{
          width: width,
          height: height / 2,
        }}
      />
      {scanned && <Button title={'Chạm để quét lại'} onPress={() => setScanned(false)} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});