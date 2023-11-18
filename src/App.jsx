import { useState } from "react";
import UserInput from "./Components/UserInput.jsx";
import Results from "./Components/Results.jsx";
function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10,
    });

    const InputValid = userInput.duration >= 1;

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue,
            };
        });
    }
    return (
        <>
            <header />
            <UserInput userInput={userInput} onChange={handleChange} />
            {!InputValid && (
                <p className="center">Enter a valid user Input data!</p>
            )}
            {InputValid && <Results input={userInput} />}
        </>
    );
}

export default App;
