import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            password: "",
            password2: "",
            error: {} // will be explained later
        };

        this.onInputChange=this.onInputChange.bind(this);
        this.onFormSubmit=this.onFormSubmit.bind(this);
        
    //     this.state = { term: '' };
    //     this.onInputChange=this.onInputChange.bind(this);
    //     this.onFormSubmit=this.onFormSubmit.bind(this);
    //     //note: binds the 'this' reference inside the callback function to 
    //     //the SearchBar object so when the callback is called, 'this' has the 
    //     //correct context. can also use onInputChange = (event) =>{}
    }
    
    // onInputChange(event){
    //     console.log(event.target.value);
    //     this.setState({term: event.target.value});
    // }

    onInputChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    
    // onFormSubmit(event){
    //     event.preventDefault();
    //     //note: prevents default behavior of the HTML form element
    //     this.props.fetchWeather(this.state.term);
    //     this.setState({ term: ' ' });
    //}

    onFormSubmit(event) {
        event.preventDefault();
        this.setState({ term: ' ' });
    
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
    
        axios
            .post("api/users/register", newUser)
            .then(res => console.log(res.data))
            .catch(err => console.log(err.response.data));
    }

    render() {
        return (
            <div classNameName="container">
                    <div className="register">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 m-auto">
                            <h1 className="display-4 text-center">Sign Up</h1>
                            <p className="lead text-center">Create your Connecty account</p>
                            <form 
                                noValidate
                                onSubmit={this.onFormSubmit}
                                action="create-profile.html">

                                <div className="form-group">
                                <input type="text" 
                                className="form-control form-control-lg" 
                                placeholder="Name" 
                                name="name" required 
                                value={this.state.name}
                                onChange={this.onInputChange}
                                />
                                </div>
                                <div className="form-group">
                                <input type="email" 
                                className="form-control form-control-lg" 
                                placeholder="Email Address" 
                                name="email" 
                                value={this.state.email}
                                onChange={this.onInputChange}
                                />
                                <small classNameName="form-text text-muted">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
                                </div>
                                <div className="form-group">
                                <input type="password" 
                                className="form-control form-control-lg"
                                placeholder="Password" 
                                name="password"
                                value={this.state.password}
                                onChange={this.onInputChange}
                                />
                                </div>
                                <div className="form-group">
                                <input type="password" 
                                className="form-control form-control-lg" 
                                placeholder="Confirm Password" 
                                name="password2" 
                                value={this.state.password2}
                                onChange={this.onInputChange}
                                />
                                </div>
                                <input type="submit" className="btn btn-info btn-block mt-4" />
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;