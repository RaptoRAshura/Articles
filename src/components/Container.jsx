import React, { useEffect, useState } from "react";
import Card from "./Card";

const Container = () => {

    // Fetching the data here.
    const [ cardData, setCardData ] = useState([]); 


    const API_URI = `https://newsapi.org/v2/everything?q=tesla&from=2023-11-23&sortBy=publishedAt&apiKey=2f9486fc7d514ce7a52b4b02fde4a578`;

    const fetchAPIURI  = async () => {
        const cardDataResponse = fetch(API_URI)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => console.log(error));
        return cardDataResponse;
    }

    const fetchAndSetAPIURI = async () => {
        const fetchedData = await fetchAPIURI();
        
        const cardDataMapper = fetchedData.map((cardData) => {
            const dataObject = {
                author: cardData?.author || "Apoorv",
                content: cardData?.content,
                description: cardData?.description,
                publishedAt: cardData?.publishedAt,
                source: cardData?.source,
                title:
                url:
                urlToImage:
            }
        })

        setCardData(cardDataMapper);
    }

    useEffect(() => {
        console.log("cardData", cardData);
    }, [cardData])


    useEffect(() => {
       fetchAndSetAPIURI();
    }, [])

    const demoList = [{
        name: "apoorv",
        profileName: "agarwal"
    }, 
    {
        name: "rohit",
        profileName: "Blah blah"
    }]

    return (
        <ul className="" style={{ height: "100vh", width: "100vw", background: 'red', display: "flex", flexDirection: "column", alignItems: "center", padding: "16px", gap: "16px" }}>
            {
                demoList.map((listElement) => <Card data={listElement}/>)
            }
        </ul>
    );
}

export default Container;
