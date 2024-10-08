import { defineStore } from 'pinia'
import { ElNotification } from 'element-plus'
export const useOrderStore = defineStore('order', () => {
  const nuxtapp = useNuxtApp()
  const { t } = nuxtapp.$i18n
  const { api: $API } = useApi()
  const { getAccessToken, setAccessToken } = useAuthStore()
  const orders = ref([])
  const queryOrder = async (params: any) => {
    try {
      const res: any = await $API(`/player/order/query`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: getAccessToken()
        },
        body: JSON.stringify(params)
      })
      if (res.statusCode !== 200) {
        res.statusCode === 400
          ? null
          : ElNotification({
              title: `${t('查詢訂單紀錄')}`,
              showClose: false,
              message: `${t(res.message)}`
            })
        return {
          success: false,
          message: `${t(res.message)}`
        }
      }
      return {
        success: true,
        data: res.data
      }
    } catch (error: any) {
      console.log(`fetch player order error: `, error)
      // ElNotification({
      //   title: `${t('獲取訂單紀錄錯誤')}`,
      //   showClose: false,
      //   message: error.toString()
      // })
      return {
        success: false,
        message: error.toString()
      }
    }
  }
  const bet = async (params: any) => {
    try {
      const res: any = await $API(`/player/order/bet`, {
        method: 'POST',
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json',
          Authorization: getAccessToken()
        }
      })
      if (res.statusCode !== 200) {
        res.statusCode === 400
          ? null
          : ElNotification({
              title: `${t('下注失敗')}`,
              showClose: false,
              message: res.data.message
            })
        return {
          success: false,
          message: res.data.message
        }
      }
      return {
        success: true,
        data: res.data
      }
    } catch (error: any) {
      console.log(`post player bet error: `, error)
      ElNotification({
        title: `${t('下注錯誤')}`,
        showClose: false,
        message: error.toString()
      })
      return {
        success: false,
        message: error.toString()
      }
    }
  }
  return {
    orders,
    queryOrder,
    bet
  }
})
