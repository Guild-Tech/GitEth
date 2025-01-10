import { SecondScreen } from '@/components/Specific/onBoarding/contributorForm/SecondScreen'
import { DiscordScreen } from '@/components/Specific/onBoarding/maintainerform/DiscordScreen'
import { ThirdScreen } from '@/components/Specific/onBoarding/maintainerform/ThirdScreen'
import TermsAndConditions from '@/components/Specific/onBoarding/TermsAndConditions'
import { RootState } from '@/store'
// import React from 'react'
import { useSelector } from 'react-redux'

export const Maintainer = () => {
  // const dispatch = useDispatch();
  const currentIndex = useSelector((state: RootState) => state.onboardingIndex.currentIndex) ;
  console.log(currentIndex)
  return (
    <div className="">
    {currentIndex === 2 ?
      <SecondScreen />
      : currentIndex === 3 ?
      <DiscordScreen/>
      :  currentIndex === 4 ?
      <TermsAndConditions /> 
      : <ThirdScreen/>
    }
  </div>
  )
}
