import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Customer from './components/Customer';

const customers = [
{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '961222',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name' : '나천재',
  'birthday' : '780123',
  'gender' : '여자',
  'job' : '연구원'
},
{
  'id' : 3,
  'image' : 'https://placeimg.com/64/64/3',
  'name' : '김두한',
  'birthday' : '600111',
  'gender' : '남자',
  'job' : '조폭'
}
]
class App extends Component {
  render() {
    return (
      <div>
         {customers.map(c => {return ( <Customer key={c.id} id={c.id} image={c.image} birthday={c.birthday} name={c.name} gender={c.gender} job={c.job} />)})} 
      </div>    
    );
  }
}

export default App;
