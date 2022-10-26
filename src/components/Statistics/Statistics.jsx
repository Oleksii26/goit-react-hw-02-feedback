import css from './Statistics.module.css'

export const Statistics = ({ good, neutral, bad }) => {
  return  <ul className={css.list}>
        <li className={css.item}>Good:  {good}</li>
        <li className={css.item}>Neutral:  {neutral}</li>
        <li className={css.item}>Bad:  {bad}</li>
        <li className={css.item}>Total: {good + neutral + bad}</li>
        <li className={css.item}>Positive feedback: {(good / (0.000001 + (good + neutral + bad)) * 100).toFixed()}%</li>
    </ul>
}