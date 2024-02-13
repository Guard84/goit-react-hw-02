import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Feedback from '../Feedback/Feedback';
import Options from '../Options/Options';
import Notification from '../Notification/Notification';

function App() {
  const [values, setValues] = useState(() => {
    const savedValues = window.localStorage.getItem('saved-feedback');

    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  });

  useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(values));
  }, [values]);
  
 const updateFeedback = feedbackType => {
  setValues(prevValues => {
    return {
      ...prevValues,
      [feedbackType]: prevValues[feedbackType] + 1
    };
  });
 };
  
  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad: 0
  })
}

  const totalFeedback = values.good + values.neutral + values.bad;
  const percentGoodFeedback = Math.round(((values.good + values.neutral) / totalFeedback) * 100)

  
  useEffect(() => {
    totalFeedback === 0 && resetFeedback();
  }, [totalFeedback]);

  return (
    <div>
      <Description />
      <Options
        update={updateFeedback}
        reset={resetFeedback}
        total={totalFeedback} />
      
      {totalFeedback > 0 && <Feedback
        values={values}
        total={totalFeedback}
        percent={percentGoodFeedback} />}
      
      {totalFeedback === 0 && <Notification />}
    </div>
  );
}

export default App;
