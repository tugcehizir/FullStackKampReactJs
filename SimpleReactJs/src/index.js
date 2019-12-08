import React from "react";
import ReactDOM from "react-dom";

import "./mysass.scss";

class Button extends React.Component {
  render() {
    return (
      <div className="asds">
        <h3>Bu bit Button Componentidir.</h3>
        <button>Tıkla!</button>
      </div>
    );
  }
}
class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Bu kısım değişecek!"
    };
  }
  click = () => {
    this.setState({ text: "Pink" });
  };
  render() {
    const style = this.props.style;

    const text = this.state.text;
    console.log(this.props.style);
    //return üstüne js yazabiliriz istediğimiz gibi
    return (
      <div className="asds">
        <h2 style={style}> {text}</h2>
        <button onClick={this.click}>Değiştir!</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="asds">
        <h1>Component Kullanımı</h1>
        <Button />
        <Text style={{ backgroundColor: "pink" }} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
