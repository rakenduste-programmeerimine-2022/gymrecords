import React, { Component } from 'react'
export default class Main extends Component {
    render() {
        return (
            <div class = "stat-box">
            <form>
                <div class="statistics">

                    <div class="stats">
                        <h3>Workouts completed:</h3>
                        <p>-data-</p>
                    </div>

                    <div class="stats">
                        <h3>Total weight lifted this week:</h3>
                        <p>-data-</p>
                    </div>

                    <div class="stats">
                        <h3>Biggest improvement this month:</h3>
                        <p>-data-</p>
                    </div>

                    <div class="stats">
                        <h3>Distance ran this week:</h3>
                        <p>-data-</p>
                    </div>
                </div>
            </form>
            <form class = "notes">
                <div class="records">
                    <h3>Your gym notes:</h3>
                </div>
            </form>
            </div>
        )
    }
}