import './App.css';
import Card from './Card'


function App() {

  const info = [{
    name: 'Kazeem',
    company: 'Citizens'
  },{
    name: 'Abraham',
    company: 'McK'
  },{
    name: 'Getu',
    company: 'Mck'
  },{
    name: 'Nebyou',
    company: 'McK'
  },{
    name: 'Linda',
    company: 'Multiverse'
  }]

//Iterate through array .map()
//Create a Card component (functional component) [x]
//Pass the info object into the Card component as props [x]
    //create a label for the incoming prop [x]
    //={} [x]
//Render the Card component [x]
    //show the name and company [x]
//Style [x]

  return (
    <div className="App">
      {
        info.map((info) => {
          return(
            <Card name={info.name} company={info.company} funFact={'THIS IS A FUN FACT'}/>
          ) 
        })
      }
    </div>
  );
}

export default App;
