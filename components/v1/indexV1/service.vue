<script lang="ts" setup>
const router = useRouter()
const { t } = useI18n()
const siteStore = useSiteStore()
const itemsClick = (link: string) => {
  router.push('/' + link)
}

const serviceList = [
  {
    title: `${t('光電系統工程')}`,
    link: 'service_1'
  },
  {
    title: `${t('光電案場維運')}`,
    link: 'service_2'
  },
  {
    title: `${t('區域能源整合')}`,
    link: 'service_3'
  },
  {
    title: `${t('能源資訊服務')}`,
    link: 'service_4'
  },
  {
    title: `${t('綠電交易服務')}`,
    link: 'service_5'
  }
]
</script>
<template>
  <div class="containers">
    <div class="service">
      <div class="info">
        <div class="title">SERVICES</div>
        <div class="subTitle">{{ $lang('服務項目') }}</div>
        <div class="text">
          {{
            $lang(
              '從發電、建置、維運、售電，到整合用電資訊提供客製化的能源規劃及管理服務，睿禾以磐石的經營態度與穩健的技術實績，陪伴客戶逐步實現永續目標。'
            )
          }}
        </div>
        <div class="itemList">
          <div
            v-for="(items, index) in serviceList"
            :key="index"
            class="item"
            @click="itemsClick(items.link)"
          >
            {{ items.title }}
          </div>
        </div>
      </div>
      <div class="image">
        <img src="@/assets/image/index_ai/serviceImg.png" alt="" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.containers
  width: 100%
  box-sizing: border-box
  .service
    width: 100%
    box-sizing: border-box
</style>

<style scoped lang="sass">
.service
  width: 100%
  height: 100dvh
  display: flex
  flex-direction: row
  justify-content: center
  align-items: center
  background-color: #fff
  @media screen and (max-width: 768px)
    height: auto
    flex-direction: column
  .info
    width: 50%
    display: flex
    flex-direction: column
    justify-content: center
    align-items: flex-start
    padding: 7.8125vw 8.3334vw 0
    @media screen and (max-width: 768px)
      width: 100%
      align-items: center
      padding: 160px 10.667% 80px
    .title
      font-size: max(4.6875vw,40px)
      font-weight: 500
      line-height: 1.1
      letter-spacing: 0.5px
    .subTitle
      margin-top: 15px
      font-weight: 500
      font-size: 1.5rem
      line-height: 1.5
      letter-spacing: 0.5px
    .text
      margin-top: 15px
      font-size: 1rem
      line-height: 1.8
      letter-spacing: 0.5px
    .itemList
      display: flex
      flex-direction: row
      justify-content: flex-start
      align-items: center
      flex-wrap: wrap
      margin-top: 60px
      @media screen and (max-width: 768px)
        margin-top: 20px
      .item
        width: 33%
        margin: 16px 0
        font-size: 16px
        font-weight: 500
        text-align: center
        color: #000
        cursor: pointer
        border-right: 1px solid
        border-image: linear-gradient(270deg, #5AFAE9 0%, #80F3BC 57.45%, #9ACA3C 231.25%)
        border-image-slice: 1
        transition: color .3s ease
        &:hover
          color: #2AB673
        @media screen and (max-width: 768px)
          width: 50%
          margin: 12px 0
          font-size: 14px
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
</style>
