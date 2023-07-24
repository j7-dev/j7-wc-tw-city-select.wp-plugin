import { useEffect } from 'react'
import Selector from '@/components/Selector'

export const ids = [
  'shipping_state',
  'shipping_city',
  'shipping_postcode',
] as const

const index = () => {
  useEffect(() => {
    ids.forEach((id) => {
      const dom = document.getElementById(`${id}_field`)
      if (dom) {
        dom.remove() // remove dom
      }
    })
  }, [])

  return (
    <div className="flex w-full">
      {ids.map((id) => (
        <Selector key={id} id={id} />
      ))}
    </div>
  )
}

export default index
