import { BigNumber } from 'ethers'
import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'

export default function Send() {

  const { config } = usePrepareSendTransaction({
    request: { to: '0xaf699ed2fF0D4686B636ba2EBB8F229232B102a0', value: BigNumber.from('10000000000000000') },
  })
  const { data, isLoading, isSuccess, sendTransaction } =
    useSendTransaction(config)

  return (
    <div>
      <button disabled={!sendTransaction} onClick={() => sendTransaction?.()}>
        Send Transaction
      </button>
      {isLoading && <div>Check Wallet</div>}
      {isSuccess && <div>Transaction: {JSON.stringify(data)}</div>}
    </div>
  )
} 