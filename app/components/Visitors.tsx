import React, { FC } from 'react'

type VisitorsProps = {
    counter: number | undefined,
}

const Visitors: FC<VisitorsProps> = ({ counter }) => {
  return (
    <div>
      <h3 className='lowercase text-gray-600'>Visitors <span className='text-xl text-gray-800'> <strong>{counter}</strong> </span> </h3>
    </div>
  )
}

export default Visitors
