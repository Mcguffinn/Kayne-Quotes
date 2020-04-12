import React, {useState, useEffect} from 'react';
import axios from 'axios';
import '../App.css';
import {Howl, Howler} from 'howler';
import yo from '../sounds/Yo.mp3'
import robot from '../sounds/A robot.mp3'

const head = document.getElementById('Kanye');
const speachBubble = document.getElementById('bubble');

const Quotes = props =>{

    const [quote, setQuote] = useState([])

    const newQuote = () =>{
            axios
            
            .get('https://api.kanye.rest')
        
            .then(respose =>{
                console.log(respose.data)
                setQuote(respose.data.quote);
            },[])
    }

    

    const funHolder = () =>{
        const audio = new Howl({
            src:[yo, robot],
            html5: true,
        });
        // audio.type=`audio/mp3`;

        try{
            audio.play();
            console.log('Playing... ');
        }catch (error){
            console.log("It didnt work..." + error);
        }
        newQuote();
    }

    

    props.myRef.hover(
        function() {
            speachBubble.css({
                "animation-name": 'expand-bounce',
                "animation-duration": ".025s"
            });
        },
        function(){
            speachBubble.css({
                "animation-name": "shrink",
                "animation-duration": "0.1s"
            })
        }
    )
    return(
        <div className="bubble-wrap">
            <source src="../sounds/Yo.mp3" type="audio/mp3"/>
            <button onClick={()=>funHolder()}>The Gospel </button>
            <div className='bubble'>
                <p className='Quote'>
                    Kayne Preaches: {quote} 
                </p>
            </div>
        </div>
    );
}

export default Quotes;
