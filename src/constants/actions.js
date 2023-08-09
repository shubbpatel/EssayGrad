export const setEssayDetailss = (essayDetails) => {
  return (dispatch) => {
    // Perform any asynchronous logic here (if needed).
    // Calculate the price, make API calls, etc.

    // Dispatch the action object with the updated essay details.
    dispatch({
      type: 'SET_ESSAY_DETAILS',
      payload: essayDetails,
    });
  };
};

export const setWriterSelection = (selectedWriter) => {
  return (dispatch) => {
    // Perform any asynchronous logic here (if needed).
    // Fetch additional writer details, make API calls, etc.

    // Dispatch the action object with the selected writer.
    dispatch({
      type: 'SET_WRITER_SELECTION',
      payload: selectedWriter,
    });
  };
};
