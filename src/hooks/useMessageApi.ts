import { useContext } from 'react'
import { MessageContext } from '../providers/message'

export const useMessageApi = () => useContext(MessageContext)
