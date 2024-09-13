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
    title: `${t('瓦特先生服務概覽')}`,
    link: 'watt'
  },
  {
    title: `${t('第一度綠電交易')}`,
    link: 'trade'
  },
  {
    title: `${t('第一筆綠電專案融資')}`,
    link: 'financing'
  },
  {
    title: `${t('企業回購實例')}`,
    link: 'example'
  },
  {
    title: `${t('商辦綠電模式')}`,
    link: 'model'
  },
  {
    title: `${t('公益橋接')}`,
    link: 'publicWelfare'
  },
  {
    title: `${t('轉供案場資訊')}`,
    link: 'information'
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
        <div class="text">{{ $lang('綠電交易服務') }}</div>
      </div>
      <div class="title">RE Power Purchaset</div>
      <div class="subTitle">{{ $lang('綠電交易服務') }}</div>
      <div class="text">
        {{
          $lang(
            '透過契約規劃，導引虛擬電能及憑證的流向，讓再生能源跨越實體空間的限制，串聯起不同背景的利害關係人，促成跨域空間資源的有效利用，並進一步作為公益合作的橋梁。'
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
          <div class="col">
            <div class="row">
              <div class="items">
                <label class="titleBox" for="collapse1">
                  <div class="image">
                    <img
                      src="@/assets/image/index_ai/service_5/collapse1.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('全台第一售電業執照') }}</div>
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
                      {{
                        $lang(
                          '跨足自由交易市場，獲全台第一批核發再生能源售電業執照，並與永豐銀建構全台第一的綠電專案融資框架。'
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
                      src="@/assets/image/index_ai/service_5/collapse2.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('一站到位的綠電回購') }}</div>
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
                          '企業集團整合屋頂光電建置、綠電轉供與運維管理，屋主享有租金收益、綠電及憑證採購優先權，長期合約約定電價，可迴避台電電價上升風險。'
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
                      src="@/assets/image/index_ai/service_5/collapse3.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('綠電代售與電廠三轉一') }}</div>
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
                          '協助電廠辦理｢第三型轉第一型｣查驗程序，引導綠電進入自由交易市場，以優於台電躉購價格銷售用戶，提升電廠收益報酬。'
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
                      src="@/assets/image/index_ai/service_5/collapse4.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('單一電號多用戶綠電交易') }}</div>
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
                      {{ $lang('與台北') }}101、{{
                        $lang('台灣萊雅')
                      }}(L’Oreal){{
                        $lang(
                          '合作創建「商辦大樓(進駐用戶無獨立電號)之綠電轉供模式」，提供無獨立電表的企業向售電業購買綠電的方案。'
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
            id="watt"
            class="oneCard"

          >
            <div class="image">
              <img src="@/assets/image/index_ai/service_5/card1.png" alt="" />
              <div class="functionButton">
                <div class="button link">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="title">{{ $lang('瓦特先生服務概覽') }}</div>
            <div class="subTitle"></div>
          </div>
          <div class="twoCard">
            <div
              id="trade"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_5/card2.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('第一度綠電交易') }}</div>
              <div class="subTitle"></div>
            </div>
            <div
              id="financing"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_5/card3.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('第一筆綠電專案融資') }}</div>
              <div class="subTitle"></div>
            </div>
          </div>
          <div class="twoCard">
            <div
              id="example"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_5/card4.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('企業回購實例') }}</div>
              <div class="subTitle"></div>
            </div>
            <div
              id="model"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_5/card5.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('商辦綠電模式') }}</div>
              <div class="subTitle"></div>
            </div>
          </div>
          <div class="twoCard">
            <div
              id="publicWelfare"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_5/card6.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('公益橋接') }}</div>
              <div class="subTitle"></div>
            </div>
            <div
              id="information"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_5/card7.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('轉供案場資訊') }}</div>
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
  background-image: url(@/assets/image/index_ai/bg6.png)
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
