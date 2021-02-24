import React, { Component } from 'react'
import { Button, View, StyleSheet, Text, TextInput, Image, TouchableOpacity  } from 'react-native'
class TransitionNoti extends Component {
    constructor(props) {
        super(props)
        this.state = {
            qrcode: ''
        }
    }
    
    render() {
        const { route, navigation } = this.props;
        const {  result } = route.params;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>Thông báo</Text>
                </View>
                <View style={styles.footer}>
                    <View style={{ flex: 2}}>
                        <Image
                            source={result === "1" ? require('../assets/checked.png'): require('../assets/error.png')}
                            style={styles.buttonImageIconStyle}
                        />
                    </View>
                    <View style={{ flex: 5}}>
                        <Text style={{
                            alignSelf: 'center',
                            color: result === "1" ? 'gray' : 'red',
                            fontSize: 20,
                            fontWeight: '500',
                            margin: 30
                        }}>{result === "1" ? 'Giao dịch thành công' : 'Giao dịch thất bại' }</Text>
                    <View style={{ width: "30%", alignSelf: 'center' }}>
                        <Button
                        title="Quay lại"
                        color="#51E0FF"
                        accessibilityLabel="Learn more about this purple button"
                        style={styles.buttonFooter}
                        onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                    </View>
            </View>
            </View>
            
        )
    }
}

export default TransitionNoti

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        height: 75,
        justifyContent: 'center',
        backgroundColor: '#51E0FF',
        paddingVertical: 20,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    footer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 50,
        paddingVertical: 30,
        justifyContent: 'center'
    },
    action: {
        flexDirection: 'row',
        marginVertical: 10, 
        borderBottomWidth: 1,
        borderBottomColor: '#51E0FF',
        borderBottomWidth: 2,
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: 0,
        paddingLeft: 10,
        color: '#05375a',
    },
    headerImage: {
        width: 60, 
        height: 60, 
        alignSelf: 'center', 
        marginTop: 20
    },
    text_footer_title: {
        color: '#51E0FF',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center'
    },
    buttonFooter: {
        marginTop: '20px',
        width: 100,
        alignSelf: 'center'
    },
    buttonFacebookStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#485a96',
        borderWidth: 0.5,
        borderColor: '#fff',
        height: 40,
        borderRadius: 5,
        margin: 5,
      },
      buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 150,
        width: 150,
        alignSelf: 'center'
      }
})