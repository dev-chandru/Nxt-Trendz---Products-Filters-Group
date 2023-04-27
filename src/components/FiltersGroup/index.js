import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const {onGettingSearchInput, onClearingFilters} = props

  const onClickFilter = () => onClearingFilters()

  const renderCategory = () => {
    const {categoryOptions} = props
    return (
      <ul className="category-main-container">
        <h1 className="category-heading">Category</h1>
        {categoryOptions.map(category => {
          const {onGettingCategoryId, activeCategoryId} = props
          const onClickcategory = () => onGettingCategoryId(category.categoryId)

          const isActive = activeCategoryId === category.categoryId

          const activeClass = isActive
            ? 'category-button active-category-button'
            : 'category-button'

          return (
            <li key={category.categoryId} className="category-items">
              <button
                type="button"
                className={activeClass}
                onClick={onClickcategory}
              >
                <p>{category.name}</p>
              </button>
            </li>
          )
        })}
      </ul>
    )
  }

  const renderRatings = () => {
    const {ratingsList} = props
    return (
      <ul className="ratings-main-container">
        <h1 className="ratings-heading">Ratings</h1>
        {ratingsList.map(ratings => {
          const {onGettingRatings} = props
          const onClickingRatings = () => onGettingRatings(ratings.ratingId)
          return (
            <li key={ratings.ratingId} className="ratings-items">
              <button
                type="button"
                className="ratings-button"
                onClick={onClickingRatings}
              >
                <img
                  src={ratings.imageUrl}
                  alt={`rating ${ratings.ratingId}`}
                  className="ratings-image"
                />
                <p className="up-para">& up</p>
              </button>
            </li>
          )
        })}
      </ul>
    )
  }

  const onchangeSearchInput = event => {
    if (event.key === 'Enter') {
      onGettingSearchInput(event.target.value)
    }
  }

  return (
    <div className="filters-group-container">
      <div className="input-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          onChange={onchangeSearchInput}
        />
        <BsSearch className="search-icon" />
      </div>
      {renderCategory()}
      {renderRatings()}
      <button
        type="button"
        className="clear-filter-button"
        onClick={onClickFilter}
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
