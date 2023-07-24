import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import App2 from './App2'
import { renderId1, renderId2 } from './utils'

waitTillElementExists('billing_address_1_field', runReactApp1)

function runReactApp1() {
  setTimeout(() => {
    const target = document.getElementById(
      'billing_address_1_field',
    ) as HTMLElement
    const targetParent = target.parentNode as HTMLElement // 找到目標元素的父節點
    const appRoot = document.createElement('div')
    appRoot.setAttribute('id', renderId1)
    targetParent.insertBefore(appRoot, target)

    ReactDOM.createRoot(document.getElementById(renderId1)!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  }, 0)
}

waitTillElementExists('shipping_address_1_field', runReactApp2)

function runReactApp2() {
  setTimeout(() => {
    const target = document.getElementById(
      'shipping_address_1_field',
    ) as HTMLElement
    const targetParent = target.parentNode as HTMLElement // 找到目標元素的父節點
    const appRoot = document.createElement('div')
    appRoot.setAttribute('id', renderId2)
    targetParent.insertBefore(appRoot, target)

    ReactDOM.createRoot(document.getElementById(renderId2)!).render(
      <React.StrictMode>
        <App2 />
      </React.StrictMode>,
    )
  }, 0)
}

function waitTillElementExists(id: string, callback: () => void) {
  const interval = setInterval(function () {
    const element = document.getElementById(id)
    if (element) {
      callback() // 如果元素存在，執行callback
      clearInterval(interval) // 停止檢查
    }
  }, 300)
}
