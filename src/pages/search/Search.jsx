import React, { useEffect, useState } from 'react'
import './search.scss'
import ElementSearch from '../../components/elementSearch/ElementSearch'
import EngineSearch from '../../components/engineSearch/EngineSearch'
import FooterSearch from '../../components/footerSearch/FooterSearch'
import RecentSearches from '../../components/recentSearches/RecentSearches'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fillRestaurantsFromCollection } from '../../redux/actions/restaurantsActions'
import { fillProductsFromCollection } from '../../redux/actions/productsActions'
const Search = () => {

  const { products } = useSelector(store => store.products);
  const dispatch = useDispatch();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => 
          { 
            dispatch(fillRestaurantsFromCollection()) .then(() => 
            dispatch(fillProductsFromCollection())) .then(() => 
            console.log('estos son los Productos', products)); 
          }, []);





  const navigate = useNavigate();

  const hanldeNavigate = (ruta) => 
  {
    navigate(`${ruta}`);
  }
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    console.log('El nuevo valor del estado es: ', searchValue);
  }, [searchValue])

  useEffect(() => 
        { 
          console.log('El nuevo valor del estado es: ', searchValue);
        
          setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase())) );

        }, [searchValue, products])


  return (
    <div className='searchMain'>
      <EngineSearch getInput={(value) => setSearchValue(value)} />
      {searchValue !== '' && <section className='result'>
      {filteredProducts.length  > 0 &&  filteredProducts.map(product => ( <ElementSearch key={product.id} 
  name={product.name} price={product.price} id={product.id} image={product.image} /> ))}
      </section>}
      {searchValue === '' && <section className='recentSearches'>
        <span className='titleRecent'><b>Recent searches</b></span>
        <RecentSearches />

      </section>}

      <FooterSearch statu={2}/>

    </div>
  )
}

export default Search;