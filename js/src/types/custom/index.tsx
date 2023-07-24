import { ids as billingIds } from '@/pages/billing'
import { ids as shippingIds } from '@/pages/shipping'

export type TCity = {
  name: string
  zip: string
}

export type TData = {
  name: string
  districts: TCity[]
}[]

export type TId = (typeof billingIds)[number] | (typeof shippingIds)[number]
