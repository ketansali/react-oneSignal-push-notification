import logo from './logo.svg';
import { useEffect } from 'react';
import './App.css';
import OneSignal from 'react-onesignal';
function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "b42ac9f8-1675-4275-a0fc-36149ee05d1d"
    });
  }, []);
  const handleTag = (tag)=>{
    console.log('Tagging');
    OneSignal.sendTag('tag',tag).then(()=>{
      console.log('tagged');
    })
  }
  return (
    <div className="App">
      <button onClick={()=>handleTag('react')}>React</button>
      <button onClick={()=>handleTag('Anguler')}>Anguler</button>
      <button onClick={()=>handleTag('vue')}>vue</button>
    </div>
  );
}

export default App;
