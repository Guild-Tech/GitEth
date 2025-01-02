import SmallWidget from './SmallWidget'
import NewTaskBtn from './NewTaskBtn'
import TaskCard from './TaskCard'

const Tasks = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className="flex gap-5">
        <SmallWidget>
            <div className="text-[40px] font-medium font-kern">0/0</div>
            <div className="text-sm font-normal">Tasks Completed</div>
        </SmallWidget>
        <SmallWidget>
            <div className="text-[40px] font-medium font-kern">0/0</div>
            <div className="text-sm font-normal">Tasks Completed</div>
        </SmallWidget>        
        <SmallWidget>
            <div className="flex items-baseline gap-2">
            <span className="text-[40px] font-medium font-kern">0/0</span>
            <span className="text-sm font-normal text-grayBlue">Days</span>
            </div>
            <div className="text-sm font-normal">Tasks Completed</div>
        </SmallWidget>
      </div>
      <div className="">
        <NewTaskBtn onClick={()=>{}}/>
      </div>
      <div className="flex gap-5">
        <TaskCard/>
        <TaskCard/>
        <TaskCard/>
      </div>
    </div>
  )
}

export default Tasks
