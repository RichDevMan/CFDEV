<script lang="ts" setup></script>
<template>
  <div>
    <div class="banner">
      <div class="backgroundSection">
        <img src="@/assets/image/fundGuaranteeBackground.png" />
      </div>
      <div class="description">
        <div class="title">
          <div>
            {{ $lang('保障客戶資金安全') }}
          </div>
          <div class="subTitle">
            {{ $lang('採用多種方式確保零售客戶資金安全穩妥，引領行業發展。') }}
          </div>
        </div>
      </div>
    </div>
    <div class="valuePropositionBanner">
      <span>
        {{ $lang('974年倫敦成立，富時250成分公司^') }}
      </span>
      <span>
        {{ $lang('313,000+全球客戶信心之選') }}
      </span>
      <span>
        {{ $lang('17,000+種豐富金融市場') }}
      </span>
    </div>
    <div class="pointSection">
      <div class="title">
        {{ $lang('要點概覽') }}
      </div>
      <div class="itemList">
        <div class="items">
          <span><i class="fa-solid fa-check"></i></span>
          <div>{{ $lang('客戶資金均獨立存放於受監管的銀行託管帳戶內') }}</div>
        </div>
        <div class="items">
          <span><i class="fa-solid fa-check"></i></span>
          <div>{{ $lang('客戶資金與資產隔離存放並與自有資金完全分隔') }}</div>
        </div>
        <div class="items">
          <span><i class="fa-solid fa-check"></i></span>
          <div>{{ $lang('獲百慕達金融管理局授權及監管') }}</div>
        </div>
        <div class="items">
          <span><i class="fa-solid fa-check"></i></span>
          <div>{{ $lang('即便清盤，客戶資金仍可分隔，不受債權人追索') }}</div>
        </div>
        <div class="items">
          <span><i class="fa-solid fa-check"></i></span>
          <div>
            {{
              $lang(
                '絕不會將客戶資金用於運營活動，如與其他對手方的對沖交易或用作我方對沖交易保證金'
              )
            }}
          </div>
        </div>
      </div>
    </div>
    <div class="questionSection">
      <div class="straightLne">
        <div class="content"></div>
      </div>
      <div class="title">
        {{ $lang('如何處理客戶資金？') }}
      </div>
      <div class="descriptionItems">
        {{
          $lang(
            '與一般銀行不同，像我司這樣投資公司必須將客戶資金和資產與自有資金隔離存放。這意味著，我們不得在運營業務中使用客戶資金。即便清盤，客戶資金可完全分隔並受到保護，不受債權人追索。'
          )
        }}
      </div>
      <div class="descriptionItems">
        {{
          $lang(
            '獲百慕達金融管理局授權經營投資業務。百慕達金融管理局要求受其監管的公司將客戶資金與自有資金隔離存放。'
          )
        }}
      </div>
      <div class="descriptionItems">
        {{
          $lang(
            '已簽署含有相關資金與資產處理不同方式的法律文件（即“所有權轉移”）的“資深交易人士”的資金處理方式與上述不同。'
          )
        }}
      </div>
    </div>
    <div class="questionSection">
      <div class="straightLne">
        <div class="content"></div>
      </div>
      <div class="title">
        {{ $lang('我的資金在存入帳戶後會發生什麼？') }}
      </div>
      <div class="descriptionItems">
        {{
          $lang(
            '您的資金將存放於頂級銀行隔離託管賬戶中。這意味著，資金仍是您的，而非我司的，並且它將被視作客戶資金，所以及其債權人將不得對其進行收費，或行使留置權、抵消權及保留權。'
          )
        }}
      </div>
      <div class="descriptionItems">
        {{
          $lang(
            '我們在多家備受信賴的頂級國際銀行設立了隔離銀行賬戶，例如匯豐銀行（HSBC）。選擇多家銀行存放客戶資金，是我們特意為之，我們不得在同一家銀行存放所有客戶資金。'
          )
        }}
      </div>
      <div class="descriptionItems">
        {{
          $lang(
            '我們可能將資金存入通知或定期存款賬戶，需要提前多日（最高達95天）通知後才可以取款。但這本身不會影響您在賬戶交易或取款流程，但有時候某些金額可能在申請後無法立等可取。'
          )
        }}
      </div>
    </div>
    <div class="questionSection">
      <div class="straightLne">
        <div class="content"></div>
      </div>
      <div class="title">
        {{ $lang('如果或存放客戶資金的銀行倒閉清盤，我的資金怎麼辦？') }}
      </div>
      <div class="descriptionItems">
        {{
          $lang(
            '您於我司的所有存款將被獨立存放在受監管的託管賬戶中，因此在這種情況下，存款將獲得託管資金所能得到的所有法律保障。'
          )
        }}
      </div>
      <div class="descriptionItems">
        {{
          $lang(
            '賬面利潤淨額將被獨立存放於託管賬戶中，而且您的利益通常會如實際受益人般受到保護。'
          )
        }}
      </div>
    </div>
    <div class="questionSection">
      <div class="straightLne">
        <div class="content"></div>
      </div>
      <div class="banner">
        <img src="@/assets/image/fundGuaranteeSectionBack.png" />
        <div class="text">
          <div class="title">
            {{ $lang('立刻開戶') }}
          </div>
          <div class="itemList">
            <div class="items">
              <div class="itemsTitle">
                {{ $lang('廣泛市場，極速執行') }}
              </div>
              <div class="itemsSubTitle">
                {{ $lang('在17,000個全球市場中，探索機遇') }}
              </div>
            </div>
            <div class="items">
              <div class="itemsTitle">
                {{ $lang('無縫交易，隨時隨地') }}
              </div>
              <div class="itemsSubTitle">
                {{ $lang('移動APP屢獲殊榮*，隨時隨地把握良機') }}
              </div>
            </div>
            <div class="items">
              <div class="itemsTitle">
                {{ $lang('業界領先，後顧無憂') }}
              </div>
              <div class="itemsSubTitle">
                {{ $lang('45年專業經驗，助益您的交易') }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass">
.banner
  position: relative
  width: 100dvw
  margin: 80px 0 0 0
  @media screen and (max-width: 768px)
    height: 100dvh
  img
    @media screen and (max-width: 768px)
      height: 100dvh
      object-fit: cover
  .backgroundSection
    width: 100%
    @media screen and (max-width: 768px)
      height: 100%
    video
      height: 100%
      @media screen and (max-width: 768px)
        max-width: none
        height: 100%
  .subTitle
    font-size: 18px
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
  @media screen and (max-width: 768px)
    width: 80%
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
.valuePropositionBanner
  background-color: #f5f6f7
  display: flex
  justify-content: center
  align-items: center
  padding: 15px 0
  font-size: 18px
  span
    margin: 0 10px
</style>
<style scoped lang="sass">
.pointSection
  padding: 15px 0
  background-color: #fff
  .title
    text-align: center
    font-size: 24px
  .itemList
    width: 100%
    display: flex
    justify-content: flex-start
    align-items: flex-start
    flex-wrap: wrap
    padding: 0 20px
    margin: 20px 0
    @media screen and (max-width: 768px)
      justify-content: space-between
    .items
      width: 30%
      font-size: 16px
      display: flex
      justify-content: flex-start
      align-items: flex-start
      margin: 10px
      @media screen and (max-width: 768px)
        width: 100%
      span
        color: green
        margin: 0 10px 0 0
</style>

<style scoped lang="sass">
.questionSection
  padding: 15px 0
  background-color: #fff
  .straightLne
    margin: 40px 0
    .content
      margin: 0 auto
      width: 300px
      border-bottom: 8px solid red
  .title
    padding: 0 80px
    text-align: center
    font-size: 24px
    margin: 15px 0 30px 0
  .descriptionItems
    padding: 0 80px
    text-align: left
    font-size: 16px
    margin: 15px 0
  .banner
    width: 100%
    position: relative
    color: #fff
    img
      width: 100%
      @media screen and (max-width: 768px)
        height: 100dvh
        object-fit: cover
    .text
      width: 100%
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
    .itemList
      width: 100%
      display: flex
      justify-content: space-between
      align-items: flex-start
      flex-wrap: wrap
      padding: 0 80px
      margin: 20px 0
      .items
        width: 30%
        @media screen and (max-width: 768px)
          width: 100%
          margin: 15px 0
        .itemsTitle
          font-size: 20px
        .itemsSubTitle
          font-size: 14px
</style>
