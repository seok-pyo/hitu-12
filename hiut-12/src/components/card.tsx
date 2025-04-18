import { FontItem } from "../data/fontData"
import { Link } from "react-router-dom"

type CardProps = {
  id?: string
  data?: FontItem
  isCard?: boolean
  isVisited?: boolean
}

export default function Card({ id, data, isCard, isVisited }: CardProps) {
  const { title, author, type, role } = data ?? {
    title: '',
    author: '',
    type: '',
    role: '',
    description: '',
    image: ''
  }
  // const isAbout = id === 'about'

  const handleClick = () => {
    let visited = JSON.parse(sessionStorage.getItem('visited') || '[]')
    if (!visited.includes(id)) {
      visited = []
      visited.push(id)
      sessionStorage.setItem('visited', JSON.stringify(visited))
    }
    sessionStorage.setItem('visited', JSON.stringify(visited))
    sessionStorage.setItem('scrollY', window.pageYOffset.toString())
  }

  return isCard ?
    <Link to={`/detail/${id}`} className={`card ${id === 'about' ? 'about' : ''} ${isVisited ? 'visited' : ''}`} onClick={handleClick}>
      <div className="top">
        <div>{type}</div>
        <div>{role}</div>
      </div>
      <div className="bottom">
        <div className="card-title">{title}</div>
        <div className="details">{author}</div>
      </div>
    </Link > : <div className="last">
      <div>
        머리와 맺음<br />
        2025. 04. 20. - 2025. 04. 27.
      </div>
      <div>
        Factory2<br />
        서울특별시 종로구 자하문로10길 15
      </div>
      <div className="people">
        참여 | 박수민, 이수지, 이보라, 이지원, 정소이, 정영신, 최민영, 허지선, 홍석표, 이용제
      </div>
      <div>
        지원 | 활자공간, 오늘폰트
      </div>
    </div>
}