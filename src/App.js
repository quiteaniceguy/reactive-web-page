import React from 'react';
import './App.css';
import './GameBoardComponent.css';
import SignUp from './components/signup_component.js';
import Icons from './components/icons_component.js';
import AppInfo from './components/app_info_component.js';
import Reviews from './components/reviews_component.js';

/*threshold for chaning to vertical view */
const VERTICAL_VIEW_THRESHOLD = 1050;

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            windowWidth: 0,
            windowHeight: 0,
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions);
    }

    updateDimensions() {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
        console.log(window.innerWidth);
    }
    render(){
        let vertical = this.state.windowWidth < VERTICAL_VIEW_THRESHOLD ? "true" : "false";
        return (
        <div className="App">
          <SignUp vertical={vertical}/>
          <Icons vertical={vertical}/>
          <AppInfo vertical={vertical}/>
          <Reviews vertical={vertical}/>
        </div>
        );
    }
}

export default App;
