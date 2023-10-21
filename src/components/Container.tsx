import React from 'react'
interface Props {
    children:React.ReactNode | React.ReactNode[];
    className?:string
}
const Container = ({children, className}:Props) => {
  return (
    <div className={`max-w-screen-xl mx-auto py-10 mt-10  ${className}`}>{children}</div>
  )
}

export default Container