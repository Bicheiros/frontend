import { BigNumber } from 'ethers'
import { useEffect, useState } from 'react'
import { useContractRead } from 'wagmi'
import { ABI } from '../../config/Bicho'

export  function TestRead() {

  const [info, setInfo] = useState('')

  const { data, isError, isLoading } = useContractRead({
    addressOrName: '0xC35fc5CEF2460e31285755F4294eaBC5c7b90341',
    contractInterface: ABI,
    functionName: 'currentGameID',
  })
  const datas = data ? data.toString() : ''
  console.log((`${datas} AAAAAAAAAAAAAAAAA`))

  
  useEffect(()=>{
    setInfo(datas)
  },[])

  return (<><div>è ISSO que SE QUER??? {info}</div></>)
} 


