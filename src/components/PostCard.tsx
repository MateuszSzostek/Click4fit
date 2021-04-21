import React from "react"
import { Link } from "gatsby"
interface IPostCardProps {
  title: string
  slug: string
  shortDesc: string
}

const PostCard = (props: IPostCardProps) => {
  const { title, slug, shortDesc } = props
  return (
    <div>
      <h2 className="post-title">{title}</h2>
      <p className="post-description">{shortDesc}</p>
      <Link to={slug} className="post-slug">
        Czytaj dalej...
      </Link>
    </div>
  )
}

export default PostCard
