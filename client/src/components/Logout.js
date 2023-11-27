import React from 'react'

export default function Logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.href = "/login";
}