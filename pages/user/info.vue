<script lang="ts" setup>
const router = useRouter()
const playerStore = usePlayerStore()
const additionalInfo = ref({
  證件類別: '',
  身分證字號: '',
  姓名: '',
  生日: '',
  性別: '',
  發證日期: '',
  發證地點: '',
  換補發類別: '',
  戶籍地址: '',
  職業: '',
  收入來源: '',
  國籍: '',
  是否擁有其他國籍: '',
  '身分證正面/護照/他國證件': '',
  '身分證背面/護照內頁': '',
  手持證件與便簽字拍照: '',
  存摺: ''
})
const typeOptions = ref({
  證件類別: ['身分證', '護照'],
  性別: ['男', '女'],
  發證地點: [
    '台北市 A',
    '台中市 B',
    '基隆市 C',
    '台南市 D',
    '高雄市 E',
    '台北縣 F',
    '宜蘭縣 G',
    '桃園縣 H',
    '嘉義市 I',
    '新竹縣 J',
    '苗栗縣 K',
    '台中縣 L',
    '南投縣 M',
    '彰化縣 N',
    '新竹市 O',
    '雲林縣 P',
    '嘉義縣 Q',
    '台南縣 R',
    '高雄縣 S',
    '屏東縣 T',
    '花蓮縣 U',
    '台東縣 V',
    '金門縣 W',
    '澎湖縣 X',
    '陽明山 Y',
    '連江縣 Z'
  ],
  換補發類別: ['初發', '換發', '補發'],
  職業: [
    '民意代表、主管及經理人員',
    '專業人員',
    '技術員及助理專業人員',
    '事務支援人員',
    '服務及銷售工作人員',
    '農、林、漁、牧業生產人員',
    '技藝有關工作人員',
    '機械設備操作及組裝人員',
    '基層技術工及勞力工',
    '軍人 公職 教育人員',
    '從商 自營商',
    '其他類別'
  ],
  收入來源: ['薪水', '投資', '存款', '自給', '其他'],
  國籍: ['台灣', '日本', '韓國', '越南', '新加玻', '菲律賓', '泰國', '印尼'],
  是否擁有其他國籍: [
    '無',
    '日本',
    '韓國',
    '越南',
    '新加玻',
    '菲律賓',
    '泰國',
    '印尼',
    '美國',
    '英國',
    '加拿大',
    '澳大利亞',
    '印度',
    '其他'
  ]
})

const updateImage = (data: any) => {
  console.log(data)
  if (data.index === 0) {
    additionalInfo.value['身分證正面/護照/他國證件'] = data.url[0].url
  }
  if (data.index === 1) {
    additionalInfo.value['身分證背面/護照內頁'] = data.url[0].url
  }
  if (data.index === 2) {
    additionalInfo.value['手持證件與便簽字拍照'] = data.url[0].url
  }
  if (data.index === 3) {
    additionalInfo.value['存摺'] = data.url[0].url
  }
  console.log(additionalInfo.value)
}
const updateUserInfo = async () => {
  console.log(playerStore.playerInfo.additionalInfo)
  console.log(additionalInfo.value)
  let og_info = playerStore.playerInfo
  for (let key in additionalInfo.value) {
    og_info.additionalInfo[key] = additionalInfo.value[key]
  }
  console.log(og_info)
  const res = await playerStore.updateInfo({
    additionalInfo: og_info.additionalInfo
  })
  console.log(res)
}
await onMounted(() => {
  let og_info = playerStore.playerInfo
  for (let key in og_info.additionalInfo) {
    additionalInfo.value[key] = og_info.additionalInfo[key]
  }
  console.log(additionalInfo.value)
})
</script>

<template>
  <div class="topNav">
    <div class="navItems">會員資訊</div>
  </div>
  <div class="form">
    <div class="containers">
      <div class="top">
        <div class="title">會員資訊</div>
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
      <div class="inputBox">
        <div class="inputField">
          <span>帳號</span>
          <div class="text">{{ playerStore.playerInfo.account }}</div>
        </div>
        <div class="inputField">
          <span>名稱</span>
          <div class="text">{{ playerStore.playerInfo.username }}</div>
        </div>
        <div class="inputField">
          <span>手機號碼</span>
          <div class="text">{{ playerStore.playerInfo.mobile }}</div>
        </div>
        <!-- <div class="inputField">
              <span>身分證字號</span>
              <div class="text">L123456789</div>
            </div> -->
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
        margin: 40px 0
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
                small
                    margin-left: 8px
                    font-size: 14px
                    font-weight: 300
                    margin-left: 16px
                    @media screen and (max-width: 768px)
                        margin-left: 0
            .reword
                display: flex
                flex-direction: row
                justify-content: center
                align-items: center
                font-size: 14px
                font-weight: 300
                margin-left: 40px
                color: #00cae3
                cursor: pointer
                svg
                    margin-left: 4px
        .rowRadio
            width: 100%
            padding: 0 36px 16px
            display: flex
            flex-direction: row
            justify-content: flex-start
            align-items: center
            color: rgba(0,0,0,.38)
            margin-top: 20px
            .items
                display: flex
                flex-direction: row
                justify-content: flex-start
                align-items: center
                margin-right: 24px
                input
                    transform: scale(1.5)
                    margin-right: 8px
                label
                    font-size: 18px
                    font-weight: 300
        .inputBox
            width: 100%
            padding: 0 36px 16px
            display: flex
            flex-direction: row
            justify-content: space-between
            align-items: center
            flex-wrap: wrap
            margin-top: 20px
            .inputField
                width: 44%
                display: flex
                flex-direction: column
                justify-content: flex-start
                align-items: flex-start
                margin-bottom: 16px
                margin-left: 8px
                margin-right: 8px
                color: rgba(0,0,0,.38)
                @media screen and (max-width: 970px)
                    width: 90%
                    margin: 0 auto 16px auto
                span
                    width: 100%
                    font-size: 12px
                    font-weight: 400
                    margin-bottom: 4px
                .text
                    width: 100%
                    font-size: 18px
                    font-weight: 300
                    border-bottom: 1px solid #f3c018
</style>
