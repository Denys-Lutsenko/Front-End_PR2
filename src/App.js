import logo from './logo.svg';
import './App.css';
import MyInfo from "./components/MyInfo/MyInfo";
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
      <MyInfo />
      <Button variant="primary">Button</Button>
    </div>
  );
}

export default App;
