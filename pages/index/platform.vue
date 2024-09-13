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

// 創建計數器，讓它在特定時間內完成
const createCounter = (targetNum, targetCodes, numRef, codesRef, duration) => {
  const startTime = performance.now() // 開始的時間

  const interval = setInterval(() => {
    const currentTime = performance.now()
    const elapsedTime = currentTime - startTime

    // 計算進度 (elapsedTime / duration)
    const progress = Math.min(elapsedTime / duration, 1) // 確保 progress 不超過 1

    // 更新數值，讓它在指定時間內達到目標
    numRef.value = Math.floor(progress * targetNum)
    codesRef.value = Math.floor(progress * targetCodes)

    // 如果進度達到 100%，則清除 interval
    if (progress === 1) {
      clearInterval(interval)
    }
  }, 16) // 每 16 毫秒更新一次，約等於 60 FPS
}

// 定義響應式數據
const sunNum = ref(0)
const sunCodes = ref(0)
const windNum = ref(0)
const windCodes = ref(0)
const geothrmalNum = ref(0)
const geothrmalCodes = ref(0)
const otecNum = ref(0)
const otecCodes = ref(0)

onMounted(() => {
  // 設置每個計數器在特定秒數內完成
  createCounter(8496112, 1500000, sunNum, sunCodes, 3000) // 在 3 秒內完成
  createCounter(66342100, 12060000, windNum, windCodes, 3000) // 在 5 秒內完成
  createCounter(0, 0, geothrmalNum, geothrmalCodes, 3000) // 在 3 秒內完成
  createCounter(0, 0, otecNum, otecCodes, 3000) // 在 3 秒內完成
})

// const image1 = require('@/assets/image/indexV2/userIcon.png')
// const image2 = require()
// const image3 = require()
// const image4 = require()
import image5 from '@/assets/image/indexV2/windIcon.png'
import image6 from '@/assets/image/indexV2/geothermalIcon.png'
import image7 from '@/assets/image/indexV2/otecIcon.png'
import image8 from '@/assets/image/indexV2/userIcon.png'
import image9 from '@/assets/image/indexV2/buyIcon.png'
import image10 from '@/assets/image/indexV2/sellIcon.png'

import image1 from '@/assets/image/indexV2/userIcon.png'
import image2 from '@/assets/image/indexV2/platformSlogan.e07bd09c.png'
import image3 from '@/assets/image/indexV2/platformSloganPhone.f807ed37.png'
import image4 from '@/assets/image/indexV2/solarIcon.png'
</script>

<template>
  <div data-v-1b82234e="" id="app-platform" class="app">
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
            ><a data-v-3079d992="" href="" class="tit">綠電交易平台</a>
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
              <a data-v-3079d992="" @click="router.push('/game')" class="tit"
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
              <a data-v-3079d992="" @click="router.push('/game')" class="tit"
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
      data-v-1b82234e=""
      style="margin-bottom: -50px; padding-bottom: 50px"
    >
      <div data-v-1b82234e="" class="dataBlock" @click="router.push('/')">
        <img data-v-1b82234e="" :src="siteStore.siteData.logo" class="logo" />
        <div data-v-1b82234e="" class="idea">
          <img
            data-v-1b82234e=""
            :src="image2"
            alt="綠電交易平台"
            class="slogan"
          /><img
            data-v-1b82234e=""
            :src="image3"
            alt="綠電交易平台"
            class="slogan sloganPhone"
          />
          <div data-v-1b82234e="">
            結合台泥「風、光、地、海」多元化再生能源種類與資源，為全台自建案場最多、可銷售綠電最多的再生能源售電業者。
          </div>
          <div data-v-1b82234e="">只要「三個步驟」就能完成「綠電交易」。</div>
          <div data-v-1b82234e="">
            首創「線上綠電顧問」，只要填寫減碳目標、用電量，就能獲取不同再生能源搭配的最佳化綠電方案，為企業客製
            ESG 全方位綠能整合規劃。
          </div>
        </div>
        <div data-v-1b82234e="" class="dataList">
          <div data-v-1b82234e="" class="item">
            <div data-v-1b82234e="" class="itemCont">
              <div data-v-1b82234e="" class="cateName">太｜陽｜能</div>
              <div data-v-1b82234e="" class="cateNameEn">SOLAR</div>
            </div>
            <div data-v-1b82234e="" class="itemCont cateCodeS">
              <div data-v-1b82234e="" class="supply">待媒合供給</div>
              <div data-v-1b82234e="" class="supplyNum">
                <span
                  data-v-1b82234e=""
                  class="num"
                  style="min-width: 112px; opacity: 1"
                  >{{ new Intl.NumberFormat('zh-TW').format(sunNum) }}</span
                >
                <span data-v-1b82234e="" class="unit" style="opacity: 1"
                  >kWh</span
                >
              </div>
              <div data-v-1b82234e="" class="demand">待媒合需求</div>
              <div data-v-1b82234e="" class="demandNum">
                <span
                  data-v-1b82234e=""
                  class="num"
                  style="min-width: 113px; opacity: 1"
                  >{{ new Intl.NumberFormat('zh-TW').format(sunCodes) }}</span
                >
                <span data-v-1b82234e="" class="unit" style="opacity: 1"
                  >kWh</span
                >
              </div>
              <img data-v-1b82234e="" :src="image4" alt="solar" class="icon" />
            </div>
          </div>
          <div data-v-1b82234e="" class="item">
            <div data-v-1b82234e="" class="itemCont">
              <div data-v-1b82234e="" class="cateName">風｜能</div>
              <div data-v-1b82234e="" class="cateNameEn">WIND</div>
            </div>
            <div data-v-1b82234e="" class="itemCont cateCodeW">
              <div data-v-1b82234e="" class="supply">待媒合供給</div>
              <div data-v-1b82234e="" class="supplyNum">
                <span
                  data-v-1b82234e=""
                  class="num"
                  style="min-width: 127px; opacity: 1"
                  >{{ new Intl.NumberFormat('zh-TW').format(windNum) }}</span
                >
                <span data-v-1b82234e="" class="unit" style="opacity: 1"
                  >kWh</span
                >
              </div>
              <div data-v-1b82234e="" class="demand">待媒合需求</div>
              <div data-v-1b82234e="" class="demandNum">
                <span
                  data-v-1b82234e=""
                  class="num"
                  style="min-width: 127px; opacity: 1"
                  >{{ new Intl.NumberFormat('zh-TW').format(windCodes) }}</span
                >
                <span data-v-1b82234e="" class="unit" style="opacity: 1"
                  >kWh</span
                >
              </div>
              <img data-v-1b82234e="" :src="image5" alt="wind" class="icon" />
            </div>
          </div>
          <div data-v-1b82234e="" class="item">
            <div data-v-1b82234e="" class="itemCont">
              <div data-v-1b82234e="" class="cateName">地｜熱｜能</div>
              <div data-v-1b82234e="" class="cateNameEn">GEOTHERMAL</div>
            </div>
            <div data-v-1b82234e="" class="itemCont cateCodeG">
              <div data-v-1b82234e="" class="supply">待媒合供給</div>
              <div data-v-1b82234e="" class="supplyNum">
                <span
                  data-v-1b82234e=""
                  class="num"
                  style="min-width: 13px; opacity: 1"
                  >{{
                    new Intl.NumberFormat('zh-TW').format(geothrmalNum)
                  }}</span
                >
                <span data-v-1b82234e="" class="unit" style="opacity: 1"
                  >kWh</span
                >
              </div>
              <div data-v-1b82234e="" class="demand">待媒合需求</div>
              <div data-v-1b82234e="" class="demandNum">
                <span
                  data-v-1b82234e=""
                  class="num"
                  style="min-width: 13px; opacity: 1"
                  >{{
                    new Intl.NumberFormat('zh-TW').format(geothrmalCodes)
                  }}</span
                >
                <span data-v-1b82234e="" class="unit" style="opacity: 1"
                  >kWh</span
                >
              </div>
              <img
                data-v-1b82234e=""
                :src="image6"
                alt="geothermal"
                class="icon"
              />
            </div>
          </div>
          <div data-v-1b82234e="" class="item">
            <div data-v-1b82234e="" class="itemCont">
              <div data-v-1b82234e="" class="cateName">海｜洋｜能</div>
              <div data-v-1b82234e="" class="cateNameEn">OTEC</div>
            </div>
            <div data-v-1b82234e="" class="itemCont cateCodeM">
              <div data-v-1b82234e="" class="supply">待媒合供給</div>
              <div data-v-1b82234e="" class="supplyNum">
                <span
                  data-v-1b82234e=""
                  class="num"
                  style="min-width: 13px; opacity: 1"
                  >{{ new Intl.NumberFormat('zh-TW').format(otecNum) }}</span
                >
                <span data-v-1b82234e="" class="unit" style="opacity: 1"
                  >kWh</span
                >
              </div>
              <div data-v-1b82234e="" class="demand">待媒合需求</div>
              <div data-v-1b82234e="" class="demandNum">
                <span
                  data-v-1b82234e=""
                  class="num"
                  style="min-width: 13px; opacity: 1"
                  >{{ new Intl.NumberFormat('zh-TW').format(otecCodes) }}</span
                >
                <span data-v-1b82234e="" class="unit" style="opacity: 1"
                  >kWh</span
                >
              </div>
              <img data-v-1b82234e="" :src="image7" alt="marine" class="icon" />
            </div>
          </div>
        </div>
      </div>
      <div data-v-1b82234e="" class="menuTileBlock" style="height: auto">
        <a data-v-1b82234e="" @click="router.push('/user/info')" class="tile"
          ><div data-v-1b82234e="" class="txtCont">
            <div data-v-1b82234e="" class="tit">會員專區</div>
            <img
              data-v-1b82234e=""
              :src="image8"
              alt="member"
              class="icon"
            /></div></a
        ><a data-v-1b82234e="" @click="router.push('/game')" class="tile"
          ><div data-v-1b82234e="" class="txtCont">
            <div data-v-1b82234e="" class="tit">我要買電</div>
            <img
              data-v-1b82234e=""
              :src="image9"
              alt="buy"
              class="icon"
            /></div></a
        ><a data-v-1b82234e="" @click="router.push('/game')" class="tile"
          ><div data-v-1b82234e="" class="txtCont">
            <div data-v-1b82234e="" class="tit">我要賣電</div>
            <img
              data-v-1b82234e=""
              :src="image10"
              alt="sell"
              class="icon"
            /></div
        ></a>
      </div>
    </article>
    <footer data-v-1964240d="" data-v-76bef30c="">
      <div data-v-1964240d="" class="copyright">
        <div data-v-1964240d="" class="logo"></div>
        <span data-v-1964240d=""
          >&nbsp; {{ siteStore.siteData.copyRight }}</span
        >
      </div>
      <div data-v-1964240d="" class="contactInfo">
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
      </div>
    </footer>
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/sass/indexV2/platform.css"
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
<style scoped lang="sass">
header
  display: none
  @media screen and (max-width: 1200px)
    display: block
</style>
