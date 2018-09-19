import React from 'react';
import webpackerReact from 'webpacker-react';
import {Login} from 'components/registration/login';
import {SignUp} from 'components/registration/signup';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            showLogin: true
        }

    }
    toggle(e){
        e.preventDefault();
        
    }
 
    render(){
    return <div> <Login /> <SignUp /></div> ;
    }

}

webpackerReact.setup({Registration})