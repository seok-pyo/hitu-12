import { fontData } from './data/fontData.ts'
import './styles/app.css'
import Card from './components/card.tsx'

export default function App() {
  return (
    <main className="grid">
      {Object.entries(fontData).map(([id, data]) => {
        return (
          <Card key={id} id={id} data={data} isCard={true}></Card>
        )
      })}
      <Card isCard={false}></Card>
    </main>
  )
}