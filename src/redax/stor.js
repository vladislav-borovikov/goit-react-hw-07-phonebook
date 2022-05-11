import { configureStore } from '@reduxjs/toolkit'
import {phonebookApi} from './redusers'
import { setupListeners } from '@reduxjs/toolkit/query'




export const store = configureStore({
  reducer: {
    [phonebookApi.reducerPath]: phonebookApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>[
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ]
})

setupListeners(store.dispatch)


