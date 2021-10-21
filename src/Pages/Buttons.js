import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";


var names = ["categories", "users", "comments", "subscriptions", "replies", "posts", "entries", "competitions", "views"]

var buttons = []

for (let i = 1; i < names.length; i += 1) {
    var link = "/" + names[i]
    var button = <Link className="btn btn-dark col m-2" style={{ borderRadius: "25px" }} exact to={link} >
                        <b>{names[i]}</b>
                    </Link>
    buttons[i] = button
}


export default function Buttons() {
    return (
        <Container className="my-5" style={{ maxWidth: "2000px" }}>
            <div className="row">
                <Link className="btn btn-dark col m-2" style={{ borderRadius: "25px" }} exact to="/" >
                    <b>{names[0]}</b>
                </Link>
                {buttons}
            </div>
        </Container>
    )
}