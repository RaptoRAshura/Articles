import React from "react";

const Card = ({data: cardData}) => {
    return (
        <li className="" style={{ height: "200px", width: "500px", background: 'green', display: "flex", flexDirection: "column", padding: "12px" }}>
            <div className="header"  style={{ display: "flex", gap: "12px", alignItems: "center", height: "max-content", backgroundColor: "yellow" }}>
                <div className="profile" style={{ height: "50px", width: "50px", borderRadius: "50%", background: "white" }}>
                    <img style={{ height: "50px", width: "50px", borderRadius: "50%"}} src={cardData?.urlToImage} alt="profileImage" />
                </div>
                <div className="tileandauthor" style={{ display: "flex", direction: "column", alignItems: "center", height: "50px", background: "blue" }}>
                    <span>{cardData?.title}</span>
                    <span>{cardData?.author}</span>
                </div>
            </div>
            <div className="body" style={{ padding: "16px"}}>
                <p>{cardData?.content}</p>
            </div>
        </li>
    );
}

export default Card;