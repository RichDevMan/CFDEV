<script lang="ts" setup>
const siteStore = useSiteStore()
</script>
<template>
  <div class="page">
    <div class="navbar">
      <div class="title">
        <h1>{{ $lang('法律文件') }}</h1>
        <b>{{
          $lang('您可以在此找到所有您需了解的關於我們的法律協議和條款條件。')
        }}</b>
      </div>

      <div class="content">
        <h1>{{ siteStore.siteData.title }}(SC) Ltd</h1>
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('客戶協議') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('一般業務條款') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('合作夥伴協議') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('獎勵條款和條件') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('客戶投訴程序') }}</span></a
        >
      </div>
      <div class="content">
        <h1>
          {{ siteStore.siteData.title }}<br />
          B.V.
        </h1>
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('客戶協議') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('一般業務條款') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('合作夥伴協議') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('獎勵條款和條件') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('客戶投訴程序') }}</span></a
        >
      </div>
      <div class="content">
        <h1>{{ siteStore.siteData.title }}(VG) Ltd</h1>
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('客戶協議') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('一般業務條款') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('合作夥伴協議') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('獎勵條款和條件') }}</span></a
        ><br />
        <i class="fa-regular fa-file-lines"></i>
        <a href=""
          ><span>{{ $lang('客戶投訴程序') }}</span></a
        >
      </div>
      <div class="bottom">
        <h2>{{ $lang('公告') }}</h2>
        <p>
          {{ $lang('2023 年 5 月 8 日') }}<br />
          {{ siteStore.siteData.title }} (SC)
          {{ siteStore.siteData.title }} (VG) Ltd、{{
            siteStore.siteData.title
          }}
          B.V.
          {{
            $lang(
              '全體客戶請注意，我們謹此通知：為持續提升自身業務能力、優化客戶關係關鍵領域，我們已於近期修訂了我們的《客戶協議》。敬請知悉。 请放心，您在'
            )
          }}
          {{ siteStore.siteData.title }} (SC) Ltd、{{
            siteStore.siteData.title
          }}
          (VG) {{ siteStore.siteData.title }} B.V.
          {{ $lang('的交易操作不會受到《客戶協議》修訂的影響。') }}<br />
          {{
            $lang(
              '我們懇請您查閱新版《客戶協議》，如果您有任何疑問，請發送電子郵件至 support@exness.com。 我們的專業客服團隊將竭誠為您提供幫助。'
            )
          }}
          {{
            $lang(
              '請注意，修訂版《客戶協議》將於五（5）個工作日後自動生效，所以目前您不需要對此採取進一步行動。'
            )
          }}<br />
          {{ $lang('感謝您的配合。') }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped>
.page {
  width: 100%;
  color: rgb(0, 0, 0);
  background-color: #fff;
  margin: 80px 0 0 0;
  padding: 20px 0;
}
h1 {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 20px 0;
}
h2 {
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 20px 0;
}
.navbar {
  margin: 0 200px;
}
@media screen and (max-width: 768px) {
  .navbar {
    margin: 0 20px;
  }
}

.content {
  margin-bottom: 70px;
}
.content svg {
  margin: 0 10px 0 0;
}
.title {
  margin-bottom: 100px;
}
.content img {
  width: 25px;
  height: auto;
}
</style>
