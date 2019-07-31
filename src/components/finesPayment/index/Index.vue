<template>
  <div>
    <div class="finesPaymentHome">
      <div class="finesPaymentHome-header">
        <div class="finesPaymentHome-conduct">
          <div class="finesPaymentHome-title">
            <span class="number">处罚决定书编号</span>
            <span class="warn">
              <a href="#">
                <img src="../../../assets/image/finesPayment/详细信息 copy 4@2x.png" alt />
              </a>
            </span>
            <span class="problem">常见问题</span>
            <img src="../../../assets/image/finesPayment/箭头@3x.png" alt />
          </div>
        </div>
      </div>
      <div class="finesPaymentHome-footer">罚单部分</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "finesPaymentHome"
};
</script>

<style>
html,
body {
  width: 100% !important;
  margin: 0 !important;
}
a {
  text-decoration: none;
  color: #6a6a6a 100%;
}
.finesPaymentHome-header {
  width: 100vw;
  height: 250px;
  background: url("../../../assets/image/finesPayment/bg@3x.png");
  background-size: 100vw 250px;
  overflow: hidden;
}
.finesPaymentHome-conduct {
  width: 92vw;
  height: 172px;
  background-color: #fff;
  margin: 61px auto;
  border-radius: 5px;
}
.finesPaymentHome-title {
  margin: 17px 20px;
  font-size: 14px;
}
/* 处罚决定书编号 */
.finesPaymentHome-title .number {
  color: #1a1a1a 100%;
  margin-right: 4px;
}
.finesPaymentHome-title .warn {
  width: 16px;
  height: 16px;
  display: inline-block;
}
.finesPaymentHome-title .warn img {
  width: 100%;
  vertical-align: top;
}
</style>
