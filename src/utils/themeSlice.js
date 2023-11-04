const { createSlice } = require("@reduxjs/toolkit");

const themeSlice = createSlice({
  name: "themes",
  initialState: {
    theme: false,
  },
  reducers: {
    setTheme: (state) => {
      state.theme = !state.theme;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
