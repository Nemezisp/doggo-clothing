import { useSelector } from 'react-redux';

import CategoryPreview from "../../components/category-preview/category-preview.component";
import Spinner from '../../components/spinner/spinner.styles';

import { selectCategoriesMap, selectCategoriesIsLoading } from '../../store/categories/categories.selector.js';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap)
    const isLoading = useSelector(selectCategoriesIsLoading)

    return (
        <div className="category-preview-container">
        { isLoading ? <Spinner /> :
            Object.keys(categoriesMap).map((title) => {
                const products = categoriesMap[title];
                return (
                    <CategoryPreview key={title} title={title} products={products}/>
                );
            })
        }
        </div>
    )
}

export default CategoriesPreview;