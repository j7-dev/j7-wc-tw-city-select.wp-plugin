import { atom } from 'jotai'
import { data } from './data'

export const billingStateAtom = atom(data[0].name)
export const billingCityAtom = atom(data[0].districts[0])
export const shippingStateAtom = atom(data[0].name)
export const shippingCityAtom = atom(data[0].districts[0])
