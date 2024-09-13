<script lang="ts" setup></script>
<template>
  <div class="page">
    <div class="section1">
      <div class="title">
        {{ $lang('免費 VPS 託管') }}
      </div>
      <div class="subTitle">
        {{
          $lang('使用我們的虛擬專用服務器（VPS），獲取快速、安全的交易環境。')
        }}
      </div>
    </div>
    <div class="section2">
      <div class="left">
        <div class="title">
          {{ $lang('什麼是 VPS？') }}
        </div>
        <div class="subTitle">
          {{
            $lang(
              'VPS即虛擬專用服務器。這些服務器被戰略性地安排在一個與MT服務器相鄰的位置，以此確保無論交易者身處何處，都可享受到快速和安全的交易環境。 VPS服務器可讓您在免受個人桌面或網絡連接限制的情況下，運行自動化交易策略。'
            )
          }}
        </div>
      </div>
      <div class="right">
        <img src="@/assets/image/projectOverview/exness-vps.svg" />
      </div>
    </div>
    <div class="section3">
      <div class="items">
        <div class="title">
          {{ $lang('快速') }}
        </div>
        <div class="description">
          {{
            $lang('VPS服務器與Exness交易服務器相鄰，可確保快速和可靠的執行。')
          }}
        </div>
      </div>
      <div class="items">
        <div class="title">
          {{ $lang('穩定') }}
        </div>
        <div class="description">
          {{
            $lang(
              '無論您的網絡連接質量如何，只要在VPS上運行智能交易（EA），都能享受無縫式的EA執行體驗。'
            )
          }}
        </div>
      </div>
      <div class="items">
        <div class="title">
          {{ $lang('24 小時交易') }}
        </div>
        <div class="description">
          {{
            $lang('使用智能交易（EA），在計算機關閉的狀態下繼續交易金融市場。')
          }}
        </div>
      </div>
      <div class="items">
        <div class="title">
          {{ $lang('移動性與兼容性') }}
        </div>
        <div class="description">
          {{
            $lang(
              '無需安裝任何軟件，無論身處何處，都可訪問賬戶、交易金融市場。我們提供各操作系統版本的 VPS。'
            )
          }}
        </div>
      </div>
    </div>
    <div class="section4">
      <div class="title">
        {{ $lang('VPS 硬件規格') }}
      </div>
      <div class="itemList">
        <!-- items -->
        <div class="items">
          <div>
            <img src="@/assets/image/projectOverview/1.svg" />
          </div>
          <div class="itemsTitle">
            {{ $lang('操作系统') }}
          </div>
          <div class="itemsSubTitle">
            {{ $lang('Windows Server 2019 64位') }}
          </div>
        </div>
        <!-- items -->
        <div class="items">
          <div>
            <img src="@/assets/image/projectOverview/2.svg" />
          </div>
          <div class="itemsTitle">
            {{ $lang('CPU') }}
          </div>
          <div class="itemsSubTitle">
            {{ $lang('單核處理器') }}
          </div>
        </div>
        <!-- items -->
        <div class="items">
          <div>
            <img src="@/assets/image/projectOverview/3.svg" />
          </div>
          <div class="itemsTitle">
            {{ $lang('內存') }}
          </div>
          <div class="itemsSubTitle">
            {{ $lang('2GB') }}
          </div>
        </div>
        <!-- items -->
        <div class="items">
          <div>
            <img src="@/assets/image/projectOverview/4.svg" />
          </div>
          <div class="itemsTitle">
            {{ $lang('硬盤空間') }}
          </div>
          <div class="itemsSubTitle">
            {{ $lang('50GB') }}
          </div>
        </div>
        <!-- items -->
        <div class="items">
          <div>
            <img src="@/assets/image/projectOverview/5.svg" />
          </div>
          <div class="itemsTitle">
            {{ $lang('密碼') }}
          </div>
          <div class="itemsSubTitle">
            {{ $lang('高安全性獨立密碼') }}
          </div>
        </div>
      </div>
    </div>
    <div class="section2">
      <div class="left">
        <div class="title">
          {{ $lang('申請VPS託管') }}
        </div>
        <div class="subTitle">
          {{
            $lang(
              '您現在可以在您的個人專區中申請免費的VPS服務。更多與申請流程和資格標準相關的信息，請訪問我們的幫助中心獲取。'
            )
          }}
        </div>
      </div>
      <div class="right">
        <img src="@/assets/image/projectOverview/CC.svg" />
      </div>
    </div>
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
            {{ $lang('準備好了嗎？') }}
          </div>
        </div>
        <div class="subtitle">
          <div>
            {{ $lang('即刻加入 0 月費，免費使用 VPS') }}
          </div>
        </div>
        <div class="btn" @click="navigateTo('/register')">
          {{ $lang('開立帳戶') }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.page
  background-color: #fff
</style>
<style scoped lang="sass">
.section1
  padding: 60px 40px
  margin: 80px 0 0 0
  .title
    font-size: 44px
    font-weight: bold
  .subTitle
    font-size: 18px
    font-weight: 400
    margin: 10px 0
</style>
<style scoped lang="sass">
.section2
  padding: 60px 40px
  background-color: #f4f5f6
  display: flex
  justify-content: space-around
  align-items: center
  @media screen and (max-width: 768px)
    flex-wrap: wrap
  .left
    width: 50%
    @media screen and (max-width: 768px)
      width: 100%
      margin: 0 0 20px 0
  .right
    width: 50%
    display: flex
    justify-content: center
    @media screen and (max-width: 768px)
      width: 100%
  .title
    font-size: 30px
    font-weight: bold
  .subTitle
    font-size: 16px
    font-weight: 400
    margin: 10px 0
</style>

<style scoped lang="sass">
.section3
  padding: 60px 40px
  display: flex
  justify-content: space-around
  align-items: center
  flex-wrap: wrap
  .items
    width: 45%
    border-radius: 8px
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1)
    margin: 0 0 15px 0
    @media screen and (max-width: 768px)
      width: 100%
    .title
      background-color: #f4f5f6
      padding: 16px
      font-size: 18px
      line-height: 1.44
    .description
      padding: 16px
      font-weight: 400
      font-size: 14px
</style>
<style scoped lang="sass">
.section4
  padding: 60px 40px
  background-color: #f4f5f6
  .title
    font-size: 30px
    font-weight: bold
  .itemList
    display: flex
    justify-content: space-around
    align-items: center
    flex-wrap: wrap
    margin: 60px 0 0 0
    .items
      width: 20%
      text-align: center
      display: flex
      justify-content: center
      flex-wrap: wrap
      @media screen and (max-width: 768px)
        width: 50%
        margin: 20px 0
      img
        width: 80px
      .itemsTitle
        width: 100%
        font-size: 20px
        font-weight: bold
        margin: 20px 0 0 0
      .itemsSubTitle
        width: 100%
        font-size: 16px
        margin: 20px 0 0 0
</style>

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
    .subtitle
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8)
      width: 100%
      text-align: center
      max-width: 100%
      margin: 0 0 32px 0
      font-size: 30px
      color: #fff
      @media screen and (max-width: 768px)
        font-size: 20px
    .btn
      background: #ffcf01
      padding: 12px 32px
      border-radius: 8px
      color: #000
      font-size: 16px
      text-align: center
      width: 150px
</style>
