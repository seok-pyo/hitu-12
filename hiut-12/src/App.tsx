import { fontData } from './data/fontData.ts'
import './styles/app.css'
import Card from './components/card.tsx'
import ScrollMemory from './util/saveScroll.tsx'

export default function App() {

  return (
    <>
      <ScrollMemory />
      <main className="grid">
        {Object.entries(fontData).map(([id, data]) => {
          const visited = JSON.parse(sessionStorage.getItem('visited') || '[]')
          const isVisited = visited.includes(id)
          return (
            <Card key={id} id={id} data={data} isCard={true} isVisited={isVisited}></Card>
          )
        })}
        <Card isCard={false}></Card>
      </main>
    </>
  )
}