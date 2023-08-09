import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setWriterSelection } from '../constants/actions';
import writers from '../constants/writers';
import WriterBio from './WriterBio';

const WriterSelectionStep2 = () => {
  const dispatch = useDispatch();
  const [selectedWriter, setSelectedWriter] = useState('');

  const handleWriterSelection = (writerId) => {
    setSelectedWriter(writerId);
  };

  const handleContinue = () => {
    // Dispatch an action to update the Redux store with the selected writer.
    dispatch(setWriterSelection(selectedWriter));
    // Move to the next step (Step 3: PaymentStep)
    // You can use Redux action to update the current step in the store.
  };

  return (
    <div className='text-center bg-body'>
      <div  className=" d-flex flex-wrap justify-content-center">
        {writers.map((writer) => (
          <div key={writer.id} value={writer.id}
          onClick={()=>{
            handleWriterSelection(writer.id);
            handleContinue();
            
          }}>
            {/* <label> */}
              {/* <input
                type="radio"
                name="writerSelection"
                value={writer.id}
                checked={selectedWriter === writer.id}
                onChange={() => handleWriterSelection(writer.id)}
              /> */}
              {/* {writer.name} */}
            <WriterBio
              style={{ maxWidth: "15rem", width: "95vw" }}
              writer={writer}
              
            //   key={index}
            />
            {/* </label> */}
          </div>
        ))}
      </div>
      {/* <button onClick={handleContinue}>Continue</button> */}
    </div>
  );
};

export default WriterSelectionStep2;
