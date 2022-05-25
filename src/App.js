import React, {useState} from 'react'
import './App.css';
import Card from './Card'


function App() {
//define my hook
        //storage, nameOfFunction 
  const [text, setText] = useState([])

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

//create text field [x]
   //handle submit function
//hooks [x]
//create a List component []
//pass down the text as props to the List component []

const handleSubmit = (event) => {
  //define the function after creating the hook
}

  return (
    <div className="App">
      {
        info.map((info) => {
          return(
            <Card name={info.name} company={info.company} funFact={'THIS IS A FUN FACT'}/>
          ) 
        })
      }

      <div>
        <form onSubmit={handleSubmit}>

          <label>
            Task:
            <input type="text" />
          </label>

          <input type="submit" value="submit" />

        </form>
      </div>
      
    </div>
  );
}

export default App;
