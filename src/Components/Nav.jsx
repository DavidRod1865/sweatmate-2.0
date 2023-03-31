import React from "react";

export default function Nav() {
    return (
        <nav class="flex place-content-between">
    
            <a class="text-lg font-bold" href="/calendar"><h1>Workout Log</h1></a>
      
            <ul class="flex gap-6 list-none font-medium w-20">
              <li><a href="/calendar">Calendar</a></li> 
              <li><a href="/calendar/createWorkout">Add Workout</a></li>
              <li><a href="/logout">Logout</a></li>
            </ul>
    
        </nav>
    )
}