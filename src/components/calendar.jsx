import Event from "./Event"

const Calendar = () =>{
    return (
        <div className = "Calendar">
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="time">8am</td>
                        <td></td>
                        <td></td> 
                        <Event eventName={"Pet cat"} color={"green"}/>
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                    </tr>
                    <tr>
                        <td className="time">9am</td> 
                        <td></td> 
                        <td></td> 
                        <Event eventName={"Pet cat"} color={"green"}/>
                        <Event eventName={"Pet cat"} color={"green"}/>
                        <td></td> 
                        <td></td> 
                        <td></td> 
                    </tr>
                    <tr>
                        <td className="time">10am</td> 
                        <td></td> 
                        <Event eventName={"Pet cat"} color={"green"}/> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                    </tr>
                    <tr>
                        <td className="time">11am</td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">12pm</td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                    </tr>
                    <tr>
                        <td className="time">1pm</td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                    </tr>
                    <tr>
                        <td className="time">2pm</td> 
                        <td></td> 
                        <Event eventName={"Eat food"} color={"orange"}/> 
                        <Event eventName={"Eat food"} color={"orange"}/> 
                        <Event eventName={"Eat food"} color={"orange"}/> 
                        <td></td> 
                        <Event eventName={"Eat food"} color={"orange"}/> 
                        <td></td> 
                    </tr>
                    <tr>
                        <td className="time">3pm</td> 
                        <Event eventName={"Eat Cheese Fries"} color={"yellow"} location={"Taco Bell"}/>  
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <Event eventName={"Eat Cheese Fries"} color={"yellow"} location={"Taco Bell"}/> 
                        <td></td> 
                        <Event eventName={"Eat Cheese Fries"} color={"yellow"} location={"Taco Bell"}/>  
                    </tr>
                    <tr>
                        <td className="time">4pm</td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                        <td></td> 
                    </tr>
                    <tr>
                        <td className="time">5pm</td> 
                        <Event eventName={"Sleep"} color={"blue"} location={"Home"}/>
                        <Event eventName={"Sleep"} color={"blue"} location={"Home"}/>
                        <Event eventName={"Sleep"} color={"blue"} location={"Home"}/>
                        <Event eventName={"Sleep"} color={"blue"} location={"Home"}/>
                        <Event eventName={"Sleep"} color={"blue"} location={"Home"}/> 
                        <Event eventName={"Sleep"} color={"blue"} location={"Home"}/> 
                        <Event eventName={"Sleep"} color={"blue"} location={"Home"}/>
                    </tr>
                </tbody>
                <tfoot>

                </tfoot>
            </table>
        </div>
    )
}

export default Calendar