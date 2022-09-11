import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Modos, Tipos } from '../../config/constants'
import { useContractWrite, usePrepareContractWrite } from 'wagmi'
import { ethers } from 'ethers'
import { ABI } from '../../config/Bicho'

export const Flex2 = styled.div`
  display: flex;
  flex-direction: column;
  position: center;
  text-align: center;
  height: 100%;
  max-height: 600px;
  width: 900px;
  padding: 10px;
  box-shadow: 7px 7px 10px #000000, -1px -1px 1px #000;
  margin-top: 10px;
  margin-bottom: 200px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 24px;
  z-index: 9999;
  color: white;
  font-family: Jost, sans-serif;
  /*   @media screen and (min-width: 600px) {
    width: 100%;
    max-width: 600px;
  } */
`
export const Flex = styled.div`
  display: block;
  position: center;
  text-align: center;
  overflow-y: scroll;
  height: 800px;
  width: 800px;
  padding: 10px;
  box-shadow: 7px 7px 10px #000000, -1px -1px 1px #000;
  margin-top: 10px;

  justify-content: center;
  align-items: center;
  background-color: #edc7e7;
  border-radius: 24px;
  z-index: 9999;
  color: white;
  font-family: Jost, sans-serif;
  /*   @media screen and (min-width: 600px) {
    width: 100%;
    max-width: 600px;
  } */
`
export const FlexT = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 300px;
  width: 400px;
  padding: 10px;
  margin-top: 10px;
  background-color: #edc7e7;
  border-radius: 24px;
  color: #fff;
  font-family: Jost, sans-serif;
`

export const TextMode = styled.h1`
  margin: 15px;
  justify-content: center;
  align-items: center;
  padding: 2px;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background-color: #6facda;
  border-radius: 24px;
  font-size: 22px;
  font-weight: bold;
  z-index: 9999;
  color: #fff;
`
export const ButtonMode = styled.button`
  margin: 5px;
  padding: 2px;
  cursor: pointer;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  z-index: 9999;
  color: white;
`
export const Button = styled.button`
  margin: 10px;
  box-shadow: 7px 7px 10px #000000, -1px -1px 1px #000;
  padding: 1px;
  cursor: pointer;
  background-color: white;
  border-radius: 24px;
  color: white;
  font-size: 20px;
  font-weight: 600;
`
export const FlexAnimal = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 20px 20px;
  grid-gap: 2px;
  position: center;
  text-align: center;
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
  z-index: 9999;
  background-color: transparent;
  color: white;
  font-family: Jost, sans-serif;
`
export const FlexRow = styled.div`
  display: flex;
  flex-direction: column;
  position: center;
  text-align: center;
  padding: 10px;
  height: 60px;
  width: 100px;
  border-radius: 2px 5px 2px 5px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  font-size: 16px;
  z-index: 9999;
  font-family: Jost, sans-serif;
`
export const FlexRowMode = styled.div`
  display: flex;
  flex-direction: column;
  position: center;
  text-align: center;
  padding: 10px;
  height: 60px;
  width: 100px;
  border-radius: 2px 5px 2px 5px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  color: white;
  font-size: 16px;
  z-index: 9999;
  font-family: Jost, sans-serif;
`
export const FlexColumn = styled.div`
  display: flex;
  position: center;
  text-align: center;
  height: 70px;
  width: 80px;
  align-items: center;
  border-radius: 20px 2px 20px 2px;
  justify-content: center;
  z-index: 9999;
  background-color: transparent;
  color: white;
  font-size: 16px;
  box-shadow: 7px 7px 10px #000000, -1px -1px 1px #000;
  font-family: Jost, sans-serif;
  :hover {
    background-color: #a1a1a1;
  }
  :active {
    background-color: #f2ac18;
    box-shadow: 0 5px rgb(80, 80, 80);
    transform: translateY(4px);
  }
`
export const Item = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: bold;
  border-radius: 20px 2px 20px 2px;
`
export const Item2 = styled.div`
  display: flex;
  flex-direction: row;
  color: dark;
  width: 300px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px 50px
  grid-gap: 5px
`
export const GridList = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 50px 50px
  grid-gap: 5px


`

const defaultEmptyType = [
  {
    animal: '',
    numero1: '',
    numero2: '',
    numero3: '',
    numero4: '',
    numeroIndice: '',
  },
]
const defaultEmptyModes = [
  {
    modo: '',
  },
]

// https://nextjs.org/docs/messages/react-hydration-error

export default function SelectGameNumber() {
  const [options, setOptions] = useState(defaultEmptyType)
  const [modeOptions, setModeOption] = useState(defaultEmptyModes)
  const [isshowMode, setIsShowMode] = useState(false)
  const [isshowModeOnlyAnimal, setIsShowModeOnlyAnimal] = useState(false)
  const [animal, setAnimal] = useState('')
  const [numero1, setNum1] = useState('')
  const [numero2, setNum2] = useState('')
  const [numero3, setNum3] = useState('')
  const [numero4, setNum4] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    setOptions(Tipos)
    setModeOption(Modos)
  }, [animal])

  function changeOption(value) {
    const option = options.find((item) => {
      return item.animal == value
    })
    setAnimal(option.animal)
    setNum1(option.numero1)
    setNum2(option.numero2)
    setNum3(option.numero3)
    setNum4(option.numero4)
    setId(option.numeroIndice)
  }
  function changeMode(value) {
    const option = options.find((item) => {
      return item.modo == value
    })
    setModeOption(option)
  }

  function isShownClickAnimal(bool) {
    if (isshowMode !== bool) {
      setIsShowMode(bool)
    }
  }

  const { config, error } = usePrepareContractWrite({
    addressOrName: '0xC35fc5CEF2460e31285755F4294eaBC5c7b90341',
    contractInterface: ABI,
    functionName: 'newBets',
    args: [[0], [[1]], [0]],
    overrides: {
      value: ethers.utils.parseEther('0.005'),
      gasLimit: 600000,
    },
  })
  const { write } = useContractWrite(config)

  console.log(`${error} error ${config} config`)

  const buttonFinal = (
    <>
      <Button
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          textAlign: 'center',
          color: '#50006d',
          padding: '6px',
        }}
        onClick={() => write?.()}
      >
        CONFIRMAR COMPRA
      </Button>
    </>
  )

  async function getURLBicho() {}

  function isShownClickAnimalDefinitive(bool) {
    if (isshowModeOnlyAnimal !== bool) {
      setIsShowModeOnlyAnimal(bool)
    }
  }
  return (
    <>
      <Flex2>
        {isshowModeOnlyAnimal && animal.length > 0 ? (
          <FlexT
          
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignContent: 'center',
                textAlign: 'center',
                backgroundImage: `url(https://yourclubhistory.com/a/${id}.gif)`,
                backgroundSize:'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignContent: 'center',
                  textAlign: 'center',
                  justifyContent: 'space-between',
                  padding: '5px',
                  fontSize: '20px',
                }}
              >
                <div></div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignContent: 'center',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      margin: '2px',
                      padding: '2px',
                      alignContent: 'center',
                      textAlign: 'center',
                      fontSize: '20px'
                    }}
                  >
                    {numero1}
                  </div>
                  <div
                    style={{
                      margin: '2px',
                      padding: '2px',
                      alignContent: 'center',
                      textAlign: 'center',
                      fontSize: '20px'
                    }}
                  >
                    {numero2}
                  </div>
                  <div
                    style={{
                      margin: '2px',
                      padding: '2px',
                      alignContent: 'center',
                      textAlign: 'center',
                      fontSize: '20px'
                    }}
                  >
                    {numero3}
                  </div>
                  <div
                    style={{
                      margin: '2px',
                      padding: '2px',
                      alignContent: 'center',
                      textAlign: 'center',
                      fontSize: '20px'
                    }}
                  >
                    {numero4}
                  </div>
                </div>
              </div>
              <div>{buttonFinal}</div>
            </div>
            {/* <GridList>
            <Item2>{animal ? animal : <></>}</Item2>
            <Item2>{buttonFinal}</Item2>
            <Item2>{buttonFinal}</Item2>
            <Item2>{buttonFinal}</Item2>
            <Item2>{buttonFinal}</Item2>
        </GridList> */}
          </FlexT>
        ) : (
          <></>
        )}
        <Flex>
          {isshowMode ? (
            <TextMode>SELECIONE O BICHO</TextMode>
          ) : (
            <TextMode>SELECIONE UM MODO DE JOGO</TextMode>
          )}
          <Grid>
            {!isshowMode ? (
              <>
                {modeOptions.map((option, index) => (
                  <>
                    <ButtonMode
                      onClick={() => isShownClickAnimal(true)}
                      value={option.value}
                    >
                      <TextMode> {option.modo}</TextMode>
                    </ButtonMode>
                  </>
                ))}
              </>
            ) : (
              <>
                {options.map((option, index) => (
                  <>
                    <Button
                      value={option.value}
                      onClick={() => {
                        changeOption(option.animal)
                        isShownClickAnimalDefinitive(true)
                      }}
                      style={{
                        backgroundImage: `url(https://yourclubhistory.com/a/${option.numeroIndice}.gif)`,
                      }}
                    >
                      {option.animal}
                      <Item value={option.value}>
                        <img
                          value={option.value}
                          src={`https://yourclubhistory.com/a/${option.numeroIndice}.gif`}
                          width="100%"
                          height="100%"
                        >
                          {}
                        </img>
                      </Item>
                    </Button>
                  </>
                ))}
              </>
            )}
          </Grid>
        </Flex>
      </Flex2>
    </>
  )
}
