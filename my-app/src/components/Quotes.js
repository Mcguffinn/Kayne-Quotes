import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';
import {Howl} from 'howler';
import yo from '../sounds/Yo.mp3'
import robot from '../sounds/A robot.mp3'
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';


const Quotes = () =>{

    const [quote, setQuote] = useState([])
    const [showMessage, setShowMessage] = useState(false);
    const [showButton, setShowButton] = useState(true);

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

    


    return(
        <div className="bubble-wrap">
            <source src="../sounds/Yo.mp3" type="audio/mp3"/>
            
            <div className='bubble'>
                <Container style={{paddingTop: '2rem'}} >
                    <Button onClick={()=> { 
                        funHolder(); 
                        setShowMessage(true);
                        }}
                        size="lg"
                        >
                        The Gospel 
                    </Button>
                    <CSSTransition 
                        in={showMessage} 
                        timeout={300} 
                        classNames='alert' 
                        unmountOnExit onEnter={() => setShowButton(false)}
                        onExited={() => setShowButton(true)}>

                        <Alert variant="primary" dismissible onClose={()=> setShowMessage(false)}>
                            <Alert.Heading>
                                Kayne Preaches:
                            </Alert.Heading>
                            <p className='Quote'>
                                {quote} 
                            </p>
                            {/* <Button onClick={() => setShowMessage(false)}>
                                Close
                            </Button> */}
                        </Alert>

                    </CSSTransition>
                </Container>
            </div>
        </div>
    );
}

export default Quotes;



// props.myRef.hover(
//     function() {
//         speachBubble.css({
//             "animation-name": 'expand-bounce',
//             "animation-duration": ".025s"
//         });
//     },
//     function(){
//         speachBubble.css({
//             "animation-name": "shrink",
//             "animation-duration": "0.1s"
//         })
//     }
// )