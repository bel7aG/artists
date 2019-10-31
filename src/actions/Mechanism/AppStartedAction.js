import { APP_STARTED } from 'types'

export const appStartedAction = isFirstLoad => ({
  type: APP_STARTED,
  isFirstLoad
})
