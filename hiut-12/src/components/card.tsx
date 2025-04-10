import { FontItem } from "../data/fontData"
import { Link } from "react-router-dom"

type CardProps = {
  id?: string
  data?: FontItem
  isCard?: boolean
}

export default function Card({ id, data, isCard }: CardProps) {
  const { title, author, type, role } = data ?? {
    title: '',
    author: '',
    type: '',
    role: '',
    description: '',
    image: ''
  }
  const isAbout = id === 'about'

  return isCard ?
    <Link to={`/detail${id}`} className={`card ${isAbout ? 'about' : ''}`}>
      <div className="top">
        <div>{type}</div>
        <div>{role}</div>
      </div>
      <div className="bottom">
        <div>{title}</div>
        <div className="details">{author}</div>
      </div>
    </Link> : <p className="exhi-info">Hello</p>
}