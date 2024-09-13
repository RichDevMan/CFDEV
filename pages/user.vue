<script lang="ts" setup>
const playerStore = usePlayerStore()
const router = useRouter()
const route = useRoute()
const siteStore = useSiteStore()
const { signout } = useAuthStore()
const navSwitch = ref(false)
const popupSwitch = ref(false)
const { queryNews } = useSiteStore()
const news = ref([])
const { locale } = useI18n()
const lang = locale.value

await onMounted(async () => {
  const queryChatboxPromise = siteStore.queryChatbox()
  queryChatboxPromise
    .then((queryChatboxRes) => {
      // 處理響應結果
      console.log('queryChatboxRes', queryChatboxRes.data)
    })
    .catch((error) => {
      console.error('Error loading queryChatboxRes data:', error)
    })
})
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

const settingValue = ref(false)
const settingRoute = () => {
  if (route.path === '/user/setting') {
    settingValue.value = true
  } else {
    settingValue.value = false
  }
}

watch(
  () => route.path,
  () => {
    settingRoute()
  }
)
</script>

<template>
  <div v-if="!settingValue" class="v-application--wrap">
    <header
      id="default-app-bar"
      class="v-bar--underline v-sheet theme--light v-toolbar v-toolbar--absolute v-toolbar--flat v-app-bar v-app-bar--clipped transparent"
      data-booted="true"
      style="
        height: 70px;
        margin-top: 0px;
        transform: translateY(0px);
        left: 300px;
        right: 0px;
        background: transparent;
      "
      :style="{ left: navSwitch ? '300px' : '0px' }"
    >
      <div class="v-toolbar__content" style="height: 70px">
        <button
          type="button"
          class="v-app-bar__nav-icon hidden-md-and-up v-btn v-btn--flat v-btn--icon v-btn--round theme--light v-size--default"
          style="background-color: #f5f5f5"
          @click="navSwitch = !navSwitch"
        >
          <span class="v-btn__content v-btn__content--icon"
            ><i class="fa-solid fa-ellipsis-vertical"></i
            ><span v-if="!navSwitch" class="bar"
              ><i class="fa-solid fa-bars"></i></span
          ></span></button
        ><button
          type="button"
          class="ml-3 mr-4 hidden-sm-and-down v-btn v-btn--fab v-btn--round theme--light elevation-1 v-size--small mobileNone"
          style="margin-left: 12px; color: rgba(0, 0, 0, 0.38); font-size: 16px"
          @click="router.push('/')"
        >
          <span class="v-btn__content"><i class="fa-solid fa-house"></i></span>
        </button>
        <div class="row mt-5 align-center mobileNone">
          <div class="d-flex col-sm-6 col-6">
            <div
              class="v-input v-input--is-disabled theme--light v-text-field v-text-field--single-line v-text-field--is-booted v-select"
            >
              <div class="v-input__prepend-outer">
                <div class="v-input__icon v-input__icon--prepend">
                  <i
                    class="v-icon notranslate v-icon--disabled mdi mdi-home-map-marker theme--light"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-v-162b9a6e="" class="x-user">
          <div data-v-162b9a6e="" class="nameContainer">
            <div data-v-162b9a6e="" class="name">
              <button
                type="button"
                class="ml-2 pr-1 pt-4 v-btn v-btn--flat v-btn--text theme--light v-size--default"
                role="button"
                style="min-width: 100px"
                @click="popupSwitch = !popupSwitch"
              >
                <span class="v-btn__content"
                  ><span class="font-weight-bold text-h5 name">{{
                    playerStore.playerInfo.username
                  }}</span>

                  <div
                    class="arrow"
                    :style="{
                      transform: popupSwitch ? 'rotate(180deg)' : 'rotate(0deg)'
                    }"
                  >
                    <i class="fa-solid fa-caret-down"></i></div
                ></span>
              </button>
              <div class="v-menu" data-v-162b9a6e=""></div>
            </div>
            <div data-v-162b9a6e="" class="divLine"></div>
            <div id="settings" data-v-162b9a6e="" class="panelBtn"></div>
          </div>
          <div data-v-162b9a6e="" class="avatarContainer">
            <div data-v-162b9a6e="" class="backColor">
              <div data-v-162b9a6e="" class="avatar">
                <div
                  data-v-162b9a6e=""
                  class="v-input theme--light v-text-field v-text-field--is-booted v-file-input"
                  style="display: none"
                >
                  <div class="v-input__prepend-outer">
                    <div class="v-input__icon v-input__icon--prepend">
                      <button
                        type="button"
                        aria-label="prepend icon"
                        class="v-icon notranslate v-icon--link mdi mdi-paperclip theme--light"
                      ></button>
                    </div>
                  </div>
                  <div class="v-input__control">
                    <div class="v-input__slot">
                      <div class="v-text-field__slot">
                        <div class="v-file-input__text"></div>
                        <input
                          id="input-495"
                          accept="image/png, image/jpeg, image/bmp"
                          type="file"
                        />
                      </div>
                      <div class="v-input__append-inner">
                        <div class="v-input__icon v-input__icon--clear">
                          <button
                            disabled
                            type="button"
                            aria-label="clear icon"
                            class="v-icon notranslate v-icon--disabled v-icon--link mdi mdi-close theme--light"
                          ></button>
                        </div>
                      </div>
                    </div>
                    <div class="v-text-field__details">
                      <div class="v-messages theme--light">
                        <div class="v-messages__wrapper"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="popupSwitch" class="chooseMenu">
            <div class="items">會員資料</div>
            <div class="items" @click="router.push('/user/setting')">
              變更密碼
            </div>
            <div class="items signOut" @click="signout">登出</div>
          </div>
        </div>
      </div>
    </header>
    <nav
      id="default-drawer"
      class="v-navigation-drawer v-navigation-drawer--fixed v-navigation-drawer--custom-mini-variant v-navigation-drawer--open theme--light"
      data-booted="true"
      style="
        top: 0px;
        transform: translateX(0%);
        width: 300px;
        max-height: calc(100% - 50px);
      "
      :style="{ transform: navSwitch ? 'translateX(0%)' : 'translateX(-100%)' }"
    >
      <div class="v-navigation-drawer__content">
        <div class="px-2">
          <div class="v-list text-center v-sheet theme--light">
            <div
              tabindex="-1"
              class="mb-1 ml-15 justify-space-between pl-1 v-list-item theme--light"
            >
              <a @click="router.push('/')"
                ><div
                  class="v-avatar v-list-item__avatar mx-auto rounded-0"
                  style="height: 110px; min-width: 40px; width: 110px"
                >
                  <div class="v-image v-responsive theme--light">
                    <div
                      class="v-responsive__sizer"
                      style="padding-bottom: 61.6766%"
                    ></div>
                    <div class="v-image__image v-image__image--contain logo">
                      <img
                        data-v-76bef30c=""
                        :src="siteStore.siteData.logo"
                        class="logo"
                      />
                    </div>
                    <div
                      class="v-responsive__content"
                      style="width: 334px"
                    ></div>
                  </div></div
              ></a>
            </div>
          </div>
          <hr
            role="separator"
            aria-orientation="horizontal"
            class="mx-3 mb-2 v-divider theme--light"
          />
          <div class="v-list v-sheet theme--light v-list--nav">
            <!-- <a
              class="py-1 ml-15 button primary--text v-list-item--active v-list-item v-list-item--link theme--light"
              tabindex="0"
              @click="gameWindowOpen"
              ><div class="navIcon">
                <i class="fas fa-chart-line"></i>
              </div>
              <span class="v-badge theme--light"
                ><div class="v-list-item__content">
                  <div
                    class="v-list-item__title text-h4 font-weight-bold colorText"
                  >
                    開始作業
                  </div>
                </div>
                <span class="v-badge__wrapper"
                  ><span
                    aria-atomic="true"
                    aria-label="Badge"
                    aria-live="polite"
                    role="status"
                    class="v-badge__badge primary"
                    style="
                      inset: auto auto calc(100% - 4px) calc(100% - 4px);
                      display: none;
                    "
                  ></span></span></span
            ></a> -->
            <a
              class="py-1 ml-15 button primary--text v-list-item--active v-list-item v-list-item--link theme--light"
              tabindex="0"
              @click="router.push('/user/info'), (navSwitch = false)"
              ><div class="navIcon">
                <i class="fas fa-user"></i>
              </div>
              <span class="v-badge theme--light"
                ><div class="v-list-item__content">
                  <div
                    class="v-list-item__title text-h4 font-weight-bold colorText"
                  >
                    會員資訊
                  </div>
                </div>
                <span class="v-badge__wrapper"
                  ><span
                    aria-atomic="true"
                    aria-label="Badge"
                    aria-live="polite"
                    role="status"
                    class="v-badge__badge primary"
                    style="
                      inset: auto auto calc(100% - 4px) calc(100% - 4px);
                      display: none;
                    "
                  ></span></span></span
            ></a>
            <a
              class="py-1 ml-15 button primary--text v-list-item--active v-list-item v-list-item--link theme--light"
              tabindex="0"
              @click="navigateTo('/user/withdraw'), (navSwitch = false)"
              ><div class="navIcon">
                <i class="fas fa-money-bill-alt"></i>
              </div>
              <span class="v-badge theme--light"
                ><div class="v-list-item__content">
                  <div
                    class="v-list-item__title text-h4 font-weight-bold colorText"
                  >
                    薪資提領
                  </div>
                </div>
                <span class="v-badge__wrapper"
                  ><span
                    aria-atomic="true"
                    aria-label="Badge"
                    aria-live="polite"
                    role="status"
                    class="v-badge__badge primary"
                    style="
                      inset: auto auto calc(100% - 4px) calc(100% - 4px);
                      display: none;
                    "
                  ></span></span></span
            ></a>
            <!-- <a
              class="py-1 ml-15 button primary--text v-list-item--active v-list-item v-list-item--link theme--light"
              tabindex="0"
              @click="navigateTo('/user/message'), (navSwitch = false)"
              ><div class="navIcon">
                <i class="fas fa-mail-bulk"></i>
              </div>
              <span class="v-badge theme--light"
                ><div class="v-list-item__content">
                  <div
                    class="v-list-item__title text-h4 font-weight-bold colorText"
                  >
                    站內信
                  </div>
                </div>
                <span class="v-badge__wrapper"
                  ><span
                    aria-atomic="true"
                    aria-label="Badge"
                    aria-live="polite"
                    role="status"
                    class="v-badge__badge primary"
                    style="
                      inset: auto auto calc(100% - 4px) calc(100% - 4px);
                      display: none;
                    "
                  ></span></span></span
            ></a>
            <a
              class="py-1 ml-15 button primary--text v-list-item--active v-list-item v-list-item--link theme--light"
              tabindex="0"
              @click="navigateTo('/user/record'), (navSwitch = false)"
              ><div class="navIcon">
                <i class="fas fa-list"></i>
              </div>
              <span class="v-badge theme--light"
                ><div class="v-list-item__content">
                  <div
                    class="v-list-item__title text-h4 font-weight-bold colorText"
                  >
                    交易紀錄
                  </div>
                </div>
                <span class="v-badge__wrapper"
                  ><span
                    aria-atomic="true"
                    aria-label="Badge"
                    aria-live="polite"
                    role="status"
                    class="v-badge__badge primary"
                    style="
                      inset: auto auto calc(100% - 4px) calc(100% - 4px);
                      display: none;
                    "
                  ></span></span></span
            ></a>
            <a
              class="py-1 ml-15 button primary--text v-list-item--active v-list-item v-list-item--link theme--light"
              tabindex="0"
              @click="navigateTo('/user/activity'), (navSwitch = false)"
              ><div class="navIcon">
                <i class="fas fa-gift"></i>
              </div>
              <span class="v-badge theme--light"
                ><div class="v-list-item__content">
                  <div
                    class="v-list-item__title text-h4 font-weight-bold colorText"
                  >
                    優惠活動
                  </div>
                </div>
                <span class="v-badge__wrapper"
                  ><span
                    aria-atomic="true"
                    aria-label="Badge"
                    aria-live="polite"
                    role="status"
                    class="v-badge__badge primary"
                    style="
                      inset: auto auto calc(100% - 4px) calc(100% - 4px);
                      display: none;
                    "
                  ></span></span></span
            ></a> -->
          </div>
        </div>
        <div class="pt-12"></div>
      </div>
      <div class="v-navigation-drawer__border"></div>
    </nav>
    <div
      class="main"
      :style="{
        padding: navSwitch ? '100px 24px 60px 360px' : '100px 24px 60px 24px'
      }"
    >
      <router-view></router-view>
      <div class="contactUs" @click="openChatBox">
        <div class="text">線上客服</div>
        <div class="image">
          <img src="@/assets/image/indexV2/userContactIcon.png" alt="" />
        </div>
      </div>
    </div>
    <footer
      id="default-footer"
      class="v-footer v-sheet theme--light v-footer--fixed v-footer--padless transparent"
      data-booted="true"
      style="left: 0px; right: 0px; bottom: 0px"
    >
      <footer
        id="customFooter"
        data-v-339253a5=""
        style="background: rgb(0, 202, 227)"
      >
        <div data-v-339253a5="" class="copyright">
          <div data-v-339253a5="" class="logo"></div>
          <span data-v-339253a5="">{{ siteStore.siteData.copyRight }}</span>
        </div>
        <!--<div data-v-339253a5="" class="contactInfo">
          <span data-v-339253a5="">聯絡我們</span
          ><span data-v-339253a5="" class="divLine">｜</span
          ><span data-v-339253a5="">總部 台北市中山區中山北路二段113號6F</span
          ><span data-v-339253a5="" class="divLine">｜</span
          ><span data-v-339253a5="">T+886 2 25317099 #20259</span
          ><span data-v-339253a5="" class="divLine">｜</span
          ><span data-v-339253a5=""
            ><a data-v-339253a5="" href="mailto:client.service@gempower.energy"
              ><i data-v-339253a5="" class="far fa-envelope mailIcon"></i>
              client.service@gempower.energy</a
            ></span
          >
        </div>-->
      </footer>
    </footer>
  </div>
  <div v-else class="settingView">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/sass/indexV2/user/user1.css"
@import "@/assets/sass/indexV2/user/user2.css"
@import "@/assets/sass/indexV2/user/user3.css"
@import "@/assets/sass/indexV2/user/user4.css"
@import "@/assets/sass/indexV2/user/user5.css"
@import "@/assets/sass/indexV2/user/user6.css"
@import "@/assets/sass/indexV2/user/user7.css"
@import "@/assets/sass/indexV2/user/user8.css"
@import "@/assets/sass/indexV2/user/user9.css"
@import "@/assets/sass/indexV2/user/user10.css"
@import "@/assets/sass/indexV2/user/user11.css"
@import "@/assets/sass/indexV2/user/user12.css"
@import "@/assets/sass/indexV2/user/user13.css"
@import "@/assets/sass/indexV2/user/user14.css"
@import "@/assets/sass/indexV2/user/user15.css"
@import "@/assets/sass/indexV2/user/user16.css"
@import "@/assets/sass/indexV2/user/user17.css"
@import "@/assets/sass/indexV2/user/user18.css"
@import "@/assets/sass/indexV2/user/user19.css"
</style>

<style scoped lang="sass">
.main
    width: 100%
    height: 100dvh
    overflow-x: hidden
    overflow-y: hidden
    position: relative
    @media screen and (max-width: 768px)
        padding: 100px 24px 60px 24px !important
</style>

<style scoped lang="sass">
.contactUs
  position: fixed
  right: 24px
  bottom: 85px
  z-index: 6
  cursor: pointer
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  @media screen and (max-width: 768px)
    bottom: 110px
    right: 12px
  .text
    position: relative
    padding: 10px 1.5em
    border: 1px solid #ffa07a
    background-color: #a9a9a9
    color: #000
    font-weight: bolder
  .image
    width: 60px
    height: 60px
    border-radius: 50%
    position: relative
    right: 10px
    transition: box-shadow .2s ease-in-out
    &:hover
      box-shadow: 0 0 27px 1.5px rgba(0,0,0,.2)
    img
      width: 60px
      height: 60px
      object-fit: cover
</style>

<style scoped>
.v-application--wrap {
  background-image: url('https://upload.comethico.com/uploads/1726160006550.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow-x: hidden;
  overflow-y: scroll;
}

.v-btn__content--icon svg {
  font-size: 20px;
  color: #000;
}

.bar {
  margin-left: 2px;
}

.name {
  font-size: 1.0625rem;
  font-weight: 700;
}

.x-user {
  position: relative;
}

.chooseMenu {
  width: 200px;
  padding: 8px;
  position: absolute;
  top: 66px;
  left: -120px;
  background-color: #fff;
  box-shadow:
    0 0 0 0 rgba(0, 0, 0, 0.2),
    0 0 0 0 rgba(0, 0, 0, 0.14),
    0 0 0 0 rgba(0, 0, 0, 0.12);
  color: #333;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  z-index: 999;
}

.chooseMenu .items {
  width: 100%;
  min-height: 48px;
  margin-bottom: 8px;
  padding: 8px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: 0.3s;
}

.chooseMenu .items:hover {
  background-color: #f3c018;
  border-color: #f3c018;
  color: #fff;
  border-radius: 4px;
}

.chooseMenu .signOut {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  margin: 0;
}

nav {
  height: calc(100dvh - 60px);
}

.logo {
  cursor: pointer;
}

.colorText {
  color: #00cae3;
  font-size: 18px;
}

.navIcon {
  margin-right: 4px;
  font-size: 16px;
  color: #00cae3;
}

.arrow {
  margin-left: 4px;
  transition: transform 0.3s;
}

@media screen and (max-width: 1200px) {
  nav {
    height: calc(100dvh - 120px);
  }
}

@media (max-width: 768px) {
  .mobileNone {
    display: none;
  }

  .chooseMenu {
    width: 120px;
    left: -40px;
  }

  nav {
    height: calc(100dvh - 130px);
    position: absolute !important;
  }
}
</style>
