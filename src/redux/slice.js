import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counters: { counter1: 0, counter2: 0, counter3: 0 },
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    incrementCounter(state, action) {
      const { counterName } = action.payload;
      state.counters[counterName]++;
    },
    decrementCounter(state, action) {
      const { counterName } = action.payload;
      state.counters[counterName]--;
    },
  },
});

export const { incrementCounter, decrementCounter } = counterSlice.actions;
export default counterSlice.reducer;
