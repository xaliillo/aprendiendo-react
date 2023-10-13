import { useState, useEffect } from 'react'
const CAT_IMAGE_PREFIX_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageURL, setImageUrl] = useState()

  useEffect(() => {
    if (!fact) return

    const firstThreeWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${firstThreeWords}?json=true`)
      .then(res => res.json())
      .then(response => {
        if (response && response.url) {
          setImageUrl(response.url)
        }
      })
      .catch(error => {
        console.error('Error fetching cat image:', error)
      })
  }, [fact])

  return { imageURL: `${CAT_IMAGE_PREFIX_URL}${imageURL}` }
} // {{ imageUrl: 'https://...' }}
