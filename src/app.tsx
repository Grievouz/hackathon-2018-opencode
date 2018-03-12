import "./app.css";
import * as React from "react";

let pressedKeys: {allKeys: string} = {
    allKeys: ""
};

class App extends React.Component<{}, {}> {

    constructor(props){
        super(props);
    }

    componentDidMount(){
        Object.defineProperty(pressedKeys, "watch" , () => {
            this.setState({
                text: pressedKeys.allKeys
            })
        });
    }

    render() {
        return(
            <div id={"injected-app"}>
            </div>
        );
    }
}

window.onkeypress = (event) =>{
    pressedKeys.allKeys += event.key;
    document.getElementById("injected-app").innerText = pressedKeys.allKeys;
};

export default App;