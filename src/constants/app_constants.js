export default {
  Events: {
    CHANGE: 'CHANGE'
  },

  ActionTypes: {
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    CHANGE_USERNAME: 'CHANGE_USERNAME',
    FAILED_SIGN_IN: 'FAILED_SIGN_IN',
    RECEIVE_CLIENT: 'RECEIVE_CLIENT',
    SETUP_LOCK: 'SETUP_LOCK',
    SUCCESSFUL_SIGN_IN: 'SUCCESSFUL_SIGN_IN'
  },

  LockStates: {
    IDLE: 'IDLE',
    FAILED_SIGN_IN: 'FAILED_SIGN_IN',
    SIGNED_IN: 'SIGNED_IN'
  }
}
