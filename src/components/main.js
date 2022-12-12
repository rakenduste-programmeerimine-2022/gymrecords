import Popup from "./Popup.js";
import { useState } from 'react';

function Main() {
    const [buttonPopup, setButtonPopup] = useState(false);

    const inputArr = [
        {
          type: "text",
          id: 1,
          value: ""
        }
      ];
    
      const [arr, setArr] = useState(inputArr);
    
      const addInput = () => {
        setArr(s => {
          return [
            ...s,
            {
              type: "text",
              value: ""
            }
          ];
        });
      };
    
      const handleChange = e => {
        e.preventDefault();
    
        const index = e.target.id;
        setArr(s => {
          const newArr = s.slice();
          newArr[index].value = e.target.value;
    
          return newArr;
        });
      };
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
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <form class = "workouts">
                <div>
                    <button onClick = {() => setButtonPopup(true)}>New workout</button>
                    <Popup trigger={buttonPopup}>
                        <h3>Add new workout</h3>
                        <br></br>
                        <br></br>
                        <div>
                            <button onClick={addInput}>+</button>
                            {arr.map((item, i) => {
                                return (
                                    <input
                                    onChange={handleChange}
                                    value={item.value}
                                    id={i}
                                    type={item.type}
                                    size="40"
                                />
                            );
                        })}
                        </div>
                    </Popup>
                </div>
            </form>
            </div>
        );
    }

export default Main