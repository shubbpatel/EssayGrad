const initialOrderState = {
    essayDetails: {
      topic: '',
      subject: '',
      deadline: '',
      pageCount: '',
      instructions: '',
      price: 0,
    },
    selectedWriter: null,
    currentStep: 1,
  };
  
  const orderReducer = (state = initialOrderState, action) => {
    switch (action.type) {
      case 'SET_ESSAY_DETAILS':
        return {
          ...state,
          essayDetails: action.payload,
        };
      case 'SET_WRITER_SELECTION':
        return {
          ...state,
          selectedWriter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  