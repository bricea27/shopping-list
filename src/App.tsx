import { useState } from 'react'

import './App.css'
import { Search, SearchInput, SearchResult, SearchResults } from './components';
import { useDebounce } from './hooks';

function App() {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  const debouncedCallback = useDebounce(async (query: string) => {
    const response = await fetch(`https://api.frontendeval.com/fake/food/${query}`);
    setSearchResults(await response.json())
  }, 500);

  const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event?.target?.value ?? '';

    // Only proceed with the request if the query is at least 2 characters long
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    debouncedCallback(query);
  }

  return (
    <main>
      <header>
        <hgroup>
          <h1>Shop-it</h1>
          <p>Search for an item, add items, check them off, and delete them!</p>
        </hgroup>
        <Search>
          <SearchInput onChange={handleSearch} placeholder="Search for an item" />
          {searchResults.length > 0 && (
            <SearchResults>
              {searchResults.map(result => <SearchResult>{result}</SearchResult>)}
            </SearchResults>
          )}
        </Search>
      </header>
    </main>
  )
}

export default App
