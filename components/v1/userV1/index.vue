<script lang="ts" setup>
const router = useRouter()
const siteStore = useSiteStore()
const { locale } = useI18n()
const lang = locale.value
const { queryNews } = useSiteStore()
const news = ref([])
// methods
const openChatBox = () => {
  const urlPattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name and extension
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i'
  ) // fragment locator
  if (urlPattern.test(siteStore.chatbox)) {
    window.open(siteStore.chatbox, '_blank')
  }
}
const gameWindowOpen = () => {
  const { isLogin } = useAuthStore()
  if (isLogin()) {
    if (siteStore.siteData?.smsVerify === 1) {
      if (!PlayerStore.playerInfo?.smsVerify) {
        return navigateTo('/user/smsVerify')
      } else {
        window.open(`${window.location.origin}/game`, '_blank')
      }
    } else {
      window.open(`${window.location.origin}/game`, '_blank')
    }
  } else {
    navigateTo('/login')
  }
}
await useAsyncData(async () => {
  const path = 'user'
  const queryNewsRes = await queryNews(lang, path)
  news.value = queryNewsRes.data.result
  console.log('queryNewsRes.data', queryNewsRes.data)
})
</script>
<template>
  <div class="pages">
    <div ref="msgBox" class="prss">
      <i class="fas fa-bullhorn"></i>
      <noticeBar>
        <span class="noticeBarRight"></span>
        <span
          v-for="(item, index) in news"
          :key="index"
          class="pressItem"
          @click="navigateTo('/user/news')"
          >{{ item?.title }}</span
        >
      </noticeBar>
    </div>
    <div class="menu">
      <div class="menuItem" @click="gameWindowOpen">
        <div class="round">
          <span></span> <span></span> <span></span> <span></span>
        </div>
        <a>
          <div class="icon">
            <i class="fas fa-chart-line"></i>
          </div>
          <div class="title">
            {{ $lang('開始作業') }}
          </div>
        </a>
      </div>
      <!-- <div class="menuItem" @click="navigateTo('/user/deposit')">
        <div class="round">
          <span></span> <span></span> <span></span> <span></span>
        </div>
        <a>
          <div class="icon">
            <i class="fas fa-piggy-bank"></i>
          </div>
          <div class="title">
            {{ $lang('儲值') }}
          </div>
        </a>
      </div> -->
      <div class="menuItem" @click="navigateTo('/user/withdraw')">
        <div class="round">
          <span></span> <span></span> <span></span> <span></span>
        </div>
        <a>
          <div class="icon">
            <i class="fas fa-money-bill-alt"></i>
          </div>
          <div class="title">
            {{ $lang('薪資提領') }}
          </div>
        </a>
      </div>
      <div class="menuItem" @click="navigateTo('/user/info')">
        <div class="round">
          <span></span> <span></span> <span></span> <span></span>
        </div>
        <a>
          <div class="icon">
            <i class="fas fa-user"></i>
          </div>
          <div class="title">
            {{ $lang('會員資訊') }}
          </div>
        </a>
      </div>
      <div class="menuItem" @click="navigateTo('/user/message')">
        <div class="round">
          <span></span> <span></span> <span></span> <span></span>
        </div>
        <a>
          <div class="icon">
            <i class="fas fa-mail-bulk"></i>
          </div>
          <div class="title">
            {{ $lang('站內信') }}
          </div>
        </a>
      </div>
      <div class="menuItem" @click="navigateTo('/user/record')">
        <div class="round">
          <span></span> <span></span> <span></span> <span></span>
        </div>
        <a>
          <div class="icon">
            <i class="fas fa-list"></i>
          </div>
          <div class="title">
            {{ $lang('交易紀錄') }}
          </div>
        </a>
      </div>
      <!-- <a class="menuItem" @click="openChatBox">
        <div class="round">
          <span></span> <span></span> <span></span> <span></span>
        </div>
        <a>
          <div class="icon">
            <i class="fas fa-phone-volume"></i>
          </div>
          <div class="title">
            {{ $lang('線上客服') }}
          </div>
        </a>
      </a> -->
      <div class="menuItem" @click="navigateTo('/user/activity')">
        <div class="round">
          <span></span> <span></span> <span></span> <span></span>
        </div>
        <a>
          <div class="icon">
            <i class="fas fa-gift"></i>
          </div>
          <div class="title">
            {{ $lang('優惠活動') }}
          </div>
        </a>
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
.prss
  width: 100%
  height: 35px
  position: relative
  border-radius: 5px
  font-size: 16px
  background-color: #afafaf
  color: #fff
  display: flex
  svg
    padding: 8px 0 0 10px
  span
    cursor: pointer
</style>

<style scoped lang="sass">
.menu
  margin: 20px 0 0 0
  display: flex
  justify-content: space-around
  align-items: center
  flex-wrap: wrap
  @media screen and (max-width: 768px)
    justify-content: flex-start
    flex-direction: row
    align-content: flex-start
  .menuItem
    position: relative
    width: 140px
    height: 140px
    background-color: #e0e0e0
    border: 1px solid #5e5269
    border-radius: 10px
    margin: 15px
    cursor: pointer
    @media screen and (max-width: 768px)
      width: 26vw
      height: 26vw
      margin: 4px
    .round
      position: relative
      width: 100%
      height: 100%
      span
        width: 10px
        height: 10px
        border-radius: 50%
        position: absolute
        background-color: #afafaf
        border: solid 1px #afafaf
      span:nth-child(1)
        top: 10px
        left: 10px
      span:nth-child(2)
        top: 10px
        right: 10px
      span:nth-child(3)
        bottom: 10px
        left: 10px
      span:nth-child(4)
        bottom: 10px
        right: 10px
    a
      position: absolute
      left: 0
      right: 0
      top: 0
      bottom: 0
      display: flex
      justify-content: center
      align-items: center
      flex-direction: column
      margin: auto
      color: #000
      width: 85%
      height: 85%
      border-radius: 50%
      background-color: #ccc
      border: solid 1px #fff
      .icon
        font-size: 36px
        @media screen and (max-width: 768px)
          font-size: 30px
      .title
        font-size: 16px
        text-align: center
        @media screen and (max-width: 768px)
          font-size: 12px
</style>

<style scoped>
.msg-box {
  width: 100%;
  overflow: hidden;
  position: relative;
  .msg {
    position: absolute;
    line-height: 30px;
    font-size: 14px;
    white-space: nowrap;
  }
}
</style>

<style scoped lang="sass">
.noticeBarRight
  margin: 0 0 0 750px
  @media screen and (max-width: 768px)
    margin: 0 0 0 333px
.pressItem
  margin: 0 20px
</style>
