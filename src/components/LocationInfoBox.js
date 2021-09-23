import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_NEWS_API_KEY

const LocationInfoBox = ({ info }) => {
    const getData = async (title) => {
        const today = new Date();
        const month = today.getMonth() + 1;
        const date = today.getDate();
        const year = today.getFullYear();
        title = title.replace(/[^\w\s]|_/g, "")
            .replace(/\s+/g, " ");
        const listTitle = title.split(' ');
        const searchItems = listTitle.join('&');
        console.log(searchItems)
        const result = await fetch(`https://newsapi.org/v2/everything?q=${searchItems}&from=${year}-${month}-${date}&to=${year}-${month}-${date}sortBy=relevancy&apiKey=${API_KEY}`);
        const data = await result.json();
        console.log(data)
        return [data.articles[0].title, data.articles[0].url, data.articles[1].title, data.articles[1].url]
    }  

    

    const [news, setNews] = useState([])

    // { getData().then(newsHook => setNews(newsHook)) }
    useEffect(()=>{
            getData(info.title).then(newsHook => setNews(newsHook))
        }, []) // <-- empty dependency array
    
    return (        
        <div className="location-info">
            <h2>Event Location Info</h2>
            <ul>
                <li>Title: <strong>{ info.title }</strong></li>
                <h3>News</h3>
                <li><a href={ news[1] } target='blank'>{ news[0] }</a></li>
                <li><a href={ news[3] } target='blank'>{ news[2] }</a></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox
