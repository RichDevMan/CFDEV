<script lang="ts" setup>
const store = useSiteStore()
const { queryCampaign } = store
const { locale } = useI18n()
const lang = locale.value
const siteStore = useSiteStore()
const activitiesPerPage = ref(5)
const currentPage = ref(1)
const router = useRouter()
await useAsyncData(async () => {
  await queryCampaign(lang)
})
const previousPage = () => {
  if (currentPage.value > 1) currentPage.value--
}
const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}
const totalPages = computed(() => {
  return Math.ceil(store.campaign.total / activitiesPerPage.value)
})
const displayedActivities = computed(() => {
  const start = (currentPage.value - 1) * activitiesPerPage.value
  return store.campaign.result.slice(start, start + activitiesPerPage.value)
})
</script>

<template>
  <div class="topNav">
    <div class="navItems">優惠活動</div>
  </div>
  <div class="form">
    <div class="containers">
      <div class="top">
        <div class="title">優惠活動</div>
        <!-- <div class="reword">
              編輯
              <div class="icon"><i class="fa-solid fa-pen"></i></div>
            </div> -->
      </div>
      <div class="rowRadio">
        <!-- <div class="items">
              <input type="radio" disabled name="drone" id="radio1" />
              <label for="radio1">法人</label>
            </div>
            <div class="items">
              <input type="radio" disabled name="drone" id="radio2" />
              <label for="radio2">自然人</label>
            </div> -->
      </div>
      <ul class="pagination">
        <li :class="{ disabled: currentPage === 1 }" @click="previousPage">
          <a>« {{ $lang('上一頁') }}</a>
        </li>
        <li :class="{ disabled: currentPage === totalPages }" @click="nextPage">
          <a>{{ $lang('下一頁') }} »</a>
        </li>
      </ul>
      <div class="post">
        <div v-for="item in displayedActivities" :key="item.title" class="Item">
          <input :id="item.title" type="checkbox" />
          <label :for="item.title">
            <div class="itemTitle" style="cursor: pointer">
              <div class="image"><img :src="item.image" /></div>
            </div>
            <div class="itemContent">
              {{ item.title }}
              <br />
              <div class="html" v-html="item.content"></div>
            </div>
          </label>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.topNav
    width: 100%
    background-color: rgb(234, 243, 236)
    display: flex
    justify-content: flex-start
    align-items: center
    .navItems
        width: 25%
        height: 72px
        display: flex
        justify-content: center
        align-items: center
        color: rgb(0, 202, 227)
        background: rgb(255, 255, 255)
        font-size: 1.125rem
        border-bottom: 6px solid rgb(0, 202, 227)
        cursor: pointer
        @media screen and (max-width: 768px)
            width: 50%
</style>

<style scoped lang="sass">
.form
    width: 100%
    background-color: hsla(0,0%,100%,.9)
    padding: 4px 60px
    @media screen and (max-width: 768px)
        padding: 4px 12px
    .containers
        width: 100%
        margin: 40px 0 10px 0
        background-color: #fff
        color: #333
        border: thin solid rgba(0,0,0,.12)
        .top
            width: 100%
            min-height: 64px
            display: flex
            flex-direction: row
            justify-content: flex-start
            align-items: center
            padding: 16px 24px 16px 36px
            margin-bottom: 16px
            @media screen and (max-width: 768px)
              justify-content: space-between
            .title
                font-size: 25px
                font-weight: 700
                color: #333
                @media screen and (max-width: 768px)
                    display: flex
                    flex-direction: column
                    justify-content: center
                    align-items: flex-start
</style>

<style scoped lang="sass">
.pagination
  display: flex
  padding-left: 0
  list-style: none
  border-radius: .25rem
  margin: 20px 0
  li
    margin: 0 5px 0 0
  li.disabled
    opacity: .5
    pointer-events: none
  a
    background-color: #ffffff
    color: rgba(0, 0, 0, .87)
    padding: 3px 10px
    border-radius: 2px
    font-size: 14px
    font-weight: 500
    transition: box-shadow .2s cubic-bezier(.4,0,1,1), background-color .2s cubic-bezier(.4,0,.2,1), color .2s cubic-bezier(.4,0,.2,1)
    outline: 0
    border: 0
</style>

<style scoped lang="sass">
.post
  margin: 10px 0
  .Item
    position: relative
    background-color: #fff
    margin: 10px 0
    width: 100%
    .itemContent
      display: none
      padding: 10px 5px 20px 5px
    input[type="checkbox"]
      display: none
    label
      width: 100%
    input[type="checkbox"]:checked ~ label .itemContent
      display: block
    .itemTitle
      width: 100%
      .image
        width: 100%
        img
          width: 100%
          max-height: 400px
          object-fit: cover
          border-radius: 5px
          margin: 0 0 10px 0
</style>
