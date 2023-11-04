const { createSlice } = require("@reduxjs/toolkit");

const viewsSlice = createSlice({
  name: "views",
  initialState: {
    pageviews: 3,
    isMonthly: true,
  },
  reducers: {
    setPageviews(state, action) {
      state.pageviews = action.payload;
    },
    setIsMonthly(state) {
      state.isMonthly = !state.isMonthly;
    },
  },
});
export const { setIsMonthly, setPageviews } = viewsSlice.actions;
export default viewsSlice.reducer;
