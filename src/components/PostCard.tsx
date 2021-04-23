import React from "react"
import { Link } from "gatsby"
import { IPostCardProps } from "../helpers/helpers"

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
