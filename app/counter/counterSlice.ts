import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    //actions is optional
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // Extra reducers. cause it has async functions
  extraReducers: (builder) => {
    // Pending state
    builder.addCase(incrementByAsync.pending, () => {
      console.log("IncrementAsync.pending");
    });
    builder.addCase(
      incrementByAsync.fulfilled,
      (state, action: PayloadAction<number>) => {
        state.value = action.payload;
      }
    );
  },
});

//reducer for async functions doesn't go to the reducers object, it goes to the extra reducers
export const incrementByAsync = createAsyncThunk(
  "counter/incrementAsync",
  async (amount: number) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return amount;
  }
);

export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;
export default counterSlice.reducer;
