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
    },
    []
    )
    

    console.log(monsters)
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

export default App;
