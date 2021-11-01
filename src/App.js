import './App.css';
import Video from './Video';
import SearchArea from './SearchArea';

import data from './data';

const App = () => {
  return (
    <>
      <header>
        <strong><em>React-Tube-App</em></strong>
      </header>
      <SearchArea />
      {
        data.map((video, index) => (
          <Video 
          key={index}
          title={video.title}
          dateAdded={video.dateAdded}
          channel={video.channel}
          thumbnail={video.thumbnail}
          description={video.description} />
        ))
      }
    </>
  );
}

export default App;