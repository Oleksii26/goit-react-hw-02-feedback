import css from './Statistics.module.css'
import PropTypes from 'prop-types'

export const FeedbackOptions = ({ options }) => {
    return <div className={css.btn__list}>
        <button className={css.btn} name='good' onClick={options}>Good</button>
        <button className={css.btn} name='neutral' onClick={options}>Neutral</button>
        <button className={css.btn} name='bad' onClick={options}>Bad</button>
    </div>

}