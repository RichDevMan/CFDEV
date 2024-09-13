<script lang="ts" setup>
const { queryTransaction } = useTransactionStore()
const { queryWithdrawRecord, queryDepositRecords } = useWalletStore()
const router = useRouter()
const recordList = ref(null)
const recordType = ref('withdraw')
const siteStore = useSiteStore()
await useAsyncData(async () => {
  // const queryTransactionRes = await queryTransaction({})
  // recordList.value = queryTransactionRes.data
  const queryWithdrawRecordRes = await queryWithdrawRecord({})
  console.log(queryWithdrawRecordRes.data)
  recordList.value = queryWithdrawRecordRes.data
})

const changeRecordType = async (type: string) => {
  recordType.value = type
  switch (type) {
    case 'transaction':
      const queryTransactionRes = await queryTransaction({})
      recordList.value = queryTransactionRes.data
      return
    case 'deposit':
      const queryDepositRecordsRes = await queryDepositRecords()
      recordList.value = queryDepositRecordsRes.data
      return
    case 'withdraw':
      const queryWithdrawRecordRes = await queryWithdrawRecord({})
      console.log(queryWithdrawRecordRes.data)
      recordList.value = queryWithdrawRecordRes.data
  }
}
const showSectionType = (type: string) => {
  const bank = siteStore.siteData.depositOptions.bank.find((item) => {
    return item === type
  })
  if (!bank) {
    return true
  } else {
    return false
  }
}
const transactionRecordType = (type) => {
  const transactionTypeList = [
    {
      value: 0,
      label: '儲值'
    },
    {
      value: 1,
      label: '提領'
    },
    {
      value: 2,
      label: '轉帳'
    },
    {
      value: 3,
      label: '贈送'
    },
    {
      value: 4,
      label: '活動'
    },
    {
      value: 5,
      label: '結算'
    },
    {
      value: 6,
      label: '系統'
    },
    {
      value: 7,
      label: '下注'
    },
    {
      value: 8,
      label: '提領取消返還'
    },
    {
      value: 9,
      label: '扣回'
    },
    {
      value: 10,
      label: `轉出至遊戲`
    },
    {
      value: 11,
      label: '遊戲轉入'
    }
  ]
  return transactionTypeList.find((item) => item.value === type).label
}
const applyStatus = (status) => {
  const statusList = [
    {
      value: 0,
      label: '未審核'
    },
    {
      value: 1,
      label: '已完成'
    },
    {
      value: 2,
      label: '已駁回'
    }
  ]
  return statusList.find((item) => item.value === status).label
}
const formatDate = (timestamp: string) => {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const seconds = String(date.getSeconds()).padStart(2, '0')

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
}
</script>

<template>
  <div class="topNav">
    <div class="navItems">提領紀錄</div>
  </div>
  <div class="form">
    <div class="containers">
      <div class="top">
        <div class="title">提領紀錄</div>
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
        <div class="formContent">
          <div class="changeType">
            <!-- <button
            type="button"
            class="buttonWhite"
            :class="recordType === 'transaction' ? 'active' : ''"
            @click="changeRecordType('transaction')"
          >
            {{ $lang('交易紀錄') }}
          </button> -->
            <button
              type="button"
              class="buttonWhite"
              :class="recordType === 'withdraw' ? 'active' : ''"
              @click="changeRecordType('withdraw')"
            >
              {{ $lang('提領紀錄') }}
            </button>
          </div>
          <div v-if="recordType === 'transaction'" class="recordBox">
            <table>
              <tr class="recordBox-title">
                <th>{{ $lang('交易時間') }}</th>
                <th>{{ $lang('細目') }}</th>
                <th>{{ $lang('金額') }}</th>
              </tr>
              <tr
                v-for="(item, index) in recordList.result"
                :key="index"
                class="recordBox-toggle"
              >
                <th>{{ formatDate(item.createdAt) }}</th>
                <th>
                  <div>
                    {{ $lang('類型') }}:{{ transactionRecordType(item.type) }}
                  </div>
                  <div>{{ $lang('備註') }}:{{ item.memo }}</div>
                </th>
                <th>
                  {{ new Intl.NumberFormat('zh-TW').format(item.amount) }}
                </th>
              </tr>
            </table>
          </div>
          <div v-if="recordType === 'withdraw'" class="recordBox">
            <table>
              <tr class="recordBox-title">
                <th>{{ $lang('交易時間') }}</th>
                <th>{{ $lang('細目') }}</th>
                <th>{{ $lang('金額') }}</th>
              </tr>
              <tr
                v-for="(item, index) in recordList.result"
                :key="index"
                class="recordBox-toggle"
              >
                <th>{{ formatDate(item.timestamp) }}</th>
                <th v-if="showSectionType(item.bankData.bankName)">
                  <div>{{ $lang('交易所') }}:{{ item.bankData.bankName }}</div>
                  <div>
                    {{ $lang('錢包地址') }}:{{ item.bankData.accountNo }}
                  </div>
                  <div>{{ $lang('狀態') }}:{{ applyStatus(item.status) }}</div>
                  <div>
                    {{ $lang('手續費') }}: $
                    {{ new Intl.NumberFormat('zh-TW').format(item.fee) }}
                  </div>
                </th>
                <th v-else>
                  <div>{{ $lang('銀行') }}:{{ item.bankData.bankName }}</div>
                  <div>{{ $lang('分行') }}:{{ item.bankData.branch }}</div>
                  <div>{{ $lang('戶名') }}:{{ item.bankData.account }}</div>
                  <div>{{ $lang('帳號') }}:{{ item.bankData.accountNo }}</div>
                  <div>{{ $lang('狀態') }}:{{ applyStatus(item.status) }}</div>
                  <div>
                    {{ $lang('手續費') }}: $
                    {{ new Intl.NumberFormat('zh-TW').format(item.fee) }}
                  </div>
                </th>
                <th>
                  $ {{ new Intl.NumberFormat('zh-TW').format(item.amount) }}
                </th>
              </tr>
            </table>
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
  margin: 30px 0
  width: 240px
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
  position: absolute
  right: 30px
  &:hover
    background-color: #40b768
  @media screen and (max-width: 768px)
    position: relative
    width: 135px
    bottom: 10px
    margin: 30px auto
    right: 0
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
  background-color: #5e5269
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
  align-items: flex-start
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
      width: 90%
      font-size: 14px
      margin: 0 0 10px  0
  .empty
    background-color: #fff0
  .inputIten
    border-radius: 5px
    position: relative
    width: 60%
    background-color: #e2efff
    padding: 5px 15px
    @media screen and (max-width: 768px)
      width: 90%
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
        color: #000
      @media screen and (max-width: 768px)
        font-size: 14px
    textarea
      height: 200px
      width: 100%
      border: none
      background-color: #e2efff
      font-size: 16px
      outline: none
      &::placeholder
        color: #000
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

<style scoped lang="sass">
.recordBox
  width: 100%
  padding: 20px 30px
  @media screen and (max-width: 768px)
    padding: 20px 5px 10px 5px
  table
    width: 100%
    border-collapse: separate
    border-spacing: 3px
  .recordBox-title
    background-color: #b8b8b8
    color: #000
    font-size: 16px
  th
    padding: 5px
    font-size: 15px
    font-weight: bold
    background-color: rgba(0, 0, 0, 0.2)
  th:nth-of-type(1)
    width: 25%
    text-align: left
    vertical-align: middle
  th:nth-of-type(2)
    width: 50%
    text-align: left
    vertical-align: middle
  th:nth-of-type(3)
    width: 25%
    text-align: right
    vertical-align: middle
  .recordBox-toggle
    padding: 5px 0
    background-color: #fff
    &:hover
      background-color: #e5e5e5
    td
      padding: 5px
      font-size: 15px
      font-weight: bold
      transition: all ease 0.3s
      word-break: break-word
</style>

<style scoped lang="sass">
.msg-th
  padding: 2px 5px
  .date
    font-size: 14px
    color: #000
    font-weight: bold
.msg-cont
  .msg
    .info-title
      font-size: 16px
      font-weight: bold
      color: #000
      margin: 0 0 5px 0
    .info-msg
      font-size: 16px
      font-weight: bold
      color: #000
      margin: 0 0 5px 0
  .msgContent
    .content
      margin-top: 3px
      padding: 2px 5px
      background-color: rgba(0, 0, 0, 0.1)
      font-size: 14px
      font-weight: bold
      .replyTxt
        color: #fff
        border-radius: 5px
        font-size: 12px
        padding: 2px 5px
        background-color: rgba(179, 33, 28, 0.795)
.msg-cont input[type="checkbox"]
  display: none
.msg-cont .msgContent
  display: none
.msg-cont label
  width: 100%
.msg-cont input[type="checkbox"]:checked ~ .msgContent
  display: block
.replyStyle
  display: flex
  margin: 5px 0 0 0
  justify-content: flex-end
  flex-wrap: wrap
.replyStyle .input
  width: 100%
.replyStyle textarea
  width: 100%
.submitBtn
  width: 100px
  height: 30px
  background-color: #31a759
  border-radius: 5px
  text-align: center
  line-height: 30px
  cursor: pointer
  font-size: 12px
  color: #fff
  display: flex
  justify-content: center
  &:hover
    background-color: #40b768
  @media screen and (max-width: 768px)
    width: 60px
    height: 30px
    font-size: 12px
    line-height: 30px
    padding: 0
    margin: 0
    .fa
      font-size: 12px
      padding: 0
</style>
