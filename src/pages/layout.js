import React from 'react';

import {
    NavLink
} from 'react-router-dom';

export default function Layout() {
    return(
    <nav className="navbar navbar-light navbar-expand-lg bg-success">
        <NavLink exact className="navbar-brand" to="/">Home</NavLink>
        <NavLink className="navbar-brand" to="/todo">Todo</NavLink>
        <NavLink className="navbar-brand" to="/counter">Counter</NavLink>
        <NavLink className="navbar-brand" to="/usereducer">USE Reducer</NavLink>
        <NavLink className="navbar-brand" to="/counter-multiple">Counter Multiple State</NavLink>
        <NavLink className="navbar-brand" to="/counter-multiple-props">Counter Multiple Props State</NavLink>
    </nav>
    )
}