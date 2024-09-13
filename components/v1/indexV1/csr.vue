<script lang="ts" setup></script>
<template>
  <div class="page">
    <div class="background">
      <img src="@/assets/image/index_ai/csr/background.png" />
    </div>
    <div class="cover"></div>
    <div class="description">
      <div class="title">
        {{ $lang('CSR 企業社會責任') }}
      </div>
      <div class="content">
        <p>
          {{
            $lang(
              '以永續經營觀點，多年來持續與不同領域的夥伴互動及合作，激盪具有創意的解決方案，協力擴大永續經營效益。'
            )
          }}
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped lang="sass">
.page
  position: relative
  width: 100dvw
  height: calc(100dvh - 80px)
  @media screen and (max-width: 768px)
    height: 100dvh
  .background
    width: 100%
    height: 100%
    img
      width: 100%
      height: 100%
      object-fit: cover
  .cover
    position: absolute
    z-index: 10
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: #00000066
  .description
    position: absolute
    z-index: 10
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    @media screen and (max-width: 768px)
      width: 90dvw
    .title
      font-size: 48px
      font-weight: bold
      color: #ffffff
      text-align: center
      @media screen and (max-width: 768px)
        font-size: 32px
    .content
      margin-top: 20px
      font-size: 20px
      color: #ffffff
      text-align: center
      @media screen and (max-width: 768px)
        font-size: 16px
</style>
