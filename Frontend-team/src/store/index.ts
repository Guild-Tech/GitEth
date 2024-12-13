import { configureStore } from '@reduxjs/toolkit'
import demoReducer from './reducers/demo'
import counterReducer from "./reducers/counter"
import authReducer from "./reducers/auth"
import onboardingIndexReducer from "./reducers/onboardingIndex"

import onboardingReducer from "./reducers/onboarding"
import { useDispatch } from 'react-redux'
import { AppDispatch } from './types'


export const store = configureStore({
  reducer: {
    demo: demoReducer,
    counter: counterReducer,
    onboardingIndex: onboardingIndexReducer,
    auth: authReducer,
    onboarding: onboardingReducer
    // counter: counterReducer
  },
})

export { type RootState, type AppDispatch} from "./types"
export const useAppDispatch: () => AppDispatch = useDispatch;

export {decrement, increment, incrementByAmount} from "./reducers/counter"
// export {nextStep, prevStep, setIndex} from "./reducers/counter"
