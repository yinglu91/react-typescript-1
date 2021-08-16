// import {useState} from 'react'

// const Counter = () => {
//   const [count, setCount] = useState(0)
//   const increment = () => setCount(prevCount => prevCount + 1)

//   return (
//     <button onClick={increment}>
//       Clicked {count} times!
//     </button>
//   )
// }

// export default Counter

// call   <Counter />


interface Props {
  increment: () => void;
  count: number;
}

const Counter = ({increment,  count}: Props) => {
  return (
    <button onClick={increment}>
      Clicked {count} times!
    </button>
  )
}

export default Counter

