import{ useState } from 'react';
import Section from 'components/Section/Section';
import Statistics from 'components/Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';



export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOptions = {good, neutral, bad};
  const total = good + neutral + bad;
  

  const countPositiveFeedbackPercentage = () => {
    if (!total) {
      return 0;
    }
    return Math.round((good / total) * 100);
  };

  const onLeaveFeedback = e => {
    e.preventDefault();
    switch(e.target.name) {
      case 'good': 
      setGood(prevGood => prevGood + 1);
      break;

      case 'neutral': 
      setNeutral(prevNeutral => prevNeutral + 1);
      break

      case 'bad': 
      setBad(prevBad => prevBad + 1);
      break;

      default:
        return;
    }
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedbackOptions)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}



// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const total = this.countTotalFeedback();
//     if (!total) {
//       return 0;
//     }
//     return Math.round((this.state.good / total) * 100);
//   };

//   onLeaveFeedback = e => {
//     e.preventDefault();
//     this.setState(prevState => ({
//       [e.target.name]: prevState[e.target.name] + 1,
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     const total = this.countTotalFeedback();
//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {total ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={total}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </>
//     );
//   }
// }
