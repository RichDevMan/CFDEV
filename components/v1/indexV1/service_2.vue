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
    title: `${'O&M'}${t('案場維運')}`,
    link: 'maintain'
  },
  {
    title: `${t('主動式異常診斷系統')}`,
    link: 'diagnosis'
  },
  {
    title: `${t('定期維運巡檢')}`,
    link: 'inspection'
  },
  {
    title: `${t('抄錶與弱點案場管理')}`,
    link: 'eaknessManagement'
  },
  {
    title: `${t('支架防颱巡檢與屋頂結構管理')}`,
    link: 'structureManagement'
  },
  {
    title: `${t('備品更換及停產變流器整場改造')}`,
    link: 'transformation'
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
        <div class="text">{{ $lang('光電案場維運') }}</div>
      </div>
      <div class="title">O&M Services</div>
      <div class="subTitle">{{ $lang('光電案場維運') }}</div>
      <div class="text">
        {{
          $lang(
            '透過在地聘僱維運工程師及人工智慧系統自動判讀，提供案場發電監控、點檢、清潔及維修等服務，使光電案場穩定運轉。'
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
                      src="@/assets/image/index_ai/service_2/collapse1.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('長年維運實績') }}</div>
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
                      {{ $lang('擁有') }}10{{
                        $lang(
                          '年以上豐富的實際維運經驗，管理750座以上太陽光電案場，裝置容量逾量'
                        )
                      }}230MW。
                    </div>
                  </div>
                </div>
              </div>
              <label class="items" for="collapse2">
                <div class="titleBox">
                  <div class="image">
                    <img
                      src="@/assets/image/index_ai/service_2/collapse2.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('足跡遍布全台') }}</div>
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
                          '從都會建物屋頂到鄉鎮土地及農舍，從沿海地層下陷區到阿里山上最高學府，維運範圍遍布全台。'
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
                      src="@/assets/image/index_ai/service_2/collapse3.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('公私多元場域') }}</div>
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
                          '類型涵蓋住宅、畜舍、工廠、學校、商辦、公立圖書館、醫院、體育場、監獄、停車場、政府廳舍屋頂，以及地層下陷區及國有鹽業用地等大型案場。'
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
                      src="@/assets/image/index_ai/service_2/collapse4.png"
                      alt=""
                    />
                  </div>
                  <div class="title">{{ $lang('優異維運成效') }}</div>
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
                      {{ $lang('旗下案場全年發電量表現優於台電躉購案場') }}7%{{
                        $lang('已上。位於彰化大城鄉的第一個案場自')
                      }}2012{{ $lang('年底掛表以來，至今仍維持每') }}kW{{
                        $lang('發電達')
                      }}1,315{{ $lang('度以上。') }}
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
          <div class="twoCard">
            <div
              id="maintain"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_2/card1.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">O&M{{ $lang('案場維運') }}</div>
              <div class="subTitle">
                {{ $lang('在地專業團隊提供即時服務。') }}
              </div>
            </div>
            <div
              id="diagnosis"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_2/card2.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('主動式異常診斷系統') }}</div>
              <div class="subTitle">
                {{ $lang('導入集團獨家研發') }}AI{{
                  $lang('異常偵測診斷技術，自動判別故障類型。')
                }}
              </div>
            </div>
          </div>
          <div class="twoCard">
            <div
              id="inspection"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_2/card3.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('定期維運巡檢') }}</div>
              <div class="subTitle">
                {{
                  $lang(
                    '發電設備及監控軟硬體維護，確保發電資料通訊品質及防盜保全服務。'
                  )
                }}
              </div>
            </div>
            <div
              id="eaknessManagement"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_2/card4.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('抄錶與弱點案場管理') }}</div>
              <div class="subTitle"></div>
            </div>
          </div>
          <div class="twoCard">
            <div
              id="structureManagement"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_2/card5.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">{{ $lang('支架防颱巡檢與屋頂結構管理') }}</div>
              <div class="subTitle"></div>
            </div>
            <div
              id="transformation"
              class="card"

            >
              <div class="image">
                <img src="@/assets/image/index_ai/service_2/card6.png" alt="" />
                <div class="functionButton">
                  <div class="button link">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                </div>
              </div>
              <div class="title">
                {{ $lang('備品更換及停產變流器整場改造') }}
              </div>
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
  background-image: url(@/assets/image/index_ai/bg3.png)
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
        min-width: 220px
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
      .twoCard
        width: 100%
        display: flex
        flex-direction: row
        justify-content: space-between
        align-items: flex-start
        cursor: pointer
        @media screen and (max-width: 768px)
          flex-direction: column
          align-items: center
        .card
          width: 48%
          margin: 20px 0
          @media screen and (max-width: 768px)
            width: 100%
          .image
            width: 100%
            max-height: 240px
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
            text-align: left
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
