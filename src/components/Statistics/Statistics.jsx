import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad }) => {
  return <div>
    <h3 className={css.title}>Statistics</h3>
    <ul className={css.list}>
        <li className={css.item}>Good:  {good}</li>
        <li className={css.item}>Neutral:  {neutral}</li>
        <li className={css.item}>Bad:  {bad}</li>
        <li className={css.item}>Total: {good + neutral + bad}</li>
        <li className={css.item}>Positive feedback: {(good / (good + neutral + bad) * 100).toFixed()}%</li>
    </ul>
  </div> 
}