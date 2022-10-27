import css from './Statistics.module.css'
import React from 'react'
import { FeedbackOptions } from './FeedbackOptions'
import { Statistics } from './Statistics'
import { Notification } from './Notification'



class Feedbac extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            good: 0,
            neutral: 0,
            bad: 0,
            visible: false,
        }
    }

    onIncrement = (event) => {
        
        this.setState((prevState) => {
            
            return {
                ...prevState,
                visible: true,
                [event.target.name]: prevState[event.target.name] + 1
            }
        })
    }

    render() {

        return <div>
            <h3 className={css.title}>{this.props.title}</h3>
            <FeedbackOptions options={this.onIncrement} />
           {this.state.visible && <Statistics good={this.state.good}
                    neutral={this.state.neutral}
                    bad={this.state.bad} />  }                   
            {this.state.visible || <Notification />}
        </div>
    }
}
export { Feedbac }
