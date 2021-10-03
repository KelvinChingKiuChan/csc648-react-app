import React from "react";
import { Container } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

{/* <Container style={{ }}>
                            <h1 className ="display-4 position-relative overflow-hidden" 
                                style={{ fontSize: "calc(15px + 4vmin)", top: "0vh", height: "13vh"}}
                            >
                                Compete and Win Big Money !!!!!!
                            </h1>
                            <p  className ="lead position-relative overflow-hidden" 
                                style={{ fontSize: "calc(7px + 2vmin)", top: "1vh", height: "15vh"}}
                            >
                                Monetize your gameplay. Pottr opens up an entirely new competitive gaming experience for competitive gamers.
                            </p>
                            <p  className= "position-relative overflow-hidden" 
                                style={{ fontSize: "calc(5px + 1.5vmin)", top: "1vh", height: "9vh"}}
                            >
                                Choose a game and view the video clips!!! You can bet on your favorite to earn up to 10% of the stakes! or Upload XD
                            </p>
                            <h4 className= "position-relative overflow-hidden" 
                                style={{ fontSize: "calc(15px + 2.5vmin)", top: "1vh"}}
                            >
                                <b>Click this to Learn More !</b>
                            </h4>
                        </Container> */}

function News() {
    return (
        <Carousel className="p-3 overflow-hidden" 
                  style={{ minHeight: "520px", height: "50.7vh", background: "grey" }}
        >
            <Carousel.Item style={{minHeight: "60vh", height: "100vh"}}>
                <Link style={{ textDecoration: "none", color: "black", minHeight: "620px" }}>
                    <div className="jumbotron jumbotron-fluid " 
                         style={{height: "100%" }}
                    >
                        <Container style={{minHeight: "100%" }}>
                            <h1 className ="display-4 position-relative overflow-hidden" 
                                style={{ fontSize: "calc(15px + 3.7vmin)", top: "0vh", minHeight: "100px", height: "13vh"}}
                            >
                                Compete and Win Big Money !!!!!!

                            </h1>
                            <p  className ="lead position-relative overflow-hidden" 
                                style={{ fontSize: "calc(7px + 2vmin)", top: "1vh", minHeight: "150px", height: "14vh"}}
                            >
                                Monetize your gameplay. Pottr opens up an entirely new competitive gaming experience for competitive gamers.
        
                            </p>
                            <hr/>
                            <p  className= "position-relative overflow-hidden" 
                                style={{ fontSize: "calc(5px + 1.5vmin)", top: "1vh", minHeight: "50px", height: "9vh"}}
                            >
                                Choose a game and view the video clips!!! You can bet on your favorite to earn up to 10% of the stakes! or Upload XD

                            </p>
                            <h4 className= "position-relative overflow-hidden" 
                                style={{ fontSize: "calc(12px + 2vmin)", top: "1vh"}}
                            >
                                <b>Click this to Learn More !</b>
                            </h4>
                        </Container>
                    </div>
                </Link>
            </Carousel.Item>
        </Carousel>
    )
}

export default News