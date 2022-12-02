import { useContext } from 'react'
import { MessageContext } from '../providers/message'

export const useMessage = () => {
  return useContext(MessageContext)!
}
