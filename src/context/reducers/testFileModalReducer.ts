import { createContext } from 'react';
import { actionTypes } from '../actions/testFileModalActions';
import { TestFileModalTestCaseState, TestFileModalAction } from '../../utils/testFileModalTypes';

export const TestFileModalContext = createContext(null);

export const testFileModalState = {
  isTestModalOpen: true,
};

export const testFileModalReducer = (state: TestFileModalTestCaseState, action: TestFileModalAction) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODAL:
      return {
        isTestModalOpen: !state.isTestModalOpen,
      };
    default:
      return state;
  }
};
