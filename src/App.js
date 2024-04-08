// We're importing some images and styles for our app
import logo from './imajea/dee_load_screen.png';
import spinning_pizza from './imajea/PIZZA.png'
import bunny from './imajea/bunnypic.jpg'
import splat from './imajea/splat.png'
import './App.css';

// We're importing some tools from React that we'll use to build our app
import { useState, useEffect } from 'react';

// This is our App component, a piece of our application that does a specific job
function App() {

    // We're setting up some pieces of data (state) that our component needs to remember
    const [firstNumber, setFirstNumber] = useState(0); // This is the first number in our multiplication problem
    const [secondNumber, setSecondNumber] = useState(0); // This is the second number in our multiplication problem
    const [actualAnswer, setActualAnswer] = useState(0); // This is the correct answer to our multiplication problem
    const [typedAnswer, setTypedAnswer] = useState(""); // This is what the user types as their answer
    const [correct, setCorrect] = useState(false); // This will be true if the user's answer is correct, and false if it's not
    const [clicked, setClicked] = useState(false) // This will be true if the user has clicked the "Check Answer" button
    const [showReset, setShowReset] = useState(false);// Add a new state variable to track if the reset button should be shown

    // This code runs when the component first appears on the screen
    useEffect(() => {
        // We're randomly picking two numbers between 0 and 12 for our multiplication problem
        setFirstNumber(Math.floor(Math.random() * (11)));
        setSecondNumber(Math.floor(Math.random() * (11)));
    }, []);

    // This code runs whenever firstNumber or secondNumber changes
    useEffect(() => {
        // We're calculating the correct answer to our multiplication problem
        setActualAnswer(firstNumber * secondNumber);
    }, [firstNumber, secondNumber]);

    // This function runs when the user clicks the "Check Answer" button
    const checkAnswer = () => {
        setCorrect(parseInt(typedAnswer) === actualAnswer);
        setClicked(true);
        setShowReset(true); // Show the reset button
    };

    // This function resets the page
    const resetPage = () => {
        setTypedAnswer("");
        setClicked(false);
        setCorrect(false);
        setShowReset(false); // Hide the reset button
        setFirstNumber(Math.floor(Math.random() * (11)));
        setSecondNumber(Math.floor(Math.random() * (11)));
    };
    // This is what our component looks like
    // This is what our component looks like
    return (
        <div className="App"> {/* This is the main container for our app */}
            <header className="App-header"> {/* This is the header section of our app */}
                <h1> {/* This is a heading */}
                    {firstNumber} x {secondNumber} ={" "} {/* We're displaying the multiplication problem */}
                    <input
                        className="answerfield" // This is the CSS class for our input field 
                        type="text" // Our input field is a text field
                        value={typedAnswer} // The value in our input field is whatever the user has typed as their answer
                        onChange={(e) => { // When the user types something, we update typedAnswer
                            // Check if the input is a number and its length is less than or equal to 3
                            if (!isNaN(e.target.value) && e.target.value.length <= 3) {
                                setTypedAnswer(e.target.value)
                            }
                        }}
                    />
                    {clicked && <span style={{ marginLeft: "10px" }}>{correct ? "✔" : "❌"}</span>} {/* If the user has clicked the "Check Answer" button, we display a checkmark or an X, depending on whether their answer was correct */}
                    <br /> {/* This is a line break */}
                    {/* This is the "Check Answer" button. When it's clicked, we run the checkAnswer function */}
                    {showReset ? (
                        <input type="button" value="Reset" onClick={resetPage} />
                    ) : (
                        <input type="button" value="Check Answer" onClick={checkAnswer} />
                    )} 
                </h1>
                <img src={logo} className="App-logo" alt="logo" /> {/* This is an image */}
                <p>PIZZA GIRL!!!</p> {/* This is a paragraph of text */}
                <img src={spinning_pizza} className="peza" alt="pizza" /> {/* This is another image */}
                <hr width="50%" /> {/* This is a horizontal line */}
                <p>My fave animal 😁</p> {/* This is another paragraph of text */}
                <a href="https://www.google.com/search?q=bunny&tbm=isch"> {/* This is a link. When clicked, it will take the user to a Google Images search for "bunny" */}
                    <div className="bunnydiv"> {/* This is a container for the bunny image and the "click me" text */}
                        <img src={bunny} className="bunnypic" alt="bunny" /> {/* This is the bunny image */}
                        <p>⬆ click me ⬆</p> {/* This is the "click me" text */}
                    </div>
                </a>
                <br /><br /> {/* These are two line breaks */}
                <hr width="50%" /> {/* This is another horizontal line */}
                <p>My fave colour 😜</p> {/* This is another paragraph of text */}
                <a href='https://fiberglasswarehouse.com/cdn/shop/files/ForestGreen1610_grande.jpg'> {/* This is another link. When clicked, it will take the user to an image of a green color */}
                    <img src={splat} className="splat" alt="splat" /> {/* This is an image of a color splat */}
                    <p>⬆ click me ⬆</p> {/* This is another "click me" text */}
                </a>
                <hr width="50%" /> {/* This is another horizontal line */}
            </header>
        </div>
    );

}
// This makes our App component available to other parts of our application
export default App;
