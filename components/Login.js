import React, { Component } from 'react'
import { StatusBar, 
        View, 
        StyleSheet,
    Text,
    TextInput,Image, Button} from 'react-native'
import PaymentImage from '../assets/credit-card.png'
import NoficationModal from './NoficationModal'
class SignInScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            visibleModal: false,
            success: false,
            visibleLoader: false
        }
    }
    componentDidMount = () => {
        success: false
    }
    onTextInputChange = (name) => (value) => {
        this.setState({
            [name] :value
        })
    }
    handleLoginUser = () => {
        const { username, password } = this.state;
        if (username ===  'hieuquang' && password === '12345') {
                this.setState({
                    visibleModal: true,
                    success: true
                })
                setTimeout(() => {
                    this.setState({
                        visibleModal: false
                    });
                    this.props.navigation.navigate("app", { screen : 'Home', params: { username: this.state.username },})
                }, 1000)
        } else {
            this.setState({
                visibleModal: true,
                success: false
            })
            setTimeout(() => {
                this.setState({
                    visibleModal: false
                });
            }, 1000)
        }
       
        
    }
    render() {
        
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#009387' barStyle='light-content' />
                <View style={styles.header}>
                    <Text style={styles.text_header}>PAYLINKS</Text>
                    <Image source={require('../assets/credit-card.png')} 
                     style={styles.headerImage}/>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.text_footer_title}>Đăng nhập</Text>
                    <Text style={styles.text_footer}>
                        Tên người bán
                    </Text>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder="Nhập tên người bán"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            
                            // onChangeText={(val) => textInputChange(val)}
                            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                        />
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>
                        Tên tài khoản
                    </Text>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder="Nhập tên tài khoản"
                            placeholderTextColor="#666666"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={this.onTextInputChange('username')}
                            // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}

                        />
                    </View>
                    <Text style={[styles.text_footer, {
                        marginTop: 35
                    }]}>Mật khẩu</Text>
                    <View style={styles.action}>
                        <TextInput 
                            placeholder="Nhập mật khẩu"
                            placeholderTextColor="#666666"
                            //secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            secureTextEntry={true}
                            onChangeText={this.onTextInputChange('password')}
                            //onChangeText={(val) => handlePasswordChange(val)}
                        />
                    </View>
                    <Button
                        title= "Đăng nhập"
                        color="#51E0FF"
                        accessibilityLabel="Learn more about this purple button"
                        style={styles.buttonFooter}
                        onPress={this.handleLoginUser}
                        />
            </View>
            <NoficationModal
                visible={this.state.visibleModal}
                isLogin={this.state.success}
                title={this.state.success ? 'Đăng nhập thành công' : 'Đăng nhập thất bại. Vui lòng nhập lại'}
                />
        </View>
        )
    }
}

export default SignInScreen;
const  styles = StyleSheet.create({
    lottie: {
        width: 100,
        height: 100
      },
    container: {
        flex: 1
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#51E0FF',
        paddingHorizontal: 20,
        paddingBottom: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center'
    },
    footer: {
        width: '90%',
        flex: 3,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        paddingHorizontal: 20,
        paddingVertical: 30,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2.62,
        elevation: 4,
        top: -30
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
        fontSize: 25,
        alignSelf: 'center',
        marginBottom: 20
    },
    buttonFooter: {
        marginTop: '20px'
    }
})
