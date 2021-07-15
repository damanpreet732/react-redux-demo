import './App.css';
import { Provider } from 'react-redux'
import { store } from './redux/store';
import CakeContainer from './components/CakeContainer';
import HooksCakeComponent from './components/HooksCakeComponent';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    // Provide is provided by react-redux 
    // which allows us to provide store to react application
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <IceCreamContainer/>
        <hr/>
        <HooksCakeComponent/>
      </div>
    </Provider>
  );
}



export default App;
