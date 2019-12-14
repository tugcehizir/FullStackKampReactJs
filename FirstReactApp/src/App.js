import React from 'react';
import './App.css';
import { connect } from 'react-redux';

//Components
import Button from "./components/Button";
import Input from "./components/Input";
import ListElement from "./components/ListElement";

//Actions
import { addTodo } from './redux/actions/todoAction';

class App extends React.Component {
  state = {
    currentValue: "",
    isRunOnClick: true
  };

  componentDidMount() {
  //  const { currentValue } = this.state;
  //  if (currentValue !== "") {
  //   this.setState({ isRunOnClick: false });
  //  }
  }
  componentDidUpdate(prevProps, prevState, snapshot) { //değişkenler kişisel tercih
    // const { currentValue } = this.state;
    // if(prevState.currentValue !== currentValue && currentValue === ""){
    //   this.setState({ isRunOnClick: false });
    // }
    // console.log('prevProps', prevProps); //Önceki Props
    // console.log('prevState', prevState); //Önceki State
    // console.log('snapshot', snapshot); //Snapshot
  }
  componentWillUnmount() {
    console.log('Burada yapılan işlem: component Will Unmount!');
  }
  _handleOnClick = () => {

    const { dispatch } = this.props; //Props'tan dispatch'i içeri pushladı.
    const { currentValue } = this.state;
    dispatch(addTodo(currentValue)); //Reducer ile haberleşme!

  };
  _handleOnChange = event => {
    this.setState({ currentValue: event.target.value });
    };
  
  render() {
    //console.log('render!');
    const { currentValue } = this.state;

    const css = {
      backgroundColor: 'black',
      color: 'white'
    }
    return (
      <div className="App">
        <div> <h4>Liste İşlemleri</h4> </div>
        <div>
          <Input handleOnChange={this._handleOnChange}></Input>
          {
            currentValue && (
              <Button isDisable={currentValue === ''} title="Ekle" handleOnClick={this._handleOnClick}>Ekle!</Button>
            )
          }
        </div>
        <div style={css}> {/* css tanımı kullanım. amacı: hata verebilen css yazımı */}
          <ul>
          <ListElement text="test" />
          </ul>
        </div>
      </div>
    );
  }
}

export default connect()(App);


//Bilgi: HOC(High Order Component, component üreten component!)
//connect, fonksiyon üreten bir fonksiyon! Dispatch'i props alıp component olarak kullanabilmek için.
//ikinci () component için, component ismi!