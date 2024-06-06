import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice"
import { userApi } from '../services/user.service'
import { studentsApi } from '../services/students.service'
import { classesApi } from '../services/classes.service'

export const store = configureStore({
  reducer: {
        user: userReducer,
        [userApi.reducerPath]: userApi.reducer,
        [studentsApi.reducerPath]: studentsApi.reducer,
        [classesApi.reducerPath]: classesApi.reducer,
        // [sectionsApi.reducerPath]: sectionsApi.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(userApi.middleware, studentsApi.middleware, classesApi.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch