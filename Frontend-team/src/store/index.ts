import { configureStore } from '@reduxjs/toolkit'
import demoReducer from './reducers/demo'
import onboardingIndexReducer from "./reducers/onboardingIndex"
import authReducer from "./reducers/auth"
import onboardingReducer from "./reducers/onboarding"
import { useDispatch } from 'react-redux'
import { AppDispatch } from './types'


export const store = configureStore({
  reducer: {
    demo: demoReducer,
    onboardingIndex: onboardingIndexReducer,
    auth: authReducer,
    onboarding: onboardingReducer
    // counter: counterReducer
  },
})

export { type RootState, type AppDispatch} from "./types"
export const useAppDispatch: () => AppDispatch = useDispatch;

// export {nextStep, prevStep, setIndex} from "./reducers/counter"