import { Provider } from 'react-redux';
import './App.css';
import Routers from './router';
import store from './redux/store'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Routers />
      </Provider>
    </div>
  );
}

export default App;
