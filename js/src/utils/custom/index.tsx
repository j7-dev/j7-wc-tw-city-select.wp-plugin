import { TId } from '@/types'

export const getLabel = (id: TId) => {
  switch (id) {
    case 'billing_state':
      return '縣/市'
    case 'billing_city':
      return '鄉鎮市區'
    case 'billing_postcode':
      return '郵遞區號'
    case 'shipping_state':
      return '縣/市'
    case 'shipping_city':
      return '鄉鎮市區'
    case 'shipping_postcode':
      return '郵遞區號'
    default:
      return ''
  }
}
