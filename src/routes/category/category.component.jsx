import {CategoryPageContainer, CategoryTitle} from './category.styles.jsx' 

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.styles.jsx';

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState, useEffect, Fragment } from 'react';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector.js';

const Category = () => {
    const { category } = useParams() 
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (

        <Fragment>
          <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
          {isLoading ? (
              <Spinner />
          ) : (
              <CategoryPageContainer>
                {products &&
                  products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
              </CategoryPageContainer>
          )}
        </Fragment>
      );
};

export default Category