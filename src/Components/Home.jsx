import React from "react";

export default function Home() {
    return (
        <div>
            <h1 className="flex items-center"><a class="text-lg font-bold" href="/calendar">Workout Log</a></h1>

            <main className="flex flex-col justify-items-center items-center">
                <img src="/src/assets/working-out.svg" alt="fitness" className="workout-img m-3 h-80" />
                <h3 className="m-3 text-center">You don't have to be extreme. Just consistent.</h3>
                <a href="/login"><button className="btn btn-lg btn-primary m-6">Log In</button></a>
                <a href="/signup"><button className="btn btn-lg btn-primary">Sign Up</button></a>
            </main>
        </div>
    )
}