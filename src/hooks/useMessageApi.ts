import { MessageInstance } from 'antd/es/message/interface'
import { useContext } from 'react'
import { MessageContext } from '../providers/message'

export const useMessageApi = () => useContext(MessageContext) as MessageInstance
