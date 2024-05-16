import { useState } from 'react';
import ProofComponent from '~/components/proof-component'

export default function route() {
  const BOOLEAN = true
  let result = 0
  if (BOOLEAN) {
    const [count, setCount] = useState(0);
    setCount(2)
    return result = count
  }
  return (
    <div>
      {/* {<ProofComponent/>()} */}
    </div>
  )}