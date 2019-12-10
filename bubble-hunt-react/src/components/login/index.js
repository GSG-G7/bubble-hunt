import React, {Component} from 'react';

class Login extends Component {
    state = { 
        username:'',
        password:'',
     }
     handleChange = (e) => {
         
     }
    render() { 
        return ( 
            <div>
                <input type="text" name ="username" placeholder="enter  your name" onChange={this.handleChange}/>
                <input type="password" name="password" placeholder="enter  your name" onChange={this.handleChange}/>
                <button>Login</button>
            </div>
         );
    }
}
 
export default Login;