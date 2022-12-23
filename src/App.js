import './App.css';
import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component'
import { useState, useEffect } from 'react';




const App = () => {
  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState([]);
  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users)
      )
    console.log('xx')
  },
    []
  )

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField);
  })

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }




  return (
    <div className="background-color">
      <h1>MONSTERS ROLODEX</h1>
      <div>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder='search them monsters'
          className='search-box' />
      </div>
      <div>
        <CardList monsters={filteredMonsters} />
      </div>
    </div >
  )

}

// class App extends Component {
//   constructor() {
//     super()

//     this.state = {
//       monsters: [],
//       searchField: ''

//     };

//   }

//   componentDidMount() {
//     fetch('http://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => this.setState(
//         () => {
//           return { monsters: users }
//         },
//               }
//       ))
//   }
//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }

//     }
//     )
//   }

//   render() {

//     const filteredMonsters = this.state.monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(this.state.searchField);
//     })
//     return (


//       <div className="background-color">
//         <h1 style={{}}>MONSTERS ROLODEX</h1>
//         <div>
//           <SearchBox onChangeHandler={this.onSearchChange} placeholder='search them monsters' className='search-box' />
//         </div>
//         <div>
//         <CardList monsters={filteredMonsters}/>
//         </div>
//       </div >
//     );
//   }

// }

export default App;
