import './App.css';
import Banner from './components/banner';
import FolderBar from './components/folder-bar';
import ContentBox from './components/content-box';

const App = () => (
    <div className="App">
      <Banner />
      <div className="main-content">
        <FolderBar />
        <ContentBox />
      </div>
    </div>
  );

export default App;
