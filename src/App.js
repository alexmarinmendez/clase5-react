import './App.css';
import SearchArea from './SearchArea';

import data from './data';

const App = () => {
  return (
    <>
      <header>
        <strong><em>React-Tube-App</em></strong>
      </header>
      <SearchArea videos={data} />
    </>
  );
}

export default App;