import { useContext } from 'react'
import { MessageContext } from '../providers/message'

export const useMessageApi = () => {
  return useContext(MessageContext)!
}
