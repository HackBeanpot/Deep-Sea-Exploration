
import './styles/global.css'
import ExplorerCard from './components/ExplorerCard';
import ExplorerPicture from './components/ExplorerPicture';
import "@fontsource/nunito-sans";
import Checklist from './components/Checklist'

function App() {
  return (
    <div className='parent'>
      <div className="row-one">
        <ExplorerCard />
        <div>
          <Checklist />
          <ExplorerPicture />
        </div>
      </div>
    </div>
  );
}

export default App;
