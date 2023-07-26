import { atom } from 'jotai'
import { dataExcludeIsland } from './data'

export const billingStateAtom = atom(dataExcludeIsland[0].name)
export const billingCityAtom = atom(dataExcludeIsland[0].districts[0])
export const shippingStateAtom = atom(dataExcludeIsland[0].name)
export const shippingCityAtom = atom(dataExcludeIsland[0].districts[0])
