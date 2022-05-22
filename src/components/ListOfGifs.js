import React, { useState, useEffect } from 'react';
import Gif from "./Gif";
import getGifs from '../services/gifs';


export default function ListOfGifs ({params}){

    const {keyword} = params

    const [gifs, setGifs] = useState([])

    useEffect(function () {

        getGifs({ keyword }).then(gif =>
    
          setGifs(gif))
    
    }, [keyword]);


    return <div>
        {
            gifs.map(({id, title, url}) =>
            <Gif 
            id={id}
            key={id}
            title={title}
            url={url}/>
    )
        }
    </div>
}