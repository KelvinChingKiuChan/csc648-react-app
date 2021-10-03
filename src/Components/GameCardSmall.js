import React from "react";

import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";



function GameCardSmall(props){
    const defaultminWidth= "50vmax"
    const defaultWidth= ""
    const defaultMaxWidth= ""
    var linkminWidth= defaultminWidth
    var linkWidth= defaultWidth
    var linkMaxWidth= defaultMaxWidth
    if (props.image.length > 0){
        linkminWidth= ""
        linkWidth= ""
        linkMaxWidth= ""
    } 
    return(
        <Link className="d-flex col-xxl-2 col-sm-6 col-md-6 col-lg-6 col-xl-4 p-1" 
              style={{ textDecoration: "none",minWidth:"210px" ,minHeight: "350px"}}
        >
        <Card className="m-0" 
              style={{ borderRadius: 0, color: "white", width: "100%", background: "grey" }}
        >
            <Card.Img src={props.image} className="" 
                      style={{minHeight: "350px", height: "20vh", objectFit: "cover" }} 
            />
            <Card.ImgOverlay style={{ background: props.color, padding: "1rem" }}>
                <Card className="m-0" 
                      style={{background: "transparent", border:"none", minHeight: "300px", height: "15vh"}}
                >
                    <Card.Header className="d-flex justify-content-between">
                        <b style={{ fontSize: "160%" }}>{props.name}</b>
                        👁️27k
                    </Card.Header>
                    <Card.Footer className= "position-absolute" 
                                 style={{ fontSize: "155%", top:"60%"}}
                    >
                        <b>Can get 💰: 27000k</b>
                    </Card.Footer>
                </Card>
            </Card.ImgOverlay>
        </Card>
    </Link>
    )
}

export default GameCardSmall