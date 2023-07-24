import React, { useEffect } from 'react'
import { getLabel } from '@/utils'
import { data } from '@/pages/data'
import { useAtom } from 'jotai'
import {
  billingStateAtom,
  billingCityAtom,
  shippingStateAtom,
  shippingCityAtom,
} from '@/pages/atom'
import { TId } from '@/types'

const Selector: React.FC<{ id: TId }> = ({ id }) => {
  const [
    billingState,
    setBillingState,
  ] = useAtom(billingStateAtom)

  const [
    billingCity,
    setBillingCity,
  ] = useAtom(billingCityAtom)

  const [
    shippingState,
    setShippingState,
  ] = useAtom(shippingStateAtom)

  const [
    shippingCity,
    setShippingCity,
  ] = useAtom(shippingCityAtom)

  const label = getLabel(id)

  const stateOptions = data.map((s) => (
    <option key={s.name} value={s.name}>
      {s.name}
    </option>
  ))

  const theBillingDistricts =
    data.find((d) => d.name === billingState)?.districts || []

  const theShippingDistricts =
    data.find((d) => d.name === shippingState)?.districts || []

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (id) {
      case 'billing_state':
        setBillingState(e?.target?.value || '')
        break
      case 'billing_city':
        setBillingCity(() => {
          const theCity = theBillingDistricts.find(
            (c) => c.name === e?.target?.value,
          ) || { name: '', zip: '' }
          return theCity
        })
        break
      case 'billing_postcode':
        setBillingCity(() => {
          const theCity = theBillingDistricts.find(
            (c) => c.zip === e?.target?.value,
          ) || { name: '', zip: '' }
          return theCity
        })
        break
      case 'shipping_state':
        setShippingState(e?.target?.value || '')
        break
      case 'shipping_city':
        setShippingCity(() => {
          const theCity = theShippingDistricts.find(
            (c) => c.name === e?.target?.value,
          ) || { name: '', zip: '' }
          return theCity
        })
        break
      case 'shipping_postcode':
        setShippingCity(() => {
          const theCity = theShippingDistricts.find(
            (c) => c.zip === e?.target?.value,
          ) || { name: '', zip: '' }
          return theCity
        })
        break
      default:
        break
    }
  }

  const getOptions = () => {
    switch (id) {
      case 'billing_state':
        return stateOptions
      case 'billing_city':
        return theBillingDistricts.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))
      case 'billing_postcode':
        return theBillingDistricts.map((c) => (
          <option key={c.zip} value={c.zip}>
            {c.zip}
          </option>
        ))
      case 'shipping_state':
        return stateOptions
      case 'shipping_city':
        return theShippingDistricts.map((c) => (
          <option key={c.name} value={c.name}>
            {c.name}
          </option>
        ))
      case 'shipping_postcode':
        return theShippingDistricts.map((c) => (
          <option key={c.zip} value={c.zip}>
            {c.zip}
          </option>
        ))
    }
  }

  const getValue = () => {
    switch (id) {
      case 'billing_state':
        return billingState
      case 'billing_city':
        return billingCity.name
      case 'billing_postcode':
        return billingCity.zip
      case 'shipping_state':
        return shippingState
      case 'shipping_city':
        return shippingCity.name
      case 'shipping_postcode':
        return shippingCity.zip
    }
  }

  const updateCheckout = () => {
    const body = document.querySelector('body')
    if (body) {
      body.dispatchEvent(new CustomEvent('update_checkout'))
    }
  }

  useEffect(() => {
    updateCheckout()
  }, [
    billingState,
    billingCity,
    shippingState,
    shippingCity,
  ])

  return (
    <p
      className="form-row form-row-wide address-field validate-required w-full"
      id={`${id}_field_new`}
    >
      <label htmlFor={id}>
        {label}
        <abbr className="required" title="必要欄位">
          *
        </abbr>
      </label>
      <span className="woocommerce-input-wrapper">
        <select
          name={id}
          id={id}
          className=""
          tabIndex={-1}
          aria-hidden="true"
          onChange={handleChange}
          value={getValue()}
        >
          {getOptions()}
        </select>
      </span>
    </p>
  )
}

export default Selector
