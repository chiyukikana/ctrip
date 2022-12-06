import { message } from 'antd'
import { MessageInstance } from 'antd/es/message/interface'
import React, { PropsWithChildren, createContext } from 'react'

export const MessageContext = createContext<MessageInstance>(
  {} as MessageInstance
)

export const MessageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [messageApi, contextHolder] = message.useMessage()
  return (
    <MessageContext.Provider value={messageApi}>
      {contextHolder}
      {children}
    </MessageContext.Provider>
  )
}
