// wallet store : withdraw, deposit
import { defineStore } from 'pinia'
import { ElNotification } from 'element-plus'

export const useWalletStore = defineStore('wallet', () => {
  const nuxtapp = useNuxtApp()
  const { t } = nuxtapp.$i18n
  const { api: $API } = useApi()
  const { getAccessToken } = useAuthStore()
  const withdrawRecords = ref([])
  const depositRecords = ref([])
  const queryWithdrawRecord = async (params: any) => {
    try {
      const res: any = await $API(`/player/withdraw/query`, {
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
              title: `${t('查詢提款紀錄')}`,
              showClose: false,
              message: `${t(res.message)}`
            })
        withdrawRecords.value = []
        return {
          success: false,
          message: `${t(res.message)}`
        }
      }
      withdrawRecords.value = res.data
      return {
        success: true,
        data: res.data
      }
    } catch (error: any) {
      console.log(`query withdraw record error: `, error)
      // ElNotification({
      //   title: `${t('查詢提款紀錄錯誤')}`,
      //   showClose: false,
      //   message: error.toString()
      // })
      return {
        success: false,
        message: error.toString()
      }
    }
  }
  const queryDepositRecords = async (params: any) => {
    try {
      const res: any = await $API(`/player/deposit/query`, {
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
              title: `${t('存款失敗')}`,
              showClose: false,
              message: `${t(res.message)}`
            })
        depositRecords.value = []
        return {
          success: false,
          message: `${t(res.message)}`
        }
      }
      depositRecords.value = res.data
      return {
        success: true,
        data: res.data
      }
    } catch (error: any) {
      console.log(`deposit error: `, error)
      // ElNotification({
      //   title: `${t('存款錯誤')}`,
      //   showClose: false,
      //   message: error.toString()
      // })
      return {
        success: false,
        message: error.toString()
      }
    }
  }
  const withdraw = async (params: any) => {
    try {
      const res: any = await $API(`/player/withdraw`, {
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
              title: `${t('提款失敗')}`,
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
      console.log(`withdraw error: `, error)
      // ElNotification({
      //   title: `${t('提款錯誤')}`,
      //   showClose: false,
      //   message: error.toString()
      // })
      return {
        success: false,
        message: error.toString()
      }
    }
  }

  return {
    withdrawRecords,
    depositRecords,
    queryWithdrawRecord,
    withdraw,
    queryDepositRecords
  }
})
