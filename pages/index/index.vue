<script lang="ts" setup>
const router = useRouter()
const siteStore = useSiteStore()
const popupState = ref(false)
const popupClick = () => {
  popupState.value = !popupState.value
  const body = document.querySelector('body')
  if (popupState.value) {
    body.style.overflow = 'hidden'
  } else {
    body.style.overflow = 'auto'
  }
}
// const image1 = require('@/assets/image/indexV2/userIcon.png')
import image1 from '@/assets/image/indexV2/userIcon.png'
import image2 from '@/assets/image/indexV2/indexSlogan.016fc504.png'
import image3 from '@/assets/image/indexV2/indexEnterBtnGemma.685627f5.png'
import image4 from '@/assets/image/indexV2/earthIcon.png'
import image5 from '@/assets/image/indexV2/userIcon.png'
// const image2 = require('@/assets/image/indexV2/indexSlogan.016fc504.png')
// const image3 = require('@/assets/image/indexV2/indexEnterBtnGemma.685627f5.png')
// const image4 = require('@/assets/image/indexV2/earthIcon.png')
// const image5 = require('@/assets/image/indexV2/userIcon.png')
</script>

<template>
  <div data-v-76bef30c="" id="app-index" class="app">
    <header
      data-v-3079d992=""
      data-v-76bef30c=""
      style="position: absolute; background: none"
    >
      <div data-v-3079d992="" class="headerCont">
        <div data-v-3079d992="" class="dummyFillHeight"></div>
        <div data-v-3079d992="" class="logo" style="display: none">
          <a data-v-3079d992="" @click="router.push('/')">
            <img data-v-76bef30c="" :src="siteStore.siteData.logo" class="logo"
          /></a>
        </div>
        <nav data-v-3079d992="" class="navPC" style="display: none">
          <div data-v-3079d992="" class="topicMenuGroup">
            <a data-v-3079d992="" @click="router.push('/user/info')" class="tit"
              >會員專區</a
            ><a data-v-3079d992="" class="tit" @click="router.push('/platform')"
              >綠電交易平台</a
            >
          </div>
          <div data-v-3079d992="" class="clear"></div>
          <ul data-v-3079d992="" class="menuGroup">
            <li data-v-3079d992="">
              <div data-v-3079d992="" class="tit">
                <a data-v-3079d992="" href="">永續能源</a>
              </div>
            </li>
            <li data-v-3079d992="">
              <div data-v-3079d992="" class="tit titGap">電力交易資源整合</div>
              <div data-v-3079d992="" class="subMenu">
                <div data-v-3079d992="" class="subTit">
                  <a data-v-3079d992="" href="">電力交易平台是甚麼</a>
                </div>
                <div data-v-3079d992="" class="subTit">
                  <a data-v-3079d992="" href="">投標參與輔助服務市場</a>
                </div>
              </div>
            </li>
            <li data-v-3079d992="">
              <div data-v-3079d992="" class="tit">
                <a data-v-3079d992="" @click="router.push('/game')">我要買電</a>
              </div>
            </li>
            <li data-v-3079d992="">
              <div data-v-3079d992="" class="tit">
                <a data-v-3079d992="" href="">綠電顧問</a>
              </div>
            </li>
            <li data-v-3079d992="">
              <div data-v-3079d992="" class="tit">
                <a data-v-3079d992="" @click="router.push('/game')">我要賣電</a>
              </div>
            </li>
            <li data-v-3079d992="">
              <div data-v-3079d992="" class="tit">
                <a data-v-3079d992="" href="">常見 Q &amp; A</a>
              </div>
            </li>
            <li data-v-3079d992="">
              <div data-v-3079d992="" class="tit">
                <a data-v-3079d992="" href="">最新消息</a>
              </div>
            </li>
          </ul>
          <div data-v-3079d992="" class="clear"></div>
        </nav>
        <div
          data-v-3079d992=""
          class="navPcEndBorder"
          style="display: none"
        ></div>
        <nav data-v-3079d992="" class="navPhone">
          <div
            data-v-3079d992=""
            togglephonemenugroupstatus="false"
            class="hamburger"
            @click="popupClick"
            v-if="!popupState"
          >
            <i data-v-3079d992="" class="hamburOpen fas fa-bars"></i>
          </div>
          <div
            data-v-3079d992=""
            class="navPhoneBack"
            style="display: none"
          ></div>
          <div
            data-v-3079d992=""
            class="menuGroup"
            :class="{ popupOpen: popupState }"
          >
            <div data-v-3079d992="" class="hamburgerX" @click="popupClick">
              <i data-v-3079d992="" class="hamburClose fas fa-times"></i>
            </div>
            <div data-v-3079d992="" class="menu">
              <a data-v-3079d992="" href="" class="tit"
                >永續能源
                <i data-v-3079d992="" class="fas fa-arrow-right arrow"></i
              ></a>
            </div>
            <div data-v-3079d992="" class="menu">
              <div
                data-v-3079d992=""
                togglephonesubmenustatus="false"
                idx="1"
                class="tit"
              >
                電力交易資源整合
                <i data-v-3079d992="" class="fas fa-arrow-right arrow"></i>
              </div>
              <div data-v-3079d992="" class="subMenu">
                <div data-v-3079d992="" class="subTit">
                  <a data-v-3079d992="" href="">電力交易平台是甚麼</a>
                </div>
                <div data-v-3079d992="" class="subTit">
                  <a data-v-3079d992="" href="">投標參與輔助服務市場</a>
                </div>
              </div>
            </div>
            <div data-v-3079d992="" class="menu">
              <a data-v-3079d992="" href="" class="tit"
                >我要買電
                <i data-v-3079d992="" class="fas fa-arrow-right arrow"></i
              ></a>
            </div>
            <div data-v-3079d992="" class="menu">
              <a data-v-3079d992="" href="" class="tit"
                >綠電顧問
                <i data-v-3079d992="" class="fas fa-arrow-right arrow"></i
              ></a>
            </div>
            <div data-v-3079d992="" class="menu">
              <a data-v-3079d992="" href="" class="tit"
                >我要賣電
                <i data-v-3079d992="" class="fas fa-arrow-right arrow"></i
              ></a>
            </div>
            <div data-v-3079d992="" class="menu">
              <a data-v-3079d992="" href="" class="tit"
                >常見 Q &amp; A
                <i data-v-3079d992="" class="fas fa-arrow-right arrow"></i
              ></a>
            </div>
            <div data-v-3079d992="" class="menu">
              <a data-v-3079d992="" href="" class="tit"
                >最新消息
                <i data-v-3079d992="" class="fas fa-arrow-right arrow"></i
              ></a>
            </div>
          </div>
        </nav>
      </div>
      <nav data-v-3079d992="" class="navPhoneShortcut">
        <a data-v-3079d992="" href="" class="shortcut" style="height: 167.33px"
          ><div data-v-3079d992="" class="menu">
            <div data-v-3079d992="" class="tit">常見</div>
            <div data-v-3079d992="" class="divLine"></div>
            <div data-v-3079d992="" class="QA gooFontEn">Q&amp;A</div>
          </div></a
        ><a
          data-v-3079d992=""
          @click="router.push('/platform')"
          class="shortcut"
          style="height: 167.33px"
          ><div data-v-3079d992="" class="menu">
            <div data-v-3079d992="" class="platform">
              綠電<br data-v-3079d992="" />交易平台
            </div>
            <div data-v-3079d992="" class="divLine"></div>
            <div data-v-3079d992="" class="tit">馬上申請</div>
          </div></a
        ><a
          data-v-3079d992=""
          @click="router.push('/user/info')"
          class="shortcut"
          style="height: 167.33px"
          ><div data-v-3079d992="" class="menu">
            <div data-v-3079d992="" class="tit">會員專區</div>
            <img
              data-v-3079d992=""
              :src="image1"
              alt="會員專區"
              class="icon"
            /></div
        ></a>
      </nav>
    </header>
    <article
      data-v-76bef30c=""
      style="margin-bottom: -40px; padding-bottom: 40px"
    >
      <div data-v-76bef30c="" class="home">
        <div data-v-76bef30c="" class="kvBlock">
          <img data-v-76bef30c="" :src="siteStore.siteData.logo" class="logo" />
          <div data-v-76bef30c="" class="kv"></div>
          <div data-v-76bef30c="" class="idea">
            <img
              data-v-76bef30c=""
              :src="image2"
              alt="潔淨能源、能源捷徑"
              class="slogan"
            />
          </div>
          <a
            data-v-76bef30c=""
            @click="router.push('/platform')"
            class="enterBtn"
            ><img data-v-76bef30c="" :src="image3" alt="GEMMA" class="gemma" />
            <div data-v-76bef30c="" class="chTxt">綠電交易平台</div>
            <i data-v-76bef30c="" class="fas fa-arrow-right arrow"></i>
            <div data-v-76bef30c="" class="enTxt gooFontEn">ENTER</div></a
          >
        </div>
        <nav data-v-76bef30c="" class="menuTileBlock">
          <div data-v-76bef30c="" class="tileSet1">
            <a
              data-v-76bef30c=""
              @click="router.push('/game')"
              class="tile tile1"
              ><div data-v-76bef30c="" class="sideLineLeft"></div>
              <div data-v-76bef30c="" class="txtCont">
                <div data-v-76bef30c="" class="tit large">
                  我要買電｜綠電顧問
                </div>
                <div data-v-76bef30c="" class="more">
                  ENTER <i data-v-76bef30c="" class="fas fa-angle-right"></i>
                </div></div></a
            ><a data-v-76bef30c="" href="" class="tile tile2"
              ><div data-v-76bef30c="" class="sideLineBottom green"></div>
              <div data-v-76bef30c="" class="txtCont">
                <div data-v-76bef30c="" class="tit large">電力交易</div>
                <img
                  data-v-76bef30c=""
                  :src="image4"
                  alt="電力交易資源聚合"
                  class="icon"
                />
                <div data-v-76bef30c="" class="tit large">資源聚合</div>
              </div></a
            >
          </div>
          <a
            data-v-76bef30c=""
            @click="router.push('/user/info')"
            class="tile tile3"
            ><div data-v-76bef30c="" class="sideLineBottom"></div>
            <div data-v-76bef30c="" class="txtCont">
              <div data-v-76bef30c="" class="tit">會員專區</div>
              <img
                data-v-76bef30c=""
                :src="image5"
                alt="會員專區"
                class="icon"
              /></div></a
          ><a
            data-v-76bef30c=""
            @click="router.push('/platform')"
            class="tile tile4"
            ><div data-v-76bef30c="" class="sideLineBottom"></div>
            <div data-v-76bef30c="" class="txtCont">
              <div data-v-76bef30c="" class="tit large">
                綠電<br data-v-76bef30c="" />交易平台
              </div>
              <div data-v-76bef30c="" class="divLine"></div>
              <div data-v-76bef30c="" class="tit">馬上申請</div>
            </div></a
          ><a data-v-76bef30c="" href="" class="tile tile5"
            ><div data-v-76bef30c="" class="sideLineBottom"></div>
            <div data-v-76bef30c="" class="txtCont">
              <div data-v-76bef30c="" class="tit">常見</div>
              <div data-v-76bef30c="" class="divLine"></div>
              <div data-v-76bef30c="" class="QA gooFontEn">Q&amp;A</div>
            </div></a
          ><a
            data-v-76bef30c=""
            @click="router.push('/game')"
            class="tile tile6"
            ><div data-v-76bef30c="" class="sideLineLeft"></div>
            <div data-v-76bef30c="" class="txtCont">
              <div data-v-76bef30c="" class="tit large">我要賣電</div>
              <div data-v-76bef30c="" class="more">
                ENTER <i data-v-76bef30c="" class="fas fa-angle-right"></i>
              </div></div></a
          ><a data-v-76bef30c="" href="" class="tile tile7"
            ><div data-v-76bef30c="" class="sideLineLeft"></div>
            <div data-v-76bef30c="" class="txtCont">
              <div data-v-76bef30c="" class="tit">永續能源</div>
              <div data-v-76bef30c="" class="more">
                ENTER <i data-v-76bef30c="" class="fas fa-angle-right"></i>
              </div></div></a
          ><a data-v-76bef30c="" href="" class="tile tile8"
            ><div data-v-76bef30c="" class="sideLineBottom"></div>
            <div data-v-76bef30c="" class="txtCont">
              <div data-v-76bef30c="" class="tit">
                <i data-v-76bef30c="" class="fas fa-arrow-right arrow"></i
                >&nbsp;最新消息NEWS
              </div>
            </div></a
          ><a data-v-76bef30c="" href="" class="tile tile9"
            ><div data-v-76bef30c="" class="sideLineBottom"></div>
            <div data-v-76bef30c="" class="txtCont">
              <div data-v-76bef30c="" class="tit">
                <i data-v-76bef30c="" class="fas fa-arrow-right arrow"></i
                >&nbsp;售電業公開資料
              </div>
            </div></a
          >
        </nav>
      </div>
    </article>
    <footer data-v-1964240d="" data-v-76bef30c="">
      <div data-v-1964240d="" class="copyright">
        <div data-v-1964240d="" class="logo"></div>
        <span data-v-1964240d=""
          >&nbsp; {{ siteStore.siteData.copyRight }}</span
        >
      </div>
      <!--<div data-v-1964240d="" class="contactInfo">
        <span data-v-1964240d=""
          ><a data-v-1964240d="" href=""
            ><i data-v-1964240d="" class="fas fa-hand-pointer"></i> 聯絡我們</a
          ></span
        ><span data-v-1964240d="" class="divLine">｜</span
        ><span data-v-1964240d="">T+886 2 25317099 #20843</span
        ><span data-v-1964240d="" class="divLine">｜</span
        ><span data-v-1964240d=""
          ><a data-v-1964240d="" href="mailto:client.service@gempower.energy"
            ><i data-v-1964240d="" class="far fa-envelope mailIcon"></i>
            client.service@gempower.energy</a
          ></span
        >
      </div>-->
    </footer>
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/sass/indexV2/index.css"
</style>

<style scoped>
.app {
  width: 100dvw;
  height: 100dvh;
  background-color: #fff;
  overflow: hidden;
}

a {
  cursor: pointer;
}

header .headerCont .navPhone .menuGroup {
  width: 80%;
  height: 934px;
  padding: 0 5px;
  box-sizing: border-box;
  overflow-y: auto;
  position: absolute;
  left: -80%;
  top: 0;
  background: #f8c51a;
  transform: translateZ(0);
  transition: left 1s;
}

header .headerCont .navPhone .popupOpen {
  width: 1045px;
  height: 934px;
  padding-bottom: 189px;
  overflow-y: auto;
  left: 0px;
}

@media screen and (max-width: 1200px) {
  .app {
    height: auto;
    padding-bottom: 168px;
  }
  .kvBlock {
    height: calc(100dvh - 170px);
  }
}
</style>
