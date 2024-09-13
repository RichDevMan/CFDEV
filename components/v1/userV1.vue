<script lang="ts" setup>
const PlayerStore = usePlayerStore()
const siteStore = useSiteStore()
const { signout } = useAuthStore()
const router = useRouter()
const homeRouter = ref('/')
const ticketStore = useTicketStore()
const { queryTicket } = ticketStore
const intervalId = ref(null)
const { queryChatbox } = siteStore
await useAsyncData(async () => {
  console.log('user.vue useAsyncData')
  if (siteStore.siteData?.smsVerify === 1) {
    if (!PlayerStore.playerInfo?.smsVerify) {
      await navigateTo('/user/smsVerify')
    }
  }
})
const checkRouter = () => {
  console.log('router.currentRoute.value.name', router.currentRoute.value.name)
  if (router.currentRoute.value.name === 'user') {
    homeRouter.value = '/'
  } else {
    homeRouter.value = '/user'
  }
}
await onMounted(async () => {
  checkRouter()
  const queryChatboxPromise = queryChatbox()
  queryChatboxPromise
    .then((queryChatboxRes) => {
      // 處理響應結果
      console.log('queryChatboxRes', queryChatboxRes.data)
    })
    .catch((error) => {
      console.error('Error loading queryChatboxRes data:', error)
    })
  console.log('setInterval queryTicket')
  const queryTicket_INTERVAL = 3 * 1000
  intervalId.value = setInterval(async () => {
    const res = await queryTicket()
    if (!res) {
      clearInterval(intervalId.value)
      intervalId.value = null
    }
  }, queryTicket_INTERVAL)
})
onBeforeUnmount(() => {
  if (intervalId.value) {
    console.log('clearInterval queryTicket', intervalId.value)
    clearInterval(intervalId.value)
    intervalId.value = null
  }
})
watch(
  () => router.currentRoute.value.name,
  () => {
    checkRouter()
    if (siteStore.siteData?.smsVerify === 1) {
      if (!PlayerStore.playerInfo?.smsVerify) {
        return navigateTo('/user/smsVerify')
      }
    }
  }
)
</script>

<template>
  <div class="page">
    <div class="backgroundSection">
      <!-- <video
        autoplay="autoplay"
        muted="muted"
        playsinline=""
        loop="loop"
        src="@/assets/image/bg-img2.mp4"
        class="backgroundVideo"
      ></video> -->
    </div>
    <div class="pageContent">
      <div class="infoSection">
        <div class="webStyle">
          <div class="title">
            {{ $lang('總資產') }}
          </div>
          <div class="value">
            $
            {{
              new Intl.NumberFormat('zh-TW').format(
                PlayerStore.playerInfo?.balance
              )
            }}
          </div>
          <div class="title">
            {{ $lang('帳號') }}
          </div>
          <div class="value">
            {{ $lang('歡迎') }}
            {{ PlayerStore.playerInfo?.username }}
          </div>
        </div>
        <div class="actionSection">
          <div class="buttonFill" @click="navigateTo(homeRouter)">
            {{ $lang('首頁') }}
          </div>
          <div class="buttonWhite" @click="signout">
            {{ $lang('登出') }}
          </div>
        </div>
      </div>
      <div class="contentection">
        <!-- user panel div-->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.page
  position: relative
  width: 100vw
  height: 100vh
  background-color: #08001a
</style>

<style scoped lang="sass">
.backgroundSection
  position: relative
  .backgroundVideo
    width: 100vw
    height: 100vh
    object-fit: cover
</style>

<style scoped lang="sass">
.pageContent
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  max-width: 1100px
  width: 98%
  background-color: #d1d1d1
  border-radius: 10px
  max-height: 80vh
  overflow: hidden
  display: flex
  justify-content: space-between
  align-items: stretch
  @media screen and (max-width: 768px)
    background-color: #d1d1d100
    flex-wrap: wrap
    width: 95vw
    padding: 2px
    max-height: 80vh
</style>

<style scoped lang="sass">
.infoSection
  position: relative
  width: 25%
  min-height: 70vh
  max-height: 80vh
  background-color: #fff
  padding: 30px
  overflow-y: auto
  @media screen and (max-width: 768px)
    background-color: #d1d1d100
    width: 100%
    min-height: 120px
    max-height: 150px
    display: flex
    justify-content: space-between
    align-items: center
    padding: 5px 0
</style>

<style scoped lang="sass">
.webStyle
  position: relative
  height: calc( 100% - 200px )
  min-height: 220px
  @media screen and (max-width: 768px)
    width: 70%
    display: flex
    justify-content: flex-start
    align-items: center
    flex-wrap: wrap
  .title
    line-height: 1.2em
    padding: 5px 0
    text-align: center
    font-size: 15px
    background-color: #d1d1d1
    border-radius: 5px
    margin: 20px 10px
    color: #000
    @media screen and (max-width: 768px)
      width: 30%
  .value
    font-size: 18px
    font-weight: 500
    color: black
    margin: 20px 10px
    @media screen and (max-width: 768px)
      width: 60%
      color: #fff
      margin: 0px
</style>

<style scoped lang="sass">
.contentection
  width: 75%
  min-height: 70vh
  max-height: 80vh
  background-color: #d1d1d1
  padding: 5px
  overflow-y: auto
  @media screen and (max-width: 768px)
    border-radius: 10px
    width: 100%
    max-height: 58vh
</style>

<style scoped lang="sass">
.actionSection
  position: relative
  bottom: 0px
  padding: 0 0 20px 0
  width: 100%
  @media screen and (max-width: 768px)
    position: relative
    width: 30%
    bottom: 0
    left: 0
    transform: translateX(0) translateY(8%)
  .buttonWhite
    width: calc( 100% - 20px )
    height: 40px
    background-color: #fff
    border-radius: 5px
    text-align: center
    line-height: 40px
    cursor: pointer
    font-size: 16px
    color: #000
    border: 1px solid #000
    margin: 0 auto
    &:hover
      background-color: #f1f1f1
    @media screen and (max-width: 768px)
      width: 100%
      font-size: 12px
  .buttonFill
    width: calc( 100% - 20px )
    height: 40px
    background-color: #5e5269
    border-radius: 5px
    text-align: center
    line-height: 40px
    cursor: pointer
    font-size: 16px
    color: #fff
    margin: 0 auto 20px auto
    &:hover
      background-color: #3e82a9
    @media screen and (max-width: 768px)
      width: 100%
      font-size: 12px
      margin: 0px 0 25px 0
</style>
