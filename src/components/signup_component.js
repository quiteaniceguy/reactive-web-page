import React from 'react';
import { Transition } from 'react-transition-group';

import './signup_component.css';

const time = 500;
const defaultStyle = {
    transition: `opacity ${time}ms ease-in-out`,
    opacity: 0,
};

const transitionStyles = {
    entering: { opacity: 0.5 },
    entered: { opacity: 1},
    exiting: { opacity: 0.5},
    exited: { opacity: 0 }
};


class SignUp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            emails: [],
            value: '',
            inProp: false,
            timerID:  null,
            timerCounter: 0
        };

        this.addEmail = this.addEmail.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    addEmail(){
        this.setState((state, props) => ({
            emails: this.state.emails.concat([this.state.value]),
            inProp: true,
            value: '',
            timerCounter: 0,
        }));
        console.log(this.state.emails);
        this.timerID = setInterval(
                () => this.messageTimerHandler(4),
                1000
        );
    }

    messageTimerHandler(duration){
        this.setState((state, props) => ({
            timerCounter: this.state.timerCounter + 1
        }));

        if(this.state.timerCounter === duration){
            this.setState({inProp: false});
            clearInterval(this.timerId);
        }
    }

    handleTextChange(event){
        this.setState({value: event.target.value});
    }

    render(){
        let signUpButtonStyle = this.props.vertical === "true" ? "signup_button_vert" : "signup_button";
        return (
            <div className = "boxed_element signup_box">
                <div className = "signup_form">
                    <label>
                        <input className="signup_text" type="text" value={this.state.value} onChange={this.handleTextChange}/>
                    </label>
                    {this.props.vertical === "true" ? <br/>: ''}
                    <button className={signUpButtonStyle} onClick={this.addEmail}>Sign Up</button>
                    <br/>
                    <Transition in={this.state.inProp} timeout={time}>
                        {state => (
                            <div style ={{
                                ...defaultStyle,
                                ...transitionStyles[state]
                            }}>
                                <p> Your email has been added </p>
                            </div>
                        )}
                    </Transition>

                </div>
            </div>
        );
    }
}

export default SignUp;
