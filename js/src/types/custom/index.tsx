import { ids as billingIds } from '@/pages/billing'
import { ids as shippingIds } from '@/pages/shipping'

export type TCity = {
  name: string
  zip: string
}

export type TDataItem = {
  name: string
  districts: TCity[]
}

export type TData = TDataItem[]

export type TId = (typeof billingIds)[number] | (typeof shippingIds)[number]
