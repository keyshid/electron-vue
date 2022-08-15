<template>
  <div class="home">
    <div class="space">
      <button @click="click1">SINGLE ESPERSO</button>
      <button @click="click2">DUBBLE ESPERSO</button>
      <button @click="click3">AMERICANO</button>
      <button @click="click4">LATE</button>
      <button @click="click5">MOKA</button>
      <button @click="click6">COPOCHINO</button>
      <button @click="click7">AFOGATO</button>
      <button @click="click8">VANIL SHAKE</button>
      <button @click="click9">CHAKLET SHAKE</button>
      <button @click="click10">COFFE SHAKE</button>
      <button @click="click11">FRENCHFRIES</button>
      <button @click="click12">SPESHIAL FRENCHFRIES</button>
      <button @click="click13">PASTA</button>
      <button @click="click14">DAMNOSH AVISHAN</button>
      <button @click="click15">DAMNOSH DARCHIN</button>
      <button @click="click16">DAMNOSH NANAA</button>
      <button @click="click17">DAMNOSH ZANJEBIL</button>
      <button @click="click18">DAMNOSH GOLGAVZABON</button>
      <button @click="click19">TEA</button>
      <button @click="click20">CKAKE</button>
    </div>
    <div>
      <h4 id="order1"></h4>
      <h4 id="order2"></h4>
      <h4 id="order3"></h4>
      <h4 id="order4"></h4>
      <h4 id="order5"></h4>
      <h4 id="order6"></h4>
      <h4 id="order7"></h4>
      <h4 id="order8"></h4>
      <h4 id="order9"></h4>
      <h4 id="order10"></h4>
      <h4 id="order11"></h4>
      <h4 id="order12"></h4>
      <h4 id="order13"></h4>
      <h4 id="order14"></h4>
      <h4 id="order15"></h4>
      <h4 id="order16"></h4>
      <h4 id="order17"></h4>
      <h4 id="order18"></h4>
      <h4 id="order19"></h4>
      <h4 id="order20"></h4>
    </div>
    <div>
      <h1 id="pathName"></h1>
    </div>
    <div>
      <button @click="save" class="save">SAVE</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      jj: [],
      i: 0,
      price: 0,
      prices: 0,
      name: "",
      pay: [],
      paything: [],
    };
  },
  methods: {
    click13() {
      this.price = 40000;
      this.name = "PASTA";
      document.getElementById("order13").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click14() {
      this.price = 12000;
      this.name = "DAMNOSH AVISHAN";
      document.getElementById("order14").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click15() {
      this.price = 12000;
      this.name = "DAMNOSH DARCHIN";
      document.getElementById("order15").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click16() {
      this.price = 12000;
      this.name = "DAMNOSH NANAA";
      document.getElementById("order16").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click17() {
      this.price = 15000;
      this.name = "DAMNOSH ZANJEBIL";
      document.getElementById("order17").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click18() {
      this.price = 15000;
      this.name = "DAMNOSH GOLGAVZABON";
      document.getElementById("order18").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click19() {
      this.price = 10000;
      this.name = "TEA";
      document.getElementById("order19").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click20() {
      this.price = 14000;
      this.name = "CKAKE";
      document.getElementById("order20").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },

    click1() {
      this.price = 11000;
      this.name = "SINGLE ESPERSO";
      document.getElementById("order1").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click2() {
      this.price = 14000;
      this.name = "DUBBLE ESPERSO";
      document.getElementById("order2").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click3() {
      this.price = 13000;
      this.name = "AMERICANO";
      document.getElementById("order3").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });
      console.log(this.paything);
      console.log(this.price);
    },
    click4() {
      this.price = 17000;
      this.name = "LATE";
      document.getElementById("order4").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });
      console.log(this.paything);
      console.log(this.price);
    },
    click5() {
      this.price = 20000;
      this.name = "MOKA";
      document.getElementById("order5").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });
      console.log(this.paything);
      console.log(this.price);
    },
    click6() {
      this.price = 16000;
      this.name = "COPUCHINO";
      document.getElementById("order6").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });
      console.log(this.paything);
      console.log(this.price);
    },
    click7() {
      this.price = 17000;
      this.name = "AFOGATO";
      document.getElementById("order7").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click8() {
      this.price = 18000;
      this.name = "VANIL SHAKE";
      document.getElementById("order8").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });

      console.log(this.paything);
      console.log(this.price);
    },
    click9() {
      this.price = 20000;
      this.name = "NUTTLA SHAKE";
      document.getElementById("order9").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });
      console.log(this.paything);
      console.log(this.price);
    },
    click10() {
      this.price = 23000;
      this.name = "COFFE SHAKE";
      document.getElementById("order10").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });
      console.log(this.paything);
      console.log(this.price);
    },
    click11() {
      this.price = 15000;
      this.name = "FRENCHFRIES";
      document.getElementById("order11").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });
      console.log(this.paything);
      console.log(this.price);
    },
    click12() {
      this.price = 35000;
      this.name = "SPESHIAL FRENCHFRIES";
      document.getElementById("order12").innerHTML =
        this.name + "  " + "$" + this.price;
      this.prices += this.price;

      this.paything.push({ name: this.name, price: this.price });
    },
    save() {
      document.getElementById("pathName").innerHTML = "price:$" + this.prices;
      this.i++;
      this.paything.prices = this.prices;
      this.paything.id = this.i;

      this.pay.push(this.paything);
      localStorage.setItem("orderlist", JSON.stringify(this.pay));
      this.$store.state.payment = this.pay;
      this.$store.dispatch("savepay", this.pay);
      console.log(this.$store.state.payment);

      document.getElementById("order1").innerHTML = "";
      document.getElementById("order2").innerHTML = "";
      document.getElementById("order3").innerHTML = "";
      document.getElementById("order4").innerHTML = "";
      document.getElementById("order5").innerHTML = "";
      document.getElementById("order6").innerHTML = "";
      document.getElementById("order7").innerHTML = "";
      document.getElementById("order8").innerHTML = "";
      document.getElementById("order9").innerHTML = "";
      document.getElementById("order10").innerHTML = "";
      document.getElementById("order11").innerHTML = "";
      document.getElementById("order12").innerHTML = "";
      document.getElementById("order13").innerHTML = "";
      document.getElementById("order14").innerHTML = "";
      document.getElementById("order15").innerHTML = "";
      document.getElementById("order16").innerHTML = "";
      document.getElementById("order17").innerHTML = "";
      document.getElementById("order18").innerHTML = "";
      document.getElementById("order19").innerHTML = "";
      document.getElementById("order20").innerHTML = "";

      this.paything = [];
      this.prices = 0;
      this.price = 0;
    },
  },
};
</script>
<style scoped>
.space {
  margin-top: 20px;
}
button {
  font-family: Arial, Helvetica, sans-serif;

  background-color: #fdac53;
  color: black;
  font-size: 20px;
  cursor: pointer;
  width: 60%;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  margin-top: 4px;
  border: none;
}
button:focus {
  outline: none;
  width: 63%;
  background-color: #f89b38;
  color: white;
}
button:hover {
  border: black;
}
.home {
  display: block;
  text-align: center;
  margin: auto;
}
.save {
  background-color: #00a170;
  width: 15%;
  border-radius: 15px;
  height: 30px;
  margin: auto;
  text-align: center;
}
.save:focus {
  outline: none;
  width: 18%;
  height: 33px;
  background-color: #008d63;
  color: white;
}
h1 {
  color: white;
  font-size: 50px;
}
h4 {
  color: white;
  line-height: 1px;
}
</style>