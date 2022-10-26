import css from './Statistics.module.css'
import React from 'react'


class Statistics extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
            open: false
        }
    }

    incrementGood = () => {
        this.setState((prevState) => {
            return {
                good: prevState.good + 1,
            }
        })
    }
    incrementNeutral = () => {
        this.setState((prevState) => {
            return {
                neutral: prevState.neutral + 1,
            }
        })
    }
    incrementBad = () => {
        this.setState((prevState) => {
            return {
                bad: prevState.bad + 1,
            }
        })
    }

    toggleMenu = () => {
        this.setState((prevState) => {
            return {
                open: !prevState.open
            }
        })
    }

    render() {

        return <div>
            <h3 className={css.title}>{this.props.naes}</h3>
            {/* <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions> */}
            <div className={css.btn__list}>
                <button className={css.btn} onClick={this.incrementGood}>Good</button>
                <button className={css.btn} onClick={this.incrementNeutral}>Bad</button>
                <button className={css.btn} onClick={this.incrementBad}>Neutral</button>
                <button onClick={this.toggleMenu}>togle</button>
            </div>
            <h3 className={css.title}>Statistics</h3>
            <ul className={css.list}>
                <li className={css.item}>Good:  {this.state.good}</li>
                <li className={css.item}>Bad:  {this.state.neutral}</li>
                <li className={css.item}>Neutral:  {this.state.bad}</li>
                <li className={css.item}>Total: {this.state.good + this.state.neutral + this.state.bad}</li>
                {/* {this.state.open && */}
                    <li className={css.item}>Positive feedback: {(this.state.good / (this.state.good + this.state.neutral + this.state.bad) * 100).toFixed()}%</li>
                {/* } */}
            </ul>

        </div>
    }
}
export { Statistics }
