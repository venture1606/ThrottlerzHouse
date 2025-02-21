import { configureStore } from "@reduxjs/toolkit";

// Import the commonSlicer reducer
import commonSlicer from "../reducer/commonSlicer";
import userSlicer from "../reducer/userSlicer";

export default configureStore({
    reducer: {
        message: commonSlicer,
        user: userSlicer,
    },
});