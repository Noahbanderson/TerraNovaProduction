import React from "react";
import { withRouter } from 'react-router-dom';
import { Form, Modal, Carousel } from "react-bootstrap";
import { Icon, Dropdown } from "semantic-ui-react";
import "./styles/RoomDetails.css";
import RoomImage from '../images/room_image.png';
import Hotel3 from '../images/Hotel3.jpg';
import A_1 from '../images/Hotel3.jpg';
import A_2 from '../images/Hotel4.jpg';
import A_3 from '../images/Hotel5.jpg';
import A_4 from '../images/Hotel6.jpg';
import A_5 from '../images/Hotel7.jpg';
import A_6 from '../images/Hotel8.jpg';
import A_7 from '../images/Hotel9.jpg';
import person from '../images/small-person-image.png';
import bed from '../images/small-bed-image.png';
import eye from '../images/small-eye-image.png';
import { Calendar } from './rb-datepicker/dist';
import 'bootstrap-daterangepicker/daterangepicker.css';
import "./styles/daterangepicker.css";
import * as dayjs from "dayjs";

class RoomDetails extends React.Component {
    state = {
        _isMounted: false,
        startDate: "",
        startDateString: "",
        startDateDB: "",
        endDate: "",
        endDateString: "",
        endDateStringDB: "",
        nrNights: "1",
        modalShowStart: false,
        modalShowEnd: false,
        roomReferences: ["A", "B", "F", "V1", "V2"],
        roomImages: ["1", "2", "3", "4", "5", "6", "7"],
        currentRoom: "",
        currentImage: "1"
    };

    componentDidMount() {
        let startDate = dayjs();
        let endDate = dayjs(startDate.add('1', 'day'));
        this.setState({ 
            _isMounted: true,
            startDate,
            startDateString: startDate.format("MM/DD/YYYY"),
            startDateDB: startDate.format("DD/MM/YYYY"),
            endDate,
            endDateString: endDate.format("MM/DD/YYYY"),
            endDateDB: startDate.format("DD/MM/YYYY"),
            nrNights: 1,
            _isMounted: true
        });
        if (this.props.location.room)
            this.setState({ currentRoom: this.props.location.room });
        else
            this.setState({ currentRoom: "A" });
    };

    handleShowStart = () => this.setState({ modalShowStart: true });

    handleCloseStart = () => this.setState({ modalShowStart: false });

    handleShowEnd = () => this.setState({ modalShowEnd: true });

    handleCloseEnd = () => this.setState({ modalShowEnd: false });

    onDayClickStart = (date) => {
        this.setState({ 
            startDate: date,
            startDateString: date.format("MM/DD/YYYY"),
            startDateDB: date.format("DD/MM/YYYY"),
            endDate: "",
            endDateString: "",
            endDateDB: "",
            nrNights: "",
            modalShowStart: false
        });
    };

    onDayClickEnd = (date) => {
        this.setState({ 
            endDate: date,
            endDateString: date.format("MM/DD/YYYY"),
            endDateDB: date.subtract('1', 'day').format("DD/MM/YYYY"),
            nrNights: date.diff(this.state.startDate, 'day'),
            modalShowEnd: false
        });
    };

    setNrNights = (nrNights) => {
        let endDate = this.state.startDate.add(`${nrNights}`, 'day');
        this.setState({ 
            nrNights,
            endDate,
            endDateString: endDate.format("MM/DD/YYYY"),
            endDateDB: endDate.subtract('1', 'day').format("DD/MM/YYYY")
        });
    };

    changeCurrentImage = (image) => this.setState({ currentImage: image });

    changeCurrentRoom = (roomLetter) => this.setState({ currentRoom: roomLetter })

    moveLeft = () => {
        let currentImage = this.state.currentImage;
        if (currentImage != this.state.roomImages[0]) {
            currentImage = (parseInt(currentImage, 10) - 1).toString();
            this.setState({ currentImage })
        };
    };

    moveRight = () => {
        let currentImage = this.state.currentImage;
        if (currentImage != this.state.roomImages[this.state.roomImages.length-1]) {
            currentImage = (parseInt(currentImage, 10) + 1).toString();
            this.setState({ currentImage })
        };
    };

    Button = withRouter(({ history }) => (
        <span
            className="roomdetails-custom-button"
            onClick={() => { history.push({
                pathname: '/reservation',
                state: this.state
            }) }}
        >
            BOOK NOW
        </span>
    ));

    renderRoomName = (roomLetter) => (
        <>
            { roomLetter === "A" &&
                <>LAKE VIEW ROOM FROM</>
            }
            { roomLetter === "B" &&
                <>MOUNTAIN VIEW ROOM FROM</>
            }
            { roomLetter === "F" &&
                <>FAMILY ROOM FROM</>
            }
            { roomLetter === "V1" &&
                <>VIP ROOM #1 FROM</>
            }
            { roomLetter === "V2" &&
                <>VIP ROOM #2 FROM</>
            }
        </>
    );

    renderSmallRoom = (roomLetter) => (
        <>
            { roomLetter === "A" &&
                <>
                    <img src={Hotel3} width="100%" />
                    <span className="roomdetails-text-header">LAKE VIEW</span>
                    <div className="roomdetails-content">
                        <div className="roomdetails-small-images-column">
                            <img style={{marginBottom: "0.75em"}} src={person} width="15em" />
                            <img style={{marginBottom: "1.08em"}} src={bed} width="18em" />
                            <img src={eye} width="17em" />
                        </div>
                        <div className="roomdetails-text-column">
                            <span style={{marginBottom: "0.5em"}}>Max: 4 persons</span>
                            <span style={{marginBottom: "0.5em"}}>Bed: King-size or twin beds</span>
                            <span>View: Mountain</span>
                        </div>
                    </div>
                    <div className="roomdetails-viewdetails-button" onClick={() => this.changeCurrentRoom(roomLetter)}>
                        VIEW DETAILS
                    </div> 
                </>
            }
            { roomLetter === "B" &&
                <>
                    <img src={Hotel3} width="100%" />
                    <span className="roomdetails-text-header">MOUNTAIN VIEW</span>
                    <div className="roomdetails-content">
                        <div className="roomdetails-small-images-column">
                            <img style={{marginBottom: "0.75em"}} src={person} width="15em" />
                            <img style={{marginBottom: "1.08em"}} src={bed} width="18em" />
                            <img src={eye} width="17em" />
                        </div>
                        <div className="roomdetails-text-column">
                            <span style={{marginBottom: "0.5em"}}>Max: 4 persons</span>
                            <span style={{marginBottom: "0.5em"}}>Bed: King-size or twin beds</span>
                            <span>View: Mountain</span>
                        </div>
                    </div>
                    <div className="roomdetails-viewdetails-button" onClick={() => this.changeCurrentRoom(roomLetter)}>
                        VIEW DETAILS
                    </div> 
                </>
            }
            { roomLetter === "F" &&
                <>
                    <img src={Hotel3} width="100%" />
                    <span className="roomdetails-text-header">FAMILY ROOM</span>
                    <div className="roomdetails-content">
                        <div className="roomdetails-small-images-column">
                            <img style={{marginBottom: "0.75em"}} src={person} width="15em" />
                            <img style={{marginBottom: "1.08em"}} src={bed} width="18em" />
                            <img src={eye} width="17em" />
                        </div>
                        <div className="roomdetails-text-column">
                            <span style={{marginBottom: "0.5em"}}>Max: 8 persons</span>
                            <span style={{marginBottom: "0.5em"}}>Bed: King-size or twin beds</span>
                            <span>View: Mountain</span>
                        </div>
                    </div>
                    <div className="roomdetails-viewdetails-button" onClick={() => this.changeCurrentRoom(roomLetter)}>
                        VIEW DETAILS
                    </div> 
                </>
            }
            { roomLetter === "V1" &&
                <>
                    <img src={Hotel3} width="100%" />
                    <span className="roomdetails-text-header">VIP ROOM #1</span>
                    <div className="roomdetails-content">
                        <div className="roomdetails-small-images-column">
                            <img style={{marginBottom: "0.75em"}} src={person} width="15em" />
                            <img style={{marginBottom: "1.08em"}} src={bed} width="18em" />
                            <img src={eye} width="17em" />
                        </div>
                        <div className="roomdetails-text-column">
                            <span style={{marginBottom: "0.5em"}}>Max: 4 persons</span>
                            <span style={{marginBottom: "0.5em"}}>Bed: Two Queen-Size beds</span>
                            <span>View: Mountain</span>
                        </div>
                    </div>
                    <div className="roomdetails-viewdetails-button" onClick={() => this.changeCurrentRoom(roomLetter)}>
                        VIEW DETAILS
                    </div> 
                </>
            }
            { roomLetter === "V2" &&
                <>
                    <img src={Hotel3} width="100%" />
                    <span className="roomdetails-text-header">VIP ROOM #2</span>
                    <div className="roomdetails-content">
                        <div className="roomdetails-small-images-column">
                            <img style={{marginBottom: "0.75em"}} src={person} width="15em" />
                            <img style={{marginBottom: "1.08em"}} src={bed} width="18em" />
                            <img src={eye} width="17em" />
                        </div>
                        <div className="roomdetails-text-column">
                            <span style={{marginBottom: "0.5em"}}>Max: 4 persons</span>
                            <span style={{marginBottom: "0.5em"}}>Bed: Two Queen-Size beds</span>
                            <span>View: Mountain</span>
                        </div>
                    </div>
                    <div className="roomdetails-viewdetails-button" onClick={() => this.changeCurrentRoom(roomLetter)}>
                        VIEW DETAILS
                    </div> 
                </>
            }
        </>
    );

    render() {
        return (
            this.state._isMounted &&
            <>
                <div className="roomdetails-header-container">
                    <div className="roomdetails-header">Lake View</div>
                </div>
                <div className="roomdetails-container">
                    <div className="roomdetails-upper-container">
                        <div className="roomdetails-left-container">
                            <div className="roomdetails-upper-container-image">
                                <img 
                                    src={require(`../images/cabins/${this.state.currentRoom}_${this.state.currentImage}.jpg`)} 
                                    width="100%" 
                                    height="580px"
                                />
                                <div className="roomdetails-left-arrow">
                                    <Icon name="arrow alternate circle left outline" size="big" onClick={this.moveLeft} />
                                </div>
                                <div className="roomdetails-right-arrow">
                                    <Icon name="arrow alternate circle right outline" size="big" onClick={this.moveRight} />
                                </div>
                            </div>
                            <div className="roomdetails-left-lower-container">
                                { this.state.roomImages.map( (image, index) => (
                                    image === this.state.currentImage ?
                                        <div className="roomdetails-left-lower-container-image-active" key={index}>
                                            <img 
                                                src={require(`../images/cabins/${this.state.currentRoom}_${index+1}.jpg`)}
                                                width="100%"
                                                height="72px"
                                                onClick={() => this.changeCurrentImage(image)}
                                            />
                                        </div>
                                    :
                                        <div className="roomdetails-left-lower-container-image" key={index}>
                                            <img 
                                                src={require(`../images/cabins/${this.state.currentRoom}_${index+1}.jpg`)}
                                                width="100%"
                                                height="72px"
                                                onClick={() => this.changeCurrentImage(image)}
                                            />
                                        </div>
                                )) }
                            </div>
                        </div>
                        <div className="roomdetails-right-container">
                            <img src={RoomImage} width="16%" />
                            <span style={{marginTop: "12px", marginBottom: "6px", fontSize: "13px"}}>{ this.renderRoomName(this.state.currentRoom) }</span>
                            <span>
                                <span style={{fontSize: "32px", marginRight: "6px"}}>$25</span>
                                <span style={{paddingTop: "12px"}}>/night</span>
                            </span> 
                            <div className="roomdetails-hr-container"><div className="roomdetails-line" /></div>
                            <div className="roomdetails-right-lower-container">
                                <span>ARRIVE</span>
                                <div className="roomdetails-form-container">
                                    <Form.Control className="roomdetails-dateform" value={this.state.startDate.format("MM/DD/YYYY")} readOnly />
                                    <Icon name="calendar alternate outline" style={{marginTop: "8px", marginRight: "8px"}} onClick={this.handleShowStart} />
                                </div>
                                <span>NIGHT(S)</span>
                                <div className="roomdetails-dropdown-container">
                                    <Dropdown className="roomdetails-custom-dropdown" text={this.state.nrNights} drop='down'>
                                        <Dropdown.Menu>
                                            <Dropdown.Item text='1' onClick={() => this.setNrNights('1')} />
                                            <Dropdown.Item text='2' onClick={() => this.setNrNights('2')} />
                                            <Dropdown.Item text='3' onClick={() => this.setNrNights('3')} />
                                            <Dropdown.Item text='4' onClick={() => this.setNrNights('4')} />
                                            <Dropdown.Item text='5' onClick={() => this.setNrNights('5')} />
                                            <Dropdown.Item text='6' onClick={() => this.setNrNights('6')} />
                                            <Dropdown.Item text='7' onClick={() => this.setNrNights('7')} />
                                            <Dropdown.Item text='8' onClick={() => this.setNrNights('8')} />
                                            <Dropdown.Item text='9' onClick={() => this.setNrNights('9')} />
                                            <Dropdown.Item text='10' onClick={() => this.setNrNights('10')} />
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                                <span>DEPARTURE</span>
                                <div className="roomdetails-form-container">
                                    <Form.Control 
                                        className="roomdetails-dateform" 
                                        value={this.state.endDate != "" ? this.state.endDate.format("MM/DD/YYYY") : this.state.endDate} 
                                        readOnly 
                                    />
                                    <Icon name="calendar alternate outline" style={{marginTop: "8px", marginRight: "8px"}} onClick={this.handleShowEnd} />
                                </div>
                                <div className="roomdetails-button-container">
                                    <this.Button />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="roomdetails-hr-container"><div className="roomdetails-line" /></div>
                    <div className="roomdetails-lower-container">
                        { this.state.roomReferences.map( (room, index) => (
                            room != this.state.currentRoom &&
                                <div className="roomdetails-small-room-container" key={index}>
                                    { this.renderSmallRoom(room) }
                                </div>
                        )) }
                    </div>
                </div>
                <Modal show={this.state.modalShowStart} onHide={this.handleCloseStart} centered>
                    { this.props.endDate != "" ?
                        <Calendar startDate={this.state.startDate != "" && this.state.startDate} endDate={this.state.endDate != "" && this.state.endDate} singleDatePicker={true} onDayClick={this.onDayClickStart} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    :
                        <Calendar startDate={this.state.startDate != "" && this.state.startDate} endDate={null} singleDatePicker={true} onDayClick={this.onDayClickStart} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    }
                </Modal>
                <Modal show={this.state.modalShowEnd} onHide={this.handleCloseEnd} centered>
                    { this.props.endDate != "" ?
                        <Calendar startDate={this.state.startDate != "" && this.state.startDate} endDate={this.state.endDate != "" && this.state.endDate} singleDatePicker={true} onDayClick={this.onDayClickEnd} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    :
                        <Calendar startDate={this.state.startDate != "" && this.state.startDate} endDate={null} singleDatePicker={true} onDayClick={this.onDayClickEnd} showDropdowns={false} showWeekNumbers={false} autoApply={true} today={dayjs()} />
                    }
                </Modal>
            </>
        );
    };
};

export default RoomDetails;