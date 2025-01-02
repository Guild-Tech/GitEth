import { Button } from '@/components/ui/button'
import gitIconDark from "../../../assets/icons/gitIconDark.svg"

const NewTaskBtn = ({onClick}:{onClick:()=>void}) => {
  return (
    <Button onClick={onClick} className="rounded-full">
      <img src={gitIconDark} alt="" className="" />
      New Task
    </Button>
  )
}

export default NewTaskBtn
