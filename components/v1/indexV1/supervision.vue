<script lang="ts" setup>
const siteStore = useSiteStore()
</script>
<template>
  <div class="ai_page">
    <div class="ai_container">
      <div class="ai_page2">
        <div class="ai_page2_tittle">
          <h1>{{ $lang('監管資質') }}</h1>
          <span>{{
            $lang(
              '我們持有國際權威監管機構的牌照並受其監管，您的資產受到相應的保護，可放心通過我們進行交易。'
            )
          }}</span>
        </div>
        <div class="ai_page2_text">
          {{ siteStore.siteData.title }}{{ $lang('集團所持牌照') }}
        </div>
        <div class="ai_page2_item">
          <div class="ai_page2_item20">
            <h3>{{ $lang('金融服務管理局（FSA）') }}</h3>
          </div>
          <div class="ai_page2_item80">
            <span>{{
              $lang(
                '金融服務管理局（FSA）是一家自主性獨立監管機構，負責塞舌爾地區非銀行金融服務業的發放牌照、監管、執行法規及合規相關規定、監督企業行為的工作。'
              )
            }}</span
            ><br />
            <br />
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{
                $lang(
                  '(SC) Ltd 是一家證券交易公司，由塞舌爾金融服務管理局（FSA）授權和監管，牌照號為 SD025。'
                )
              }}</span
            ><br />
            <br />
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{
                $lang(
                  '(SC) Ltd 運營該網站的目的是為歐洲經濟區（EEA）外的指定管轄權提供服務。'
                )
              }}</span
            ><br />
            <br />
            <span
              >{{ $lang('點擊') }}
              <a
                href="https://fsaseychelles.sc/search-business/{{ siteStore.siteData.title }}-sc-ltd"
                >{{ $lang('此處') }}</a
              >{{ $lang('獲取更多 FSA 牌照相關詳情。') }}</span
            >
          </div>
        </div>
        <div class="ai_page2_item">
          <div class="ai_page2_item20">
            <h3>{{ $lang('庫拉索和聖馬丁中央銀行（CBCS）') }}</h3>
          </div>
          <div class="ai_page2_item80">
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{
                $lang(
                  'B.V. 是一家持有庫拉索和聖馬丁中央銀行（Central Bank of Curaçao and Sint Maarten/CBCS）的監管牌照並受其監管的證券中介商，牌照編號為 0003LSI。點擊'
                )
              }}<a
                href="https://www.centralbank.cw/functions/supervision/supervised-institutions"
                >{{ $lang('此處') }}</a
              >{{ $lang('查看更多信息。') }}</span
            ><br />
            <br />
            <span>{{
              $lang(
                '庫拉索和聖馬丁中央銀行（Central Bank of Curaçao and Sint Maarten）負責監管庫拉索和聖馬丁兩國的金融部門，主要目的是促進該部門的穩定性、完整性、效率、安全性和穩健性。'
              )
            }}</span
            ><br />
            <br />
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{
                $lang(
                  'B.V. 運營該網站是為了在歐洲經濟區（EEA）之外的指定司法管轄區提供服務。'
                )
              }}</span
            ><br />
          </div>
        </div>
        <div class="ai_page2_item">
          <div class="ai_page2_item20">
            <h3>{{ $lang('金融服務委員會（FSC）') }}</h3>
          </div>
          <div class="ai_page2_item80">
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{
                $lang(
                  '(VG) Ltd 持有英屬維爾京群島（BVI）金融服務委員會的監管牌照，註冊編號為 2032226，投資商務牌照編號為 SIBA/L/20/1133。點擊'
                )
              }}<a
                href="https://www.bvifsc.vg/regulated-entities/venico-capital-limited-0"
                >{{ $lang('此處') }}</a
              >{{ $lang('查看更多信息。') }}</span
            ><br />
            <br />
            <span>{{
              $lang(
                'FSC 是負責所有英屬維爾京群島內外的金融服務業務的監管機構。'
              )
            }}</span
            ><br />
            <br />
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{
                $lang(
                  '(VG) Ltd 運營該網站是為了向歐洲經濟區（EEA）之外的指定司法管轄區提供服務。'
                )
              }}</span
            ><br />
          </div>
        </div>
        <div class="ai_page2_item">
          <div class="ai_page2_item20">
            <h3>{{ $lang('金融服務委員會（FSC）') }}</h3>
          </div>
          <div class="ai_page2_item80">
            <span
              ><b>{{ siteStore.siteData.title }}</b
              >{{
                $lang(
                  ' (MU) Ltd 持有毛里求斯金融服務委員會（Financial Services Commission/FSC）牌照，註冊編號為 176967，其投資交易商（全方位服務交易商，承保除外）牌照編號為 GB20025294。點擊'
                )
              }}<a
                href="https://www.fscmauritius.org/en/supervision/register-of-licensees/register-of-licensees-details?licence_no=GB20025294&cat=_GB&key=&code="
                >{{ $lang('此處') }}</a
              >
              {{ $lang('查看詳情。') }}</span
            ><br />
            <br />
            <span>{{
              $lang(
                'FCS 是毛里求斯非銀行金融服務部門和全球業務的綜合監管機構。'
              )
            }}</span
            ><br />
            <br />
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{
                $lang(
                  '(MU) Ltd 在本網站下開展經營活動，以向歐洲經濟區（EEA）以外指定的司法管轄區域提供服務。本公司目前不提供任何零售服務。任何涉及委員會的參與的言辭，均不可理解為或暗示委員會對金融產品的穩健性承擔責任、或推薦金融產品、或此處的陳述和表達的觀點是真實和準確的。'
                )
              }}</span
            ><br />
          </div>
        </div>
        <div class="ai_page2_item">
          <div class="ai_page2_item20">
            <h3>{{ $lang('金融部門行為監管局（FSCA）') }}</h3>
          </div>
          <div class="ai_page2_item80">
            <span
              ><b>{{ siteStore.siteData.title }}</b
              >{{
                $lang(
                  ' ZA (PTY) Ltd 是南非金融部門行為監管局（FSCA）授權的金融服務提供商（FSP）， FSP 編號為 51024。點擊'
                )
              }}<a href="https://www.fsca.co.za/Fais/Search_FSP.htm">{{
                $lang('這裡')
              }}</a
              >{{ $lang('查看更多信息。') }}</span
            ><br />
            <br />
            <span>{{
              $lang(
                '金融部門行為監管局（FSCA）負責市場行為的監管，旨在提高和支持金融市場的效率和完整性，並通過促進金融機構公平對待金融客戶來保護客戶。'
              )
            }}</span
            ><br />
          </div>
        </div>
        <div class="ai_page2_item">
          <div class="ai_page2_item20">
            <h3>{{ $lang('塞浦路斯證券交易委員會（CySEC）') }}</h3>
          </div>
          <div class="ai_page2_item80">
            <span>{{
              $lang(
                '金融行為管理局（FCA）是英國監管金融服務公司和金融市場行為的機構，秉承“公正無私”的原則對其職責範圍內的金融服務公司進行監管。'
              )
            }}</span
            ><br />
            <br />
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{
                $lang(
                  '(UK) Ltd 是一家投資公司，由英國金融行為監管局監管（FCA）授權和監管，金融服務註冊編號為 730729。'
                )
              }}</span
            ><br />
            <br />
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{ $lang('(UK) Ltd 運營的網站為') }}<a href=""></a>。{{
                siteStore.siteData.title
              }}
              {{ $lang('(UK) Ltd不向零售客戶提供服務。') }}</span
            ><br />
            <br />
            <span
              >{{ $lang('點擊')
              }}<a
                href="https://register.fca.org.uk/s/firm?id=001b000003587sXAAQ"
                >{{ $lang('此處') }}</a
              >{{ $lang('獲取更多 FCA 牌照相關詳情。') }}</span
            >
          </div>
        </div>
        <div class="ai_page2_item">
          <div class="ai_page2_item20">
            <h3>{{ $lang('金融行為監管局（FCA）') }}</h3>
          </div>
          <div class="ai_page2_item80">
            <span>{{
              $lang(
                '金融行為管理局（FCA）是英國監管金融服務公司和金融市場行為的機構，秉承“公正無私”的原則對其職責範圍內的金融服務公司進行監管。'
              )
            }}</span
            ><br />
            <br />
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{
                $lang(
                  '(UK) Ltd 是一家投資公司，由英國金融行為監管局監管（FCA）授權和監管，金融服務註冊編號為 730729。'
                )
              }}</span
            ><br />
            <br />
            <span
              ><b>{{ siteStore.siteData.title }}</b>
              {{ $lang('(UK) Ltd運營的網站為') }}<a href=""></a>。{{
                siteStore.siteData.title
              }}
              {{ $lang('(UK) Ltd不向零售客戶提供服務。') }}</span
            ><br />
            <br />
            <span
              >{{ $lang('點擊')
              }}<a
                href="https://register.fca.org.uk/s/firm?id=001b000003587sXAAQ"
                >{{ $lang('此處') }}</a
              >
              {{ $lang('獲取更多 FCA 牌照相關詳情。') }}</span
            >
          </div>
        </div>
        <div class="ai_page2_item">
          <div class="ai_page2_item20">
            <h3>{{ $lang('資本市場管理局（CMA）') }}</h3>
          </div>
          <div class="ai_page2_item80">
            <span
              >{{
                $lang(
                  'Tadenex Limited是一家不從事交易的外匯經紀商，持有肯尼亞資本市場管理局（ Capital Markets Authority/CMA）牌照，牌照編號為162。點擊'
                )
              }}<a href="https://www.cma.or.ke/index.php/list-of-licensees">{{
                $lang('此處')
              }}</a
              >{{ $lang('查看更多關於CMA牌照的信息。') }}</span
            ><br />
            <br />
            <span>{{
              $lang(
                'CMA是一家政府監管機構，主要負責指導、發放牌照、監管市場中介機構的活動，並監督根據《資本市場法》獲得牌照的所有其他人員。'
              )
            }}</span
            ><br />
          </div>
        </div>
        <div class="ai_page2_limit">
          <h2>{{ $lang('地區限制') }}</h2>
          <h4>
            {{ $lang('某些司法管轄區不在。') }}
            <b>{{ siteStore.siteData.title }}</b>
            {{ $lang('集團的服務提供範圍之內，受限地區包括美國。') }}
          </h4>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ai_page {
  margin: 80px 0 0 0;
  width: 100%;
  overflow: hidden;
  color: rgb(66, 66, 66);
  background-color: #fff;
}

.ai_container {
  max-width: 1140px;
  width: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
.ai_page2 {
  width: 100%;
  padding: 20px;
}
.ai_page2 a {
  color: #3070de;
}
.ai_page2_tittle {
  width: 100%;
  font-size: 20px;
}
.ai_page2_tittle h1 {
  font-size: 56px;
  margin-bottom: 10px;
}
.ai_page2_text {
  width: 100%;
  font-size: 32px;
  margin: 80px 0 30px;
  font-weight: 800;
}
.ai_page2_item {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
}
.ai_page2_item20 {
  width: 20%;
  background-color: #f4f5f6;
  padding: 20px;
}
.ai_page2_item80 {
  width: 80%;
  padding: 20px;
}
.ai_page2_limit {
  width: 100%;
  margin: 10px 0;
}
@media screen and (max-width: 1200px) {
  .container {
    max-width: 960px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 992px) {
  .container {
    max-width: 720px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }
}

@media screen and (max-width: 768px) {
  .container {
    max-width: 540px;
    width: 100%;
    padding: 0 15px;
    margin: 0 auto;
  }
  .ai_page2_item20 {
    width: 100%;
  }
  .ai_page2_item80 {
    width: 100%;
  }
  .ai_page2_tittle h1 {
    font-size: 40px;
  }
}
</style>
