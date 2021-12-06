import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter/Counter';
import Sound from 'react-sound';
import music from './assets/flute.wav';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header/Header';
import { incrementMins, decrementSecs, setMins, setSecs } from './actions/pomodoroTaskAction';
import { incrementMinsShort, decrementSecsShort, setMinsShort, setSecsShort } from './actions/shortRestAction';
import { incrementMinsLong, decrementSecsLong, setMinsLong, setSecsLong } from './actions/longRestAction';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <Counter
              incrementMins={incrementMins}
              decrementSecs={decrementSecs}
              setMins={setMins}
              setSecs={setSecs}
              counterType="pomodoroTaskCounter">
            </Counter>}></Route>
          <Route path="/short-rest" element={
            <Counter
              incrementMins={incrementMinsShort}
              decrementSecs={decrementSecsShort}
              setMins={setMinsShort}
              setSecs={setSecsShort}
              counterType="shortRestCounter">
            </Counter>}></Route>
          <Route path="/long-rest" element={
            <Counter
              incrementMins={incrementMinsLong}
              decrementSecs={decrementSecsLong}
              setMins={setMinsLong}
              setSecs={setSecsLong}
              counterType="longRestCounter">
            </Counter>}></Route>
        </Routes>
      </Router>
      {/* <Sound url={music} playStatus={Sound.status.PLAYING}></Sound> */}
    </Provider>
  );
}

export default App;
