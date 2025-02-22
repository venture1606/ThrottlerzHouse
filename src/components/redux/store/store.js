import { configureStore } from "@reduxjs/toolkit";

// Import the commonSlicer reducer
import commonSlicer from "../reducer/commonSlicer";
import userSlicer from "../reducer/userSlicer";
import categorySlicer from "../reducer/categorySlice";

export default configureStore({
    reducer: {
        message: commonSlicer,
        user: userSlicer,
        category: categorySlicer
    },
});