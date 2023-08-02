import ADDLIAT from '../Store/mutataion-type'
// export default {
//   [ADDLIAT](state, value) {
//     state.cartList = value;
//   },
//   addaddress(state, value) {
//     state.addressList.map((item) => {
//       if (value.isDefault == true) {
//         item.isDefault = false;
//       }
//     });
//     state.addressList.push(value);
//   },
//   editaddress(state, value) {
//     state.addressList = state.addressList.map((item) => {
//       if(value.isDefault == true) {
//           item.isDefault = false;
//       }
//       return value.id == item.id ?  value : item
//     });
//   },
//   deleteaddress(state, value) {
//         state.addressList = state.addressList.filter((item) => {
//           return !(item.id == value.id);
//         });
//         if(value.isDefault == true) {
//           state.addressList[0].isDefault = true
//       }
//       },
// }