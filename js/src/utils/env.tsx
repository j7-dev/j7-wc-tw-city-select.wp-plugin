export const baseUrl = import.meta.env.VITE_BASE_URL || '/'
export const renderId1 = import.meta.env.VITE_RENDER_ID_1 || 'my-app'
export const renderId2 = import.meta.env.VITE_RENDER_ID_2 || 'my-app'

export const apiUrl = window?.appData?.apiUrl || '/wp-json'
export const apiTimeout = import.meta.env.VITE_API_TIMEOUT || '30000'
