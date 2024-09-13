<script lang="ts" setup>
const { t } = useI18n()
const router = useRouter()
const referrerCodeCookiee = useCookie('referrerCode', {
  expires: new Date(new Date().getTime() + 60 * 60 * 24 * 7 * 1000) // 1 week from now
}) as any
const siteStore = useSiteStore()
const signupData = ref({
  account: '',
  password: '',
  transactionPassword: '',
  username: '',
  referrerCode: '',
  countryCode: '+886',
  mobile: '',
  socialPlatform: 'line',
  socialId: '',
  additionalInfo: null
})
const showReferrerInput = ref(false)
const verifyPassword = ref('')
const verifyTransactionPassword = ref('')
const isChecked = ref(true)
const recaptchaCode = ref('')
const recaptchaCheckFunction = ref(null)
const passwordEyes = ref(false)
const tPasswordEyes = ref(false)
const passwordavailable = ref(false)
const tPasswordavailable = ref(false)
const { signup } = useAuthStore()

await useAsyncData(async () => {
  if (!router.currentRoute.value.name.inCludes('model')) {
    if (isLogin()) {
      navigateTo('/')
    }
  }
  if (router.currentRoute.value.query.referrer) {
    signupData.value.referrerCode = router.currentRoute.value.query.referrer
  } else if (referrerCodeCookiee.value) {
    signupData.value.referrerCode = referrerCodeCookiee.value
  }
})

const checkHepler = async (data) => {
  recaptchaCheckFunction.value = data
}
// methods
const showPassword = (type: boolean) => {
  passwordEyes.value = type
}
const showTranscationPassword = (type: boolean) => {
  tPasswordEyes.value = type
}
const checkPasswordRequired = () => {
  const passwordRegex = /^.{8,}$/
  passwordavailable.value = passwordRegex.test(signupData.value.password)
  if (!passwordavailable.value) {
    ElNotification({
      title: `${t('不符合密碼設定格式')}`,
      type: 'error',
      duration: 3000,
      showClose: false
    })
  }
}
const checkTransactionPasswordRequired = () => {
  const passwordRegex = /^.{8,}$/
  tPasswordavailable.value = passwordRegex.test(
    signupData.value.transactionPassword
  )
  if (!tPasswordavailable.value) {
    ElNotification({
      title: `${t('不符合交易密碼設定格式')}`,
      type: 'error',
      duration: 3000,
      showClose: false
    })
  } else if (
    signupData.value.transactionPassword === signupData.value.password
  ) {
    ElNotification({
      title: `${t('交易密碼不可與登入密碼相同')}`,
      type: 'error',
      duration: 3000,
      showClose: false
    })
  }
}
onMounted(() => {
  showReferrerInput.value = !!(
    router.currentRoute.value.query.referrer || referrerCodeCookiee.value
  )
  if (showReferrerInput.value) {
    signupData.value.referrerCode =
      router.currentRoute.value.query.referrer || referrerCodeCookiee.value
  }
})
const goRegister = async () => {
  console.log('goRegister')
  if (!signupData.value.account) {
    ElNotification({
      title: `${t('請輸入帳號')}`,
      type: 'error',
      duration: 1000,
      showClose: false
    })
    return
  }
  if (!signupData.value.password) {
    ElNotification({
      title: `${t('請輸入密碼')}`,
      type: 'error',
      duration: 1000,
      showClose: false
    })
    return
  }
  if (!passwordavailable.value) {
    ElNotification({
      title: `${t('不符合密碼設定格式')}`,
      type: 'error',
      duration: 3000,
      showClose: false
    })
  }
  if (signupData.value.password !== verifyPassword.value) {
    ElNotification({
      title: `${t('密碼不一致')}`,
      type: 'error',
      duration: 1000,
      showClose: false
    })
    return
  }
  if (siteStore.siteData.transactionPasswordRequired) {
    if (!signupData.value.transactionPassword) {
      ElNotification({
        title: `${t('請輸入交易密碼')}`,
        type: 'error',
        duration: 1000,
        showClose: false
      })
      return
    }
    if (!tPasswordavailable.value) {
      ElNotification({
        title: `${t('不符合交易密碼設定格式')}`,
        type: 'error',
        duration: 3000,
        showClose: false
      })
      return
    }
    if (signupData.value.transactionPassword === signupData.value.password) {
      ElNotification({
        title: `${t('交易密碼不可與登入密碼相同')}`,
        type: 'error',
        duration: 3000,
        showClose: false
      })
      return
    }
    // if (
    //   signupData.value.transactionPassword !== verifyTransactionPassword.value
    // ) {
    //   ElNotification({
    //     title: `${t('交易密碼不一致')}`,
    //     type: 'error',
    //     duration: 1000,
    //     showClose: false
    //   })
    //   return
    // }
  }
  if (!signupData.value.username) {
    ElNotification({
      title: `${t('請輸入用戶姓名')}`,
      type: 'error',
      duration: 1000,
      showClose: false
    })
    return
  }
  if (!signupData.value.countryCode) {
    ElNotification({
      title: `${t('請選擇國碼')}`,
      type: 'error',
      duration: 1000,
      showClose: false
    })
    return
  }
  if (!signupData.value.mobile) {
    ElNotification({
      title: `${t('請輸入手機號碼')}`,
      type: 'error',
      duration: 1000,
      showClose: false
    })
    return
  }
  if (signupData.value.countryCode == '+886') {
    const regex = /^09\d{8}$/
    if (signupData.value.mobile.match(regex) === null) {
      ElNotification({
        message: `${t('手機號碼開頭須為09，共10碼')}`,
        type: 'error'
      })
      return
    }
  }
  // if (!signupData.value.socialPlatform) {
  //   ElNotification({
  //     title: `${t('請選擇社群平台')}`,
  //     type: 'error',
  //     duration: 1000,
  //     showClose: false
  //   })
  //   return
  // }
  // if (!signupData.value.socialId) {
  //   ElNotification({
  //     title: `${t('請輸入社群ID')}`,
  //     type: 'error',
  //     duration: 1000,
  //     showClose: false
  //   })
  //   return
  // }
  if (!isChecked.value) {
    ElNotification({
      title: `${t('請勾選同意條款')}`,
      type: 'error',
      duration: 1000,
      showClose: false
    })
    return
  }
  const recaptchaCheck = await recaptchaCheckFunction.value.validate(
    recaptchaCode.value
  )
  if (!recaptchaCheck) {
    ElMessage({
      message: `${t('驗證碼錯誤')}`,
      type: 'error'
    })
  } else {
    const signupRes = await signup(signupData.value)
    console.log('signupRes', signupRes)
    if (signupRes.success) {
      referrerCodeCookiee.value = ''
      router.push('/')
    }
  }
}
const filterPhoneNumber = () => {
  // 过滤空格
  signupData.value.mobile = signupData.value.mobile.replace(/\s/g, '')
}
</script>
<template>
  <div>
    <div class="form-block page">
      <div class="gw template">
        <div class="form-container small">
          <div class="form-title">
            {{ $lang('註冊') }} {{ siteStore.siteData.title }}
            {{ $lang('帳號') }}
          </div>
          <div class="register_form">
            <div class="form-bg">
              <div v-if="showReferrerInput" class="input-classic">
                <span class="input-title"
                  >{{ $lang('推薦碼') }} ({{ $lang('選填') }})</span
                >
                <input
                  v-trim-input
                  v-model="signupData.referrerCode"
                  type="text"
                  name="pAcc"
                  :readonly="true"
                />
              </div>
              <div class="input-classic">
                <span class="input-title">{{ $lang('會員帳戶') }}</span>
                <input
                  v-trim-input
                  v-model="signupData.account"
                  type="text"
                  name="acc"
                  maxlength="12"
                  required
                />
              </div>
              <div class="input-classic">
                <span class="input-title">{{ $lang('密碼') }}</span>
                <input
                  v-trim-input
                  v-model="signupData.password"
                  type="password"
                  name="pwd"
                  maxlength="40"
                  @blur="checkPasswordRequired"
                />
                <div class="tips">
                  *{{
                    $lang(
                      '使用8個或更多字符，可包含字母、數字及符號，不分大小寫。'
                    )
                  }}
                </div>
              </div>
              <div class="input-classic">
                <span class="input-title">{{ $lang('密碼確認') }}</span>
                <input
                  v-trim-input
                  v-model="verifyPassword"
                  type="password"
                  name="pwdConfirm"
                  maxlength="40"
                />
              </div>
              <div
                v-if="siteStore.siteData.transactionPasswordRequired"
                class="input-classic"
              >
                <span class="input-title">{{ $lang('提款密碼') }}</span>
                <input
                  v-trim-input
                  v-model="signupData.transactionPassword"
                  type="password"
                  name="pwd"
                  maxlength="40"
                  @blur="checkTransactionPasswordRequired"
                />
                <div class="tips">
                  *{{
                    $lang(
                      '備註：使用8個或更多字符，可包含字母、數字及符號，不分大小寫。勿與會員密碼相同。'
                    )
                  }}
                </div>
              </div>
              <!-- <div
                v-if="siteStore.siteData.transactionPasswordRequired"
                class="input-classic"
              >
                <span class="input-title">{{ $lang('提款密碼確認') }}</span>
                <input
                  v-model="verifyTransactionPassword"
                  type="password"
                  name="pwdConfirm"
                  maxlength="40"
                />
              </div> -->
              <div class="input-classic">
                <span class="input-title">{{ $lang('真實姓名') }}</span>
                <input
                  v-trim-input
                  v-model="signupData.username"
                  name="name"
                  type="name"
                  maxlength="16"
                  required
                />
              </div>
              <div class="input-classic">
                <span class="input-title">{{ $lang('手機驗證') }}</span>
                <select v-model="signupData.countryCode" name="phoneCode">
                  <option
                    v-for="item in siteStore.siteData.localsOptions"
                    :key="item"
                  >
                    {{ item }}
                  </option>
                </select>
                <input
                  v-trim-input
                  v-model="signupData.mobile"
                  name="phone"
                  type="text"
                  maxlength="11"
                  required
                  @input="filterPhoneNumber"
                />
              </div>
              <!-- <div class="input-classic">
                <span class="input-title">{{ $lang('聯絡方式') }}</span>
                <select v-model="signupData.socialPlatform" name="contactType">
                  <option
                    v-for="item in siteStore.siteData.socialOptions"
                    :key="item"
                  >
                    {{ item }}
                  </option>
                </select>
                <input
                  v-model="signupData.socialId"
                  name="contactInfo"
                  type="text"
                />
              </div> -->
              <div class="input-classic">
                <span class="input-title b-$t">
                  <b class="zh_TW">{{ $lang('驗證碼') }}</b>
                </span>
                <div class="form-flex">
                  <recaptcha @check-hepler="checkHepler"></recaptcha>
                  <input
                    v-trim-input
                    v-model="recaptchaCode"
                    type="text"
                    name="vcode"
                    required
                  />
                </div>
              </div>
              <div class="submit-info">
                <label>
                  <input
                    v-model="isChecked"
                    class="submit-check"
                    type="checkbox"
                  />
                  {{
                    $lang(
                      '我已年滿 18 歲，並已閱讀、接受並同意條款和條件、規則、隱私政策、Cookie 政策以及與年齡驗證相關的政策'
                    )
                  }}
                  <a target="_blank">{{ $lang('條款和條件') }}</a>
                </label>
              </div>
              <div class="info-text span-$t text-center">
                <span class="zh_TW"
                  >{{ $lang('本頁面受 reCAPTCHA 機制保護，並遵守 Google 的') }}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    >{{ $lang('隱私權政策') }}</a
                  >
                  及
                  <a href="https://policies.google.com/terms" target="_blank">{{
                    $lang('服務條款')
                  }}</a
                  >。</span
                >
              </div>
              <div class="button-row">
                <a class="btn-cancel" @click="navigateTo('/login')">{{
                  $lang('取消')
                }}</a>
                <button
                  type="button"
                  class="submit btn-submit"
                  data-loading-text="<i class='fa fa-circle-notch fa-spin'></i> Loading......"
                  @click="goRegister"
                >
                  {{ $lang('送出') }}
                </button>
              </div>
            </div>
            <div class="form-sec-bg">
              <div class="info-text text-center span-$t">
                <i class="fas fa-exclamation-circle"></i>
                <span class="zh_TW"
                  >{{ $lang('請將您用來登入') }}
                  {{ siteStore.siteData.title }}
                  {{
                    $lang(
                      '的手機設定兩步驟驗證，這可以保護您的帳戶安全，使其不致於因為密碼外洩而遭盜用，即使密碼遭盜用，盜用者也無法成功登入您的帳戶。'
                    )
                  }}</span
                >
              </div>
            </div>
            <div class="link-text-block">
              <div class="span-$t">
                <span class="zh_TW">{{ $lang('已經註冊過?') }}</span>
                <a class="link-text" @click="navigateTo('/login')">{{
                  $lang('登入')
                }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass">
@import '@/assets/sass/register/model2/coin2.scss'
.form-block
  height: 100dvh
  overflow-y: auto
</style>
<style scoped lang="sass">
.tips
  font-size: 12px
  color: red
</style>
