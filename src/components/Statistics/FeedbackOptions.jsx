import css from './Statistics.module.css'

export const FeedbackOptions = ({ increment }) => {
    return <div className={css.btn__list}>
        <button className={css.btn} name='good' onClick={increment}>Good</button>
        <button className={css.btn} name='neutral' onClick={increment}>Neutral</button>
        <button className={css.btn} name='bad' onClick={increment}>Bad</button>
    </div>

}