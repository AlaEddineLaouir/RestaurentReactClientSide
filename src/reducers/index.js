import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import userAccount from "./userAccountReducer";
import OrdersReducer from "./OrdersReducer";
export default combineReducers({
  menu: menuReducer,
  userAccount: userAccount,
  userOrders: OrdersReducer
});
