import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ABI } from '../../config/Bicho'
import { Button } from './SelectGameNumber'
import { ethers } from 'ethers'

export function Write() {
  const { config } = usePrepareContractWrite({
    addressOrName: '0xC35fc5CEF2460e31285755F4294eaBC5c7b90341',
    contractInterface: ABI,
    functionName: 'newBets',
    args: ([0],[[1]],[0]),
      overrides: {
      value: ethers.utils.parseEther('0.005'),
      gasLimit: 1000000
    },
  })
  const { write, isLoading, isSuccess,data } = useContractWrite(config)

  return (
    <div> 
      <Button style={{color:'black'}} disabled={!write} onClick={() => write?.()}>
        COMPRAR
      </Button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  )
}