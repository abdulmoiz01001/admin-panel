

const Tag = (props:any) => {
  return (
    <div><div className='flex p-3 gap-3 items-center'>
    <span className='bg-red-600 w-8 h-14 rounded-sm'>
    </span>
    <span>
     <p className='text-red-600 font-semibold text-2xl'>{props.about}</p>
    </span>
   </div></div>
  )
}

export default Tag