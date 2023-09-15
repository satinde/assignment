import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "createUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      "https://648c40f38620b8bae7ec8cf2.mockapi.io/userDetail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );

    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error, "error create");
    }
  }
);

//read action

export const showUser = createAsyncThunk(
    "showUser",
    async (args, { rejectWithValue }) => {
      const response = await fetch(
        "https://648c40f38620b8bae7ec8cf2.mockapi.io/userDetail"
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error, "error show");
      }
    }
  );

  //delete action

export const deleteUser = createAsyncThunk(
    "deleteUser",
    async (id, { rejectWithValue }) => {
      const response = await fetch(
        `https://648c40f38620b8bae7ec8cf2.mockapi.io/userDetail/${id}`,
        { method: "DELETE" }
      );
  
      try {
        const result = await response.json();
        console.log(result);
        return result;
      } catch (error) {
        return rejectWithValue(error, "error show");
      }
    }
  );
  
  

export const userDetail = createSlice({
  name: "userDetail",
  initialState: {
    user: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    // create
    [createUser.pending]: (state) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user.push(action.payload);
    },
    [createUser.rejected]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    //  read
    [showUser.pending]: (state) => {
      state.loading = true;
    },
    [showUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    [showUser.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // delete
      [deleteUser.pending]: (state) => {
        state.loading = true;
      },
      [deleteUser.fulfilled]: (state, action) => {
        state.loading = false;
  
        const { id } = action.payload;
  
        if (id) {
          state.user = state.user.filter((ele) => ele.id !== id);
        }
  
        console.log("delete ", action.payload);
      },
      [deleteUser.rejected]: (state, action) => {
        state.loading = false;
        state.error = action.payload;
      },
  },
});

export default userDetail.reducer;
