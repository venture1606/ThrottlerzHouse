import { configureStore } from "@reduxjs/toolkit";

// Import the commonSlicer reducer
import commonSlicer from "../reducer/commonSlicer";

export default configureStore({
    reducer: {
        message: commonSlicer,
    },
});