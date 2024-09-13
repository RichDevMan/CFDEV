<script lang="ts" setup>
const router = useRouter()
const { t } = useI18n()
const siteStore = useSiteStore()
const collapse1 = ref(false)
const collapse2 = ref(false)
const collapse3 = ref(false)
const collapse4 = ref(false)
const linkClick = (link: string) => {
  if (link.includes('http')) {
    window.open(link)
  } else {
    document.getElementById(link).scrollIntoView({ behavior: 'smooth' })
  }
}

const menuClick = (link: string) => {
  document.getElementById(link).scrollIntoView({ behavior: 'smooth' })
}

const navList = ref([
  {
    title: `${t('服務概覽')}`,
    link: 'service'
  },
  {
    title: `${t('主動式異常偵錯診斷系統')}`,
    link: 'diagnosis'
  },
  {
    title: `${t('太陽能發電監控通報系統')}`,
    link: 'system'
  },
  {
    title: `${t('雲端介接台電')}${'DREAMS'}${t('服務')}`,
    link: 'dreams'
  },
  {
    title: `${t('台電調度處委託研究計劃')}`,
    link: 'plan'
  },
  {
    title: `${t('發電及用電預測')}`,
    link: 'predict'
  },
  {
    title: `${'RE100 TRACKER'}`,
    link: 'tracker'
  }
])
</script>
<template>
  <div class="home">
    <div class="info">
      <div class="tag">
        <div class="link" @click="router.push('/service_ai')">
          {{ $lang('服務項目') }}
        </div>
        <div class="text">{{ $lang('能源資訊服務') }}</div>
      </div>
      <div class="title">Energy Data Management</div>
      <div class="subTitle">{{ $lang('能源資訊服務') }}</div>
      <div class="text">
        {{ $lang('結合日照計、溫度計、氣象衛星等資訊，透過') }}AI{{
          $lang(
            '人工智慧預測太陽光電發電量，以結合用電行為、幫助企業或個人釐清「碳預算」，進而以數據為基礎，規劃淨零排放途徑。'
          )
        }}
      </div>
      <div class="scrollButton" @click="linkClick('main')">Scroll</div>
    </div>
    <div id="main" class="main">
      <div class="menu">
        <div class="nav">
          <div
            v-for="(items, index) in navList"
            :key="index"
            class="menuItem"
            @click="menuClick(items.link)"
          >
            {{ items.title }}
          </div>
        </div>
      </div>
      <div class="collapseContainer">
        <input id="collapse1" v-model="collapse1" type="checkbox" />
        <input id="collapse2" v-model="collapse2" type="checkbox" />
        <input id="collapse3" v-model="collapse3" type="checkbox" />
        <input id="collapse4" v-model="collapse4" type="checkbox" />
        <div class="containers">
          <div class="title">{{ $lang('技術亮點') }}</div>
          <div class="subTitle">{{ $lang('可點擊查看詳細內容') }}</div>
          <div class="col">
            <div class="row">
              <div class="items">
                <label class="titleBox" for="collapse1">
                  <div class="image">
                    <img
                      src="@/assets/image/index_ai/service_4/collapse1.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('分散案場監控回傳') }}</div>
                  <div class="changeSwitch">
                    <div v-if="!collapse1" class="button">
                      <i class="fa-solid fa-plus"></i>
                    </div>
                    <div v-if="collapse1" class="button">
                      <i class="fa-solid fa-minus"></i>
                    </div>
                  </div>
                </label>
                <div class="content">
                  <div class="containers">
                    <div class="borders"></div>
                    <div class="text">
                      ${{ $lang('自') }}2015{{
                        $lang(
                          '年創立起，即致力研發分散式電源監控方案與發電數據分析平台。目前應用於超過'
                        )
                      }}230MW、{{ $lang('分布全台及離島逾') }}750{{
                        $lang(
                          '座太陽能電廠，迄今累計數十億筆監控資料。也提供'
                        )
                      }}
                      DREAMS
                      {{
                        $lang(
                          '雲端回傳方案，可降低案場回傳台電數據之硬體設備建置成本。'
                        )
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <label class="items" for="collapse2">
                <div class="titleBox">
                  <div class="image">
                    <img
                      src="@/assets/image/index_ai/service_4/collapse2.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('主動異常診斷技術') }}</div>
                  <div class="changeSwitch">
                    <div v-if="!collapse2" class="button">
                      <i class="fa-solid fa-plus"></i>
                    </div>
                    <div v-if="collapse2" class="button">
                      <i class="fa-solid fa-minus"></i>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <div class="containers">
                    <div class="borders"></div>
                    <div class="text">
                      {{
                        $lang(
                          '不受限於變流器設備品牌或類型，透過機器學習自主建立模型，即時偵測並同步分析電廠變流器與模組運作狀況，主動診斷發生異常的設備可能故障型態，讓維運團隊能提高修復改善效率，進而提升案場平均發電表現。'
                        )
                      }}
                    </div>
                  </div>
                </div>
              </label>
            </div>
            <div class="row">
              <div class="items">
                <label class="titleBox" for="collapse3">
                  <div class="image">
                    <img
                      src="@/assets/image/index_ai/service_4/collapse3.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('發用電預測與匹配') }}</div>
                  <div class="changeSwitch">
                    <div v-if="!collapse3" class="button">
                      <i class="fa-solid fa-plus"></i>
                    </div>
                    <div v-if="collapse3" class="button">
                      <i class="fa-solid fa-minus"></i>
                    </div>
                  </div>
                </label>
                <div class="content">
                  <div class="containers">
                    <div class="borders"></div>
                    <div class="text">
                      {{
                        $lang(
                          '針對綠電交易及智慧電力調度發展需求，研發「太陽能電廠發電預測系統」與「用電負載預測系統」；除提供綠電客戶即時電能轉供量、年度'
                        )
                      }}KPI{{
                        $lang(
                          '達成比例外，另可搭配儲能系統應用於區域智慧電網及電能輔助服務，提供精準決策依據。'
                        )
                      }}
                    </div>
                  </div>
                </div>
              </div>
              <label class="items" for="collapse4">
                <div class="titleBox">
                  <div class="image">
                    <img
                      src="@/assets/image/index_ai/service_4/collapse4.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('光電案場發電推估') }}</div>
                  <div class="changeSwitch">
                    <div v-if="!collapse4" class="button">
                      <i class="fa-solid fa-plus"></i>
                    </div>
                    <div v-if="collapse4" class="button">
                      <i class="fa-solid fa-minus"></i>
                    </div>
                  </div>
                </div>
                <div class="content">
                  <div class="containers">
                    <div class="borders"></div>
                    <div class="text">
                      {{ $lang('自') }}2017{{
                        $lang('年起連續執行台電綜研所委託研究案，建置')
                      }}GEMS{{
                        $lang('系統收集再生能源躉售案場之發電資料，並透過')
                      }}
                      IDW
                      {{
                        $lang(
                          '模型推估其他再生能源案場的發電量，呈現全台即時發電資訊。後續將結合氣象數據資訊，建立更精確的太陽光電即時推估應用模式。'
                        )
                      }}
                    </div>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="service">
        <div class="title">{{ $lang('服務介紹') }}</div>
        <div class="subTitle">{{ $lang('可點擊查看詳細內容') }}</div>
        <div class="col">
          <div
            id="service"
            class="oneCard"

          >
            <div class="image">
              <img src="@/assets/image/index_ai/service_4/card1.png" alt="" />
              <div class="functionButton">
                <div class="button link">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="title">{{ $lang('服務概覽') }}</div>
            <div class="subTitle"></div>
          </div>
          <div class="twoCard">
            <div
              id="diagnosis"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_4/card2.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('主動式異常偵錯診斷系統') }}</div>
              <div class="subTitle"></div>
            </div>
            <div
              id="system"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_4/card3.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('太陽能發電監控通報系統') }}</div>
              <div class="subTitle"></div>
            </div>
          </div>
          <div class="twoCard">
            <div
              id="dreams"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_4/card4.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">
                {{ $lang('雲端介接台電') }}DREAMS{{ $lang('服務') }}
              </div>
              <div class="subTitle"></div>
            </div>
            <div
              id="plan"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_4/card5.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('台電調度處委託研究計劃') }}</div>
              <div class="subTitle"></div>
            </div>
          </div>
          <div class="twoCard">
            <div
              id="predict"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_4/card6.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('發電及用電預測') }}</div>
              <div class="subTitle"></div>
            </div>
            <div
              id="tracker"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_4/card7.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">RE100 TRACKER</div>
              <div class="subTitle"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.home
  width: 100%
  display: flex
  flex-direction: row
  justify-content: center
  align-items: start
  box-sizing: border-box
  @media screen and (max-width: 768px)
    flex-direction: column
    align-items: center
  .info
    height: 100dvh
    box-sizing: border-box
  .main
    box-sizing: border-box
</style>

<style scoped lang="sass">
.info
  width: 40dvw
  padding: 0 48px
  display: flex
  flex-direction: column
  justify-content: center
  align-items: flex-start
  position: sticky
  top: 0
  background-image: url(@/assets/image/index_ai/bg5.png)
  background-size: cover
  background-position: center
  background-repeat: no-repeat
  object-fit: cover
  &::before
    content: ''
    width: 100%
    height: 100%
    position: absolute
    top: 0
    left: 0
    background-color: rgba(0,0,0,0.4)
  @media screen and (max-width: 768px)
    width: 100dvw
    padding: 0
    position: relative
  .tag
    display: flex
    flex-direction: row
    justify-content: flex-start
    align-items: center
    cursor: pointer
    margin-bottom: 2.084vw
    padding: 20px 0
    @media screen and (max-width: 768px)
      padding: 20px
    .link
      font-size: 14px
      font-weight: 500
      color: #fff
      transition: color 0.3s
      &:hover
        color: #2AB673
      &::after
        content: ""
        width: 5px
        height: 5px
        display: inline-block
        margin: 1px 15px
        -webkit-transform: rotate(45deg)
        transform: rotate(45deg)
        border-top: 1px solid #fff
        border-right: 1px solid #fff
    .text
      margin-top: 3px
      padding: 0
      font-size: 14px
      font-weight: 500
      color: #fff
  .title
    font-size: max(4.6875vw,40px)
    font-weight: 500
    color: #fff
    line-height: 1.1
    letter-spacing: 0.5px
    @media screen and (max-width: 768px)
      padding: 0 20px
  .subTitle
    margin-top: 15px
    font-weight: 500
    font-size: 1.5rem
    color: #fff
    line-height: 1.5
    letter-spacing: 0.5px
    @media screen and (max-width: 768px)
      padding: 0 20px
  .text
    margin-top: 15px
    font-size: 1rem
    color: #fff
    line-height: 1.8
    letter-spacing: 0.5px
    @media screen and (max-width: 768px)
      padding: 0 20px
  .scrollButton
    width: 100%
    display: none
    position: absolute
    bottom: 20px
    z-index: 10
    font-size: 14px
    font-weight: 500
    text-align: center
    color: #fff
    cursor: pointer
    @media screen and (max-width: 768px)
      display: block
</style>

<style scoped lang="sass">
.main
  width: 60dvw
  padding-top: 200px
  background-color: #fff
  @media screen and (max-width: 768px)
    width: 100dvw
    padding-top: 40px
  .menu
    width: 87%
    margin: 0 auto
    padding: 40px
    box-sizing: border-box
    overflow: hidden
    @media screen and (max-width: 768px)
      padding: 0
    .nav
      width: 100%
      display: flex
      flex-direction: row
      justify-content: flex-start
      align-items: center
      flex-wrap: nowrap
      overflow-x: auto
      box-sizing: border-box
    .menuItem
      min-width: 240px
      font-size: 16px
      font-weight: 500
      text-align: center
      text-wrap: nowrap
      color: #000
      cursor: pointer
      border-right: 1px solid
      border-image: linear-gradient(270deg, #5AFAE9 0%, #80F3BC 57.45%, #9ACA3C 231.25%)
      border-image-slice: 1
      transition: color .3s ease
      overflow: hidden
      &:hover
        color: #2AB673
      @media screen and (max-width: 768px)
        min-width: 200px
        margin: 12px 0
        font-size: 14px
  .collapseContainer
    width: 100%
    padding: 80px 40px
    @media screen and (max-width: 768px)
      padding: 40px 20px
    input
      display: none
    .containers
      max-width: 850px
      width: 100%
      margin: 0 auto
      padding: 0 25px
      @media screen and (max-width: 768px)
        padding: 0
      .title
        width: 100%
        font-size: 38px
        font-weight: 400
        line-height: 1.5
        letter-spacing: 0.5px
        text-align: center
        @media screen and (max-width: 768px)
          font-size: 24px
      .subTitle
        margin-top: 15px
        font-size: 16px
        line-height: 1.8
        letter-spacing: 0.5px
        text-align: center
      .col
        width: 100%
        display: flex
        flex-direction: column
        justify-content: center
        align-items: flex-start
        .row
          width: 100%
          display: flex
          flex-direction: row
          justify-content: center
          align-items: flex-start
          margin-top: 40px
          @media screen and (max-width: 1300px)
            flex-direction: column
            align-items: center
            margin: 0
          .items
            width: 50%
            display: flex
            flex-direction: column
            justify-content: center
            align-items: flex-start
            padding-right: 10px
            @media screen and (max-width: 1300px)
              width: 100%
              margin: 12px 0
              padding-right: 0
            .titleBox
              width: 100%
              display: flex
              flex-direction: row
              justify-content: center
              align-items: center
              cursor: pointer
              &:hover .image img
                transform: scale(1.2)
              .image
                max-width: 80px
                width: 25%
                display: flex
                flex-direction: row
                justify-content: center
                align-items: center
                padding: 20px
                background: #fff
                border-radius: 500px
                -webkit-box-shadow: 1px 3px 25px -6px rgba(0, 0, 0, 0.2)
                box-shadow: 1px 3px 25px -6px rgba(0, 0, 0, 0.2)
                @media screen and (max-width: 768px)
                  max-width: 70px
                img
                  width: 40px
                  height: auto
                  object-fit: cover
                  transform: scale(1)
                  transition: transform 0.3s
                  @media screen and (max-width: 768px)
                    width: 30px
              .title
                width: 75%
                padding: 0 20px
                font-weight: 500
                font-size: 1.25rem
                text-align: left
                line-height: 1.5
                letter-spacing: 1px
                @media screen and (max-width: 768px)
                  font-size: 18px
                  padding: 0 10px
              .changeSwitch
                width: 10%
                display: flex
                flex-direction: row
                justify-content: center
                align-items: center
                .button
                  display: flex
                  flex-direction: row
                  justify-content: center
                  align-items: center
                  svg
                    font-size: 16px
                    color: #000
                    @media screen and (max-width: 768px)
                      font-size: 12px
            .content
              width: 100%
              max-height: 0
              overflow: hidden
              transition: max-height 0.5s
              .containers
                width: 75%
                margin-left: auto
                margin-right: 0
                padding: 0
                @media screen and (max-width: 1300px)
                  width: calc(100% - 100px)
                @media screen and (max-width: 768px)
                  width: 100%
                .borders
                  width: 100%
                  height: 1px
                  margin: 20px 0
                  background-color: #D0D0D0
                .text
                  width: 100%
                  font-size: 1rem
                  line-height: 1.8
                  letter-spacing: 0.5px
                  text-align: justify
  .service
    width: 100%
    padding: 120px 80px
    background-color: #F2F2F2
    @media screen and (max-width: 768px)
      padding: 40px 20px
    .title
      width: 100%
      font-size: 38px
      font-weight: 400
      text-align: center
      line-height: 1.5
      letter-spacing: 0.5px
      @media screen and (max-width: 768px)
        font-size: 24px
    .subTitle
      margin-top: 15px
      font-size: 16px
      line-height: 1.8
      letter-spacing: 0.5px
      text-align: center
    .col
      width: 100%
      margin-top: 60px
      @media screen and (max-width: 768px)
        margin-top: 40px
      .oneCard, .twoCard
        width: 100%
        margin: 20px 0
        cursor: pointer
        .image
          width: 100%
          max-height: 500px
          height: auto
          position: relative
          overflow: hidden
          &:hover img
            transform: scale(1.05)
          &:hover .functionButton .link
            background-color: #000
          &:hover .functionButton .link svg
            color: #fff
          img
            width: 100%
            height: auto
            object-fit: cover
            transform: scale(1)
            transition: transform 0.3s
          .functionButton
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: center
            position: absolute
            right: 12px
            bottom: 12px
            .button
              width: 50px
              height: 50px
              display: flex
              flex-direction: row
              justify-content: center
              align-items: center
              background-color: rgb(70, 69, 69)
              border-radius: 50%
              margin: 0 10px
              &:hover
                background-color: #000
              svg
                font-size: 16px
                color: #fff
            .link
              background-color: #fff
              &:hover
                background-color: #000
              &:hover svg
                color: #fff
              svg
                color: #000
        .title
          margin-top: 20px
          padding: 0 20px
          font-weight: 500
          font-size: 1.5rem
          text-align: left
          line-height: 1.5
          letter-spacing: 0.5px
          @media screen and (max-width: 768px)
            font-size: 1.25rem
        .subTitle
          margin-top: 10px
          padding: 0 20px
          font-size: 1rem
          line-height: 1.8
          letter-spacing: 0.5px
      .twoCard
        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: flex-start
        margin: 0
        @media screen and (max-width: 768px)
          flex-direction: column
          align-items: center
        .card
          width: 48%
          margin: 20px 0
          @media screen and (max-width: 768px)
            width: 100%
          .image
            max-height: 240px
</style>

<style scoped lang="sass">
#collapse1:checked ~ .containers .row:nth-child(1) .items:nth-child(1) .content,
#collapse2:checked ~ .containers .row:nth-child(1) .items:nth-child(2) .content,
#collapse3:checked ~ .containers .row:nth-child(2) .items:nth-child(1) .content,
#collapse4:checked ~ .containers .row:nth-child(2) .items:nth-child(2) .content
  max-height: 1000px
</style>
