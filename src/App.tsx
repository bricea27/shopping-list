import { useState } from 'react'

import './App.css'
import { Item, Items, Search, SearchInput, SearchResult, SearchResults } from './components';
import { useDebounce } from './hooks';
import type { Item as ItemType } from './utils/types';

function App() {
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [items, setItems] = useState<ItemType[]>([]);

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

  const handleAddItem = (name: string) => {
    setItems(prev => {
      const match = prev.find(item => item.name === name);

      // If the item already exists, increment its count
      if (match) {
        return prev.map(item => ({
          ...item,
          count: item.name === name ? item.count + 1 : item.count
        }))
      }

      // Otherwise, simply add the item to the beginning of the list
      return [{ name, checked: false, count: 1 }, ...prev];
    })
  }

  return (
    <main>
      <header>
        <h1>Shop-it</h1>
        <p>Search for an item, add items, check them off, and delete them!</p>
        <Search>
          <SearchInput onChange={handleSearch} placeholder="Search for an item" />
          {searchResults.length > 0 && (
            <SearchResults>
              {searchResults.map(result => (
                <SearchResult
                  key={`search-result-${result}`}
                  onClick={() => handleAddItem(result)}
                >
                  {result}
                </SearchResult>
              ))}
            </SearchResults>
          )}
        </Search>
      </header>
      {items.length > 0 && (
        <Items>
          {items.map(({ name }) => <Item>{name}</Item>)}
        </Items>
      )}
    </main>
  )
}

export default App
