import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';

function App() {
  const [image, setImage] = useState();
  useEffect(() => {axios.get("https://source.unsplash.com/random", {responseType: 'blob',}).then(response => {
    setImage([URL.createObjectURL(response.data)]);
  })}, [])
  return (
    <div className="App">
      <img src={image} height="1000px" />
      <button onClick={() => {axios.get("https://source.unsplash.com/random", {responseType: 'blob',}).then(response => {
    setImage([URL.createObjectURL(response.data)]);
  })}} className='button'>new image</button>
    </div>
  );
}

export default App;
