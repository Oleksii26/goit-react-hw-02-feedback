import css from './Statistics.module.css'
export const FeedbackOptions = ({incrementGood1, incrementNeutral1, incrementBad1}) => {
    return  <div className={css.btn__list}>
        <button className={css.btn} onClick={incrementGood1}>Good</button>
        <button className={css.btn} onClick={incrementNeutral1}>Neutral</button>
        <button className={css.btn} onClick={incrementBad1}>Bad</button>
        {/* <button onClick={this.toggleMenu}>togle</button> */}
    </div> 
    
}