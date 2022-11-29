import { Middleware } from '@reduxjs/toolkit'

export const actionLog: Middleware = store => next => action => {
  const beforeState = store.getState()
  const fireAction = action
  next(action)
  const currentState = store.getState()
  console.log('Action Log', {
    beforeState,
    fireAction,
    currentState,
  })
}
