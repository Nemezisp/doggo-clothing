import {CategoriesContainer} from './categories.styles'
import CategoryItem from '../category-item/category-item.component';

export type CategoriesType = {
  id: number;
  title: string;
  imageUrl: string;
  route: string;
}

const categories = [
    {
      id: 1,
      title: 'Sweaters',
      imageUrl: 'https://images.unsplash.com/photo-1488569098285-adeecb95641f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640',
      route: 'shop/sweaters'
    },
    {
      id: 2,
      title: 'Dresses',
      imageUrl: 'https://images.unsplash.com/photo-1602672680907-485dc2556f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640',
      route: 'shop/dresses'
    },
    {
      id: 3,
      title: 'Costumes',
      imageUrl: 'https://images.unsplash.com/photo-1633025094151-6fc996255e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640',
      route: 'shop/costumes'
    },
    {
      id: 4,
      title: 'Hoodies',
      imageUrl: 'https://images.unsplash.com/photo-1603123853880-a92fafb7809f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640',
      route: 'shop/hoodies'
    },
    {
      id: 5,
      title: 'Accessories',
      imageUrl: 'https://images.unsplash.com/photo-1485981133625-f1a03c887f0a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640',
      route: 'shop/accessories'
    }
]

const Categories = () => {
    return(
        <CategoriesContainer>
            {categories.map((category) => (
            <CategoryItem key={category.id} category={category}/>
            ))}
        </CategoriesContainer>
    )
}

export default Categories;