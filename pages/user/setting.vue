<script lang="ts" setup>
const { t } = useI18n()
const router = useRouter()
const siteStore = useSiteStore()
const { updatePassword, updateTrasactionPassword } = usePlayerStore()
const pwd = ref({
  oPwd: '',
  nPwd: '',
  nPwdConfirm: '',
  showoPwd: false,
  shownPwd: false,
  shownPwdConfirm: false
})
const transactionPwd = ref({
  oPwd: '',
  nPwd: '',
  nPwdConfirm: '',
  showoPwd: false,
  shownPwd: false,
  shownPwdConfirm: false,
  recaptchaCode: ''
})
const changePwd = ref(false)
const changenTPwd = ref(false)
const recaptchaCheckFunction = ref(null)
const recaptchaCode = ref('')
const newPasswordavailable = ref(false)
// updatePassword()  更新密碼
// updateTrasactionPassword()  更新交易密碼
const checkHepler = async (data) => {
  recaptchaCheckFunction.value = data
}

const checkNewPasswordRequired = () => {
  const newPasswordRegex = /^[a-zA-Z0-9]{6,}$/
  newPasswordavailable.value = newPasswordRegex.test(pwd.value.nPwd)
  if (!newPasswordavailable.value) {
    ElNotification({
      title: `${t('不符合新密碼設定格式')}`,
      type: 'error',
      duration: 3000,
      showClose: false
    })
  }
}

watch(
  () => pwd.value.nPwdConfirm,
  (val) => {
    if (val) {
      changePwd.value = true
    } else {
      changePwd.value = false
    }
  }
)
watch(
  () => transactionPwd.value.nPwdConfirm,
  (val) => {
    if (val) {
      changenTPwd.value = true
    } else {
      changenTPwd.value = false
    }
  }
)
const sendPasswordChange = async () => {
  console.log('changePwd.value', changePwd.value)
  console.log('changenTPwd.value', changenTPwd.value)
  if (changePwd.value) {
    if (pwd.value.nPwd !== pwd.value.nPwdConfirm) {
      ElNotification({
        title: `${t('密碼不一致')}`,
        type: 'error',
        duration: 1000,
        showClose: false
      })
      return
    }
    const res = await updatePassword({
      password: pwd.value.oPwd,
      newPassword: pwd.value.nPwd
    })
    if (res.success) {
      pwd.value.oPwd = ''
      pwd.value.nPwd = ''
      pwd.value.nPwdConfirm = ''
    }
  }
  if (changenTPwd.value) {
    if (transactionPwd.value.nPwd !== transactionPwd.value.nPwdConfirm) {
      ElNotification({
        title: `${t('交易密碼不一致')}`,
        type: 'error',
        duration: 1000,
        showClose: false
      })
      return
    }
    const res = await updateTrasactionPassword({
      password: transactionPwd.value.oPwd,
      newPassword: transactionPwd.value.nPwd
    })
    if (res.success) {
      transactionPwd.value.oPwd = ''
      transactionPwd.value.nPwd = ''
      transactionPwd.value.nPwdConfirm = ''
    }
    const recaptchaCheck = await recaptchaCheckFunction.value.validate(
      recaptchaCode.value
    )
  }
}
</script>

<template>
  <div
    id="app"
    data-app="true"
    class="v-application v-application--is-ltr theme--light"
  >
    <div class="v-application--wrap" style="height: 100dvh; width: 100%">
      <main class="v-main" data-booted="true" style="padding: 0px">
        <div class="v-main__wrap">
          <div class="container container--fluid">
            <div class="row">
              <a
                ><div
                  class="v-image v-responsive theme--light"
                  style="max-width: 20%"
                >
                  <div
                    class="v-responsive__sizer"
                    style="padding-bottom: 51.8219%"
                  ></div>
                  <div
                    class="v-image__image v-image__image--cover"
                    @click="router.push('/')"
                  >
                    <img :src="siteStore.siteData.logo" class="logo" />
                  </div>
                  <div
                    class="v-responsive__content"
                    style="width: 741px"
                  ></div></div
              ></a>
            </div>
            <div class="row">
              <div class="pa-0 col-sm-12 col-md-7 col-lg-8 col-12">
                <div
                  class="v-image v-responsive keyVisual theme--light"
                  style="min-height: 100%; min-width: 100%"
                >
                  <div
                    class="v-responsive__sizer"
                    style="padding-bottom: 55.5556%"
                  ></div>
                  <div
                    class="v-image__image v-image__image--cover v-background--top"
                  ></div>
                  <div class="v-responsive__content">
                    <div
                      class="d-none v-card v-sheet theme--light"
                      style="height: 100%; background: rgba(0, 0, 0, 0)"
                    >
                      <div
                        class="v-card v-sheet theme--light px-15 d-flex flex-column"
                        style="background: rgba(0, 0, 0, 0)"
                      >
                        <card
                          class="pb-5"
                          style="color: rgb(255, 255, 255)"
                        ></card>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="col-sm-12 col-md-5 col-lg-4 col-12 px-10 py-5"
                style="background: rgb(255, 255, 255)"
              >
                <div
                  data-v-247a62f8=""
                  class="container fill-height pa-0 container--fluid"
                >
                  <div
                    data-v-247a62f8=""
                    class="row align-center justify-center"
                  >
                    <div data-v-247a62f8="" class="col col-12">
                      <form data-v-247a62f8="" class="v-form">
                        <div
                          data-v-247a62f8=""
                          class="elevation-0 v-card v-sheet theme--light"
                        >
                          <div
                            id="welcome"
                            data-v-247a62f8=""
                            class="v-card__title pt-0 text-h2 primary--text font-weight-medium justify-center"
                          >
                            變更密碼
                          </div>
                          <div
                            data-v-247a62f8=""
                            class="v-card__subtitle text-subtitle-2 text-center font-weight-bold"
                          >
                            變更後請重新登入
                          </div>
                          <div
                            data-v-247a62f8=""
                            class="v-card__text px-2 py-0"
                          >
                            <div data-v-247a62f8="" class="row no-gutters">
                              <div
                                data-v-247a62f8=""
                                class="v-input ma-0 font-weight-bold primary--text theme--light v-text-field v-text-field--prefix v-text-field--is-booted"
                              >
                                <div class="v-input__control">
                                  <div class="v-input__slot">
                                    <div class="v-text-field__slot">
                                      <input
                                        id="password"
                                        v-model="pwd.oPwd"
                                        v-trim-input
                                        :type="
                                          pwd.showoPwd ? 'text' : 'password'
                                        "
                                        name="password"
                                        required
                                        @copy.prevent
                                        @paste.prevent
                                        @contextmenu.prevent
                                      />
                                      <label
                                        for="password"
                                        class="v-label theme--light oldPassword"
                                        style="right: auto; position: absolute"
                                        >舊密碼
                                      </label>
                                      <div class="v-text-field__prefix">
                                        舊密碼
                                      </div>
                                    </div>
                                    <div class="v-input__append-inner">
                                      <div
                                        v-if="!pwd.showoPwd"
                                        class="eyes"
                                        @click="pwd.showoPwd = true"
                                      >
                                        <i class="fa-solid fa-eye-slash"></i>
                                      </div>
                                      <div
                                        v-else
                                        class="eyes"
                                        @click="pwd.showoPwd = false"
                                      >
                                        <i class="fa-solid fa-eye"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="v-text-field__details">
                                    <div class="v-messages theme--light">
                                      <div class="v-messages__wrapper"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-v-247a62f8=""
                                class="v-text-field-underline"
                              ></div>
                            </div>
                            <div data-v-247a62f8="" class="row no-gutters">
                              <div
                                data-v-247a62f8=""
                                class="v-input ma-0 font-weight-bold primary--text theme--light v-text-field v-text-field--prefix v-text-field--is-booted"
                              >
                                <div class="v-input__control">
                                  <div class="v-input__slot">
                                    <div class="v-text-field__slot">
                                      <input
                                        id="password"
                                        v-model="pwd.nPwd"
                                        v-trim-input
                                        :type="
                                          pwd.shownPwd ? 'text' : 'password'
                                        "
                                        name="password"
                                        required
                                        @copy.prevent
                                        @paste.prevent
                                        @contextmenu.prevent
                                        @blur="checkNewPasswordRequired"
                                      />
                                      <label
                                        for="password"
                                        class="v-label theme--light newPassword"
                                        style="
                                          right: auto;
                                          position: absolute;
                                          max-width: 85%;
                                        "
                                        >密碼必須包含至少一個數字及英文大小寫且長度6以上</label
                                      >
                                      <div class="v-text-field__prefix">
                                        新密碼 
                                      </div>
                                    </div>
                                    <div class="v-input__append-inner">
                                      <div
                                        v-if="!pwd.shownPwd"
                                        class="eyes"
                                        @click="pwd.shownPwd = true"
                                      >
                                        <i class="fa-solid fa-eye-slash"></i>
                                      </div>
                                      <div
                                        v-else
                                        class="eyes"
                                        @click="pwd.shownPwd = false"
                                      >
                                        <i class="fa-solid fa-eye"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="v-text-field__details">
                                    <div class="v-messages theme--light">
                                      <div class="v-messages__wrapper"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-v-247a62f8=""
                                class="v-text-field-underline"
                              ></div>
                            </div>
                            <div data-v-247a62f8="" class="row no-gutters">
                              <div
                                data-v-247a62f8=""
                                class="v-input ma-0 font-weight-bold primary--text theme--light v-text-field v-text-field--prefix v-text-field--is-booted"
                              >
                                <div class="v-input__control">
                                  <div class="v-input__slot">
                                    <div class="v-text-field__slot">
                                      <input
                                        id="password"
                                        v-model="pwd.nPwdConfirm"
                                        v-trim-input
                                        :type="
                                          pwd.shownPwdConfirm
                                            ? 'text'
                                            : 'password'
                                        "
                                        name="password"
                                        required
                                        @copy.prevent
                                        @paste.prevent
                                        @contextmenu.prevent
                                      />
                                      <label
                                        for="password"
                                        class="v-label theme--light confirmPassword"
                                        style="right: auto; position: absolute"
                                        >確認新密碼</label
                                      >
                                      <div class="v-text-field__prefix">
                                        確認新密碼
                                      </div>
                                    </div>
                                    <div class="v-input__append-inner">
                                      <div
                                        v-if="!pwd.shownPwdConfirm"
                                        class="eyes"
                                        @click="pwd.shownPwdConfirm = true"
                                      >
                                        <i class="fa-solid fa-eye-slash"></i>
                                      </div>
                                      <div
                                        v-else
                                        class="eyes"
                                        @click="pwd.shownPwdConfirm = false"
                                      >
                                        <i class="fa-solid fa-eye"></i>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="v-text-field__details">
                                    <div class="v-messages theme--light">
                                      <div class="v-messages__wrapper"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-v-247a62f8=""
                                class="v-text-field-underline"
                              ></div>
                            </div>
                            <div data-v-247a62f8="" class="row no-gutters">
                              <div
                                data-v-247a62f8=""
                                class="v-input ma-0 font-weight-bold primary--text theme--light v-text-field v-text-field--prefix v-text-field--is-booted"
                              >
                                <div class="v-input__control">
                                  <div class="v-input__slot">
                                    <div class="v-text-field__slot">
                                      <input
                                        id="captcha"
                                        v-model="recaptchaCode"
                                        v-trim-input
                                        name="captcha"
                                        type="text"
                                        required
                                      />
                                      <label
                                        for="captcha"
                                        class="v-label theme--light recaptcha"
                                        style="right: auto; position: absolute"
                                        >請輸入驗證碼</label
                                      >
                                      <div class="v-text-field__prefix">
                                        驗證碼 
                                      </div>
                                    </div>
                                    <div class="v-input__append-inner">
                                      <recaptcha
                                        @check-hepler="checkHepler"
                                      ></recaptcha>
                                    </div>
                                  </div>
                                  <div class="v-text-field__details">
                                    <div class="v-messages theme--light">
                                      <div class="v-messages__wrapper"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                data-v-247a62f8=""
                                class="v-text-field-underline"
                              ></div>
                            </div>
                          </div>
                          <div
                            data-v-247a62f8=""
                            class="v-card__actions justify-center"
                          >
                            <div
                              data-v-247a62f8=""
                              class="row ma-0 align-center justify-center"
                            >
                              <button
                                type="button"
                                class="elevation-0 text-button font-weight-bold v-btn v-btn--contained v-btn--tile theme--light v-size--default primary"
                                style="min-width: 100%"
                                @click="sendPasswordChange"
                              >
                                <span class="v-btn__content"> 變更密碼 </span>
                              </button>
                            </div>
                          </div>
                          <div
                            data-v-247a62f8=""
                            class="v-card__actions justify-space-between"
                          >
                            <button
                              type="button"
                              class="elevation-0 text-button font-weight-bold v-btn v-btn--contained v-btn--tile v-size--default loginBtn"
                              style="min-width: 100%"
                              @click="router.push('/user/info')"
                            >
                              <span class="v-btn__content">
                                取消並返回上頁
                              </span>
                            </button>
                          </div>
                          <div
                            data-v-247a62f8=""
                            role="dialog"
                            class="v-dialog__container"
                          >
                            <!---->
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer
        id="customFooter"
        data-v-339253a5=""
        style="background: rgb(0, 202, 227)"
      >
        <div data-v-339253a5="" class="copyright">
          <div data-v-339253a5="" class="logo"></div>
          <span data-v-339253a5="">{{ siteStore.siteData.copyRight }}</span>
        </div>
        <!--<div data-v-339253a5="" class="contactInfo">
          <span data-v-339253a5="">聯絡我們</span
          ><span data-v-339253a5="" class="divLine">｜</span
          ><span data-v-339253a5="">總部 台北市中山區中山北路二段113號6F</span
          ><span data-v-339253a5="" class="divLine">｜</span
          ><span data-v-339253a5="">T+886 2 25317099 #20259</span
          ><span data-v-339253a5="" class="divLine">｜</span
          ><span data-v-339253a5=""
            ><a data-v-339253a5="" href="mailto:client.service@gempower.energy"
              ><i data-v-339253a5="" class="far fa-envelope mailIcon"></i>
              client.service@gempower.energy</a
            ></span
          >
        </div>-->
      </footer>
    </div>
  </div>
</template>

<style scoped lang="sass">
@import "@/assets/sass/indexV2/enter.css"
@import "@/assets/sass/indexV2/enter2.css"
</style>

<style scoped>
#app {
  width: 100dvw;
  height: 100dvh;
  overflow-y: scroll;
  background: #eee;
}

.v-background--top {
  background-image: url('https://upload.comethico.com/uploads/1726160108999.png');
}

h6 {
  font-size: 0.67em;
}

.container {
  padding: 64px;
  padding-top: 0;
  padding-bottom: 20px;
}

.oldPassword {
  left: 68px;
}

.newPassword {
  left: 68px;
}

.confirmPassword {
  left: 100px;
}

.recaptcha {
  left: 68px;
}

.v-input__append-inner {
  font-size: 20px;
  cursor: pointer;
}

.loginBtn {
  background-color: #fff;
  border: 1px solid #00cae3;
  color: #00cae3;
}

@media screen and (max-width: 960px) {
  .container {
    padding: 0;
  }
}
</style>

<style scoped>
.v-input__slot .v-text-field__slot input:focus ~ label,
.v-input__slot .v-text-field__slot input:valid ~ label {
  font-size: 12px;
  top: -20px;
  left: 0;
  color: #00cae3;
}

.v-input__slot .v-text-field__slot input:valid ~ .v-text-field__prefix {
  display: none;
}
</style>

<style scoped>
.v-application a {
  color: #00cae3;
}
.v-application .primary {
  background-color: #00cae3 !important;
  border-color: #00cae3 !important;
}
.v-application .primary--text {
  color: #00cae3 !important;
  caret-color: #00cae3 !important;
}
.v-application .primary.lighten-5 {
  background-color: #cfffff !important;
  border-color: #cfffff !important;
}
.v-application .primary--text.text--lighten-5 {
  color: #cfffff !important;
  caret-color: #cfffff !important;
}
.v-application .primary.lighten-4 {
  background-color: #b0ffff !important;
  border-color: #b0ffff !important;
}
.v-application .primary--text.text--lighten-4 {
  color: #b0ffff !important;
  caret-color: #b0ffff !important;
}
.v-application .primary.lighten-3 {
  background-color: #8fffff !important;
  border-color: #8fffff !important;
}
.v-application .primary--text.text--lighten-3 {
  color: #8fffff !important;
  caret-color: #8fffff !important;
}
.v-application .primary.lighten-2 {
  background-color: #6effff !important;
  border-color: #6effff !important;
}
.v-application .primary--text.text--lighten-2 {
  color: #6effff !important;
  caret-color: #6effff !important;
}
.v-application .primary.lighten-1 {
  background-color: #48e6ff !important;
  border-color: #48e6ff !important;
}
.v-application .primary--text.text--lighten-1 {
  color: #48e6ff !important;
  caret-color: #48e6ff !important;
}
.v-application .primary.darken-1 {
  background-color: #00aec7 !important;
  border-color: #00aec7 !important;
}
.v-application .primary--text.text--darken-1 {
  color: #00aec7 !important;
  caret-color: #00aec7 !important;
}
.v-application .primary.darken-2 {
  background-color: #0093ac !important;
  border-color: #0093ac !important;
}
.v-application .primary--text.text--darken-2 {
  color: #0093ac !important;
  caret-color: #0093ac !important;
}
.v-application .primary.darken-3 {
  background-color: #007991 !important;
  border-color: #007991 !important;
}
.v-application .primary--text.text--darken-3 {
  color: #007991 !important;
  caret-color: #007991 !important;
}
.v-application .primary.darken-4 {
  background-color: #006077 !important;
  border-color: #006077 !important;
}
.v-application .primary--text.text--darken-4 {
  color: #006077 !important;
  caret-color: #006077 !important;
}
.v-application .secondary {
  background-color: #f3c018 !important;
  border-color: #f3c018 !important;
}
.v-application .secondary--text {
  color: #f3c018 !important;
  caret-color: #f3c018 !important;
}
.v-application .secondary.lighten-5 {
  background-color: #ffffb2 !important;
  border-color: #ffffb2 !important;
}
.v-application .secondary--text.text--lighten-5 {
  color: #ffffb2 !important;
  caret-color: #ffffb2 !important;
}
.v-application .secondary.lighten-4 {
  background-color: #ffff95 !important;
  border-color: #ffff95 !important;
}
.v-application .secondary--text.text--lighten-4 {
  color: #ffff95 !important;
  caret-color: #ffff95 !important;
}
.v-application .secondary.lighten-3 {
  background-color: #ffff79 !important;
  border-color: #ffff79 !important;
}
.v-application .secondary--text.text--lighten-3 {
  color: #ffff79 !important;
  caret-color: #ffff79 !important;
}
.v-application .secondary.lighten-2 {
  background-color: #fff85c !important;
  border-color: #fff85c !important;
}
.v-application .secondary--text.text--lighten-2 {
  color: #fff85c !important;
  caret-color: #fff85c !important;
}
.v-application .secondary.lighten-1 {
  background-color: #ffdc3e !important;
  border-color: #ffdc3e !important;
}
.v-application .secondary--text.text--lighten-1 {
  color: #ffdc3e !important;
  caret-color: #ffdc3e !important;
}
.v-application .secondary.darken-1 {
  background-color: #d4a500 !important;
  border-color: #d4a500 !important;
}
.v-application .secondary--text.text--darken-1 {
  color: #d4a500 !important;
  caret-color: #d4a500 !important;
}
.v-application .secondary.darken-2 {
  background-color: #b68b00 !important;
  border-color: #b68b00 !important;
}
.v-application .secondary--text.text--darken-2 {
  color: #b68b00 !important;
  caret-color: #b68b00 !important;
}
.v-application .secondary.darken-3 {
  background-color: #987200 !important;
  border-color: #987200 !important;
}
.v-application .secondary--text.text--darken-3 {
  color: #987200 !important;
  caret-color: #987200 !important;
}
.v-application .secondary.darken-4 {
  background-color: #7b5900 !important;
  border-color: #7b5900 !important;
}
.v-application .secondary--text.text--darken-4 {
  color: #7b5900 !important;
  caret-color: #7b5900 !important;
}
.v-application .accent {
  background-color: #e91e63 !important;
  border-color: #e91e63 !important;
}
.v-application .accent--text {
  color: #e91e63 !important;
  caret-color: #e91e63 !important;
}
.v-application .accent.lighten-5 {
  background-color: #ffc0e7 !important;
  border-color: #ffc0e7 !important;
}
.v-application .accent--text.text--lighten-5 {
  color: #ffc0e7 !important;
  caret-color: #ffc0e7 !important;
}
.v-application .accent.lighten-4 {
  background-color: #ffa3cb !important;
  border-color: #ffa3cb !important;
}
.v-application .accent--text.text--lighten-4 {
  color: #ffa3cb !important;
  caret-color: #ffa3cb !important;
}
.v-application .accent.lighten-3 {
  background-color: #ff85b0 !important;
  border-color: #ff85b0 !important;
}
.v-application .accent--text.text--lighten-3 {
  color: #ff85b0 !important;
  caret-color: #ff85b0 !important;
}
.v-application .accent.lighten-2 {
  background-color: #ff6795 !important;
  border-color: #ff6795 !important;
}
.v-application .accent--text.text--lighten-2 {
  color: #ff6795 !important;
  caret-color: #ff6795 !important;
}
.v-application .accent.lighten-1 {
  background-color: #ff467c !important;
  border-color: #ff467c !important;
}
.v-application .accent--text.text--lighten-1 {
  color: #ff467c !important;
  caret-color: #ff467c !important;
}
.v-application .accent.darken-1 {
  background-color: #c9004b !important;
  border-color: #c9004b !important;
}
.v-application .accent--text.text--darken-1 {
  color: #c9004b !important;
  caret-color: #c9004b !important;
}
.v-application .accent.darken-2 {
  background-color: #aa0035 !important;
  border-color: #aa0035 !important;
}
.v-application .accent--text.text--darken-2 {
  color: #aa0035 !important;
  caret-color: #aa0035 !important;
}
.v-application .accent.darken-3 {
  background-color: #8b0021 !important;
  border-color: #8b0021 !important;
}
.v-application .accent--text.text--darken-3 {
  color: #8b0021 !important;
  caret-color: #8b0021 !important;
}
.v-application .accent.darken-4 {
  background-color: #6c000a !important;
  border-color: #6c000a !important;
}
.v-application .accent--text.text--darken-4 {
  color: #6c000a !important;
  caret-color: #6c000a !important;
}
.v-application .error {
  background-color: #ff5252 !important;
  border-color: #ff5252 !important;
}
.v-application .error--text {
  color: #ff5252 !important;
  caret-color: #ff5252 !important;
}
.v-application .error.lighten-5 {
  background-color: #ffe4d5 !important;
  border-color: #ffe4d5 !important;
}
.v-application .error--text.text--lighten-5 {
  color: #ffe4d5 !important;
  caret-color: #ffe4d5 !important;
}
.v-application .error.lighten-4 {
  background-color: #ffc6b9 !important;
  border-color: #ffc6b9 !important;
}
.v-application .error--text.text--lighten-4 {
  color: #ffc6b9 !important;
  caret-color: #ffc6b9 !important;
}
.v-application .error.lighten-3 {
  background-color: #ffa99e !important;
  border-color: #ffa99e !important;
}
.v-application .error--text.text--lighten-3 {
  color: #ffa99e !important;
  caret-color: #ffa99e !important;
}
.v-application .error.lighten-2 {
  background-color: #ff8c84 !important;
  border-color: #ff8c84 !important;
}
.v-application .error--text.text--lighten-2 {
  color: #ff8c84 !important;
  caret-color: #ff8c84 !important;
}
.v-application .error.lighten-1 {
  background-color: #ff6f6a !important;
  border-color: #ff6f6a !important;
}
.v-application .error--text.text--lighten-1 {
  color: #ff6f6a !important;
  caret-color: #ff6f6a !important;
}
.v-application .error.darken-1 {
  background-color: #df323b !important;
  border-color: #df323b !important;
}
.v-application .error--text.text--darken-1 {
  color: #df323b !important;
  caret-color: #df323b !important;
}
.v-application .error.darken-2 {
  background-color: #bf0025 !important;
  border-color: #bf0025 !important;
}
.v-application .error--text.text--darken-2 {
  color: #bf0025 !important;
  caret-color: #bf0025 !important;
}
.v-application .error.darken-3 {
  background-color: #9f0010 !important;
  border-color: #9f0010 !important;
}
.v-application .error--text.text--darken-3 {
  color: #9f0010 !important;
  caret-color: #9f0010 !important;
}
.v-application .error.darken-4 {
  background-color: #800000 !important;
  border-color: #800000 !important;
}
.v-application .error--text.text--darken-4 {
  color: #800000 !important;
  caret-color: #800000 !important;
}
.v-application .info {
  background-color: #5eac85 !important;
  border-color: #5eac85 !important;
}
.v-application .info--text {
  color: #5eac85 !important;
  caret-color: #5eac85 !important;
}
.v-application .info.lighten-5 {
  background-color: #e9ffff !important;
  border-color: #e9ffff !important;
}
.v-application .info--text.text--lighten-5 {
  color: #e9ffff !important;
  caret-color: #e9ffff !important;
}
.v-application .info.lighten-4 {
  background-color: #ccfff2 !important;
  border-color: #ccfff2 !important;
}
.v-application .info--text.text--lighten-4 {
  color: #ccfff2 !important;
  caret-color: #ccfff2 !important;
}
.v-application .info.lighten-3 {
  background-color: #b0ffd6 !important;
  border-color: #b0ffd6 !important;
}
.v-application .info--text.text--lighten-3 {
  color: #b0ffd6 !important;
  caret-color: #b0ffd6 !important;
}
.v-application .info.lighten-2 {
  background-color: #94e4ba !important;
  border-color: #94e4ba !important;
}
.v-application .info--text.text--lighten-2 {
  color: #94e4ba !important;
  caret-color: #94e4ba !important;
}
.v-application .info.lighten-1 {
  background-color: #79c89f !important;
  border-color: #79c89f !important;
}
.v-application .info--text.text--lighten-1 {
  color: #79c89f !important;
  caret-color: #79c89f !important;
}
.v-application .info.darken-1 {
  background-color: #43916c !important;
  border-color: #43916c !important;
}
.v-application .info--text.text--darken-1 {
  color: #43916c !important;
  caret-color: #43916c !important;
}
.v-application .info.darken-2 {
  background-color: #277753 !important;
  border-color: #277753 !important;
}
.v-application .info--text.text--darken-2 {
  color: #277753 !important;
  caret-color: #277753 !important;
}
.v-application .info.darken-3 {
  background-color: #005e3c !important;
  border-color: #005e3c !important;
}
.v-application .info--text.text--darken-3 {
  color: #005e3c !important;
  caret-color: #005e3c !important;
}
.v-application .info.darken-4 {
  background-color: #004626 !important;
  border-color: #004626 !important;
}
.v-application .info--text.text--darken-4 {
  color: #004626 !important;
  caret-color: #004626 !important;
}
.v-application .success {
  background-color: #4caf50 !important;
  border-color: #4caf50 !important;
}
.v-application .success--text {
  color: #4caf50 !important;
  caret-color: #4caf50 !important;
}
.v-application .success.lighten-5 {
  background-color: #dcffd6 !important;
  border-color: #dcffd6 !important;
}
.v-application .success--text.text--lighten-5 {
  color: #dcffd6 !important;
  caret-color: #dcffd6 !important;
}
.v-application .success.lighten-4 {
  background-color: #beffba !important;
  border-color: #beffba !important;
}
.v-application .success--text.text--lighten-4 {
  color: #beffba !important;
  caret-color: #beffba !important;
}
.v-application .success.lighten-3 {
  background-color: #a2ff9e !important;
  border-color: #a2ff9e !important;
}
.v-application .success--text.text--lighten-3 {
  color: #a2ff9e !important;
  caret-color: #a2ff9e !important;
}
.v-application .success.lighten-2 {
  background-color: #85e783 !important;
  border-color: #85e783 !important;
}
.v-application .success--text.text--lighten-2 {
  color: #85e783 !important;
  caret-color: #85e783 !important;
}
.v-application .success.lighten-1 {
  background-color: #69cb69 !important;
  border-color: #69cb69 !important;
}
.v-application .success--text.text--lighten-1 {
  color: #69cb69 !important;
  caret-color: #69cb69 !important;
}
.v-application .success.darken-1 {
  background-color: #2d9437 !important;
  border-color: #2d9437 !important;
}
.v-application .success--text.text--darken-1 {
  color: #2d9437 !important;
  caret-color: #2d9437 !important;
}
.v-application .success.darken-2 {
  background-color: #00791e !important;
  border-color: #00791e !important;
}
.v-application .success--text.text--darken-2 {
  color: #00791e !important;
  caret-color: #00791e !important;
}
.v-application .success.darken-3 {
  background-color: #006000 !important;
  border-color: #006000 !important;
}
.v-application .success--text.text--darken-3 {
  color: #006000 !important;
  caret-color: #006000 !important;
}
.v-application .success.darken-4 {
  background-color: #004700 !important;
  border-color: #004700 !important;
}
.v-application .success--text.text--darken-4 {
  color: #004700 !important;
  caret-color: #004700 !important;
}
.v-application .warning {
  background-color: #fb8c00 !important;
  border-color: #fb8c00 !important;
}
.v-application .warning--text {
  color: #fb8c00 !important;
  caret-color: #fb8c00 !important;
}
.v-application .warning.lighten-5 {
  background-color: #ffff9e !important;
  border-color: #ffff9e !important;
}
.v-application .warning--text.text--lighten-5 {
  color: #ffff9e !important;
  caret-color: #ffff9e !important;
}
.v-application .warning.lighten-4 {
  background-color: #fffb82 !important;
  border-color: #fffb82 !important;
}
.v-application .warning--text.text--lighten-4 {
  color: #fffb82 !important;
  caret-color: #fffb82 !important;
}
.v-application .warning.lighten-3 {
  background-color: #ffdf67 !important;
  border-color: #ffdf67 !important;
}
.v-application .warning--text.text--lighten-3 {
  color: #ffdf67 !important;
  caret-color: #ffdf67 !important;
}
.v-application .warning.lighten-2 {
  background-color: #ffc24b !important;
  border-color: #ffc24b !important;
}
.v-application .warning--text.text--lighten-2 {
  color: #ffc24b !important;
  caret-color: #ffc24b !important;
}
.v-application .warning.lighten-1 {
  background-color: #ffa72d !important;
  border-color: #ffa72d !important;
}
.v-application .warning--text.text--lighten-1 {
  color: #ffa72d !important;
  caret-color: #ffa72d !important;
}
.v-application .warning.darken-1 {
  background-color: #db7200 !important;
  border-color: #db7200 !important;
}
.v-application .warning--text.text--darken-1 {
  color: #db7200 !important;
  caret-color: #db7200 !important;
}
.v-application .warning.darken-2 {
  background-color: #bb5900 !important;
  border-color: #bb5900 !important;
}
.v-application .warning--text.text--darken-2 {
  color: #bb5900 !important;
  caret-color: #bb5900 !important;
}
.v-application .warning.darken-3 {
  background-color: #9d4000 !important;
  border-color: #9d4000 !important;
}
.v-application .warning--text.text--darken-3 {
  color: #9d4000 !important;
  caret-color: #9d4000 !important;
}
.v-application .warning.darken-4 {
  background-color: #802700 !important;
  border-color: #802700 !important;
}
.v-application .warning--text.text--darken-4 {
  color: #802700 !important;
  caret-color: #802700 !important;
}
.v-application .third {
  background-color: #9c27b0 !important;
  border-color: #9c27b0 !important;
}
.v-application .third--text {
  color: #9c27b0 !important;
  caret-color: #9c27b0 !important;
}
.v-application .third.lighten-5 {
  background-color: #ffb6ff !important;
  border-color: #ffb6ff !important;
}
.v-application .third--text.text--lighten-5 {
  color: #ffb6ff !important;
  caret-color: #ffb6ff !important;
}
.v-application .third.lighten-4 {
  background-color: #ff9aff !important;
  border-color: #ff9aff !important;
}
.v-application .third--text.text--lighten-4 {
  color: #ff9aff !important;
  caret-color: #ff9aff !important;
}
.v-application .third.lighten-3 {
  background-color: #f47eff !important;
  border-color: #f47eff !important;
}
.v-application .third--text.text--lighten-3 {
  color: #f47eff !important;
  caret-color: #f47eff !important;
}
.v-application .third.lighten-2 {
  background-color: #d662e8 !important;
  border-color: #d662e8 !important;
}
.v-application .third--text.text--lighten-2 {
  color: #d662e8 !important;
  caret-color: #d662e8 !important;
}
.v-application .third.lighten-1 {
  background-color: #b946cc !important;
  border-color: #b946cc !important;
}
.v-application .third--text.text--lighten-1 {
  color: #b946cc !important;
  caret-color: #b946cc !important;
}
.v-application .third.darken-1 {
  background-color: #800095 !important;
  border-color: #800095 !important;
}
.v-application .third--text.text--darken-1 {
  color: #800095 !important;
  caret-color: #800095 !important;
}
.v-application .third.darken-2 {
  background-color: #64007b !important;
  border-color: #64007b !important;
}
.v-application .third--text.text--darken-2 {
  color: #64007b !important;
  caret-color: #64007b !important;
}
.v-application .third.darken-3 {
  background-color: #490061 !important;
  border-color: #490061 !important;
}
.v-application .third--text.text--darken-3 {
  color: #490061 !important;
  caret-color: #490061 !important;
}
.v-application .third.darken-4 {
  background-color: #300049 !important;
  border-color: #300049 !important;
}
.v-application .third--text.text--darken-4 {
  color: #300049 !important;
  caret-color: #300049 !important;
}
.v-application .note {
  background-color: #00cae3 !important;
  border-color: #00cae3 !important;
}
.v-application .note--text {
  color: #00cae3 !important;
  caret-color: #00cae3 !important;
}
.v-application .note.lighten-5 {
  background-color: #cfffff !important;
  border-color: #cfffff !important;
}
.v-application .note--text.text--lighten-5 {
  color: #cfffff !important;
  caret-color: #cfffff !important;
}
.v-application .note.lighten-4 {
  background-color: #b0ffff !important;
  border-color: #b0ffff !important;
}
.v-application .note--text.text--lighten-4 {
  color: #b0ffff !important;
  caret-color: #b0ffff !important;
}
.v-application .note.lighten-3 {
  background-color: #8fffff !important;
  border-color: #8fffff !important;
}
.v-application .note--text.text--lighten-3 {
  color: #8fffff !important;
  caret-color: #8fffff !important;
}
.v-application .note.lighten-2 {
  background-color: #6effff !important;
  border-color: #6effff !important;
}
.v-application .note--text.text--lighten-2 {
  color: #6effff !important;
  caret-color: #6effff !important;
}
.v-application .note.lighten-1 {
  background-color: #48e6ff !important;
  border-color: #48e6ff !important;
}
.v-application .note--text.text--lighten-1 {
  color: #48e6ff !important;
  caret-color: #48e6ff !important;
}
.v-application .note.darken-1 {
  background-color: #00aec7 !important;
  border-color: #00aec7 !important;
}
.v-application .note--text.text--darken-1 {
  color: #00aec7 !important;
  caret-color: #00aec7 !important;
}
.v-application .note.darken-2 {
  background-color: #0093ac !important;
  border-color: #0093ac !important;
}
.v-application .note--text.text--darken-2 {
  color: #0093ac !important;
  caret-color: #0093ac !important;
}
.v-application .note.darken-3 {
  background-color: #007991 !important;
  border-color: #007991 !important;
}
.v-application .note--text.text--darken-3 {
  color: #007991 !important;
  caret-color: #007991 !important;
}
.v-application .note.darken-4 {
  background-color: #006077 !important;
  border-color: #006077 !important;
}
.v-application .note--text.text--darken-4 {
  color: #006077 !important;
  caret-color: #006077 !important;
}
.v-application .button {
  background-color: #f0ffff !important;
  border-color: #f0ffff !important;
}
.v-application .button--text {
  color: #f0ffff !important;
  caret-color: #f0ffff !important;
}
.v-application .button.lighten-5 {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
}
.v-application .button--text.text--lighten-5 {
  color: #ffffff !important;
  caret-color: #ffffff !important;
}
.v-application .button.lighten-4 {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
}
.v-application .button--text.text--lighten-4 {
  color: #ffffff !important;
  caret-color: #ffffff !important;
}
.v-application .button.lighten-3 {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
}
.v-application .button--text.text--lighten-3 {
  color: #ffffff !important;
  caret-color: #ffffff !important;
}
.v-application .button.lighten-2 {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
}
.v-application .button--text.text--lighten-2 {
  color: #ffffff !important;
  caret-color: #ffffff !important;
}
.v-application .button.lighten-1 {
  background-color: #ffffff !important;
  border-color: #ffffff !important;
}
.v-application .button--text.text--lighten-1 {
  color: #ffffff !important;
  caret-color: #ffffff !important;
}
.v-application .button.darken-1 {
  background-color: #d4e2e2 !important;
  border-color: #d4e2e2 !important;
}
.v-application .button--text.text--darken-1 {
  color: #d4e2e2 !important;
  caret-color: #d4e2e2 !important;
}
.v-application .button.darken-2 {
  background-color: #b8c6c6 !important;
  border-color: #b8c6c6 !important;
}
.v-application .button--text.text--darken-2 {
  color: #b8c6c6 !important;
  caret-color: #b8c6c6 !important;
}
.v-application .button.darken-3 {
  background-color: #9dabab !important;
  border-color: #9dabab !important;
}
.v-application .button--text.text--darken-3 {
  color: #9dabab !important;
  caret-color: #9dabab !important;
}
.v-application .button.darken-4 {
  background-color: #839191 !important;
  border-color: #839191 !important;
}
.v-application .button--text.text--darken-4 {
  color: #839191 !important;
  caret-color: #839191 !important;
}
</style>
