import React, { useEffect, useState } from 'react'
import './search.scss'
import ElementSearch from '../../components/elementSearch/ElementSearch'
import EngineSearch from '../../components/engineSearch/EngineSearch'
import FooterSearch from '../../components/footerSearch/FooterSearch'
import RecentSearches from '../../components/recentSearches/RecentSearches'
import { useNavigate } from 'react-router-dom'
const Search = () => {


  const navigate = useNavigate();

  const hanldeNavigate = (ruta) => 
  {
    navigate(`${ruta}`);
  }
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log('El nuevo valor del estado es: ', searchValue);
  }, [searchValue])


  return (
    <div className='searchMain'>
      <EngineSearch getInput={(value) => setSearchValue(value)} />
      {searchValue !== '' && <section className='result'>
        <ElementSearch />
        <ElementSearch />
        <ElementSearch />
        <ElementSearch />
        <ElementSearch />
      </section>}
      {searchValue === '' && <section className='recentSearches'>
        <span className='titleRecent'><b>Recent searches</b></span>
        <RecentSearches />
        <RecentSearches />
        <RecentSearches />
        <RecentSearches />
        <RecentSearches />

      </section>}
      <FooterSearch statu={2}/>

    </div>
  )
}

export default Search;