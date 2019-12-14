import React, { Fragment } from "react";
import { connect } from "react-redux";

//Function tabanlı bir component ise bu şekilde çalışır. Fakat class tabanlı ise this.props olarak alınır.
const ListElement = ({ text = "text", todoList }) => {
  
console.log('todoList :', todoList);
  return (
    <Fragment>
      {todoList.todos.map(value => (
        <li>{value.name}</li>
      ))}
    </Fragment>
  );
};

//Store'u UI'ya bağlanan alan.
const mapStateToProps = state => { //Store'un içindeki tüm data buraya gelir!
  return {
    todoList: state.todos //Tüm todos yapısı,todoList prop'una bağlandı.
  };
};

export default connect(mapStateToProps)(ListElement);
//İlk paranteze fonksiyon koyulabilir, ismi önemli değil.