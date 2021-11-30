import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.state = {
      firstName: '',
      lastName: '',
      age: '',
      gender: '',
      destination: '',
      dietaryRestriction: []
    }
  }
  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      [name]: value 
    })
  }

  render(){
    return (
      <main>
        <form>
          <input type='text'
            name='firstName' 
            value={this.state.firstName}
            onChange={this.handleChange}
            placeholder='Имя'/>
            <br/>
          <input type='text'
            name='lastName' 
            value={this.state.lastName}
            onChange={this.handleChange}
            placeholder='Фамилия'/>
            <br/>
          <input type='number'
            name='age' 
            value={this.state.age}
            onChange={this.handleChange}
            placeholder='Возраст'/>
            <br/>
          <label>
            <input type='radio' name='gender' value='мужской' checked={this.state.gender === 'мужской'} onChange={this.handleChange}/>Мужской
          </label>
            <br/>
            <label>
            <input type='radio' name='gender' value='женский' checked={this.state.gender === 'женский'} onChange={this.handleChange}/>Женский
          </label>
          <br/>
          <select value= {this.state.destination} name='destination' onChange={this.handleChange}>
            <option value=''>Выберите страну</option>
            <option value='Англия'>Англия</option>
            <option value='Россия'>Россия</option>
            <option value='Дания'>Дания</option>
            <option value='США'>США</option>
            <option value='Австрия'>Австрия</option>
            <option value='Швейцария'>Швейцария</option>
          </select>
          <br/>
          {/* флажки для указания диетологических ограничений */}
          <br/>
          <button>Отправить</button>
        </form>
        <hr/>
        <h2><font color='blue'>Введенная информация</font></h2>
        <p>Ваше имя: {this.state.firstName} {this.state.lastName}</p>
        <p>Ваш возраст: {this.state.age}</p>
        <p>Ваш пол: {this.state.gender}</p>
        <p>Ваш пункт назначения: {this.state.destination}</p>
        <p>Ваш список диетологических ограничений: {}</p>
      </main>
    );
  }
}

export default App;
