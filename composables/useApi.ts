export const useApi = () => {
  // package $fetch method
  const runtimeConfig = useRuntimeConfig()
  const { APIBASE } = runtimeConfig.public
  const router = useRouter()
  const authStore = useAuthStore()
  const nuxtapp = useNuxtApp()
  const { t } = nuxtapp.$i18n
  const checkLoading = (value: any) => {
    const urlList = ['/player/ticket/query', '/accessTokenVerify']
    return urlList.includes(value)
  }
  return {
    api: async (url: string, options: any) => {
      const accessTokenVerifyUrl = url.includes('accessTokenVerify')
      const loading = accessTokenVerifyUrl
        ? null
        : router.currentRoute.value.name === 'game'
          ? null
          : checkLoading(url)
            ? null
            : ElLoading.service({
                lock: true,
                background: 'rgba(0, 0, 0, 0.6)'
              })
      try {
        const response: any = await $fetch(`${APIBASE}${url}`, {
          ...options
        })
        if (!checkLoading(url)) {
          console.log(`[Call API] ${url} response : `, response)
        }
        const { statusCode, data, message } = response
        // statusCode is 40x then show error message and navigate to /
        if ([402, 404, 409].includes(statusCode)) {
          if (process.client) loading?.close()
          response.message = `${t('請重新登入')}`
          authStore.setAccessToken('')
        } else {
          if (process.client) loading?.close()
        }
        return response
      } catch (error: any) {
        console.log(`API error : `, error.toString())
        if (process.client) loading?.close()
        return {
          statusCode: 400,
          message: `連線失敗, 請重新整理`
        }
      }
    }
  }
}
