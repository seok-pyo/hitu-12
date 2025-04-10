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
    <Link to={`/detail/${id}`} className={`card ${isAbout ? 'about' : ''}`}>
      <div className="top">
        <div>{type}</div>
        <div>{role}</div>
      </div>
      <div className="bottom">
        <div>{title}</div>
        <div className="details">{author}</div>
      </div>
    </Link> : <div className="last">
      <div>
        머리와 맺음<br />
        2025. 04. 20. - 2025. 04. 27.
      </div>
      <div>
        Factory2<br />
        서울특별시 종로구 자하문로10길 15
      </div>
      <div>
        지원 | 활자공간, 오늘폰트
      </div>
    </div>
}