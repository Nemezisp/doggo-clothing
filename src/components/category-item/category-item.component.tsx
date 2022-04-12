import {CategoryContainer, BackgroundImage, CategoryBodyContainer} from './category-item.styles';

import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { CategoriesType } from '../categories/categories.component';

export type CategoryItemProps = {
  category: CategoriesType
};

const CategoryItem:FC<CategoryItemProps> = ({category}) => {
    const {imageUrl, title, route} = category
    const navigate = useNavigate()

    const onNavigateHandler = () => navigate(route)

    return(
        <CategoryContainer onClick={onNavigateHandler}>
          <BackgroundImage imageUrl={imageUrl}/>
          <CategoryBodyContainer>
            <h2>{title}</h2>
            <p>Shop Now</p>
          </CategoryBodyContainer>
        </CategoryContainer>
    )

}

export default CategoryItem;