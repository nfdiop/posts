// Tip: If you have to use `useEffect` simplify the dependencies array
import { useEffect } from 'react'

function List({ items }) {
  // Some side effet
  useEffect(() => {
    if(items.length === 0) {
      // Some side effect
    }
  }, [items])
}
