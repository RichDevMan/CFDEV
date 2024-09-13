<script lang="ts" setup>
const { t } = useI18n()
const router = useRouter()
const playerStore = usePlayerStore()
const siteStore = useSiteStore()
const { withdraw } = useWalletStore()
const withdrawAmount = ref(0)
const tPwd = ref('')
const withdrawFee = computed(() => withdrawFeeCount())
const showSectionType = ref(true)
await useAsyncData(async () => {})
// methods
const goWithdraw = async () => {
  if (
    withdrawAmount.value < siteStore.siteData.minWithdrawAmount ||
    withdrawAmount.value > siteStore.siteData.maxWithdrawAmount
  ) {
    ElNotification({
      title: `${t('提款金額不符合規定')}`,
      type: 'error',
      duration: 1000,
      showClose: false
    })
    return
  }
  if (siteStore.siteData.transactionPasswordRequired) {
    if (!tPwd.value) {
      ElNotification({
        title: `${t('請輸入交易密碼')}`,
        type: 'error',
        duration: 1000,
        showClose: false
      })
      return
    }
  }
  const withdrawRes = await withdraw(
    siteStore.siteData.transactionPasswordRequired
      ? {
          amount: JSON.stringify(withdrawAmount.value),
          password: tPwd.value
        }
      : { amount: JSON.stringify(withdrawAmount.value) }
  )
  if (withdrawRes.success) {
    ElNotification({
      title: `${t('提款成功')}`,
      type: 'success',
      duration: 1000,
      showClose: false
    })
    withdrawAmount.value = 0
    tPwd.value = ''
    await playerStore.fetchInfo()
  }
}
const withdrawFeeCount = () => {
  const fee =
    withdrawAmount.value * siteStore.siteData?.withdrawFeeRatio +
    siteStore.siteData?.withdrawFeeFixed
  return fee < 1 ? 0 : new Intl.NumberFormat().format(fee)
}
await onMounted(async () => {
  if (siteStore.siteData?.smsVerify === 3) {
    if (!playerStore.playerInfo.smsVerify) {
      await navigateTo('/user/smsVerify')
    }
  } else if (!playerStore.playerInfo?.bankInfo) {
    await navigateTo('/user/bank')
  } else if (playerStore.playerInfo?.bankInfo.status !== 1) {
    await navigateTo('/user/bank')
  }
  const bank = siteStore.siteData?.depositOptions.bank.find((item) => {
    return item === playerStore.playerInfo?.bankInfo.bankName
  })
  if (!bank) {
    showSectionType.value = false
  } else {
    showSectionType.value = true
  }
})
</script>

<template>
  <div class="pages">
    <div class="router">
      <div>
        <i class="fas fa-home"></i>
      </div>
      <div class="home" @click="navigateTo('/user')">{{ $lang('首頁') }}</div>
      <div><i class="fa-solid fa-angle-right"></i></div>
      <div>{{ $lang('提領') }}</div>
    </div>
    <div class="formSection">
      <div class="formContent">
        <div v-if="showSectionType">
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('銀行') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <div class="textNormal">
                  {{ playerStore.playerInfo.bankInfo.bankName }}
                </div>
                <div style="margin: 0 0 0 10px">
                  {{ playerStore.playerInfo.bankInfo.branch }}
                </div>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('戶名') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <div class="textNormal">
                  {{ playerStore.playerInfo.bankInfo.account }}
                </div>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('帳號') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <div class="textNormal">
                  {{ playerStore.playerInfo.bankInfo.accountNo }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div v-else>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('交易所') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <div class="textNormal">
                  {{ playerStore.playerInfo.bankInfo.bankName }}
                </div>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('地址') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <div class="textNormal">
                  {{ playerStore.playerInfo.bankInfo.accountNo }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="form_input">
          <div class="inputTitle">
            {{ $lang('金額') }}
          </div>
          <div class="inputIten">
            <input
              v-trim-input
              id="withdrawAmount"
              v-model="withdrawAmount"
              type="number"
              class="input_style"
              autocomplete="off"
            />
          </div>
          <div class="inputTipsBlack">
            <span
              >{{ $lang('限制金額') }}：{{
                new Intl.NumberFormat('zh-TW').format(
                  siteStore.siteData.minWithdrawAmount
                )
              }}
              ~
              {{
                new Intl.NumberFormat('zh-TW').format(
                  siteStore.siteData.maxWithdrawAmount
                )
              }}</span
            >
            <span
              >{{ $lang('手續費') }}：{{
                withdrawAmount > 0 ? withdrawFee : 0
              }}</span
            >
          </div>
        </div>
        <div class="form_input">
          <div class="inputTitle">
            {{ $lang('交易密碼') }}
          </div>
          <div class="inputIten">
            <input
              v-trim-input
              v-model="tPwd"
              type="password"
              class="input_style"
              autocomplete="off"
            />
          </div>
        </div>
        <button type="button" class="buttonWhGreen" @click="goWithdraw">
          {{ $lang('送出') }}
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.pages
  padding: 20px
  @media screen and (max-width: 768px)
    padding: 10px
</style>

<style scoped lang="sass">
.router
  width: 100%
  height: 35px
  position: relative
  border-radius: 5px
  font-size: 16px
  background-color: #afafaf
  color: #fff
  display: flex
  align-items: center
  justify-content: flex-start
  border: 1px solid #fff
  svg
    padding: 0 20px 0 10px
  .home
    cursor: pointer
</style>

<style scoped lang="sass">
.formSection
  margin: 20px 0 0 0
  width: 100%
  height: 58vh
  position: relative
  border-radius: 5px
  font-size: 16px
  background-color: #afafaf
  border: 1px solid #fff
  overflow-y: auto
  @media screen and (max-width: 768px)
    height: 48vh
  .formContent
    width: 100%
</style>

<style scoped lang="sass">
.buttonWhGreen
  margin: 30px auto
  width: 240px
  height: 40px
  background-color: #5e5269
  border-radius: 5px
  text-align: center
  line-height: 40px
  cursor: pointer
  font-size: 16px
  color: #fff
  display: flex
  justify-content: center
  &:hover
    background-color: #3e82a9
  @media screen and (max-width: 768px)
    width: 135px
  svg
    padding: 0 10px 0 0
.buttonWhite
  margin: 30px 0 0 30px
  width: 100px
  height: 40px
  background-color: #fff
  border-radius: 5px
  text-align: center
  line-height: 40px
  cursor: pointer
  font-size: 16px
  color: #000
  @media screen and (max-width: 768px)
    width: 135px
.active
  background-color: #37d75c
  color: #fff
</style>

<style scoped lang="sass">
.form_input
  width: 100%
  border-radius: 5px
  margin: 20px auto
  font-size: 16px
  overflow: hidden
  position: relative
  display: block
  display: flex
  justify-content: center
  align-items: center
  flex-wrap: wrap
  .inputTitle
    background-color: #fff
    border-radius: 5px
    width: 30%
    display: block
    text-align: center
    margin: 0 10px 0 0
    font-size: 16px
    padding: 5px 0
    @media screen and (max-width: 768px)
      width: 32%
      font-size: 14px
  .empty
    background-color: #fff0
  .inputIten
    border-radius: 5px
    position: relative
    width: 60%
    background-color: #e2efff
    padding: 5px 15px
    .input_text
      display: flex
      justify-content: flex-start
      align-items: center
    .input_style
      border-radius: 5px
      border: none
      background-color: #e2efff
      height: 100%
      width: 100%
    input
      width: 100%
      height: 100%
      border: none
      background-color: #e2efff
      font-size: 16px
      outline: none
      &::placeholder
        color: #000
      @media screen and (max-width: 768px)
        font-size: 14px
    select
      width: 100%
      border: none
      background-color: #e2efff
      outline: none
    .eyes
      position: absolute
      right: 5px
      top: 50%
      transform: translateY(-50%)
      z-index: 99
      cursor: pointer
    .imgUploader
      display: flex
      justify-content: center
  .inputTipsBlack
    width: 90%
    display: flex
    justify-content: flex-end
    span
      margin: 10px 0 0 20px
      color: #fff
  .noBackground
    background-color: #fff0
  .padding_Right_more
    padding: 5px 25px 5px 15px
  .flexStyle
    display: flex
    justify-content: flex-start
    align-items: center
    input
      margin: 5px 0 5px 10px
  .tipsLeft
    width: 30%
    @media screen and (max-width: 768px)
      width: 32%
  .tipsRight
    width: 60%
    display: block
    text-align: center
    font-size: 12px
    padding: 2px 0
    color: #cf0000
    text-align: right
    @media screen and (max-width: 768px)
      width: 60%
      font-size: 10px
  .fullFlex
    width: 100%
  .inputCheck
    width: 5%
    @media screen and (max-width: 768px)
     width: 10%
  .text
    width: 85%
    @media screen and (max-width: 768px)
     width: 80%
     font-size: 12px
</style>
