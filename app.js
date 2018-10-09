

var app = new Vue({
  el:"#shopping",
  data:{
    listSP:[
        {
            img:"",
            name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
            price:39.29,
            number:1,
            subtotal:39.29,
        },
        {
            img:"",
            name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
            price:999.99,
            number:1,
            subtotal:999.99,
        }
    ],
    listSPX:[
        {
            img:"",
            name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
            price:78.9,
            number:1,
            subtotal:78.9,
        },
        {
            img:"",
            name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
            price:22,
            number:1,
            subtotal:22,
        },
        {
            img:"",
            name:"嘉实多(Castrol)机油润滑油 极护磁护金嘉护银嘉护 磁护全合成 4L 5W-40 SN",
            price:0.3,
            number:1,
            subtotal:0.3,
        },
    ],
  },
  methods:{
    delX:function(index){
        this.listSPX.splice(index,1);
    },
    del:function(index){
        this.listSP.splice(index,1);
    }
  }
})