import { ReactNode } from 'react'

const SmallWidget = ({children}:{children:ReactNode}) => {
  return (
    <div className='h-[177px] w-[313px] bg-grayBlue bg-opacity-10 py-6 px-4 rounded-lg border-[1px] border-opacity-50'>
      {children}
    </div>
  )
}

export default SmallWidget
