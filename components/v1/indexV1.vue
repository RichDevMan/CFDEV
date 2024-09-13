<script lang="ts" setup>
import logo from '@/assets/image/index_ai/logo.png'
const router = useRouter()
const isPopupSwitchChecked = ref()
const siteStore = useSiteStore()
const { queryChatbox } = siteStore
const { t } = useI18n()
const { isLogin } = useAuthStore()
const menuClick = (link: string) => {
  if (link.includes('http')) {
    window.open(link)
  } else if (link === 'openChatBox') {
    openChatBox()
  } else {
    document.getElementById('topDiv').scrollIntoView({ behavior: 'smooth' })
    navigateTo(link)
  }
}

const linkClick = (link: string) => {
  document.getElementById('topDiv').scrollIntoView({ behavior: 'smooth' })
  if (link.includes('http')) {
    window.open(link)
  } else {
    router.push(link)
  }
}

const functionButtonClick = () => {
  document.getElementById('topDiv').scrollIntoView({ behavior: 'smooth' })
}

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

const menuItems = ref([
  {
    type: 'text',
    text: `${t('啟動能源 ')}`,
    link: '/game'
  },
  {
    type: 'text',
    text: `${t('服務項目')}`,
    link: '/service'
  },
  {
    type: 'text',
    text: `${'CSR'}${t('企業社會責任')}`,
    link: '/csr'
  },
  {
    type: 'dropdown',
    text: `${t('相關資訊')}`,
    subItems: [
      {
        text: `${t('比較監管')}`,
        link: '/supervision'
      },
      {
        text: `${t('法律文件')}`,
        link: '/lawDocument'
      },
      {
        text: `${t('項目總覽')}`,
        link: '/progectOverview'
      },
      {
        text: `${t('資金保障')}`,
        link: '/fundGuarantee'
      }
    ]
  },
  {
    type: 'text',
    text: `${t('聯絡我們')}`,
    link: 'openChatBox'
  }
])

const footerList = ref([
  {
    title: `${t('關於我們')}`,
    items: [
      {
        name: `${t('比較監管')}`,
        link: '/supervision'
      },
      {
        name: `${t('法律文件')}`,
        link: '/lawDocument'
      },
      {
        name: `${t('項目總覽')}`,
        link: '/progectOverview'
      },
      {
        text: `${t('資金保障')}`,
        link: '/fundGuarantee'
      }
    ]
  },
  // {
  //   title: `${t('最新消息')}`,
  //   items: [
  //     { name: `${t('媒體報導')}`, link: '' },
  //     { name: `${t('近期活動')}`, link: '' }
  //   ]
  // },
  // {
  //   title: `${t('支援中心')}`,
  //   items: [
  //     { name: `${t('支援中心')}`, link: '' },
  //     { name: `${t('隱私權政策')}`, link: '' },
  //     { name: `${t('使用者條款')}`, link: '' }
  //   ]
  // },
  {
    title: `${t('聯絡我們')}`,
    items: [{ name: `${t('聯絡我們')}`, link: 'openChatBox' }]
  }
])

onMounted(async () => {
  const queryChatboxPromise = queryChatbox()
  queryChatboxPromise
    .then((queryChatboxRes) => {
      // 處理響應結果
      console.log('queryChatboxRes', queryChatboxRes.data)
    })
    .catch((error) => {
      console.error('Error loading queryChatboxRes data:', error)
    })
})
watch(
  () => router.currentRoute.value.path,
  async () => {
    document.getElementById('innnerPage').scrollIntoView({ behavior: 'smooth' })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
)
const referrerCodeCookiee = useCookie('referrerCode', {
  expires: new Date(new Date().getTime() + 60 * 60 * 24 * 7 * 1000) // 1 week from now
}) as any
// action
await useAsyncData(async () => {
  console.log('referrer set')
  if (router.currentRoute.value.query.referrer) {
    referrerCodeCookiee.value = router.currentRoute.value.query.referrer
  }
})
</script>
<template>
  <div class="home">
    <div id="topDiv"></div>
    <div class="header" id="header">
      <input id="popupSwitch" v-model="isPopupSwitchChecked" type="checkbox" />
      <div class="logo" @click="router.push('/')">
        <img :src="siteStore.siteData.logo" alt="" />
      </div>
      <div class="nav">
        <input id="listMenuSwitch" type="checkbox" />
        <div class="button">
          <div class="login" v-if="!isLogin()" @click="router.push('/login')">
            {{ $lang('登入') }}
          </div>
          <div class="login" v-else @click="router.push('/user/info')">
            {{ $lang('會員中心') }}
          </div>
          <div
            class="register"
            v-if="!isLogin()"
            @click="router.push('/register')"
          >
            {{ $lang('註冊') }}
          </div>
        </div>
        <div class="menu">
          <div
            v-for="(item, index) in menuItems"
            :key="index"
            class="menuList"
            :class="{
              borderBox: item.type === 'dropdown'
            }"
            @click="menuClick(item.link)"
          >
            <div v-if="item.type === 'text'" class="text">{{ item.text }}</div>
            <div v-else-if="item.type === 'dropdown'" class="box">
              <label for="listMenuSwitch">
                {{ item.text }} <i class="fa-solid fa-caret-up"></i>
                <div class="listMenu">
                  <div
                    v-for="(subItem, subIndex) in item.subItems"
                    :key="subIndex"
                    class="list"
                    @click="menuClick(subItem.link)"
                  >
                    {{ subItem.text }}
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <input id="listPopMenuSwitch" type="checkbox" />
      <div class="popupMenu">
        <label
          v-for="(item, index) in menuItems"
          :key="index"
          for="popupSwitch"
          class="menuList"
          @click="menuClick(item.link)"
        >
          <div v-if="item.type === 'text'" class="text">{{ item.text }}</div>
          <div v-else-if="item.type === 'dropdown'" class="box">
            <label for="listPopMenuSwitch">
              {{ item.text }} <i class="fa-solid fa-caret-up"></i>
            </label>
            <div class="listMenu">
              <div
                v-for="(subItem, subIndex) in item.subItems"
                :key="subIndex"
                class="list"
                @click="menuClick(subItem.link)"
              >
                {{ subItem.text }}
              </div>
            </div>
          </div>
        </label>
        <div class="register" @click="navigateTo('/register')">
          {{ $lang('註冊') }}
        </div>
      </div>
      <div class="mobileSwitch">
        <label for="popupSwitch">
          <div v-if="!isPopupSwitchChecked" class="button">
            <i class="fas fa-bars"></i>
          </div>
          <div v-if="isPopupSwitchChecked" class="button">
            <i class="fas fa-times close-button"></i>
          </div>
        </label>
      </div>
    </div>
    <div class="innnerPage" id="innnerPage">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="containers">
        <div class="footerMenu">
          <div
            v-for="(footerItems, index) in footerList"
            :key="index"
            class="footerList"
          >
            <div class="title">{{ footerItems.title }}</div>
            <div
              v-for="(items, itemsIndex) in footerItems.items"
              :key="itemsIndex"
              class="items"
            >
              <div class="link" @click="linkClick(items.link)">
                {{ items.name }}
              </div>
            </div>
          </div>
        </div>
        <div class="text">
          <div class="textBox">{{ siteStore.siteData.copRight }}。</div>
          <div class="textBox">
            {{ siteStore.siteData.title
            }}{{
              $lang(
                '的使命在於為個人和機構客戶營造最好的、最為透明的交易環境從而使交易者能夠更專注於交易本身，同時致力於為交易者提供最優的點差、執行價格和服務。'
              )
            }}
          </div>
          <div class="textBox">
            {{
              $lang(
                '免責聲明：此為高波動性投資產品！加密貨幣交易並非適合任何人！請確保您知道其中的風險'
              )
            }}。 {{ siteStore.siteData.title
            }}{{
              $lang(
                '不會對加密貨幣交易提供任何建議與意見，且非為金融顧問，其所提供的任何服務皆基於公司運作'
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="goToTop" @click="functionButtonClick()">
      <i class="fa-solid fa-chevron-up"></i>
    </div>
  </div>
</template>
<style scoped lang="sass">
.home
  width: 100%
  position: relative
  box-sizing: border-box
  height: 100dvh
  overflow-y: auto
  .header
    width: 100%
    height: 80px
  .innerPage
    width: 100%
  .footer
    width: 100%
    box-sizing: border-box
  .goToTop
    width: 50px
    height: 50px
</style>

<style scoped lang="sass">
.header
  width: 100%
  background-color: #fff
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  flex-wrap: nowrap
  padding: 0 36px
  position: fixed
  z-index: 100
  @media screen and (max-width: 1000px)
    padding: 0 12px
  input
    display: none
  .logo
    cursor: pointer
    img
      // width: 180px
      height: 45px
      max-width: 250px
  .nav
    width: 100%
    height: 100%
    display: flex
    flex-direction: row
    justify-content: space-between
    align-items: center
    padding-left: 24px
    @media screen and (max-width: 1000px)
      padding-left: 0
      justify-content: flex-end
    input
      display: none
    .button
      display: flex
      flex-direction: row
      justify-content: start
      align-items: center
      .login, .register
        min-width: 120px
        padding: 10px
        margin: .5em
        font-size: 16px
        letter-spacing: .8px
        text-align: center
        font-weight: bold
        border: 1px solid #ffcf01
        border-radius: 5px
        color: #ffcf01
        background-color: rgba(0,0,0,0)
        cursor: pointer
        transition: all .5s ease-in-out
        &:hover
          background-color: rgba(115, 160, 179, .2)
        @media screen and (max-width: 1000px)
          min-width: 60px
          margin-right: 12px
      .register
        background-color: #ffcf01
        border: 1px solid #ffcf01
        color: rgba(31, 29, 49, .8)
        &:hover
          background-color: #9a7d00
        @media screen and (max-width: 1000px)
          display: none
    .menu
      display: flex
      flex-direction: row
      justify-content: start
      align-items: center
      flex-wrap: nowrap
      @media screen and (max-width: 1000px)
        display: none
      .menuList
        padding: 8px 12px
        cursor: pointer
        color: #000
        text-wrap: nowrap
        border-bottom: 1px solid transparent
        transition: color .5s ease-in-out
        &:hover
          color: #ffcf01
          border-color: #ffcf01
        .text
          font-size: 16px
          font-weight: bold
        .box
          position: relative
          label
            font-size: 16px
            font-weight: bold
            cursor: pointer
            svg
              margin-left: 4px
              transform: rotate(180deg)
              transition: transform .3s ease-in-out
          .listMenu
            width: 100px
            display: none
            flex-direction: column
            justify-content: start
            align-items: start
            padding: 8px
            position: absolute
            top: 100%
            left: 0
            z-index: 1
            background-color: #fff
            border: 1px solid #ffcf01
            border-radius: 5px
            .list
              width: 100%
              padding: 8px 0
              font-size: 16px
              font-weight: bold
              text-wrap: nowrap
              text-align: center
              cursor: pointer
              color: #000
      .borderBox
        &:hover
          border-color: transparent
  input
    display: none
  .popupMenu
    width: 270px
    height: 100dvh
    display: flex
    flex-direction: column
    justify-content: flex-start
    align-items: flex-start
    padding: 24px 30px 120px
    position: absolute
    top: 80px
    right: -100%
    background-color: #fff
    transition: right .5s ease-in-out
    .menuList
      width: 100%
      margin: 12px 0
      cursor: pointer
      .text
        font-size: 16px
        font-weight: bold
        color: #000
      .box
        position: relative
        label
          font-size: 16px
          font-weight: bold
          cursor: pointer
          svg
            margin-left: 4px
            transform: rotate(180deg)
            transition: transform .3s ease-in-out
        .listMenu
          width: 100px
          display: none
          flex-direction: column
          justify-content: start
          align-items: start
          padding: 8px
          .list
            width: 100%
            padding: 8px 0
            font-size: 16px
            font-weight: bold
            text-wrap: nowrap
            cursor: pointer
            color: #000
    .register
      width: 100%
      padding: 5px 10px
      margin-top: 12px
      font-size: 14px
      font-weight: bold
      text-align: center
      color: #000
      letter-spacing: .8px
      background-color: #ffcf01
      border: 1px solid #ffcf01
      border-radius: 20px
      cursor: pointer
      transition: all .5s ease-in-out
      &:hover
        background-color: #25ad25
  .mobileSwitch
    display: none
    @media screen and (max-width: 1000px)
      display: block
      margin: 0 12px
      label
        cursor: pointer
        .button
          font-size: 24px
          color: #000
</style>

<style scoped lang="sass">
#listMenuSwitch:checked ~ .menu .menuList .box .listMenu,
#listPopMenuSwitch:checked ~ .popupMenu .menuList .box .listMenu
  display: flex
#listMenuSwitch:checked ~ .menu .menuList .box label svg,
#listPopMenuSwitch:checked ~ .popupMenu .menuList .box label svg
  transform: rotate(360deg)
#popupSwitch:checked ~ .popupMenu
  right: 0
</style>

<style scoped lang="sass">
.footer
  width: 100%
  padding: 0 40px
  background-color: #fff
  @media screen and (max-width: 768px)
    padding: 0 24px
  .containers
    max-width: 1200px
    width: 100%
    margin: 0 auto
    .footerMenu
      width: 100%
      display: flex
      flex-direction: row
      justify-content: center
      align-items: flex-start
      flex-wrap: wrap
      padding: 40px 0
      @media screen and (max-width: 768px)
        padding: 20px 0
      .footerList
        width: 12%
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        @media screen and (max-width: 768px)
          width: 50%
          margin: 20px 0
          align-items: flex-start
        .title
          margin-bottom: 12px
          font-size: 18px
          font-weight: bold
          color: #0f171c
        .items
          display: flex
          flex-direction: column
          justify-content: center
          align-items: center
          @media screen and (max-width: 768px)
            align-items: flex-start
          .link
            margin: 8px 0
            font-size: 16px
            font-weight: 400
            color: #0f171c
            cursor: pointer
    .text
      width: 100%
      display: flex
      flex-direction: column
      justify-content: center
      align-items: flex-start
      padding-bottom: 40px
      .textBox
        margin: 4px 0
        font-size: 12px
        font-weight: bolder
        color: #0f171c
</style>

<style scoped lang="sass">
.goToTop
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  position: fixed
  bottom: 40px
  right: 40px
  z-index: 99
  border-radius: 500px
  background: rgba(233, 233, 233, 0.5)
  box-shadow: 0px 0px 7px -6px rgba(0, 0, 0, 0.2)
  cursor: pointer
  svg
    font-size: 16px
    color: #0f171c
    transition: all .3s ease-in-out
    &:hover
      transform: scale(1.2)
</style>
