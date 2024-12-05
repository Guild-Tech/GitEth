import { FifthScreen } from '@/components/Specific/onBoarding/contributorForm/FifthScreen'
// import { FirstScreen } from '@/components/Specific/onBoarding/FirstScreen'
import { FourthScreen } from '@/components/Specific/onBoarding/contributorForm/FourthScreen'
import { SecondScreen } from '@/components/Specific/onBoarding/contributorForm/SecondScreen'
import { SixthScreen } from '@/components/Specific/onBoarding/contributorForm/SixthScreen'
import { ThirdScreen } from '@/components/Specific/onBoarding/contributorForm/ThirdScreen'
import { DiscordScreen } from '@/components/Specific/onBoarding/maintainerform/DiscordScreen'
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
      :  
      <TermsAndConditions />
    }
  </div>
  )
}
