import React from "react";

export default function Signup() {
    return (
        <div>
            <h1 class="mt-3">Sign Up</h1>
            <img src="/src/assets/sign-in.svg" alt="fitness" class="workout-img m-3" />
            
            {/* <% if (locals.messages.errors) { %>
            <% messages.errors.forEach( el => { %>
                <div class="alert alert-danger"><%= el.msg %></div>
            <% }) %>    
            <% } %> */}
            {/* <form action="/signup" method="POST" className="d-flex flex-column">
                <input class="mt-2" type="text" name="userName" placeholder="User Name">
                <input class="mt-2" type="email" name="email" placeholder="Email">
                <input class="mt-2" type="password" name="password" placeholder="Password">
                <input class="mt-2" type="password" name="confirmPassword" placeholder="Confirm Password">
                <input class="btn btn-primary m-4" type="submit">
            </form> */}
        </div>
    )
}