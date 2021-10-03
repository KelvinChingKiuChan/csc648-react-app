import React from "react";
import "./CoverPage.css"
import { Container } from "react-bootstrap";
import Navigation from "../Components/Navigation";
import { Tabs, Tab, } from "react-bootstrap";
import GameCard from "../Components/GameCard";
import News from "./News";
import GameCardSmall from "../Components/GameCardSmall";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

{/* <Container
                            style={{
                                minHeight: "100vh",
                                background: "white",

                            }}
                            className=""
                            fluid>
                            <Row className="d-flex align-content-around flex-wrap pb-5 d-flex justify-content-center px-5 pt-5">
                                <Carousel fade className="d-flex col-xxl" variant= "dark"  style= {{height: "100%"}}>
                                    <Carousel.Item className= "">
                                        1234
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="1.jpg"
                                            alt="Second slide"
                                        />

                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                                <div className="d-flex col-xxl-9">
                                    <Container className="d-flex justify-content-center mx-0" fluid>
                                        <GameCard
                                            color={"rgba(255,0,120,0.5)"}
                                            name={"Valorant"}
                                            image={"2.jpg"}
                                        />
                                        <GameCard
                                            color={"rgba(0,0,0,0.5)"}
                                            name={"League of Legends"}
                                            image={"1.jpg"}
                                        />
                                        <GameCard
                                            color={"rgba(120,120,120,0.5)"}
                                            name={"Among Us"}
                                            image={"3.jpeg"}
                                        />
                                    </Container>
                                </div>
                            </Row>
                        </Container> */}


                        //take length of string and divide up the needed px
function CoverPage() {
    return (
        <div className="Page ">
            <Navigation />
            <div className="Content">
                <Tabs defaultActiveKey="trending" id="tabs">
                    <Tab eventKey="trending" title="Trending Competitions">
                        <Container fluid className="px-2 py-0 pt-3">
                            <div className="row py-2">
                                <div className="col-xxl-5 p-4 pt-0">
                                    <h4> ✨ Latest News  </h4>
                                    <hr />
                                    <News className="" />
                                </div>
                                <div className="col-xxl-7">
                                    <h4> 🔥 Top "3" Competitions </h4>
                                    <hr />
                                    {/* align-self-stretch dont need */}
                                    <Container fluid className="d-flex align-self-stretch flex-wrap justify-content-center p-0">

                                        <GameCard
                                            color={"rgba(200,0,120,0.7)"}
                                            percent= {160+50+"%"}
                                            name={"#1- Valorant"}
                                            image={"2.jpg"}
                                        />
                                        <GameCard
                                            color={"rgba(0,0,0,0.7)"}
                                            percent= {150+50+"%"}
                                            name={"#2- League of Legends"}
                                            image={"1.jpg"}
                                        />
                                        <GameCard
                                            color={"rgba(120,120,120,0.7)"}
                                            percent= {155+50+"%"}
                                            name={"#3- Among Us"}
                                            image={"3.jpeg"}
                                        />

                                    </Container>
                                </div>
                            </div>
                            <div className="row m-0">
                                <h4> 🏆 More Competitions </h4>
                                <hr />
                                <Container fluid className="d-flex flex-wrap p-1">
                                    <GameCardSmall
                                        color={"rgba(120,120,120,0.7)"}
                                        name={"Among Us"}
                                        image={"3.jpeg"}
                                    />
                                    <GameCardSmall
                                        color={"rgba(0,0,0,0.7)"}
                                        name={"League of Legends"}
                                        image={"1.jpg"}
                                    />
                                    <GameCardSmall
                                        color={"rgba(200,0,120,0.7)"}
                                        name={"Valorant"}
                                        image={"2.jpg"}
                                    />
                                    <GameCardSmall
                                        color={"rgba(120,120,120,0.7)"}
                                        name={"Among Us"}
                                        image={"3.jpeg"}
                                    />
                                    <GameCardSmall
                                        color={"rgba(120,120,120,0.7)"}
                                        name={"Pokemon"}
                                        image={"5.png"}
                                    />
                                    <Link className="d-flex col-xxl-2 col-sm-6 col-md-6 col-lg-6 col-xl-4 p-1"
                                        style={{ textDecoration: "none", minWidth: "", height: "360px"}}
                                    >
                                        <Card className="m-0"
                                            style={{ borderRadius: 0, color: "white", width: "100%", background: "grey"}}
                                        >
                                            <Card.Body>
                                                <Card.Title className ="position-relative overflow-hidden" 
                                                            style={{ fontSize: "calc(4px + 2.2vmin)", top: "0vh", minHeight: "50px", height: "6vh"}}>
                                                    View more Competitions!!!
                                                </Card.Title>
                                                <hr/>
                                                <Card.Text className= "position-relative overflow-hidden" 
                                                           style={{ fontSize: "calc(2px + 1.5vmin)", top: "0vh", minHeight: "50px", height: "9vh"}}>
                                                    
                                                        <p>
                                                            Feel free to view the video clips in these competitions, or even participate to earn upto 30k.
                                                        </p>
                                                    
                                                </Card.Text>
                                                <Card.Footer className= "position-relative overflow-hidden" 
                                                            style={{ fontSize: "calc(5px + 2vmin)", top:"0"}}
                                                >
                                                    <b>
                                                        Click to see more >>>
                                                    </b>
                                                </Card.Footer>
                                            </Card.Body>
                                        </Card>
                                    </Link>
                                </Container>
                            </div>
                        </Container>
                    </Tab>
                    <Tab eventKey="hot" title="Hot"></Tab>
                    <Tab eventKey="new" title="New"></Tab>
                </Tabs>
            </div>
        </div >
    )
}

export default CoverPage