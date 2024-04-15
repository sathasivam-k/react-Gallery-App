// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {thumbnailList, selectedImgFn, isSelected} = props
  const {id, thumbnailUrl, thumbnailAltText} = thumbnailList
  const selectedImgclassName = isSelected ? 'active' : 'normal'

  const onClickImg = () => {
    selectedImgFn(id)
  }

  return (
    <li className="thumbnail-list">
      <button className="thumbnail-button" type="button" onClick={onClickImg}>
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={selectedImgclassName}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
