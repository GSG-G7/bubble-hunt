import React , { useEffect, useState } from 'react';
import {app} from './base';

export const AuthContext = React.createContext();

export class AuthProvider extends React.Component {
    state ={
        currentUser: null,
    }
    componentDidMount(){
    }
render(){
    return (
        <AuthContext.Provider
        value={{
            currentUser: this.state.currentUser
        }}
        >
            {this.props.children}
        </AuthContext.Provider>
    )
}   
}
