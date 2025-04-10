import { Link } from 'react-router-dom'
import { fontData, FontItem } from './data/fontData'
import './App.css'

export default function App() {
  return (
    <main className="grid">
      {Object.entries(fontData).map(([id, { title, author, type, role }]) => (
        <Link to={`/detail/${id}`} key={id} className={`card ${id === 'about' ? 'about' : ''}`}>
          <div className='top'>
            <div>{type}</div>
            <div>{role}</div>
          </div>
          <div className='bottom'>
            <div>{title}</div>
            <div className='details'>{author}</div>
          </div>
        </Link>
      ))}
    </main>
  )
}