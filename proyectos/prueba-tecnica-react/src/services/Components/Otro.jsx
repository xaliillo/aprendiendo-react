import { useCatImage } from '../hooks/useCatImage.js'

export function Otro () {
  const { imageURL } = useCatImage({ fact: 'cat' })
  console.log(imageURL)
  return (
    <div>
      {imageURL ? <img src={imageURL} alt='Cat' /> : <div>Cargando...</div>}
    </div>
  )
}
