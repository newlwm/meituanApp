import { createStore } from "vuex";
// import mutations from "./mutations";
export default createStore({
  state: {
    cartList: [],
    addressList: [
      {
        id: 1001,
        name: "jason",
        tel: "15874859686",
        province: "广东省",
        city: "深圳市",
        county: "南山区",
        addressDetail: "深圳湾",
        isDefault: true,
        areaCode: "110101",
      },
      {
        id: 1002,
        name: "allen",
        tel: "15874859685",
        province: "湖北省",
        city: "武汉市",
        county: "武昌区",
        addressDetail: "黄鹤楼",
        isDefault: false,
        areaCode: "110101",
      },
    ],
  },
  mutations: {
    addList(state, value) {
      state.cartList = value;
    },
    addaddress(state, value) {
      state.addressList.map((item) => {
        if (value.isDefault == true) {
          item.isDefault = false;
        }
      });
      state.addressList.push(value);
    },
    editaddress(state, value) {
      state.addressList = state.addressList.map((item) => {
        if(value.isDefault == true) {
            item.isDefault = false;
        }
        return value.id == item.id ?  value : item
      });
    },
    deleteaddress(state, value) {
          state.addressList = state.addressList.filter((item) => {
            return !(item.id == value.id);
          });
          if(value.isDefault == true) {
            state.addressList[0].isDefault = true
        }
        },
  },
  actions: {},
});
