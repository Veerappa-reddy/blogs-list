import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogsListProp} = props

  return (
    <div>
      <ul className="unorder-list">
        {blogsListProp.map(eachItem => (
          <BlogItem itemDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
