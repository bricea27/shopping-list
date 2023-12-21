import { useState } from 'react'

import './App.css'

function App() {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event?.target?.value ?? '';

    // Only proceed with the request if the query is at least 2 characters long
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    const response = await fetch(`https://api.frontendeval.com/fake/food/${query}`)
    setSearchResults(await response.json());
  }

  return (
    <main>
      <header>
        <h1>Shop-it</h1>
        <p>Search for an item, add items, check them off, and delete them!</p>
      </header>
      <section>
        <input onChange={handleSearch} type="text" placeholder="Search for an item" />
        <ul>
        {searchResults.map(result => <li>{result}</li>)}
        </ul>
      </section>
    </main>
  )
}

export default App
