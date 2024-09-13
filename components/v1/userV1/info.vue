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
  <div class="pages">
    <div class="router">
      <div>
        <i class="fas fa-home"></i>
      </div>
      <div class="home" @click="navigateTo('/user')">{{ $lang('首頁') }}</div>
      <div><i class="fa-solid fa-angle-right"></i></div>
      <div>{{ $lang('會員資訊') }}</div>
    </div>
    <div class="formSection">
      <div class="formContent">
        <div class="form_input">
          <div class="inputTitle">
            {{ $lang('帳號') }}
          </div>
          <div class="inputIten">
            <div class="input_text">
              <div class="textNormal">
                {{ playerStore.playerInfo.account }}
              </div>
            </div>
          </div>
        </div>
        <div class="form_input">
          <div class="inputTitle">
            {{ $lang('名稱') }}
          </div>
          <div class="inputIten">
            <div class="input_text">
              <div class="textNormal">
                {{ playerStore.playerInfo.username }}
              </div>
            </div>
          </div>
        </div>
        <div class="form_input">
          <div class="inputTitle">
            {{ $lang('手機號碼') }}
          </div>
          <div class="inputIten">
            <div class="input_text">
              <div class="textNormal">
                {{ playerStore.playerInfo.countryCode }}
              </div>
              <div>
                {{ playerStore.playerInfo.mobile }}
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          class="buttonWhite"
          @click="navigateTo('/user/setting')"
        >
          {{ $lang('變更密碼') }}
        </button>
        <!-- <button type="button" class="buttonWhite" @click="updateUserInfo">
          {{ $lang('更新用戶資訊') }}
        </button> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.pages
  padding: 20px
  @media screen and (max-width: 768px)
    padding: 10px
</style>

<style scoped lang="sass">
.router
  width: 100%
  height: 35px
  position: relative
  border-radius: 5px
  font-size: 16px
  background-color: #afafaf
  color: #fff
  display: flex
  align-items: center
  justify-content: flex-start
  border: 1px solid #fff
  svg
    padding: 0 20px 0 10px
  .home
    cursor: pointer
</style>

<style scoped lang="sass">
.formSection
  margin: 20px 0 0 0
  width: 100%
  height: 50vh
  position: relative
  border-radius: 5px
  font-size: 16px
  background-color: #afafaf
  border: 1px solid #fff
  overflow-y: auto
  padding: 50px 0
  @media screen and (max-width: 768px)
    height: 48vh
  .formContent
    width: 100%
</style>

<style scoped lang="sass">
.buttonWhGreen
  margin: 60px auto 60px auto
  width: 220px
  height: 40px
  background-color: #31a759
  border-radius: 5px
  text-align: center
  line-height: 40px
  cursor: pointer
  font-size: 16px
  color: #fff
  display: flex
  justify-content: center
  align-items: center
  &:hover
    background-color: #40b768
  @media screen and (max-width: 768px)
    width: 135px
  svg
    padding: 0 10px 0 0
.btbDisabled
  background-color: #51765d
  color: #b9b9b9
  cursor: not-allowed
.buttonWhite
  margin: 20px auto 20px auto
  width: 100px
  height: 40px
  background-color: #fff
  border-radius: 5px
  text-align: center
  line-height: 40px
  cursor: pointer
  font-size: 16px
  color: #000
  display: flex
  justify-content: center
  align-items: center
  position: absolute
  right: 30px
  &:hover
    background-color: #f1f1f1
  @media screen and (max-width: 768px)
    width: 135px
</style>

<style scoped lang="sass">
.form_input
  width: 100%
  border-radius: 5px
  margin: 20px auto
  font-size: 16px
  overflow: hidden
  position: relative
  display: block
  display: flex
  justify-content: center
  align-items: center
  flex-wrap: wrap
  .inputTitle
    background-color: #fff
    border-radius: 5px
    width: 30%
    display: block
    text-align: center
    margin: 0 10px 0 0
    font-size: 16px
    padding: 5px 0
    @media screen and (max-width: 768px)
      width: 32%
      font-size: 14px
  .empty
    background-color: #fff0
  .inputItenWhite
    border-radius: 5px
    position: relative
    width: 60%
    padding: 5px 15px
  .inputIten
    border-radius: 5px
    position: relative
    width: 60%
    background-color: #e2efff
    padding: 5px 15px
    .input_text
      display: flex
      justify-content: flex-start
      align-items: center
      .textNormal
        padding: 0 10px 0
    .input_style
      border-radius: 5px
      border: none
      background-color: #e2efff
      height: 100%
      width: 100%
    input
      width: 100%
      height: 100%
      border: none
      background-color: #e2efff
      font-size: 16px
      outline: none
      &::placeholder
        color: #a1a1a1
      @media screen and (max-width: 768px)
        font-size: 14px
    select
      width: 100%
      border: none
      background-color: #e2efff
      outline: none
    .eyes
      position: absolute
      right: 5px
      top: 50%
      transform: translateY(-50%)
      z-index: 99
      cursor: pointer
  .padding_Right_more
    padding: 5px 25px 5px 15px
  .flexStyle
    display: flex
    justify-content: flex-start
    align-items: center
    input
      margin: 5px 0 5px 10px
  .tipsLeft
    width: 30%
    @media screen and (max-width: 768px)
      width: 32%
  .tipsRight
    width: 60%
    display: block
    text-align: center
    font-size: 12px
    padding: 2px 0
    color: #cf0000
    text-align: right
    @media screen and (max-width: 768px)
      width: 60%
      font-size: 10px
  .fullFlex
    width: 100%
  .inputCheck
    width: 5%
    @media screen and (max-width: 768px)
     width: 10%
  .text
    width: 85%
    @media screen and (max-width: 768px)
     width: 80%
     font-size: 12px
</style>
