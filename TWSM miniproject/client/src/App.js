import './App.css';
import {useState, useEffect} from "react";
import Axios from "axios";
import imgbjj from "./media/bjj.jpg";
import imgpacman from "./media/pacman.png";
import imglego from "./media/worklego.png";
import imgposter from "./media/poster.jpg";
import imgtkd from "./media/gm apchagi.jpg";
import picture from "./media/bearlyart.png";
import video from "./media/video.mp4";

function App() {
    const [listOfMessages, setListOfMessages] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        // Access data fron the API request
        Axios.get("http://localhost:3001/getMessages").then((response) => {
            setListOfMessages(response.data);
        }); // getMessages is the end point for the get request
    }, []);

    // Axios post request
    const createMessage = () => {
        // adds user to the database
        Axios.post("http://localhost:3001/createMessage", {
            name,
            email,
            subject,
            message,
        }).then((response) => {
            alert("Your message has been sent!")
            // add new message to the end of the list
            setListOfMessages([
                ...listOfMessages,
                {
                name,
                email,
                subject,
                message,
                },
            ]);
        });
    };

    return (
      // Runs through the list of users and return the data of each user
    <div className="App">

        <div className="navbar">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
        </div>


        <section id="about" className={"row"}>
            <div className={"aboutColumn"}>
            <video src={video} width="75%" height="75%" controls="controls" autoPlay="true"/>
            </div>
            <div className={"aboutColumn about"}>
                <h1>AMANDA <br/> NIESS <br/> SØRENSEN </h1>
            </div>
        </section>

        <section>
            <h2>Hello world!</h2>
            <p>
                I am a <span className="highlight">programmer</span> with a passion for <span className="highlight">AI</span>,                 <span className="highlight">websites</span>, <span className="highlight">computer vision</span>, and
                <span className="highlight"> user experience</span>.
                I just graduated from B.Sc. Medialogy in June 2022, and I can't wait to try out everything
                that I have learned in the "real world".
                I can communicate with people in <span className="highlight">Danish</span> and <span className="highlight"> English </span>
                and with computers in <span className="highlight">Python</span>, <span className="highlight">C#</span>,
                <span className="highlight"> HTML</span>, <span className="highlight">CSS</span>, and
                <span className="highlight"> JavaScript</span>.

                 In my free time I like to work on software projects,
                as well as 2D and 3D graphics. Besides, I love sports, and I spend much time training brazilian
                jiu-jitsu and taekwondo. I am a volunteer in Aalborg Taekwondo, where I make posters and
                flyers, and manage the website and <span className="highlight">social media</span>.
                Please take a look at my work or leave me a message.
            </p>
        </section>

        <h2 id="work">Take a look at my work!</h2>
        <div className="row ">
            <div className="column container" >
                <img className={"image"} src={imgbjj} alt={"bjj"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>I enjoy taking pictures, and this picture was taken at Aalborg Open Grappling
                    Tournament in April 2022.</div>
                </div>
            </div>
            <div className="column container">
                <img className={"image"} src={imglego} alt={"lego"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>I can make 3D renders in both Cinema 4D and Blender.</div>
                </div>
            </div>
            <div className="column container">
                <img className={"image"} src={imgtkd} alt={"tkd"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>This picture was taken at Esbjerg Taekwondo Cup in February 2022.</div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="column container">
                <img className={"image"} src={imgpacman} alt={"pacman"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>I have made a Pacman game where you play against four different AI agents. </div>
                </div>
            </div>
            <div className="column container">
                <img className={"image"} src={imgposter} alt={"poster"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>I make posters for both Aalborg Selvforsvar og Jiu-Jitsu and Aalborg Taekwondo</div>
                </div>
            </div>
            <div className="column container">
                <img className={"image"} src={picture} alt={"bear"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>After all the hype and rage about NFTs, I made a program that could automatically
                        recolour images and layer them on top of each other.</div>
                </div>
            </div>

        </div>
        <div className="row ">
            <div className="column container" >
                <img className={"image"} src={imgbjj} alt={"bjj"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>I enjoy taking pictures, and this picture was taken at Aalborg Open Grappling
                        Tournament in April 2022.</div>
                </div>
            </div>
            <div className="column container">
                <img className={"image"} src={imglego} alt={"lego"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>I can make 3D renders in both Cinema 4D and Blender.</div>
                </div>
            </div>
            <div className="column container">
                <img className={"image"} src={imgtkd} alt={"tkd"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>This picture was taken at Esbjerg Taekwondo Cup in February 2022.</div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="column container">
                <img className={"image"} src={imgpacman} alt={"pacman"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>I have made a Pacman game where you play against four different AI agents. </div>
                </div>
            </div>
            <div className="column container">
                <img className={"image"} src={imgposter} alt={"poster"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>I make posters for both Aalborg Selvforsvar og Jiu-Jitsu and Aalborg Taekwondo</div>
                </div>
            </div>
            <div className="column container">
                <img className={"image"} src={picture} alt={"bear"} width={"100%"}/>
                <div className={"middle"}>
                    <div className={"text"}>After all the hype and rage about NFTs, I made a program that could automatically
                    recolour images and layer them on top of each other.</div>
                </div>
            </div>

        </div>

    <div>
        <h2 id="contact">Please leave me a message :)</h2>
        <input
            type="text"
            placeholder="Name"
            onChange={(event) => {
                setName(event.target.value);
        }}
        /> <br/>
        <input
            type="text"
            placeholder="E-mail"
            onChange={(event) => {
                setEmail(event.target.value);
        }}
        /> <br/>
        <input
            type="text"
            placeholder="Subject"
            onChange={(event) => {
            setSubject(event.target.value);
        }}
        /> <br/>
        <input
            type="textarea"
            placeholder="Message"
            onChange={(event) => {
            setMessage(event.target.value);
        }}
        /> <br/>
        <button onClick={createMessage}> Send </button>
    </div>
</div>
);
}

export default App;
