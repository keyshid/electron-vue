<template>
  <div id="about">
    <div class="about">
      <div class="borderorder" v-for="(p, index) in this.getpay" :key="index">
        <h3>id:{{ p.id }}</h3>
        <div v-for="(el, index) in p" :key="index">
          <div class="order">
            <h4>{{ el.name }}</h4>
            <h4>${{ el.price }}</h4>
          </div>
        </div>

        <h2>prices:${{ p.prices }}</h2>

        <button @click="pay" class="pay">pay</button>
        <button @click="change(index)" class="pay">change</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "about",
  computed: {
    ...mapGetters(["getpay"]),
    shorturl() {
      return this.$store.state.payment;

      // this.list = this.$store.state.question;
    },
  },
  methods: {
    change(index) {
      this.getpay.splice(index, 1);
    },
    pay() {
      const order = localStorage.getItem("orderlist");
      console.log(order);
    },
  },
};
</script>
<style scoped>
h2 {
  color: white;
  font-size: 30px;
}
h4 {
  color: white;
  font-size: 20px;
  line-height: 1px;
}
h3 {
  color: white;
  font-size: 25px;
  line-height: 1px;
}
.about {
  display: block;
  text-align: center;
  margin: auto;
}
.order {
  display: inline-block;
  margin: auto;
}
.borderorder {
  margin-top: 25px !important;
  border: 3px solid #fdac53;
  border-radius: 25px;
  width: 60%;
  display: block;
  margin: auto;
}
.pay {
  background-color: #fdac53;
  width: 20%;
  border-radius: 15px;
  height: 30px;
  margin: auto;
  text-align: center;
  margin-bottom: 10px;
}
.pay:focus {
  outline: none;
  width: 23%;
  height: 33px;
  background-color: #fda13e;
  color: white;
}
button:focus {
  outline: none;

  color: white;
}
button {
  font-family: Arial, Helvetica, sans-serif;

  background-color: #fdac53;
  color: white;
  font-size: 20px;
  cursor: pointer;

  text-align: center;
  border-radius: 10px;
  margin-top: 4px;
  border: none;
}
</style>