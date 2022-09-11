import { ethers } from 'ethers'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ABI } from '../../config/Bicho'

export default function Appnew() {
 
  const { config, error } = usePrepareContractWrite({
    addressOrName: '0xC35fc5CEF2460e31285755F4294eaBC5c7b90341',
    contractInterface: ABI,
    functionName: 'newBets',
    args:[[0],[[1]],[0]],
    overrides: {
      value: ethers.utils.parseEther('0.005'),
      gasLimit: 600000
    },
    
  })
  const { write } = useContractWrite(config)

  console.log(`${error} error ${config} config`)
  return <button onClick={() => write?.()}>
          Click me 
        </button>
}