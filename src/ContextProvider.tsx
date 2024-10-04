import { useState, createContext, useEffect } from 'react'
import { HomeType, LotType } from './types'
import API from './apiClient'
// type Value = {
//   homes: HomeType[]
//   lots: LotType[]
// }

type ContextProps = {
  // value: Value
  homes: HomeType[]
  lots: LotType[]
  isModalVisible: boolean
  handleModalVisibility: () => void
}

export const Context = createContext<ContextProps>() // (low prio) pass default?

const ContextProvider = ({ children }) => {
  const [homes, setHomes] = useState<HomeType[]>([])
  const [lots, setLots] = useState<LotType[]>([])
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const handleModalVisibility = () => {
    setIsModalVisible((prevVisibility) => !prevVisibility)
  }

  // const value: Value = { homes, lots }
  useEffect(() => {
    const fetchHomes = async () => {
      const data = await API.getHomePlans()
      setHomes(data)
    }
    const fetchLots = async () => {
      const data = await API.getLots()
      setLots(data)
    }
    fetchHomes()
    fetchLots()
  }, [])
  return (
    <Context.Provider
      value={{ homes, lots, isModalVisible, handleModalVisibility }}
    >
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
