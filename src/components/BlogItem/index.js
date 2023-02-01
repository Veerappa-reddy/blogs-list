import './index.css'

const BlogItem = props => {
  const {itemDetails} = props
  const {title, description, publishedDate} = itemDetails

  return (
    <li className="blog-item-container">
      <div className="title-date-container">
        <h1 className="title">{title}</h1>
        <p className="">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
