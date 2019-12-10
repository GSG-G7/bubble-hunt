import React, {Component} from 'react';

class Signup extends Component {
    state = { 
        username:'',
        password:'',
     }
     handleChange = (e) => {
         console.log(e.target.value)
     }
    render() { 
        return ( 
            <div>
                <form name="myForm" action="" onsubmit="" method="">
                <input type="text" name ="username" placeholder="enter your name" onChange={this.handleChange}/>
                <input type="password" name="password" placeholder="enter your name" onChange={this.handleChange}/>
                <button type="submit" name="signup">Signup</button>
                </form>
            </div>
         );
    }
}
 
export default Signup;
