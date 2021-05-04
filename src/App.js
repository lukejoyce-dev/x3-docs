import {DocumentsContextProvider} from './contexts/DocumentsContext'
import Header from './components/global/header/Header'
import Sidebar from './components/global/sidebar/Sidebar'
import Results from './components/pages/documentsListPage/results/Results'
import CtaBar from './components/pages/documentsListPage/ctaBar/CtaBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <DocumentsContextProvider>
        <Header/>
        <Sidebar/>
        <Results/>
        <CtaBar/>
      </DocumentsContextProvider>
    </div>
  );
}

export default App;
