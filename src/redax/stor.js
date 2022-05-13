import { configureStore } from '@reduxjs/toolkit'
import filterSlice, {phonebookApi} from './redusers'
import { setupListeners } from '@reduxjs/toolkit/query'




export const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,
    filter: filterSlice

  },
  middleware: (getDefaultMiddleware) =>[
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ]
})

setupListeners(store.dispatch)


