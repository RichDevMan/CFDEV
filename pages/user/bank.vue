<script lang="ts" setup>
const playerStore = usePlayerStore()
const siteStore = useSiteStore()
const { bankApply } = usePlayerStore()
const pageType = ref('bank')
const bankInfo = ref({
  bankName: siteStore.siteData?.depositOptions.bank[0],
  branch: '',
  account: '',
  accountNo: '',
  image: []
})
await useAsyncData(async () => {
  if (playerStore.playerInfo?.bankInfo.status === 1) {
    await navigateTo('/user/withdraw')
  }
})
// methods
const submitBankApply = async () => {
  console.log(bankInfo)
  if (bankInfo.value.branch === '') {
    return ElMessage.error('請填寫分行')
  }
  if (bankInfo.value.account === '') {
    return ElMessage.error('請填寫戶名')
  }
  if (bankInfo.value.accountNo === '') {
    return ElMessage.error('請填寫帳號')
  }
  // if (bankInfo.value.image[0] === '') {
  //   return ElMessage.error('請上傳身分證正面')
  // }
  // if (bankInfo.value.image[1] === '') {
  //   return ElMessage.error('請上傳身分證反面')
  // }
  // if (bankInfo.value.image[2] === '') {
  //   return ElMessage.error('請上傳存摺')
  // }
  const bankApplyRes = await bankApply(bankInfo.value)
  // await updateUserInfo()
  if (bankApplyRes) {
    await playerStore.fetchInfo()
  }
}
const changeType = (type: any) => {
  pageType.value = type
  switch (type) {
    case 'bank':
      bankInfo.value = {
        bankName: siteStore.siteData?.depositOptions.bank[0],
        branch: '',
        account: '',
        accountNo: '',
        image: ['', '', '']
      }
      break
    case 'address':
      bankInfo.value = {
        bankName: siteStore.siteData?.depositOptions.crypto[0],
        branch: '',
        account: '',
        accountNo: '',
        image: []
      }
      break
  }
}
const updateImage = (data: any) => {
  // console.log(data)
  if (data.url[0]) {
    bankInfo.value.image[data.index] = data.url[0].url
  } else {
    bankInfo.value.image[data.index] = ''
    console.log(bankInfo.value.image)
  }
}
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

// const updateImage = (data: any) => {
//   console.log(data)
//   if (data.index === 0) {
//     additionalInfo.value['身分證正面/護照/他國證件'] = data.url[0].url
//   }
//   if (data.index === 1) {
//     additionalInfo.value['身分證背面/護照內頁'] = data.url[0].url
//   }
//   if (data.index === 2) {
//     additionalInfo.value['手持證件與便簽字拍照'] = data.url[0].url
//   }
//   if (data.index === 3) {
//     additionalInfo.value['存摺'] = data.url[0].url
//   }
//   console.log(additionalInfo.value)
// }
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
    <div class="navItems">請新增銀行帳戶</div>
  </div>
  <div class="form">
    <div class="containers">
      <div class="top">
        <div class="title">請新增銀行帳戶</div>
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
      <div class="formSection">
        <div
          v-if="Object.keys(playerStore.playerInfo?.bankInfo).length === 0"
          class="formContent"
        >
          <div class="changeType">
            <button
              type="button"
              class="buttonWhite"
              :class="pageType === 'bank' ? 'active' : ''"
              @click="changeType('bank')"
            >
              {{ $lang('銀行') }}
            </button>
            <!-- <button
            type="button"
            class="buttonWhite"
            :class="pageType === 'address' ? 'active' : ''"
            @click="changeType('address')"
          >
            {{ $lang('錢包地址') }}
          </button> -->
          </div>
          <div v-if="pageType === 'bank'">
            <div class="form_input">
              <div class="inputTitle">
                {{ $lang('銀行') }}
              </div>
              <div class="inputIten">
                <select v-model="bankInfo.bankName" name="phoneCode">
                  <option
                    v-for="item in siteStore.siteData?.depositOptions.bank"
                    :key="item"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form_input">
              <div class="inputTitle">
                {{ $lang('分行') }}
              </div>
              <div class="inputIten">
                <input
                  v-trim-input
                  v-model="bankInfo.branch"
                  type="text"
                  class="input_style"
                />
              </div>
            </div>
            <div class="form_input">
              <div class="inputTitle">
                {{ $lang('帳號') }}
              </div>
              <div class="inputIten">
                <input
                  v-trim-input
                  v-model="bankInfo.accountNo"
                  type="text"
                  class="input_style"
                />
              </div>
            </div>
            <div class="form_input">
              <div class="inputTitle">
                {{ $lang('戶名') }}
              </div>
              <div class="inputIten">
                <input
                  v-trim-input
                  v-model="bankInfo.account"
                  type="text"
                  class="input_style"
                />
              </div>
            </div>
            <div class="form_input">
              <div class="inputTitle">
                {{ $lang('身分證正面') }}
              </div>
              <div class="inputIten noBackground">
                <ImgUploader
                  :limit="1"
                  :index="0"
                  :tool-name="'uploadOne'"
                  @update-image="updateImage"
                ></ImgUploader>
              </div>
            </div>
            <div class="form_input">
              <div class="inputTitle">
                {{ $lang('身分證反面') }}
              </div>
              <div class="inputIten noBackground">
                <ImgUploader
                  :limit="1"
                  :index="1"
                  :tool-name="'uploadTwo'"
                  @update-image="updateImage"
                ></ImgUploader>
              </div>
            </div>
            <div class="form_input">
              <div class="inputTitle">
                {{ $lang('存摺') }}
              </div>
              <div class="inputIten noBackground">
                <ImgUploader
                  :limit="1"
                  :index="2"
                  :tool-name="'uploadThree'"
                  @update-image="updateImage"
                ></ImgUploader>
              </div>
            </div>
            <!-- new form -->
            <!-- <div class="form_input">
            <div class="inputTitle">
              {{ $lang('證件類別') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <select v-model="additionalInfo['證件類別']" name="phoneCode">
                  <option v-for="item in typeOptions['證件類別']" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('身分證字號') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <input
                  v-trim-input
                  v-model="additionalInfo['身分證字號']"
                  type="text"
                  class="input_style"
                />
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('姓名') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <input
                  v-trim-input
                  v-model="additionalInfo['姓名']"
                  type="text"
                  class="input_style"
                />
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('生日') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <input
                  v-trim-input
                  v-model="additionalInfo['生日']"
                  type="text"
                  class="input_style"
                  placeholder="例如：651010"
                />
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('性別') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <select v-model="additionalInfo['性別']" name="phoneCode">
                  <option v-for="item in typeOptions['性別']" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('發證日期') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <input
                  v-trim-input
                  v-model="additionalInfo['發證日期']"
                  type="text"
                  class="input_style"
                  placeholder="例如：1121010"
                />
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('發證地點') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <select v-model="additionalInfo['發證地點']" name="phoneCode">
                  <option v-for="item in typeOptions['發證地點']" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('換補發類別') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <select v-model="additionalInfo['換補發類別']" name="phoneCode">
                  <option v-for="item in typeOptions['換補發類別']" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('戶籍地址') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <input
                  v-trim-input
                  v-model="additionalInfo['戶籍地址']"
                  type="text"
                  class="input_style"
                  placeholder="需與身分證相同"
                />
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('職業') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <select v-model="additionalInfo['職業']" name="phoneCode">
                  <option v-for="item in typeOptions['職業']" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('收入來源') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <select v-model="additionalInfo['收入來源']" name="phoneCode">
                  <option v-for="item in typeOptions['收入來源']" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('國籍') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <select v-model="additionalInfo['國籍']" name="phoneCode">
                  <option v-for="item in typeOptions['國籍']" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('是否擁有其他國籍') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <select
                  v-trim-input
                  v-model="additionalInfo['是否擁有其他國籍']"
                  name="phoneCode"
                >
                  <option
                    v-for="item in typeOptions['是否擁有其他國籍']"
                    :key="item"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('身分證正面/護照/他國證件') }}
            </div>
            <div class="inputItenWhite noBackground">
              <pureImgUploader
                :limit="1"
                :index="0"
                :imgSrc="additionalInfo['身分證正面/護照/他國證件']"
                @update-image="updateImage"
              ></pureImgUploader>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('身分證背面/護照內頁') }}
            </div>
            <div class="inputItenWhite noBackground">
              <pureImgUploader
                :limit="1"
                :index="1"
                :imgSrc="additionalInfo['身分證背面/護照內頁']"
                @update-image="updateImage"
              ></pureImgUploader>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('手持證件與便簽字拍照') }}
            </div>
            <div class="inputItenWhite noBackground">
              <pureImgUploader
                :limit="1"
                :index="2"
                :imgSrc="additionalInfo['手持證件與便簽字拍照']"
                @update-image="updateImage"
              ></pureImgUploader>
            </div>
          </div>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('存摺') }}
            </div>
            <div class="inputItenWhite noBackground">
              <pureImgUploader
                :limit="1"
                :index="3"
                :imgSrc="additionalInfo['存摺']"
                @update-image="updateImage"
              ></pureImgUploader>
            </div>
          </div> -->
            <instruction />
            <button
              type="button"
              class="buttonWhGreen"
              @click="submitBankApply"
            >
              {{ $lang('送出') }}
            </button>
          </div>
          <div v-if="pageType === 'address'">
            <div class="form_input">
              <div class="inputTitle">
                {{ $lang('幣種') }}
              </div>
              <div class="inputIten">
                <select v-model="bankInfo.bankName" name="phoneCode">
                  <option
                    v-for="item in siteStore.siteData?.depositOptions.crypto"
                    :key="item"
                  >
                    {{ item }}
                  </option>
                </select>
              </div>
            </div>
            <div class="form_input">
              <div class="inputTitle">
                {{ $lang('地址') }}
              </div>
              <div class="inputIten">
                <input
                  v-trim-input
                  v-model="bankInfo.accountNo"
                  type="text"
                  class="input_style"
                />
              </div>
            </div>
            <button
              type="button"
              class="buttonWhGreen"
              @click="submitBankApply"
            >
              {{ $lang('送出') }}
            </button>
          </div>
        </div>
        <div v-else>
          <div class="form_input">
            <div class="inputTitle">
              {{ $lang('銀行資訊狀態') }}
            </div>
            <div class="inputIten">
              <div class="input_text">
                <div class="textNormal">
                  {{ $lang('審核中') }}
                </div>
              </div>
            </div>
          </div>
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
.formSection
  margin: 20px 0 0 0
  width: 100%
  height: 58vh
  position: relative
  border-radius: 5px
  font-size: 16px
  overflow-y: auto
  @media screen and (max-width: 768px)
    height: 48vh
  .formContent
    width: 100%
</style>

<style scoped lang="sass">
.buttonWhGreen
  margin: 30px auto
  width: 240px
  height: 40px
  background-color: #5e5269
  border-radius: 5px
  text-align: center
  line-height: 40px
  cursor: pointer
  font-size: 16px
  color: #fff
  display: flex
  justify-content: center
  &:hover
    background-color: #3e82a9
  @media screen and (max-width: 768px)
    width: 135px
  svg
    padding: 0 10px 0 0
.buttonWhite
  margin: 30px 0 0 30px
  width: 100px
  height: 40px
  background-color: #fff
  border-radius: 5px
  text-align: center
  line-height: 40px
  cursor: pointer
  font-size: 16px
  color: #000
  @media screen and (max-width: 768px)
    width: 135px
.active
  background-color: #37d75c
  color: #fff
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
    .imgUploader
      display: flex
      justify-content: center
  .noBackground
    background-color: #fff0
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

<style scoped lang="sass">
.changeType
  display: flex
  justify-content: flex-start
  align-items: center
</style>
