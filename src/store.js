import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice.js";

let stock = createSlice({
  name: "stock",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    incrNum(state, action) {
      const item = state.find((item) => item.id == action.payload);
      if (item) {
        item.count += 1;
      }
    },
    addStock(state, action) {
      state.push(action.payload);
    },
    // 코딩애플 코드 ㄹㅇ 이사람 개고수네
    AppleAddCount(state, action) {
      state[action.payload].count++;
    },
    AppleAddItem(state, action) {
      state.push(action.payload);
    },
  },
});

export let { incrNum, addStock } = stock.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
  },
});

x``;
