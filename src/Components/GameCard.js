import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";



function GameCard(props){
    var sizeofFont= (15*(0.2-(props.name.length*0.001))).toString()+"em"
    return(
        <Link className="d-flex col-xxl-4 col-md-6 col-lg-4 col-xl-4 p-1 py-2 m-0" 
              style={{ textDecoration: "none" , minHeight: "510px"}}
        >
        <Card className="m-0" 
              style={{ borderRadius: 0, color: "white" }}
        >
            <Card.Img src={props.image} className="" 
                      style={{maxWidth: "500px", minHeight: "510px", height: "50vh", objectFit: "cover" }} 
            />
            <Card.ImgOverlay style={{ background: props.color, padding: "1rem" }}>
                <Card className="m-0" 
                      style={{background: "transparent", border:"none", minHeight: "510px", height: "45vh"}}
                >
                    <Card.Header className="d-flex justify-content-between">
                        <b style={{ fontSize: `calc(7px + 2.2vmin)`, height: "15vh" }}>{props.name}</b>
                        👁️27k
                    </Card.Header>
                    <Card.Body className= "position-relative" 
                               style={{ fontSize: "calc(5px + 1.5vmin)", top:"0vh" }}
                    >
                        <b>Ranking:</b>
                        <hr/>
                        <ol>
                            <li>Profile 1</li>
                            <li>Profile 2</li>
                            <li>Profile 3</li>
                        </ol>
                    </Card.Body>
                    <Card.Footer className= "position-absolute" 
                                 style={{ fontSize: "155%", top:"40vh"}}
                    >
                        <b>Can get 💰: 27000k</b>
                    </Card.Footer>
                </Card>
            </Card.ImgOverlay>
        </Card>
    </Link>
    )
}

export default GameCard