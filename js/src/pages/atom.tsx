import { atom } from 'jotai'
import { data } from './data'
import { TDataItem } from '@/types'

const meetCondition = (item: TDataItem) =>
  item.name !== '連江縣' &&
  item.name !== '釣魚台' &&
  item.name !== '金門縣' &&
  item.name !== '南海島' &&
  item.name !== '澎湖縣'

const dataExcludeIsland = data.filter((item) => meetCondition(item))

export const billingStateAtom = atom(dataExcludeIsland[0].name)
export const billingCityAtom = atom(dataExcludeIsland[0].districts[0])
export const shippingStateAtom = atom(dataExcludeIsland[0].name)
export const shippingCityAtom = atom(dataExcludeIsland[0].districts[0])
