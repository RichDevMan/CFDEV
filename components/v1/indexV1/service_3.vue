<script lang="ts" setup>
const router = useRouter()
const { t } = useI18n()
const siteStore = useSiteStore()
const collapse1 = ref(false)
const collapse2 = ref(false)
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
    title: `${t('臺南沙崙智慧能源管理')}${'BOT'}${t('案')}`,
    link: 'example'
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
        <div class="text">{{ $lang('區域能源整合') }}</div>
      </div>
      <div class="title">Integrated RE Services</div>
      <div class="subTitle">{{ $lang('區域能源整合') }}</div>
      <div class="text">
        {{ $lang('以台南沙崙智慧能源') }}BOT{{ $lang('為「') }}2050{{
          $lang(
            '零轉型」的第一線實戰場域，結合光電、儲能、資訊監控預測及智慧生活應用，以尖峰綠電滲透率100%為營運目標，並將逐步擴及至商辦、住宅及工業聚落。'
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
          <div class="title">{{ $lang('服務亮點') }}</div>
          <div class="col">
            <div class="row">
              <div class="items">
                <label class="titleBox" for="collapse1">
                  <div class="image">
                    <img
                      src="@/assets/image/index_ai/service_3/collapse1.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('再生能源發電系統') }}</div>
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
                          '以複合式空間利用，設置太陽光電發電系統，供應綠電至區域內的用戶。中長期持續開發各類型再生能源，達成用戶'
                        )
                      }}RE100{{ $lang('目標。') }}
                    </div>
                  </div>
                </div>
              </div>
              <label class="items" for="collapse2">
                <div class="titleBox">
                  <div class="image">
                    <img
                      src="@/assets/image/index_ai/service_3/collapse2.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('智慧儲能系統') }}</div>
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
                          '設置儲能系統於用戶端，執行需量反應措施，減少系統尖峰時間的用電量，進而成為虛擬電廠'
                        )
                      }}(Virtual Power Plant, VPP){{
                        $lang('的要角，為用戶帶來電能調度服務的收益。')
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
                      src="@/assets/image/index_ai/service_3/collapse3.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('智慧電網') }}</div>
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
                      {{ $lang('設置智慧電錶與') }}AIoT{{
                        $lang(
                          '設備，收集區內用戶用電負載資訊，監控電力品質與穩定度，提供智慧電網調度與控制決策。'
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
                      src="@/assets/image/index_ai/service_3/collapse4.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('區域能源管理系統') }}</div>
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
                      {{
                        $lang(
                          '結合太陽能發電預測、用電負載預測及儲能充放電自動化排程，實現穩定供電同時提升用電效率，達成區域內電力之供需平衡。'
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
        <div class="title">{{ $lang('執行中案件') }}</div>
        <div class="col">
          <div
            id="example"
            class="oneCard"
          >
            <div class="image">
              <img src="@/assets/image/index_ai/service_3/card1.png" alt="" />
              <div class="functionButton">
                <div
                  class="button video"
                  @click="
                    linkClick('https://www.youtube.com/watch?v=ZxvQOi76M7s')
                  "
                >
                  <i class="fa-solid fa-play"></i>
                </div>
                <div class="button link">
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
            <div class="title">
              {{ $lang('臺南沙崙智慧能源管理') }}BOT{{ $lang('案') }}
            </div>
            <div class="subTitle">
              {{
                $lang(
                  '推動創能、儲能、節能及智慧系統整合之能源轉型，以達成區內尖峰時段綠電滲透率'
                )
              }}100%{{ $lang('為目標。') }}
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
  background-image: url(@/assets/image/index_ai/bg4.png)
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
      justify-content: center
      align-items: center
      flex-wrap: nowrap
      overflow-x: auto
      box-sizing: border-box
    .menuItem
      min-width: 200px
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
        width: 50%
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
</style>

<style scoped lang="sass">
#collapse1:checked ~ .containers .row:nth-child(1) .items:nth-child(1) .content,
#collapse2:checked ~ .containers .row:nth-child(1) .items:nth-child(2) .content,
#collapse3:checked ~ .containers .row:nth-child(2) .items:nth-child(1) .content,
#collapse4:checked ~ .containers .row:nth-child(2) .items:nth-child(2) .content
  max-height: 1000px
</style>
