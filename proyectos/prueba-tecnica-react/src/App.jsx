import './App.css'
import { useCatImage } from './services/hooks/useCatImage'
import { useCatFact } from './services/hooks/useCatFact'
import { Otro } from './services/Components/otro'
export function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageURL } = useCatImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Set new fact
      </button>
      {fact && <p>{fact}</p>}
      {imageURL && <img src={imageURL} alt={`Image extracted using the first word for ${fact}`} />}

    </main>
  )
}
