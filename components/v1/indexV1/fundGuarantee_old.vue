<script lang="ts" setup></script>
<template>
  <div>
    <div class="banner">
      <div class="backgroundSection">
        <video
          autoplay="autoplay"
          muted="muted"
          playsinline=""
          loop="loop"
          src="@/assets/image/index_ai/fund/fundBanner.mp4"
          class="backgroundVideo"
        ></video>
      </div>
      <div class="description">
        <div class="title">
          <div>
            {{ $lang('新能源時代') }}
          </div>
          <div>
            {{ $lang('電力尖兵50強出線') }}
          </div>
        </div>
        <div class="btn" @click="navigateTo('/register')">
          {{ $lang('開立帳戶') }}
        </div>
      </div>
    </div>
    <div class="timeSection">
      <div class="title">
        {{ $lang('24/6 客服服務時間') }}
      </div>
      <div class="image">
        <img src="@/assets/image/index_ai/fund/service.png" />
      </div>
    </div>
    <div class="service">
      <div class="left">
        <div class="title">
          {{ $lang('執行快速穩定') }}
        </div>
        <div class="subTitle">
          {{ $lang('同時免費提供 VPS 服務') }}
        </div>
        <div class="link" @click="navigateTo('/login')">
          {{ $lang('查看 VPS 詳情') }}
        </div>
      </div>
      <div class="right">
        <div class="title">
          {{ $lang('透明報價歷史') }}
        </div>
        <div class="subTitle">
          {{ $lang('公開所有品種跳動點數據') }}
        </div>
        <div class="link" @click="navigateTo('/login')">
          {{ $lang('查看價格歷史') }}
        </div>
      </div>
    </div>
    <div class="accountSection">
      <div class="center">
        <div class="bigTitle">
          {{ $lang('不同的賬戶類型滿足您不同的交易策略需求') }}
        </div>
      </div>
      <div class="left">
        <div class="title">
          {{ $lang('標準型賬戶') }}
        </div>
        <div class="subTitle">
          {{ $lang('標準') }}
        </div>
        <div class="subTitleDescription">
          {{ $lang('我們的最熱門賬戶，適合所有類型的交易者。') }}
        </div>
        <div class="subTitle">
          {{ $lang('美分') }}
        </div>
        <div class="subTitleDescription">
          {{ $lang('專為交易新手定制，以微手入門交易。') }}
        </div>
        <div class="subTitleDescription2">
          {{
            $lang(
              '功能豐富、0手續費賬戶，滿足當代交易者的多重需求。開立賬戶體驗我們最熱門賬戶的多元優勢。'
            )
          }}
        </div>
        <div class="leftbottom">
          <div class="leftBtn" @click="navigateTo('/login')">
            {{ $lang('查看詳情') }}
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title">
          {{ $lang('專業型賬戶') }}
        </div>
        <div class="subTitle">
          {{ $lang('裸點') }}
        </div>
        <div class="subTitleDescription">
          {{ $lang('超低點差、固定佣金/手、市價執行。') }}
        </div>
        <div class="subTitle">
          {{ $lang('零點') }}
        </div>
        <div class="subTitleDescription">
          {{ $lang('0 點差交易排名前 30 品種、市價執行、無重新報價。') }}
        </div>
        <div class="subTitle">
          {{ $lang('先鋒') }}
        </div>
        <div class="subTitleDescription">
          {{ $lang('我們的即時執行賬戶：0 佣金、低點差。') }}
        </div>
        <div class="subTitleDescription2">
          {{
            $lang(
              '裸點模式、0 點差、0 佣金，任您自由選擇。滿足資深、超短線和算法交易者的不同需求。'
            )
          }}
        </div>
        <div class="rightbottom">
          <div class="rightBtn" @click="navigateTo('/login')">
            {{ $lang('查看詳情') }}
          </div>
        </div>
      </div>
    </div>
    <div class="totalSection">
      <div class="left">
        <div class="title">
          {{ $lang('EXNESS數字盤點') }}
        </div>
        <div class="subTitle">
          {{
            $lang(
              '從交易量到活躍客戶人數，敬請從多維度透過數字了解我們作為全球領先經紀商的成績。'
            )
          }}
        </div>
        <div class="link" @click="navigateTo('/login')">
          {{ $lang('了解詳情') }}
        </div>
      </div>
      <div class="right">
        <div class="bigTitle">
          {{ $lang('3.35 萬億美元') }}
        </div>
        <div class="subTitleCenter">
          {{ $lang('2023年5月交易量') }}
        </div>
        <div class="bigTitle">
          {{ $lang('515,099') }}
        </div>
        <div class="subTitleCenter">
          {{ $lang('2023年5月活躍客戶人數') }}
        </div>
        <div class="bigTitle">
          {{ $lang('13.5億美元') }}
        </div>
        <div class="subTitleCenter">
          {{ $lang('2023年一季度客戶出金總額') }}
        </div>
        <div class="bigTitle">
          {{ $lang('1.098 億美元') }}
        </div>
        <div class="subTitleCenter">
          {{ $lang('2023年一季度合作夥伴佣金') }}
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass">
.banner
  position: relative
  width: 100dvw
  height: 600px
  @media screen and (max-width: 768px)
    height: 100dvh
  .backgroundSection
    width: 100%
    @media screen and (max-width: 768px)
      height: 100%
    video
      height: 100%
      @media screen and (max-width: 768px)
        max-width: none
        height: 100%
</style>
<style scoped lang="sass">
.description
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  display: flex
  justify-content: center
  align-items: center
  flex-direction: column
  .title
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8)
    width: 100%
    text-align: center
    max-width: 100%
    margin: 0 0 32px 0
    font-size: 52px
    color: #fff
    @media screen and (max-width: 768px)
      font-size: 30px
  .btn
    background: #ffcf01
    padding: 12px 32px
    border-radius: 8px
    color: #000
    font-size: 16px
    text-align: center
    width: 150px
</style>

<style scoped lang="sass">
.timeSection
  background-color: #363d41
  text-align: center
  padding: 0 80px
  @media screen and (max-width: 768px)
    padding: 0 10px
  .title
    padding: 80px 0 20px 0
    font-size: 32px
    color: #fff
    @media screen and (max-width: 768px)
      padding: 40px 0 20px 0
      font-size: 20px
</style>
<style scoped lang="sass">
.service
  width: 100dvw
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  color: #fff
  .right
    width:50%
    background-color: #8d9194
    padding: 60px 80px
    @media screen and (max-width: 768px)
      width: 100%
  .left
    width:50%
    background-color: #0f171c
    padding: 60px 80px
    @media screen and (max-width: 768px)
      width: 100%
  .title
    font-size: 28px
    margin: 0 0 20px 0
    font-weight: 900
  .subTitle
    font-size: 18px
    margin: 0 0 60px 0
  .link
    font-size: 16px
    text-decoration: underline
    cursor: pointer
</style>

<style scoped lang="sass">
.accountSection
  width: 100dvw
  display: flex
  justify-content: space-between
  flex-wrap: wrap
  color: #fff
  background-color: #fff
  padding: 40px
  @media screen and (max-width: 768px)
    padding: 20px
  .center
    width: 100%
  .right
    width:50%
    background-color: #e2e2e2
    padding: 40px 40px
    border-top-right-radius: 10px
    border-bottom-right-radius: 10px
    color: black
    @media screen and (max-width: 768px)
      width: 100%
      border-top-left-radius: 10px
      border-bottom-left-radius: 10px
      margin: 20px 0 0 0
  .left
    width:50%
    background-color: #0f171c
    padding: 40px 40px
    border-top-left-radius: 10px
    border-bottom-left-radius: 10px
    @media screen and (max-width: 768px)
      width: 100%
      border-top-right-radius: 10px
      border-bottom-right-radius: 10px
  .bigTitle
    font-size: 36px
    color: black
    text-align: center
    margin: 0 0 20px 0
    @media screen and (max-width: 768px)
      font-size: 26px
  .title
    font-size: 28px
    margin: 0 0 60px 0
  .subTitle
    font-size: 24px
    margin: 0 0 20px 0
    width: fit-content
  .subTitle::before
    content: ""
    display: block
    position: absolute
    left: 0
    bottom: 0
    width: 100%
    border-bottom: 1px dashed currentColor

  .subTitleDescription
    font-size: 14px
    margin: 0 0 20px 0
  .link
    font-size: 16px
    text-decoration: underline
  .subTitleDescription2
    font-size: 16px
    margin: 20px 0 20px 0
  .leftbottom
    position: relative
    width: 100%
    height: 300px
    @media screen and (max-width: 768px)
      height: 100px
  .rightbottom
    position: relative
    width: 100%
    height: 200px
    @media screen and (max-width: 768px)
      height: 100px
  .leftBtn
    position: absolute
    right: 0
    bottom: 0
    width: 200px
    border: 1px solid #ce9400
    border-radius: 5px
    text-align: center
    padding: 5px 0
    color: #ce9400
    cursor: pointer
  .rightBtn
    position: absolute
    right: 0
    bottom: 0
    width: 200px
    border: 1px solid #0f171c
    border-radius: 5px
    text-align: center
    padding: 5px 0
    color: #0f171c
    cursor: pointer
</style>

<style scoped lang="sass">
.totalSection
  background-color: #f4f5f6
  width: 100dvw
  display: flex
  justify-content: space-between
  align-items: center
  flex-wrap: wrap
  color: black
  .right
    width:50%
    padding: 60px 80px
    @media screen and (max-width: 768px)
      width: 100%
      padding: 60px 20px
  .left
    width:50%
    padding: 60px 80px
    @media screen and (max-width: 768px)
      width: 100%
      padding: 60px 20px
  .title
    font-size: 28px
    margin: 0 0 20px 0
    font-weight: 900
  .subTitle
    font-size: 18px
    margin: 0 0 60px 0
  .link
    font-size: 16px
    text-decoration: underline
    cursor: pointer
  .bigTitle
    font-size: 32px
    text-align: center
    margin: 0 0 10px 0
    @media screen and (max-width: 768px)
      font-size: 26px
  .subTitleCenter
    font-size: 18px
    margin: 0 0 60px 0
    text-align: center
</style>
