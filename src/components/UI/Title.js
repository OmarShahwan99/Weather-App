import React from 'react'

const Title = (props) => {
  return (
    <h3 className="uppercase text-dark-200 dark:text-paragraph text-lg font-semibold">
        {props.children}
    </h3>
  )
}

export default Title
