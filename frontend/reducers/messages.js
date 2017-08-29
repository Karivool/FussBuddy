import * as Action from '../actions/messageactions.js';
import merge from 'lodash/merge';

const defaultState = {
  messages: [],
  typing: false,
  typingInfo: {},
};

const MessageReducer = (state = defaultState, action) => {
  switch(action.type) {
    case Action.GET_MESSAGE: {
      let messageDetails = action.info.messages;

      let updatedMessages = state.data.concat(action.info.data);
      return Object.assign({}, state, { data: updatedData });
    }
    case Action.LEVEL_MESSAGE: {
      return Object.assign({}, state, { messages: updatedMessages,
                                        data: updatedData});
    }
    case Action.EMPTY_MESSAGE_BOX:
      return Object.assign({}, state, { messageBoxEmpty: true, detailedInfo: action.info});
    case Action.FILL_MESSAGE_BOX:
      return Object.assign({}, state, { messageBoxEmpty: false, detailedInfo: {}})
    default:
      return state;
  }
};

export default MessageReducer;
