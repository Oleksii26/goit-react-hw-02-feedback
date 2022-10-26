import css from './Statistics.module.css'
import React from 'react'
import { FeedbackOptions } from './FeedbackOptions'
import { Statistics } from './Statistics'



class Feedbac extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
        }
    }

    onIncrement = (event) => {
        this.setState((prevState) => {
            return {
                [event.target.name]: prevState[event.target.name] + 1
            }
        })
    }

    render() {

        return <div>
            <h3 className={css.title}>{this.props.title}</h3>
            <FeedbackOptions increment={this.onIncrement} />
            <h3 className={css.title}>Statistics</h3>
            <Statistics good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
            />
        </div>
    }
}
export { Feedbac }
