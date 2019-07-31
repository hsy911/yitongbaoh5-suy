<template>
  <div class="yearlyInspectionAddBars">
    <div class="yearlyInspectionAddBars-content flex flex-center">
      <div class="yearlyInspectionAddBars-info flex flex-ver flex-jcsb">
        <div class="yearlyInspectionAddBars-info-left">车牌号码</div>
        <div class="yearlyInspectionAddBars-info-right flex flex-ver">
          <div class="yearlyInspectionAddBars-fingerboard flex flex-ver">
            <p>{{province}}</p>
            <img src="../../../assets/image/yearlyInspection/BlueToRight.png" />
          </div>
          <van-field v-model="barNumber" placeholder="车牌号码" input-align="right" class="input-Style" />
        </div>
      </div>
      <div class="yearlyInspectionAddBars-info flex flex-ver flex-jcsb">
        <div class="yearlyInspectionAddBars-info-left flex flex-ver">
          <p>车辆类型</p>
          <img src="../../../assets/image/yearlyInspection/detailInfo.png" @click="detail" />
        </div>
        <div class="yearlyInspectionAddBars-info-right flex flex-ver">
          <van-field v-model="barType"  is-link input-align="right" readonly  class="input-Style" />
        </div>
      </div>
      <div class="yearlyInspectionAddBars-info flex flex-ver flex-jcsb">
        <div class="yearlyInspectionAddBars-info-left flex flex-ver">
          <p>车辆注册日期</p>
          <img src="../../../assets/image/yearlyInspection/detailInfo.png" @click="detail" />
        </div>
        <div class="yearlyInspectionAddBars-info-right flex flex-ver">
          <van-field v-model="barRegisteTime" placeholder="请选择" is-link readonly input-align="right"  class="input-Style" />
        </div>
      </div>
      <div class="yearlyInspectionAddBars-info flex flex-ver flex-jcsb">
        <div class="yearlyInspectionAddBars-info-left flex flex-ver">
          <p>检验有效期至</p>
          <img src="../../../assets/image/yearlyInspection/detailInfo.png" @click="detail" />
        </div>
        <div class="yearlyInspectionAddBars-info-right flex flex-ver">
          <van-field v-model="barValidityTime" placeholder="请选择" is-link readonly input-align="right"  class="input-Style" />
        </div>
      </div>
      <div class="yearlyInspectionAddBars-info flex flex-ver flex-jcsb">
        <div class="yearlyInspectionAddBars-info-left flex flex-ver">
          <p>使用性质</p>
        </div>
        <div class="yearlyInspectionAddBars-info-right flex flex-ver">
          <van-field v-model="useNature"  is-link input-align="right" readonly  class="input-Style" />
        </div>
      </div>
      <div class="yearlyInspectionAddBars-info flex flex-ver flex-jcsb">
        <div class="yearlyInspectionAddBars-info-left flex flex-ver">
          <p>座位数</p>
        </div>
        <div class="yearlyInspectionAddBars-info-right flex flex-ver">
          <van-field v-model="seating" placeholder="请填写" input-align="right" class="input-Style" type="number" />
        </div>
      </div>
      <div class="yearlyInspectionAddBars-info flex flex-ver flex-jcsb">
        <div class="yearlyInspectionAddBars-info-left flex flex-ver">
          <p>未造成伤亡事故</p>
        </div>
        <div class="yearlyInspectionAddBars-info-right flex flex-jcfe">
          <van-switch v-model="checked" size="20px" />
        </div>
      </div>
    </div>
  </div>
</template>     

 <script>
import Vue from "vue";
import { Field,Switch  } from "vant";

Vue.use(Field);
Vue.use(Switch);

export default {
  name: "yearlyInspectionAddBars",
  data() {
    return {
      province: "粤",
      barNumber: "",
      barType:"轿车",
      barRegisteTime:"",
      barValidityTime:"",
      useNature:"非运营",
      seating :"",
      checked: true
    };
  },
  methods: {
    detail(){
      console.log(11)
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.yearlyInspectionAddBars {
  width: 100vw;
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: #f6f6f6;
}
.yearlyInspectionAddBars-content{
  width:100vw;
  margin-top: 10px;
  background-color: #fff;
}
.yearlyInspectionAddBars-info {
  width: 94vw;
  height: 50px;
  border-bottom: 1px solid #E4E4E4;
}
.yearlyInspectionAddBars-info-left{
  color:#1A1A1A ;
  font-size:16px;
}
.yearlyInspectionAddBars-info-left img{
  width:16px;
  height: 16px;
  margin-left:5px;
}
.yearlyInspectionAddBars-info-right{
  width:35vw;
}
.yearlyInspectionAddBars-fingerboard{
  width:20vw;
  color:#2F9FE7;
  font-size:17px;
  justify-content: flex-end;
}
.yearlyInspectionAddBars-fingerboard img{
  width:10px;
  height: 15px;
  margin-left:2px;
}
.placeholderClass{
  font-size:16px;
}
.input-Style{
  color:#6A6A6A;
  font-size:16px;
  padding:0;
}
</style>
