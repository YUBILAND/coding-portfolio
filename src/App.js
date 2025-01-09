import './App.css';
import Body from './Body';
import BodyTransition from './BodyTransition';
import Header from './Header';

function App() {

  const scrollToProject = (id) => {
    setTimeout(() => {
      document.getElementById(id).scrollIntoView({behavior: 'smooth'})
    })

  }

  return (
    <div>
      <Header scrollFunc={scrollToProject}/>
      <Body />
      <BodyTransition/>
    </div>
  );
}

export default App;
