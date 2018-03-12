import "./app.css";
import * as React from "react";


class App extends React.Component<{}, {
    content: JSX.Element[]
}> {

    public static sdf: string[] = []

    constructor(props){
        super(props);
        this.state ={
            content: []
        }
    }

    render() {
        return(
            <div id={"injected-app"}>
                {this.state.content}
            </div>
        );
    }
}

window.onkeypress = (event) =>{
    document.getElementById("injected-app").innerHTML += "<div>"+ event.key +"</div>";
};

export default App;