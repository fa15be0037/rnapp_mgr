import React, { Component } from "react";
import {Card, Input, CustomButton, CardSection} from "./common";
import {connect} from 'react-redux';
import {emailChanged} from "./actions"
export default class LoginForm extends Component{
    

    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    
    render(){

        const mapStateToProps = state => {
            return {
            email: state.auth.email,
            password: state.auth.password
            };
            };

        return(
            <Card>
                <CardSection>
                    <Input  label="Email" placeholder="User@gmail.com" onChangeText= {this.onEmailChange.bind(this)} value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Input  label="Password" placeholder="Pasword"/>
                </CardSection>
                <CardSection>
                    <CustomButton> Login </CustomButton>
                </CardSection>
            </Card>
        );
    }
}

export default connect(
mapStateToProps,
{ emailChanged, passwordChanged }
)(LoginForm);