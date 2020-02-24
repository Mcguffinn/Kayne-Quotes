import React, {useState, useEffect} from 'react';
import axios from 'axios';
import head from '../images/kayne_head.png'
import '../App.css';

const Quotes = () =>{

    const [quote, setQuote] = useState([])

    const newQuote = () =>{
            axios
            
            .get('https://api.kanye.rest')
        
            .then(respose =>{
                console.log(respose.data)
                setQuote(respose.data.quote);
            },[])
    }

    var audio = new Audio('../sounds/Yo.mp3')

    const funHolder = () =>{
        newQuote();
        audio.play();
    }
    return(
        <div>
            <image src={head} alt='the crown'/>
            <p className='Quote'>
                Kayne Preaches: {quote} 
            </p>
            <button onClick={()=>funHolder()}>The Gospel </button>
        </div>
        
    );
}

export default Quotes;
