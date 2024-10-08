<script lang="ts" setup>
import { init, dispose, registerOverlay } from '@/assets/gameJs/index.esm-98'
const props = defineProps({
  symbol: String,
  roundId: String,
  socketNewPrice: Object,
  createChartData: Object,
  nowTimestamp: Number,
  socketCurrentRoundCountdown: Number
})
console.log('props', props)
const PlayerStore = usePlayerStore()
// chart value
const chart = ref(null)
const options = ref({
  customApi: {
    formatDate: (dateTimeFormat, timestamp) => {
      const date = new Date(timestamp)
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      const seconds = String(date.getSeconds()).padStart(2, '0')
      const amOrPm = hours >= 12 ? 'PM' : 'AM'
      return `${hours}:${minutes}:${seconds} ${amOrPm}`
    },
    formatBigNumber: (value) => {
      const num = Number(value)
      console.log('num', num)
      return value
    }
  },
  decimalFoldThreshold: 10
})
const chartBindSuccess = ref(false)
const backBtn = ref(null)
const klineData = ref([])
const countDown = ref(0)
const scrollTimestamp = ref(0)

// action methods
const symbolChange = (symbol: string) => {
  return (
    PlayerStore.playerInfo.availablePairs[symbol]?.label ||
    PlayerStore.playerInfo.availablePairs[symbol]?.name ||
    PlayerStore.playerInfo.availablePairs[symbol]?.symbol
  )
}
const scrollToTimestamp = () => {
  chart.value.scrollToTimestamp(scrollTimestamp.value + 1000, 300)
}

const chartSetting = () => {
  console.log('......start chartSetting......')
  // 圖表設定
  const chartInit = init('k-line-chart', options.value)
  chart.value = chartInit
  chart.value?.setStyles({
    candle: {
      priceMark: {
        // 最低/高價
        high: {
          show: false
        },
        low: {
          show: false
        }
      },
      tooltip: {
        showRule: 'none'
      }
    }
  })
  // 監聽滾動，回到當前位置按鈕顯示
  chart.value?.subscribeAction('onScroll', async () => {
    await listenBackBtn()
  })
  // 設定圖表整體樣式
  const styleData = {
    // lineColor: '#921AFF', // 所有畫的線 (紫)
    // pointActiveBorderColor: '#79FF79', // 畫線點位 active border 顏色 (淡綠)
    // pointActiveColor: '#FF8000', // 畫線點位 active 顏色 (橘)
    // pointBorderColor: '#FFD306', // 畫線點位 border 顏色 (黃)
    // pointColor: '#4d3900', // 畫線點位顏色 (咖啡色)
    textBackgroundColor: '#F9761E' // 所有的文字框 (紅)
    // textColor: '#FFB5B5', // 所有的文字框文字顏色 (淡紅)
    // areaBackgroundColor: ['#E0E0E0', '#AE57A4'], // 區域圖顏色 (灰 紫)
    // areaLineColor: '#FF8000', // 區域圖線顏色 (橘)
    // areaPointColor: '#82D900', // 區域圖點位顏色 (綠)
    // areaPointRippleColor: 'rgba(251, 10, 130, 0.25)', // 區域圖點位外暈顏色 (淡粉紅)
  }
  chart.value?.setPriceVolumePrecision(
    PlayerStore.playerInfo.availablePairs[props.symbol].decimals,
    6
  )
  chart.value?.setInitStyles(styleData)
  // 結算一體成形
  registerOverlay({
    name: 'checkoutBlock',
    totalStep: 0,
    needDefaultPointFigure: false,
    isExclusionGetList: true,
    createPointFigures: ({ coordinates, bounding, overlay, barSpace }) => {
      const outRange = 20 // 上下外推範圍(移除上下 border)
      const startX = coordinates[0].x
      const startY = coordinates[0].y - outRange / 2
      const w = 10 * barSpace.bar // 取 10 秒
      const h = bounding.height + outRange
      return [
        {
          type: 'rect',
          attrs: {
            x: startX,
            y: startY,
            width: w,
            height: h
          },
          styles: { style: 'fill', color: 'rgba(255, 0, 0, 0.3)' },
          ignoreEvent: true
        },
        {
          type: 'line',
          attrs: {
            coordinates: [
              { x: startX + w, y: 0 },
              { x: startX + w, y: bounding.height }
            ]
          },
          ignoreEvent: true
        },
        {
          type: 'text',
          attrs: {
            x: startX,
            y: 80,
            align: 'center',
            baseline: 'bottom',
            text: overlay.extendData[0]
          },
          ignoreEvent: true
        },
        {
          type: 'text',
          attrs: {
            x: startX + w,
            y: 40,
            align: 'center',
            baseline: 'bottom',
            text: overlay.extendData[1]
          },
          ignoreEvent: true
        }
      ]
    },
    onRightClick() {
      return false
    }
  })
}

const createdChart = async (data: Object) => {
  const { newKLines, time } = data
  if (!chartBindSuccess.value) {
    await chartSetting()
  }
  klineData.value = [...newKLines]
  chart.value?.applyNewData(klineData.value)
  console.log('window.innerWidth', window.innerWidth)
  if (window.innerWidth < 768) {
    chart.value?.zoomAtTimestamp(-0.01, time, 300)
  } else {
    chart.value?.zoomAtTimestamp(1, time, 300)
  }
  chart.value?.setMaxOffsetRightDistance(60)
  chart.value?.setPaneOptions({
    options: {
      height: 1000
    }
  })
  chartBindSuccess.value = true
  console.log('getVisibleRange()', chart.value.getVisibleRange())
}

const listenBackBtn = () => {
  // 監聽返回最新價格按鈕
  const { to } = chart.value.getVisibleRange()
  // const show = this.klineLength - 60;
  const show = chart.value.getDataList().length - 60
  if (!backBtn.value) return
  if (show > 0 && show > to) {
    backBtn.value.style.display = 'flex'
  } else {
    backBtn.value.style.display = 'none'
  }
}

const ruleLine = async (reset: Boolean) => {
  // 获取当前时间戳;
  let timestamp = new Date().getTime()
  // 将时间戳的最后三位设置为零
  timestamp = Math.floor(timestamp / 1000) * 1000
  // 設定規則線
  const nowTime = new Date(timestamp)
  nowTime.setMilliseconds(0)
  const y = nowTime.getFullYear()
  const m = nowTime.getMonth()
  const d = nowTime.getDate()
  const hh = nowTime.getHours()
  const mm = nowTime.getMinutes()
  const lastBuy = new Date(y, m, d, hh, mm, 50).getTime()
  const nextMinutes = new Date(y, m, d, hh, mm + 1, 0).getTime()
  countDown.value = (nextMinutes - nowTime.getTime()) / 1000
  scrollTimestamp.value = nextMinutes

  const ruleLine = {
    name: 'checkoutBlock',
    id: 'checkoutBlock',
    points: [{ timestamp: lastBuy }],
    rect: {
      color: '#F9761E'
    },
    extendData: ['最後購買時間', `作業秒數${countDown.value}S`]
  }
  if (countDown.value === 60) {
    console.log('nowTime', new Date(y, m, d, hh, mm, 50))
    console.log('lastBuy', lastBuy)
    // 產生 1 分鐘的空資料
    let loopTimestamp = timestamp + 1000
    for (let i = 0; i < countDown.value + 2; i += 1) {
      const emptyData = {
        timestamp: loopTimestamp,
        open: null,
        close: null,
        high: null,
        low: null,
        volume: null,
        turnover: null
      }
      chart.value.updateData(emptyData)
      loopTimestamp += 1000
    }
  }
  if (reset) {
    chart.value.overrideOverlay(ruleLine)
    const chartData = chart.value.getDataList() // 圖表資料源
    const chartLastData = chartData.at(-1)
    const emptyData = {
      timestamp: chartLastData.timestamp + 1000,
      open: null,
      close: null,
      high: null,
      low: null,
      volume: null,
      turnover: null
    }
    chart.value.updateData(emptyData)
  } else {
    console.log('nowTime', new Date(y, m, d, hh, mm, 50))
    console.log('lastBuy', lastBuy)
    // 產生 1 分鐘的空資料
    let loopTimestamp = timestamp + 1000
    for (let i = 0; i < countDown.value + 2; i += 1) {
      const emptyData = {
        timestamp: loopTimestamp,
        open: null,
        close: null,
        high: null,
        low: null,
        volume: null,
        turnover: null
      }
      chart.value.updateData(emptyData)
      loopTimestamp += 1000
    }
    chart.value.createOverlay(ruleLine)
  }
}

watch(
  () => props.socketNewPrice,
  async (newValue) => {
    // console.log('socketNewPrice', newValue)
    // 如果 kline chart 已生成就更新 chart data
    if (chartBindSuccess.value) {
      // 面積圖
      // 新資料丟到 chart
      chart.value.updateData(newValue)
      const checkoutBlock = chart.value.getOverlayById('checkoutBlock')
      if (checkoutBlock) ruleLine(true)
      if (!checkoutBlock) ruleLine(false)
    }
  },
  { immediate: true, deep: true }
)

watch(
  () => props.createChartData,
  async (newValue) => {
    console.log('createChartData', newValue)
    if (newValue) {
      await createdChart(newValue)
    }
  },
  { immediate: true, deep: true }
)

watch(
  () => props.symbol,
  async (newValue) => {
    console.log('symbol', newValue)
    if (chartBindSuccess.value) {
      await dispose('k-line-chart')
      chartBindSuccess.value = false
    }
  },
  { immediate: true, deep: true }
)

// onMounted watch device width channg
onMounted(() => {
  window.addEventListener('resize', async () => {
    await dispose('k-line-chart')
    chartBindSuccess.value = false
    await createdChart(props.createChartData)
  })
})
</script>

<template>
  <div id="container" class="container">
    <div class="chartSection">
      <div class="topInfo">
        <div class="symbol">
          <!-- {{ symbolChange(props.symbol) }} -->
          {{ $lang('電號') }}
          {{ roundId }}
        </div>
        <div class="count">
          <span><i class="fa-solid fa-stopwatch"></i></span
          >{{ socketCurrentRoundCountdown }}S
        </div>
      </div>
      <div id="k-line-chart" class="chartStyle">
        <button
          ref="backBtn"
          type="button"
          class="backBtn"
          @click="scrollToTimestamp"
        >
          <i class="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  height: 100%;
  max-width: 100%;
}
.chartSection {
  width: 100%;
  height: 100%;
  // background: #0000002b;
  background-image: url('https://upload.comethico.com/uploads/1726160362601.jpg');
  background-size: cover;
}
@media screen and (max-width: 768px) {
  .chartSection {
    width: 100%;
    height: 100%;
    // margin: 0 auto 40px auto;
    // background: #0000002b;
    background-image: url('https://upload.comethico.com/uploads/1726160362601.jpg');
    background-size: cover;
  }
}
.symbol {
  padding: 5px;
  font-weight: bold;
}
.chartStyle {
  width: 100%;
  height: calc(100% - 36px);
  background: #0300006e;
}
.button-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;
  margin-top: 10px;
  padding: 10px 22px;
}

.button-container button {
  padding: 2px 6px;
  background-color: #1677ff;
  border-radius: 4px;
  font-size: 12px;
  color: #fff;
  outline: none;
  border: none;
}
#k-line-chart {
  position: relative;
}
.backBtn {
  position: absolute;
  top: 50%;
  right: 78px;
  display: none;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid #c2c2c2;
  border-radius: 50%;
  background: #fff;
  user-select: none;
  z-index: 10;
}
.backBtn svg {
  color: black;
}
.chartLoading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.btnOperate {
  button {
    margin-right: 10px;
  }
}
</style>

<style lang="sass">
.topInfo
  width: 100%
  display: flex
  justify-content: space-between
  align-items: center
  padding: 0 15px
  .symbol
    width: 50%
  .count
    width: 50%
    display: flex
    justify-content: flex-start
    align-items: center
    justify-content: flex-end
    span
      margin-right: 10px
</style>
