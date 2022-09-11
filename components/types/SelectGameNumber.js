import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Modos, Tipos } from '../../config/constants'

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  position: center;
  text-align: center;
  height: 100%;
  width: 800px;
  padding: 10px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  background-color: #0D1184;
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
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  padding: 10px;
  margin-top: 10px;
  background-color: #000;
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
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
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
  padding: 20px;
  cursor: pointer;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  background-color: transparent;

  color: #e5e7e8;
`
export const FlexAnimal = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 50px 50px;
  grid-gap: 5px;
  position: center;
  text-align: center;
  height: 100%;
  width: 100%;
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
  padding: 0.5rem;
  background-color: transparent;
  color: white;
  font-size: 18px;
  font-weight: bold;
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
    numeroIndiceId: '',
    urlImage: '',
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
  function isShownClickAnimalDefinitive(bool) {
    if (isshowModeOnlyAnimal !== bool) {
      setIsShowModeOnlyAnimal(bool)

    }
  }
  return (
    <>
    {isshowModeOnlyAnimal && animal.length > 0 ? (
    <FlexT>

        <GridList>
            <Item>{animal ? animal : <></>}</Item>
          </GridList>
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
          {!isshowMode  ? (
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
                  >
                    <Item value={option.value}>
                      {option.animal}
                      <img
                        value={option.value}
                        src="https://xmine.farm/images/tokens/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.png"
                        width="14px"
                        height="15px"
                        frameBorder="0px"
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
    </>
  )
}
