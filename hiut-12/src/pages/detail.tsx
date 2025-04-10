import { useParams, Link } from 'react-router-dom'
import { fontData, FontItem } from '../data/fontData'
import '../styles/detail.css'

export default function Detail() {
  const { id } = useParams<{ id: string }>()
  const data: FontItem | undefined = id ? fontData[id] : undefined

  if (!data) return <p style={{ color: '#fff', padding: '2rem' }}>존재하지 않는 작가입니다.</p>

  return (
    <div className="detail">
      <h1>{data.title}</h1>
      <p><strong>작가:</strong> {data.title}</p>
      <img src={data.image} alt={`${data.title} 이미지`} />
      <p><Link to="/" className="back">돌아가기</Link></p>
    </div>
  )
}