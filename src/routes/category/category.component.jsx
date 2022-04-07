import {CategoryPageContainer, CategoryTitle} from './category.styles.jsx' 

import ProductCard from '../../components/product-card/product-card.component';

import { useParams } from 'react-router-dom'
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';

const Category = () => {
    const { category } = useParams() 
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category])

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
          <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
          <CategoryPageContainer>
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </CategoryPageContainer>
        </Fragment>
      );
};

export default Category