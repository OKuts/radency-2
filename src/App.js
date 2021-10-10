import './App.css';
import {useSelector} from "react-redux";

const App = () => {
  const out = useSelector(state => state.todos);

  return (
    <div className='app'>
      <h1>Hometask #2 | React, Redux</h1>
      <h1>Hometask #2 | React, Redux</h1>
    </div>
  );
}

export default App;
