<template>
  <div class="yearlyInspectionHome">
    <div class="yearlyInspectionHome-stutas flex flex-center">
      <div
        class="yearlyInspectionHome-card-header flex flex-ver flex-jcsb"
        v-if="yearlyInspectionHomeStutas!==0"
      >
        <div class="yearlyInspectionHome-card-header-left flex flex-ver">
          <h2>{{barsNumber}}</h2>
          <img src="../../../assets/image/yearlyInspection/barsOpen.png" />
        </div>
        <div class="yearlyInspectionHome-card-header-right flex flex-ver">
          <img src="../../../assets/image/yearlyInspection/edit.png" />
          <p>编辑车辆</p>
        </div>
      </div>
      <!-- 添加车辆 -->
      <div class="yearlyInspectionHome-card1 flex flex-center" v-if="yearlyInspectionHomeStutas==0">
        <img src="../../../assets/image/yearlyInspection/AddBars.png" />
        <p>添加车辆办年检</p>
      </div>
      <!-- 补充车辆信息 -->
      <div
        class="yearlyInspectionHome-card2 card-style2 flex flex-ver flex-jcsb"
        v-if="yearlyInspectionHomeStutas==1"
      >
        <div class="yearlyInspectionHome-card2-content-left">
          <h3>请补充车辆信息后</h3>
          <h3>查看年检状态</h3>
        </div>
        <div class="yearlyInspectionHome-card2-content-right flex flex-center">
          <p>---</p>
          <div class="flex flex-center">补充资料</div>
        </div>
      </div>
      <!-- 年检未到期，无需办理 -->
      <div
        class="yearlyInspectionHome-card2 card-style2 flex flex-ver flex-jcsb"
        v-if="yearlyInspectionHomeStutas==2"
      >
        <div class="yearlyInspectionHome-card2-content-left">
          <h3>距年检可预约办理还有</h3>
          <h3>
            <strong>{{yearlyInspectionDay}}</strong>天
          </h3>
        </div>
        <div class="yearlyInspectionHome-card2-content-right flex flex-center">
          <p class="yearlyInspectionHome-card3-p">六年免检</p>
          <div class="card-tag-style2 flex flex-center">无需办理</div>
        </div>
      </div>
      <!-- 年检已经到期，可办理 -->
      <div
        class="yearlyInspectionHome-card2 card-style3 flex flex-ver flex-jcsb"
        v-if="yearlyInspectionHomeStutas==3"
      >
        <div class="yearlyInspectionHome-card2-content-left">
          <h3>距年检到期还有</h3>
          <h3>
            <strong>{{yearlyInspectionDay}}</strong>天
          </h3>
        </div>
        <div class="yearlyInspectionHome-card2-content-right flex flex-center">
          <p class="yearlyInspectionHome-card3-p">六年免检</p>
          <div class="card-tag-style3 flex flex-center">可办理</div>
        </div>
      </div>
      <!-- 年检已逾期，可办理 -->
      <div
        class="yearlyInspectionHome-card2 card-style4 flex flex-ver flex-jcsb"
        v-if="yearlyInspectionHomeStutas==4"
      >
        <div class="yearlyInspectionHome-card2-content-left">
          <h3>年检已逾期</h3>
          <h3>
            <strong>{{yearlyInspectionDay}}</strong>天
          </h3>
        </div>
        <div class="yearlyInspectionHome-card2-content-right flex flex-center">
          <p class="yearlyInspectionHome-card3-p">六年免检</p>
          <div class="card-tag-style4 flex flex-center">已逾期</div>
        </div>
      </div>
      <!-- 年检逾期3次，需上线检-->
      <div
        class="yearlyInspectionHome-card2 card-style4 flex flex-ver flex-jcsb"
        v-if="yearlyInspectionHomeStutas==5"
      >
        <div class="yearlyInspectionHome-card2-content-left">
          <h3>已连续逾期</h3>
          <h3>
            <strong>2</strong>次
          </h3>
        </div>
        <div class="yearlyInspectionHome-card2-content-right flex flex-center">
          <p class="yearlyInspectionHome-card3-p">六年免检</p>
          <div class="card-tag-style4 flex flex-center">严重逾期</div>
        </div>
      </div>
      <!-- 年检逾期3次，车辆报废-->
      <div
        class="yearlyInspectionHome-card2 card-style4 flex flex-ver flex-jcsb"
        v-if="yearlyInspectionHomeStutas==6"
      >
        <div class="yearlyInspectionHome-card2-content-left">
          <h3>已连续逾期</h3>
          <h3>
            <strong>3</strong>次
          </h3>
        </div>
        <div class="yearlyInspectionHome-card2-content-right flex flex-center">
          <p class="yearlyInspectionHome-card3-p">六年免检</p>
          <div class="card-tag-style4 flex flex-center">车辆报废</div>
        </div>
      </div>
      <!-- 已支付，等待图片上传-->
      <div
        class="yearlyInspectionHome-card2 card-style2 flex flex-ver flex-jcsb"
        v-if="yearlyInspectionHomeStutas==7"
      >
        <div class="yearlyInspectionHome-card2-content-left">
          <h3>请上传办理资料审核</h3>
          <h3>审核通过后即可</h3>
          <h3>直接办理</h3>
          <h3></h3>
          <!-- 这是占住最后一位h3的style样式，此处不需要-->
        </div>
        <div class="yearlyInspectionHome-card2-content-right flex flex-center">
          <p class="yearlyInspectionHome-card3-p">六年免检</p>
          <div class="card-tag-style2 flex flex-center">资料审核</div>
        </div>
      </div>
      <!-- 图片审核通过和年检办理成功-->
      <div
        class="yearlyInspectionHome-card2 card-style2 flex flex-ver flex-jcsb"
        v-if="yearlyInspectionHomeStutas==8 || yearlyInspectionHomeStutas==9"
      >
        <div class="yearlyInspectionHome-card2-content-left" v-if="yearlyInspectionHomeStutas==8">
          <h3>资料审核中</h3>
          <h3>请耐心等待，审核通过后</h3>
          <h3>可直接办理</h3>
          <h3></h3>
          <!-- 这是占住最后一位h3的style样式，此处不需要-->
        </div>
        <div class="yearlyInspectionHome-card2-content-left" v-if="yearlyInspectionHomeStutas==9">
          <h3>资料已审核通过</h3>
          <h3>请等待工作人员办理</h3>
          <h3>并寄回年检标志</h3>
          <h3></h3>
          <!-- 这是占住最后一位h3的style样式，此处不需要-->
        </div>
        <div class="yearlyInspectionHome-card2-content-right flex flex-center">
          <p class="yearlyInspectionHome-card3-p">六年免检</p>
          <div class="card-tag-style2 flex flex-center">办理中</div>
        </div>
      </div>
      <!-- 订单完成-->
      <div
        class="yearlyInspectionHome-card2 card-style2 flex flex-ver flex-jcsb"
        v-if="yearlyInspectionHomeStutas==10"
      >
        <div class="yearlyInspectionHome-card2-content-left">
          <h3>您的年检已办理成功</h3>
          <h3>年检合格标志已寄回</h3>
          <h3>请注意查收</h3>
          <h3></h3>
          <!-- 这是占住最后一位h3的style样式，此处不需要-->
        </div>
        <div class="yearlyInspectionHome-card2-content-right flex flex-center">
          <p class="yearlyInspectionHome-card3-p">六年免检</p>
          <div class="card-tag-style2 flex flex-center">寄回资料</div>
        </div>
      </div>
    </div>
    <div class="yearlyInspectionHome-content flex flex-center" v-if="!isPayment">
      <div class="yearlyInspectionHome-content-tags">
        <img src="../../../assets/image/yearlyInspection/tags.png" />
      </div>
      <div class="yearlyInspectionHome-content-condition flex flex-center">
        <h3>六年免检办理条件</h3>
        <div class="yearlyInspection-condition flex flex-center">
          <div class="yearlyInspection-condition-body">
            <p>1. 使用性质：非运营</p>
            <p>2. 核定载人数：5人及以下</p>
            <p>3. 注册登记日期在2013年8月6日(含)之后</p>
            <div @click="onOpenBarsType" class="flex flex-ver">
              <span>4. 行驶证注明的9种车型</span>
              <img src="../../../assets/image/yearlyInspection/Open.png" />
            </div>
            <div v-if="isOpenBarsType">微型轿车、小型轿车、中型轿车、大型轿车、小型普通客车、小型越野客车、小型专用客车、微型普通客车、微型越野客车</div>
            <p>5. 免检期间未发生过致人伤亡事故的车辆</p>
          </div>
        </div>
      </div>
      <div class="yearlyInspectionHome-content-process flex flex-center">
        <h3>六年免检办理流程</h3>
        <div
          class="yearlyInspection-process flex flex-center"
          v-for="(item, i) in processlists"
          :key="i"
        >
          <div class="yearlyInspection-process-body">
            <div class="yearlyInspection-process-style flex">
              <img :src="item.pic" />
              <div class="yearlyInspection-process-body-right">
                <p>{{item.title}}</p>
                <p>{{item.content}}</p>
              </div>
            </div>
          </div>
          <img
            ref="processOpen"
            class="process-open"
            src="../../../assets/image/yearlyInspection/processOpen.png"
          />
        </div>
      </div>
    </div>
    <div class="yearlyInspectionHome-content flex flex-center" v-if="isPayment">
      <div class="Violation-part flex flex-ver flex-jcsb">
        <div class="Violation-part-left">
          <div class="Violation-part-left-top flex flex-ver">
            <p>查询违章</p>
            <div class="flex flex-center">代办</div>
          </div>
          <p class="Violation-part-att">请在年检办理前处理，否则年检则无法办理成功</p>
        </div>
        <div class="Violation-part-right">
          <img src="../../../assets/image/yearlyInspection/toRight.png" />
        </div>
      </div>
      <div class="order-flow flex flex-center">
        <Steps :current="orderCurrent" direction="vertical">
          <Step title="订单支付" icon="md-radio-button-on"></Step>
          <Step title="上传交强险照片" icon="md-radio-button-on" content="在保期内的交强险副本照片，需清晰显示有效期"></Step>
          <Step title="办理年检" icon="md-radio-button-on" ></Step>
          <Step title="回寄合格标志" icon="md-radio-button-on" ></Step>
        </Steps>
      </div>
    </div>
    <div>
      <div
        class="yearlyInspectionHome-btn flex flex-center"
        v-if="yearlyInspectionHomeStutas==0"
      >立即办理</div>
      <div
        class="yearlyInspectionHome-btn flex flex-center"
        v-if="yearlyInspectionHomeStutas==1"
      >补充资料</div>
      <div
        class="yearlyInspectionHome-btn-1 flex flex-center"
        v-if="yearlyInspectionHomeStutas==2"
      >立即办理</div>
      <div
        class="yearlyInspectionHome-Btn flex"
        v-if="yearlyInspectionHomeStutas==3 || yearlyInspectionHomeStutas==4"
      >
        <div class="btn3-left flex flex-center">
          <img src="../../../assets/image/yearlyInspection/handleOk.png" />
        </div>
        <div class="btn3-right flex flex-center">立即办理</div>
      </div>
      <div
        class="yearlyInspectionHome-Btn flex"
        v-if="yearlyInspectionHomeStutas==5 || yearlyInspectionHomeStutas==6"
      >
        <div class="btn3-left flex flex-center">
          <img src="../../../assets/image/yearlyInspection/handleOk.png" />
        </div>
        <div class="btn4-right flex flex-center">需上线检</div>
      </div>
      <div
        class="yearlyInspectionHome-btn flex flex-center"
        v-if="yearlyInspectionHomeStutas==7"
      >上传交强险照片</div>
      <div
        class="yearlyInspectionHome-btn flex flex-center"
        v-if="yearlyInspectionHomeStutas>7"
      >查看详情</div>

    </div>
    <div class="yearlyInspectionHome-order">
      <img src="../../../assets/image/yearlyInspection/order.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      yearlyInspectionHomeStutas: 10,
      barsNumber: "粤S MM999",
      yearlyInspectionDay: "10",
      isOpenBarsType: false,
      isPayment: true,
      orderCurrent:3,
      processlists: [
        {
          pic: require("../../../assets/image/yearlyInspection/Pay.png"),
          title: "下单付款",
          content: "填写联系方式和支付订单"
        },
        {
          pic: require("../../../assets/image/yearlyInspection/Pay.png"),
          title: "上传交强险照片",
          content: "交强险需在有效期内"
        },
        {
          pic: require("../../../assets/image/yearlyInspection/yearlyInspection.png"),
          title: "代办年检",
          content: "确认交强险在有效期内代办年检"
        },
        {
          pic: require("../../../assets/image/yearlyInspection/finish.png"),
          title: "办理完成",
          content: "寄回年检合格标志"
        }
      ]
    };
  },
  created() {},
  mounted() {
    if (!this.isPayment) {
      this.$refs.processOpen[3].style.display = "none";
    }
  },
  methods: {
    onOpenBarsType() {
      if (this.isOpenBarsType == true) {
        this.isOpenBarsType = false;
      } else {
        this.isOpenBarsType = true;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yearlyInspectionHome {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
}
.yearlyInspectionHome-stutas {
  margin-top: 15px;
}
.yearlyInspectionHome-card1 {
  width: 92vw;
  height: 100px;
  background: url("../../../assets/image/yearlyInspection/cardStutas1.png");
  background-size: 100% 100%;
  color: #fff;
  font-size: 18px;
}
.yearlyInspectionHome-card1 img {
  width: 44px;
  height: 44px;
  padding-bottom: 5px;
}
.yearlyInspectionHome-card-header {
  width: 92vw;
}
.yearlyInspectionHome-card-header-left h2 {
  color: #1a1a1a;
}
.yearlyInspectionHome-card-header-left img {
  width: 15px;
  height: 13px;
  margin-left: 7px;
}
.yearlyInspectionHome-card-header-right img {
  width: 13px;
  height: 13px;
  margin-right: 5px;
}
.yearlyInspectionHome-card-header-right p {
  color: #6a6a6a;
  font-size: 15px;
}
.yearlyInspectionHome-card2 {
  width: 92vw;
  height: 100px;
  color: #fff;
  margin-top: 15px;
}
.card-style2 {
  background: url("../../../assets/image/yearlyInspection/cardStutas2.png");
  background-size: 100% 100%;
}
.card-style3 {
  background: url("../../../assets/image/yearlyInspection/cardStutas3.png");
  background-size: 100% 100%;
}
.card-style4 {
  background: url("../../../assets/image/yearlyInspection/cardStutas4.png");
  background-size: 100% 100%;
}
.yearlyInspectionHome-card2-content-left {
  margin-left: 5.3vw;
}
.yearlyInspectionHome-card2-content-left h3:last-child {
  margin-top: 5px !important;
}
.yearlyInspectionHome-card2-content-right {
  margin-right: 5.3vw;
}
.yearlyInspectionHome-card2-content-right p {
  font-size: 20px;
}
.yearlyInspectionHome-card2-content-right div {
  margin-top: 10px;
  width: 72px;
  height: 25px;
  border-radius: 3px;
  font-size: 14px;
}
.card-tag-style2 {
  background-color: #3cc1df;
}
.card-tag-style3 {
  background-color: #fa9d64;
}
.card-tag-style4 {
  background-color: #f36666;
}
.yearlyInspectionHome-card2-content-left strong {
  font-size: 44px;
  padding-right: 5px;
}
.yearlyInspectionHome-card3-p {
  font-size: 15px !important;
  margin-bottom: 5px !important;
}
.yearlyInspectionHome-content {
  width: 100%;
  margin-top: 10px;
}
.yearlyInspectionHome-content-tags img {
  width: 92vw;
}
.yearlyInspectionHome-content-condition,
.yearlyInspectionHome-content-process {
  width: 92vw;
  margin-top: 15px;
}
.yearlyInspectionHome-content-process {
  margin-bottom: 125px;
}
.yearlyInspectionHome-content-condition h3,
.yearlyInspectionHome-content-process h3 {
  color: #3a4f5d;
}
.yearlyInspectionHome-content-process h3 {
  margin-bottom: 15px !important;
}
.yearlyInspection-condition {
  width: 92vw;
  margin-top: 15px;
  background-color: #f3f7fa;
}
.yearlyInspection-condition-body {
  width: 68.3vw;
  padding: 10px 0;
}
.yearlyInspection-condition-body p,
.yearlyInspection-condition-body div {
  color: #6a6a6a;
  font-size: 14px;
  padding-bottom: 2px;
}
.yearlyInspection-condition-body img {
  width: 13px;
  height: 13px;
  margin-left: 10px;
}
.yearlyInspection-process {
  width: 92vw;
}
.yearlyInspection-process-body {
  width: 92vw;
  background-color: #f3f7fa;
  margin-top: 10px;
}
.yearlyInspection-process-style {
  height: 65px;
  align-items: flex-end;
  margin-bottom: 20px;
}
.yearlyInspection-process-body img {
  width: 75px;
  height: 75px;
  padding-left: 11.7vw;
}
.process-open {
  width: 17px;
  height: 10px;
  margin-top: 10px;
}
.yearlyInspection-process-body-right {
  height: 65px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 10px;
}
.yearlyInspection-process-body-right p:first-child {
  color: #1a1a1a;
  font-size: 18px;
}
.yearlyInspection-process-body-right p:last-child {
  color: #6a6a6a;
  font-size: 14px;
  margin-top: 2px !important;
}
.Violation-part {
  width: 92vw;
  margin-top: 10px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;
}
.Violation-part-left {
  margin-left: 3vw;
}
.Violation-part-left-top {
  margin-bottom: 7px;
}
.Violation-part-left-top p {
  color: #1a1a1a;
  font-size: 15px;
  margin-right: 10px !important;
}
.Violation-part-left-top div {
  width: 7.5vw;
  height: 15px;
  background-color: #ffe2d2;
  border-radius: 2px;
  border: 1px solid #fdcdaa;
  font-size: 10px;
  color: #ff6c07;
}
.Violation-part-att {
  color: #6a6a6a;
  font-size: 12px;
}
.Violation-part-right {
  margin-right: 3vw;
}
.Violation-part-right img {
  width: 12px;
}
.order-flow{
  width:70vw;
  margin-top:15px;
}
.yearlyInspectionHome-btn,
.yearlyInspectionHome-btn-1,
.yearlyInspectionHome-Btn {
  width: 100vw;
  height: 50px;
  font-size: 17px;
  position: fixed;
  left: 0px;
  bottom: 0px;
}
.yearlyInspectionHome-btn {
  color: #fff;
  background-color: #2f9fe7;
}
.yearlyInspectionHome-btn-1 {
  color: #ababab;
  background-color: #e5e5e5;
}
.btn3-left {
  width: 24.5vw;
  height: 50px;
  background-color: #fff;
  border-top: 1px solid #dcdcdc;
}
.btn3-left img {
  width: 40px;
  height: 32px;
}
.btn3-right {
  width: 75.5vw;
  height: 50px;
  color: #fff;
  background-color: #2f9fe7;
}
.btn4-right {
  width: 75.5vw;
  height: 50px;
  color: #ababab;
  background-color: #e5e5e5;
  border-top: 1px solid #dcdcdc;
}
.yearlyInspectionHome-order {
  position: fixed;
  bottom: 78px;
  right: 20px;
}
.yearlyInspectionHome-order img {
  width: 54px;
  height: 54px;
  border-radius: 54px;
  box-shadow: 0 0 5px #ccc;
}
</style>
