import InformationSidebar from "../../Components/Sidebar/Information/information";
import ChatSidebar from "../../Components/Sidebar/Chat/chat";
import NoteSidebar from "../../Components/Sidebar/Note/note";
import DocumentSidebar from "../../Components/Sidebar/Document/document";
import SidebarButton from "../../Components/Sidebar/SidebarComponents/SidebarButton/sidebarbutton";
import React, { useState } from 'react';
import './conferenceroom.css';

const DocImg = `${process.env.PUBLIC_URL}/Images/document.png`;
const ChatImg = `${process.env.PUBLIC_URL}/Images/chat.png`;
const NoteImg = `${process.env.PUBLIC_URL}/Images/notes.png`;
const InfoImg = `${process.env.PUBLIC_URL}/Images/info.png`;

const ConferenceRoom = () => {
    const [showChat, setShowChat]=useState(false)
    const [showNote, setShowNote]=useState(false)
    const [showInfo, setShowInformation]=useState(false)
    const [showDoc, setShowDoc]=useState(false)

    const handleButtonClick = (chat, note, info, doc) => {
        setShowChat(chat);
        setShowNote(note);
        setShowInformation(info);
        setShowDoc(doc);
    };

    return (  
        <div className = "conferenceroom">
            <div className="conferenceroom-main-content">
                <div className="conferenceroom-video-holder">
                </div>
                <div className="conferenceroom-button-holder">
                    <SidebarButton
                        onClick={() => handleButtonClick(false, false, !showInfo, false)}
                        icon={InfoImg}
                        label="Info"
                    />
                    <SidebarButton
                        onClick={() => handleButtonClick(false, !showNote, false, false)}
                        icon={NoteImg}
                        label="Note"
                    />
                    <SidebarButton
                        onClick={() => handleButtonClick(!showChat, false, false, false)}
                        icon={ChatImg}
                        label="Chat"
                    />
                    <SidebarButton
                        onClick={() => handleButtonClick(false, false, false, !showDoc)}
                        icon={DocImg}
                        label="Document"
                    />
                </div>
            </div>
            <div className="conferenceroom-sidebar">
                {
                    showChat?<ChatSidebar/>:showNote?<NoteSidebar/>:showInfo?<InformationSidebar/>:showDoc?<DocumentSidebar/>:null
                }
            </div>
        </div>
    );
}

export default ConferenceRoom;