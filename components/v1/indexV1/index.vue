<script lang="ts" setup>
const router = useRouter()
const siteStore = useSiteStore()
const { t } = useI18n()
const nextButtonClick = (link: string) => {
  document.getElementById(link).scrollIntoView({ behavior: 'smooth' })
}
const activeIndex = ref(2)
const setActive = (index) => {
  activeIndex.value = index
}
</script>
<template>
  <div class="containers">
    <div id="home" class="home">
      <div class="info">
        <div class="title">Green Future</div>
        <div class="subTitle">{{ $lang('看不見的能源 看得見的改變') }}</div>
        <div class="text">
          {{
            $lang(
              '協助企業整合運用空間資源，串聯產業鏈，以區域整體規劃出發，擴大綠能的設置應用場域協助企業整合運用空間資源，串聯產業鏈，以區域...'
            )
          }}
        </div>
      </div>
      <div class="nextButton" @click="nextButtonClick('epcServices')">
        READ OUR STORY
      </div>
    </div>
    <div
      id="epcServices"
      class="epcServices"
      @click="router.push('/service_1')"
    >
      <div class="info">
        <div class="title">EPC Services</div>
        <div class="subTitle">{{ $lang('光電系統工程') }}</div>
        <div class="text">
          {{
            $lang(
              '依據案場位置、空間遮蔭、使用現況及未來需求，以國內外一級產品進行太陽光電模組鋪排及機電設計，並負責行政申請、保險、工程管理等服務。'
            )
          }}
        </div>
      </div>
      <div class="image">
        <img src="@/assets/image/index_ai/bg2.png" alt="" />
      </div>
      <div class="nextButton" @click="nextButtonClick('omServices')">NEXT</div>
    </div>
    <div id="omServices" class="omServices" @click="router.push('/service_2')">
      <div class="info">
        <div class="title">O&M Services</div>
        <div class="subTitle">{{ $lang('光電案場維運') }}</div>
        <div class="text">
          {{
            $lang(
              '透過在地聘僱維運工程師及人工智慧系統自動判讀，提供案場發電監控、點檢、清潔及維修等服務，使光電案場穩定運轉。'
            )
          }}
        </div>
      </div>
      <div class="image">
        <img src="@/assets/image/index_ai/bg3.png" alt="" />
      </div>
      <div class="nextButton" @click="nextButtonClick('reServices')">NEXT</div>
    </div>
    <div id="reServices" class="reServices" @click="router.push('/service_3')">
      <div class="info">
        <div class="title">Integrated RE Services</div>
        <div class="subTitle">{{ $lang('區域能源整合') }}</div>
        <div class="text">
          {{ $lang('以台南沙崙智慧能源') }}BOT{{ $lang('為「') }}2050{{
            $lang(
              '零轉型」的第一線實戰場域，結合光電、儲能、資訊監控預測及智慧生活應用，以尖峰綠電滲透率100%為營運目標，並將逐步擴及至商辦、住宅及工業聚落。'
            )
          }}
        </div>
      </div>
      <div class="image">
        <img src="@/assets/image/index_ai/bg4.png" alt="" />
      </div>
      <div class="nextButton" @click="nextButtonClick('energyManagement')">
        NEXT
      </div>
    </div>
    <div
      id="energyManagement"
      class="energyManagement"
      @click="router.push('/service_4')"
    >
      <div class="title">Energy Data Management</div>
      <div class="textWrap">
        <div class="subTitle">{{ $lang('能源資訊服務') }}</div>
        <div class="text">
          {{ $lang('結合日照計、溫度計、氣象衛星等資訊，透過') }}AI{{
            $lang(
              '人工智慧預測太陽光電發電量，以結合用電行為、幫助企業或個人釐清「碳預算」，進而以數據為基礎，規劃淨零排放途徑。'
            )
          }}
        </div>
      </div>
      <div class="nextButton" @click="nextButtonClick('powerPurchase')">
        NEXT
      </div>
    </div>
    <div
      id="powerPurchase"
      class="powerPurchase"
      @click="router.push('/service_5')"
    >
      <div class="title">RE Power Purchase</div>
      <div class="textWrap">
        <div class="subTitle">{{ $lang('綠電交易服務') }}</div>
        <div class="text">
          {{
            $lang(
              '透過契約規劃，導引虛擬電能及憑證的流向，讓再生能源跨越實體空間的限制，串聯起不同背景的利害關係人，促成跨域空間資源的有效利用，並進一步作為公益合作的橋梁。'
            )
          }}
        </div>
      </div>
      <div class="nextButton" @click="nextButtonClick('solarRooftops')">
        NEXT
      </div>
    </div>
    <div id="solarRooftops" class="solarRooftops">
      <div class="title">Chiayi Solar Rooftops</div>
      <div class="textWrap">
        <div class="subTitle">{{ $lang('嘉義縣綠電交易專區') }}</div>
        <div class="text">
          {{
            $lang(
              '為降低民眾設置屋頂型太陽光電的門檻，同時提高嘉義縣企業綠電使用比例，嘉義縣政府遴選營運商得禾能源協助民眾在自家屋頂裝設發電設備，其中部分綠電將優先銷售予縣內企業。'
            )
          }}
        </div>
      </div>
      <div class="nextButton" @click="nextButtonClick('greenHarvest')">
        NEXT
      </div>
    </div>
    <div id="greenHarvest" class="greenHarvest">
      <div class="title">GREENHARVEST</div>
      <div class="subTitle">{{ $lang('邁向綠能低碳的生活') }}</div>
      <div class="text">
        {{ $lang('綠電從') }}0{{ $lang('到') }}1{{
          $lang('，不再是以後要做的事')
        }}
      </div>
      <div class="slider">
        <div class="sliders" @mouseenter="setActive(1)">
          <div class="items" :class="{ active: activeIndex === 1 }">
            <img src="@/assets/image/index_ai/svg/slider1.svg" alt="" />
            {{ $lang('主要經紀人') }}
          </div>
        </div>
        <div class="sliders" @mouseenter="setActive(2)">
          <div class="items" :class="{ active: activeIndex === 2 }">
            <img src="@/assets/image/index_ai/svg/slider2.svg" alt="" />
            {{ $lang('睿禾理念') }}
          </div>
        </div>
        <div class="sliders" @mouseenter="setActive(3)">
          <div class="items" :class="{ active: activeIndex === 3 }">
            <img src="@/assets/image/index_ai/svg/slider3.svg" alt="" />
            {{ $lang('關係企業') }}
          </div>
        </div>
      </div>
      <div class="moreButton">
        <div class="text">{{ $lang('查看更多') }}Read More</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.containers
  width: 100%
  box-sizing: border-box
  font-family: "Lexend", "Noto Sans TC", "微軟正黑體修正", "Microsoft JhengHei", "微軟正黑體", sans-serif
  .home
    width: 100%
    height: 100dvh
    box-sizing: border-box
  .epcServices
    width: 100%
    height: 100dvh
    box-sizing: border-box
  .omServices
    width: 100%
    height: 100dvh
    box-sizing: border-box
  .reServices
    width: 100%
    height: 100dvh
    box-sizing: border-box
  .energyManagement
    width: 100%
    height: 100dvh
    box-sizing: border-box
  .powerPurchase
    width: 100%
    height: 100dvh
    box-sizing: border-box
  .solarRooftops
    width: 100%
    height: 100dvh
    box-sizing: border-box
  .greenHarvest
    width: 100%
    box-sizing: border-box
</style>

<style scoped lang="sass">
.home
  width: 100%
  display: flex
  flex-direction: row
  justify-content: flex-start
  align-items: center
  padding: 25vh 13.0209vw
  position: relative
  background-image: url(@/assets/image/index_ai/bg1.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  object-fit: cover
  cursor: pointer
  @media screen and (max-width: 768px)
    padding: 25vh 6.5104vw
  .info
    width: max(42.958%, 400px)
    color: #fff
    .title
      font-size: max(6.5886vw,4.375rem)
      font-weight: 700
    .subTitle
      font-size: 1.5rem
      line-height: 1.5
      letter-spacing: 0.5px
      @media screen and (max-width: 768px)
        font-size: 18px
    .text
      margin-top: 12px
      font-size: 16px
      line-height: 1.5
      letter-spacing: 0.5px
  .nextButton
    width: 100%
    position: absolute
    bottom: 3%
    left: 0
    font-size: 16px
    font-weight: 500
    text-align: center
    color: #fff
    cursor: pointer
</style>

<style scoped lang="sass">
.epcServices
  width: 100%
  display: flex
  flex-direction: row
  justify-content: flex-start
  align-items: center
  position: relative
  background-color: #fff
  cursor: pointer
  @media screen and (max-width: 768px)
    flex-direction: column-reverse
    justify-content: flex-end
    align-items: flex-start
  .info
    width: 50%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    margin: auto
    padding: 60px 8.3334vw
    color: #000
    @media screen and (max-width: 768px)
      width: 100%
      height: 50dvh
      padding: 30px
      margin: 0
    .title
      font-size: 68px
      font-weight: 700
      @media screen and (max-width: 768px)
        font-size: 36px
    .subTitle
      margin-top: 50px
      margin-bottom: 10px
      font-size: 1.5rem
      line-height: 1.5
      letter-spacing: 0.5px
      @media screen and (max-width: 768px)
        margin-top: 20px
        font-size: 18px
    .text
      margin-top: 10px
      font-size: 16px
      font-weight: 400
      line-height: 1.8
      letter-spacing: 0.5px
  .image
    width: 50%
    height: 100dvh
    @media screen and (max-width: 768px)
      width: 100%
      height: 50dvh
    img
      width: 100%
      height: 100%
      object-fit: cover
  .nextButton
    width: 100%
    position: absolute
    bottom: 3%
    left: 0
    font-size: 16px
    font-weight: 500
    text-align: center
    color: #000
    cursor: pointer
    @media screen and (max-width: 768px)
      display: none
</style>

<style scoped lang="sass">
.omServices
  width: 100%
  display: flex
  flex-direction: row
  justify-content: flex-start
  align-items: center
  position: relative
  background-color: #fff
  cursor: pointer
  @media screen and (max-width: 768px)
    flex-direction: column-reverse
    justify-content: flex-end
    align-items: flex-start
  .info
    width: 50%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    margin: auto
    padding: 60px 8.3334vw
    color: #000
    @media screen and (max-width: 768px)
      width: 100%
      height: 50dvh
      padding: 30px
      margin: 0
    .title
      font-size: 68px
      font-weight: 700
      @media screen and (max-width: 768px)
        font-size: 36px
    .subTitle
      margin-top: 50px
      margin-bottom: 10px
      font-size: 1.5rem
      line-height: 1.5
      letter-spacing: 0.5px
      @media screen and (max-width: 768px)
        margin-top: 20px
        font-size: 18px
    .text
      margin-top: 10px
      font-size: 16px
      font-weight: 400
      line-height: 1.8
      letter-spacing: 0.5px
  .image
    width: 50%
    height: 100dvh
    @media screen and (max-width: 768px)
      width: 100%
      height: 50dvh
    img
      width: 100%
      height: 100%
      object-fit: cover
  .nextButton
    width: 100%
    position: absolute
    bottom: 3%
    left: 0
    font-size: 16px
    font-weight: 500
    text-align: center
    color: #000
    cursor: pointer
    @media screen and (max-width: 768px)
      display: none
</style>

<style scoped lang="sass">
.reServices
  width: 100%
  display: flex
  flex-direction: row
  justify-content: flex-start
  align-items: center
  position: relative
  background-color: #fff
  cursor: pointer
  @media screen and (max-width: 768px)
    flex-direction: column-reverse
    justify-content: flex-end
    align-items: flex-start
  .info
    width: 50%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    margin: auto
    padding: 60px 8.3334vw
    color: #000
    @media screen and (max-width: 768px)
      width: 100%
      height: 50dvh
      padding: 30px
      margin: 0
    .title
      font-size: 68px
      font-weight: 700
      @media screen and (max-width: 768px)
        font-size: 36px
    .subTitle
      margin-top: 50px
      margin-bottom: 10px
      font-size: 1.5rem
      line-height: 1.5
      letter-spacing: 0.5px
      @media screen and (max-width: 768px)
        margin-top: 20px
        font-size: 18px
    .text
      margin-top: 10px
      font-size: 16px
      font-weight: 400
      line-height: 1.8
      letter-spacing: 0.5px
  .image
    width: 50%
    height: 100dvh
    @media screen and (max-width: 768px)
      width: 100%
      height: 50dvh
    img
      width: 100%
      height: 100%
      object-fit: cover
  .nextButton
    width: 100%
    position: absolute
    bottom: 3%
    left: 0
    font-size: 16px
    font-weight: 500
    text-align: center
    color: #000
    cursor: pointer
    @media screen and (max-width: 768px)
      display: none
</style>

<style scoped lang="sass">
.energyManagement
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start
  padding: 80px 6.511%
  position: relative
  background-image: url(@/assets/image/index_ai/bg5.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  object-fit: cover
  cursor: pointer
  @media screen and (max-width: 768px)
    padding: 30px 6.511%
  .title
    font-size: 4.25rem
    line-height: 1.3
    font-weight: 500
    color: #fff
    @media screen and (max-width: 768px)
      font-size: 36px
  .textWrap
    width: 26.0417vw
    margin: 70px auto 0 0
    color: #fff
    @media screen and (max-width: 768px)
      width: 100%
      margin: 30px 0 0 0
    .subTitle
      margin-bottom: 10px
      font-size: 1.5rem
      line-height: 1.5
      letter-spacing: 0.5px
    .text
      font-size: 16px
      font-weight: 400
      line-height: 1.8
      letter-spacing: 0.5px
  .nextButton
    width: 100%
    position: absolute
    bottom: 3%
    left: 0
    font-size: 16px
    font-weight: 500
    text-align: center
    color: #fff
    cursor: pointer
    @media screen and (max-width: 768px)
      display: none
</style>

<style scoped lang="sass">
.powerPurchase
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start
  padding: 80px 6.511%
  position: relative
  background-image: url(@/assets/image/index_ai/bg6.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  object-fit: cover
  cursor: pointer
  @media screen and (max-width: 768px)
    padding: 30px 6.511%
  .title
    font-size: 4.25rem
    line-height: 1.3
    font-weight: 500
    color: #fff
    @media screen and (max-width: 768px)
      font-size: 36px
  .textWrap
    width: 26.0417vw
    margin: 70px auto 0 0
    color: #fff
    @media screen and (max-width: 768px)
      width: 100%
      margin: 30px 0 0 0
    .subTitle
      margin-bottom: 10px
      font-size: 1.5rem
      line-height: 1.5
      letter-spacing: 0.5px
    .text
      font-size: 16px
      font-weight: 400
      line-height: 1.8
      letter-spacing: 0.5px
  .nextButton
    width: 100%
    position: absolute
    bottom: 3%
    left: 0
    font-size: 16px
    font-weight: 500
    text-align: center
    color: #fff
    cursor: pointer
    @media screen and (max-width: 768px)
      display: none
</style>

<style scoped lang="sass">
.solarRooftops
  width: 100%
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start
  padding: 80px 6.511%
  position: relative
  background-image: url(@/assets/image/index_ai/bg7.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  object-fit: cover
  cursor: pointer
  @media screen and (max-width: 768px)
    padding: 30px 6.511%
  .title
    font-size: 4.25rem
    line-height: 1.3
    font-weight: 500
    color: #fff
    @media screen and (max-width: 768px)
      font-size: 36px
  .textWrap
    width: 26.0417vw
    margin: 70px auto 0 0
    color: #fff
    @media screen and (max-width: 768px)
      width: 100%
      margin: 30px 0 0 0
    .subTitle
      margin-bottom: 10px
      font-size: 1.5rem
      line-height: 1.5
      letter-spacing: 0.5px
    .text
      font-size: 16px
      font-weight: 400
      line-height: 1.8
      letter-spacing: 0.5px
  .nextButton
    width: 100%
    position: absolute
    bottom: 3%
    left: 0
    font-size: 16px
    font-weight: 500
    text-align: center
    color: #fff
    cursor: pointer
    @media screen and (max-width: 768px)
      display: none
</style>

<style scoped lang="sass">
.greenHarvest
  width: 100%
  height: 100dvh
  display: flex
  flex-direction: column
  justify-content: center
  align-items: center
  background-image: url(@/assets/image/index_ai/bg8.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  object-fit: cover
  color: #fff
  cursor: pointer
  @media screen and (max-width: 768px)
    height: auto
    padding: 60px 6.511%
  .title
    font-size: 5rem
    font-weight: 500
    line-height: 1.1
    @media screen and (max-width: 768px)
      font-size: 36px
  .subTitle
    margin-top: 2.6042vw
    font-size: 1.5rem
    line-height: 1.5
    letter-spacing: 0.5px
    @media screen and (max-width: 768px)
      margin-top: 20px
      font-size: 18px
  .text
    margin-top: 10px
    font-size: 16px
    font-weight: 400
    line-height: 1.8
    letter-spacing: 0.5px
  .slider
    width: 50dvw
    height: 240px
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    margin-top: 5.2084vw
    @media screen and (max-width: 768px)
      width: 100%
      height: auto
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      margin-top: 30px
    .sliders
      margin: 0 12px
      @media screen and (max-width: 768px)
        margin: 0 0 20px 0
      .items
        width: 180px
        height: 180px
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        padding: 30px 42px
        font-size: 16px
        font-weight: 500
        line-height: 1.5
        letter-spacing: 0.5px
        background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.48) 100%)
        border-radius: 500px
        cursor: pointer
        transition: width 0.3s, height 0.3s
        img
          width: 50px
          height: 50px
      .active
        width: 240px
        height: 240px
        @media screen and (max-width: 768px)
          width: 180px
          height: 180px
  .moreButton
    min-width: 210px
    min-height: 55px
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    margin: 4.1667vw auto 0
    position: relative
    background: #000
    box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.2)
    border-radius: 500px
    cursor: pointer
    &::after
      content: ""
      width: 0%
      height: 102%
      display: block
      position: absolute
      z-index: 1
      top: 50%
      left: 50%
      opacity: 0
      border-radius: 500px
      background: -webkit-gradient(linear, right top, left top, from(#5AFAE9), color-stop(57.45%, #80F3BC), color-stop(231.25%, #9ACA3C))
      background: linear-gradient(270deg, #5AFAE9 0%, #80F3BC 57.45%, #9ACA3C 231.25%)
      -webkit-transform: translate3d(-50%, -50%, 0)
      transform: translate3d(-50%, -50%, 0)
      -webkit-transition: opacity 0.5s, width 0.5s ease-out
      transition: opacity 0.5s, width 0.5s ease-out
    &:hover::after
      opacity: 1
      width: 102%
    .text
      margin: 0
      font-size: 14px
      color: #fff
      z-index: 2
</style>
