import React from 'react'
import CountUp from 'react-countup'

interface MoneyCountUpProps {
  end: number
}

const MoneyCountUp: React.FC<MoneyCountUpProps> = ({ end }) => {
  return (
    <CountUp
      start={0}
      end={end}
      duration={1}
      separator="."
      decimals={2}
      decimal=","
    >
      {({ countUpRef }) => <h2 ref={countUpRef} />}
    </CountUp>
  )
}

export default MoneyCountUp
