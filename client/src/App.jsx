import { LanguageProvider } from './hooks/LanguageContext';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Main />
        <Footer />
      </LanguageProvider>
    </>
  );
}

export default App;
