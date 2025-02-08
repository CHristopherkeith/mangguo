<template>
  <div class="home">
    <van-nav-bar class="navbar" title="企业服务" fixed placeholder safe-area-inset-top />
    <div class="content">
      <div class="contact">
        <div class="contact__left">
          <van-button plain type="primary" icon="phone" url="tel:15202060667">
            客服电话:15202060667(点击拨号)
          </van-button>
          <van-button plain type="primary" icon="wechat">
            客服微信:15202060667(右侧扫码)
          </van-button>
        </div>
        <van-image class="contact__img" width="100" height="100" :src="wechatImg" />
      </div>
      <div class="block">
        <div class="block__title">经营异常后果严重，最高罚款10000元</div>
        <van-row class="block__list" gutter="10">
          <van-col v-for="item in resultIcon" span="8" :key="item.id">
            <div class="block__list__item">
              <van-icon :name="item.icon" />
              <div>{{ item.title }}</div>
            </div>
          </van-col>
        </van-row>
        <van-divider :style="{ margin: 0 }" />
        <div class="block__law">
          《市场主体登记管理条例实施细则》第七十条明确规定:
          市场主体未按照法律、行政法规规定的期限公示或者报送年度报告的，由登记机关列入经营异常名录，可以
          <span class="block__law__mark"> 处1万元以下罚款 </span>
        </div>
        <div class="block__law">
          《市场主体登记管理条例实施细则》第十八条明确规定: 企业因
          <span class="block__law__mark"> 连续2年 </span>
          未按规定报送年度报告被列入经营异常名录未改正，且通过登记的住所或者经营场所无法取得联系的，由县级以上市场监督管理部门
          <span class="block__law__mark"> 吊销营业执照 </span>
          。
        </div>
        <div class="block__law">
          根据《企业信息公示暂行条例》第十八条、第二十一条根据，逾期未报工商年报除被列入经营异常外，情节严重的，会被处以
          <span class="block__law__mark"> 罚款、承担赔偿责任，构成犯罪的将被追究刑事责任 </span>
          。
        </div>
      </div>
      <div class="block">
        <div class="block__title">企业服务办理</div>
        <van-steps>
          <van-step>提交办理</van-step>
          <van-step>联系客服</van-step>
          <van-step>交易完成</van-step>
        </van-steps>
        <div class="block__steps">
          <div class="block__steps__top">
            <span class="block__steps__top__title">步骤一：</span>
            <span>提交办理，支付手续费，保留付款截图</span>
          </div>
          <van-button
            class="block__steps__submit"
            type="primary"
            icon="alipay"
            @click="handleSubmit"
          >
            <span>点此 补报申报</span>
            <span class="block__steps__submit__price">￥298.00</span>
            <span>/</span>
            <span>￥58.00</span>
          </van-button>
        </div>
        <div class="block__steps">
          <div class="block__steps__top">
            <span class="block__steps__top__title">步骤二：</span>
            <span>联系客服，出示付款和资料，等待办理完成</span>
          </div>
        </div>
      </div>
      <div class="disclaimer">
        <div class="disclaimer__title">特别申明</div>
        <div class="disclaimer__content">
          我们仅在获得客户的授权后为客户进行工商、税务等事宜代办。我们非国家工商税务行政管理部门，仅为提高客户工商办理效率，降低客户工商办理难度提供有偿服务，请知悉。
          <span class="disclaimer__content__mark">
            线上线下两个渠道直接向监管部门报送是免费办理
          </span>
        </div>
      </div>
      <div class="block">
        <div class="block__title">选择企业服务，享受快捷代办</div>
        <div class="block__image"><van-image width="80%" :src="compareImg" /></div>
      </div>
      <div class="block">
        <div class="block__title">选择企业服务，享受专业资质</div>
        <div class="block__image"><van-image width="80%" :src="licenseImg" /></div>
      </div>
    </div>
    <van-button class="deal" type="primary" @click="handleSubmit"> 提交办理 </van-button>
  </div>
</template>

<script lang="ts" setup>
import wechatImg from '@/assets/images/wechat.jpg'
import compareImg from '@/assets/images/compare.png'
import licenseImg from '@/assets/images/license.jpg'

const resultIcon: { title: string; icon: string; id: number }[] = [
  { title: '经营异常状态', icon: 'warning', id: 1 },
  { title: '银行贷款受阻', icon: 'gold-coin', id: 2 },
  { title: '工商行政处罚', icon: 'clear', id: 3 },
]

// 打开支付宝转账
function handleSubmit(): void {
  const a = document.createElement('a')
  a.href =
    'alipays://platformapi/startapp?appId=09999988&actionType=toAccount&goBack=NO&amount=0.01&account=15202060667&memo=%E6%9D%A5%E6%BA%90%EF%BC%9A%E8%A1%A5%E6%8A%A5%E7%94%B3%E6%8A%A5'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}
</script>

<style scoped lang="scss">
.home {
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  .navbar {
    :deep(.van-nav-bar__title) {
      color: var(--van-primary-color);
    }
  }
  .content {
    flex: 1;
    overflow: auto;
    .contact {
      display: flex;
      flex-direction: row;
      &__left {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        // justify-items: center;
        :deep(.van-button) {
          padding: 0 8px;
        }
      }
      &__img {
        margin-left: 5px;
      }
    }
    .block {
      margin: 10px 0;
      &__title {
        // font-size: 16px;
        font-weight: bold;
        text-align: center;
        color: var(--van-primary-color);
        padding: 10px 0;
        border-radius: 10px;
        background-color: aliceblue;
      }
      &__list {
        padding: 10px;
        &__item {
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 14px;
          color: var(--van-primary-color);
          font-weight: bold;
          .van-icon {
            font-size: 25px;
            margin-bottom: 10px;
          }
        }
      }
      &__law {
        text-indent: 28px;
        font-size: 14px;
        margin-top: 5px;
        &__mark {
          font-weight: bold;
          color: var(--van-primary-color);
        }
      }
      &__steps {
        font-size: 14px;
        &__top {
          // font-weight: bold;

          &__title {
            font-weight: bold;
            color: var(--van-primary-color);
          }
        }
        &__submit {
          width: 100%;
          margin: 10px 0;
          &__price {
            text-decoration: line-through;
          }
          span {
            margin-right: 10px;
          }
        }
      }
      &__image {
        text-align: center;
        margin-top: 10px;
      }
    }
    .disclaimer {
      margin: 20px 0 10px 0;
      &__title {
        text-align: center;
        font-size: 13px;
        font-weight: bold;
      }
      &__content {
        margin-top: 10px;
        font-size: 11px;
        &__mark {
          font-weight: bold;
          color: var(--van-primary-color);
        }
      }
    }
  }

  .deal {
    width: 100%;
  }
}
</style>
