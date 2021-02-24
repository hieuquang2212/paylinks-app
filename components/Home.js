import React, { Component } from 'react'
import { Button, View, StyleSheet, Text, TextInput, Image, TouchableOpacity  } from 'react-native'
import PaymentMethod from './RadioGroup'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orderid : '',
            amount: 0,
            description: ''
        }
    }
    onTextInputChange = (name) => (value) => {
        this.setState({
            [name] :value
        })
    }
    render() {
        const { route, navigation  } = this.props;
        const { username } = route.params;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <TouchableOpacity activeOpacity={0.5} onPress={() => navigation.openDrawer()}>
                            <Image source={require('../assets/menu.png')}
                            style={{
                                width: 30,
                                height: 30
                            }}/>
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{ flex: 3, flexDirection: 'column', justifyContent: 'center'}}>
                        <Text style={styles.text_header}>{this.props.route.params.username}</Text>    
                    </View>
                   
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text_footer}>
                        Nhập mã đơn hàng
                    </Text>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder="Nhập mã"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={this.onTextInputChange('orderid ')}
                        />
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>
                        Nhập số tiền cần thanh toán
                    </Text>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder="Nhập số tiền"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={this.onTextInputChange('amount')}
                        />
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>
                        Mô tả
                    </Text>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder="Nhập mô tả"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={this.onTextInputChange('description')}
                        />
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 20
                    }]}>Chọn kênh thanh toán</Text>
                    <View style={styles.actionPaymentMethod}>
                        <View style={{ flex: 1}}>
                            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column'}}>
                                <TouchableOpacity style={styles.buttonFacebookStyle} activeOpacity={0.5}>
                                    <Image
                                    source={require('../assets/momo.png')}
                                    style={styles.buttonImageIconStyle}

                                    />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1}}>
                            <TouchableOpacity style={styles.buttonFacebookStyle} activeOpacity={0.5}
                            onPress = {() => this.props.navigation.navigate("TransitionNoti", { amount: this.state.amount, description: this.state.description, result: -1})}>
                                <Image
                                source={require('../assets/zalopay.png')}
                                style={styles.buttonImageIconStyle}

                                />
                            </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 1}}>
                            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column'}}>
                            <TouchableOpacity style={styles.buttonFacebookStyle} activeOpacity={0.5}
                            onPress = {() => this.props.navigation.navigate("TransitionNoti", { amount: this.state.amount, description: this.state.description, result: -1})}>
                                <Image
                                source={require('../assets/paypal.png')}
                                style={styles.buttonImageIconStyle}

                                />
                            </TouchableOpacity>
                            </View>
                            <View style={{ flex: 1}}>
                            <TouchableOpacity style={styles.buttonFacebookStyle} activeOpacity={0.5}
                            onPress = {() => this.props.navigation.navigate("TransitionNoti", { amount: this.state.amount, description: this.state.description, result: -1})}>
                                <Image
                                source={require('../assets/vnpay.png')}
                                style={styles.buttonImageIconStyle}

                                />
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <PaymentMethod/>
                    <Button
                        title="Thanh toán"
                        color="#51E0FF"
                        accessibilityLabel="Learn more about this purple button"
                        style={styles.buttonFooter}
                        onPress = {
                            () => 
                            this.props.navigation.navigate("QRScan", 
                            { amount: this.state.amount, description: this.state.description, orderid: this.state.orderid})}
                        />
            </View>
            </View>
            
        )
    }
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        width: '100%',
        height: 75,
        justifyContent: 'center',
        backgroundColor: '#51E0FF',
        flexDirection: 'row',
        padding: 0
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 50,
        paddingVertical: 30,
    },
    action: {
        flexDirection: 'row',
        marginVertical: 10, 
        borderBottomWidth: 1,
        borderBottomColor: '#51E0FF',
        borderBottomWidth: 2,
        paddingBottom: 5,
    },
    actionPaymentMethod: {
        flexDirection: 'row',
        marginVertical: 10, 
        paddingBottom: 5,
        height: 130,
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
        marginTop: '20px'
    },
    buttonFacebookStyle: {
        borderRadius: 5,
        alignSelf: 'center',
        justifyContent: 'center',
        flexDirection:  'column',

      },
      buttonImageIconStyle: {
        height: 50,
        width: 50,
      }
})