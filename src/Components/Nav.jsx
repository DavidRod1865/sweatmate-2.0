import React from "react";

export default function Nav() {
    return (
        <nav className="flex place-content-between">
    
            <a className="text-lg font-bold" href="/calendar"><h1>Workout Log</h1></a>
      
            <ul className="flex gap-6 list-none font-medium w-20">
              <li><a href="/calendar">Calendar</a></li> 
              <li><a href="/calendar/createWorkout">Add Workout</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
    
        </nav>
    )
}