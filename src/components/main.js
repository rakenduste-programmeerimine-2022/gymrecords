import React, { Component } from 'react'
export default class Main extends Component {
    render() {
        return (
            <form>
                <h3>MAIN</h3>
                <div class="statistics">

                    <div class="workout-amount">
                        <h3>Workouts completed:</h3>
                        <p>-data-</p>
                    </div>

                    <div class="total-weight">
                        <h3>Total weight lifted this week:</h3>
                        <p>-data-</p>
                    </div>

                    <div class="improvement">
                        <h3>Biggest improvement this month:</h3>
                        <p>-data-</p>
                    </div>

                    <div class="distance-ran">
                        <h3>Distance ran this week:</h3>
                        <p>-data-</p>
                    </div>
                </div>
            </form>
        )
    }
}