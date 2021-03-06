import {CategoryPageContainer, CategoryTitle} from './category.styles' 

import ProductCard from '../../components/product-card/product-card.component';
import Spinner from '../../components/spinner/spinner.component';

import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { useState, useEffect, Fragment } from 'react';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector';

type CategoryRouteParams = {
  category: string;
}

const Category = () => {
    const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams
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