import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import {app, database } from '../base';
import image from '../../assests/depositphotos_8894419-stock-illustration-pastel-tones-bubble-background.jpg';

const Signup = ({ history }) => {

    const handleSubmit = async (e) => {
         e.preventDefault();
         const {email, password} = e.target.elements;
        try {
            await app
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then(({user}) =>{
                console.log(user)
                database.collection('users').doc(user.uid).set({
                    email: email.value,
                    score:0,
                })
            });

            history.push("/");
        } catch(e) {
            console.log(e,'error in sign up');
        }
     }
        return ( 
            <div>
                <img alt="image" src={image} height="142" width="142"/>
                <form  onSubmit={handleSubmit} >
                    <label>
                        Email
                    <input type="text" name ="email" placeholder="enter your name" />
                    </label>
                    <label>
                        password
                    <input type="password" name="password" placeholder="enter your name" />
                    </label>
                    <button type="submit" name="signup">Signup</button>
                </form>
            </div>
         );
    }
 
export default withRouter(Signup);
