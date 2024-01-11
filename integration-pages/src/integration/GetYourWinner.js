import { useState } from "react";

export function GetYourWinner({state}) {
    const [winner, setWinner] = useState("");
    const getYourWinner = async(event) => {
        event.preventDefault();
        const {contract} = state;
        try {
            const win = await contract.getYourWinner();
            setWinner(win);
        } catch (error){
            console.log(error);
        }
    }
    return (
        <div>
            <button onClick={getYourWinner} disabled = {!state.contract} >Get Your Winner</button>
            <p>Winner: {winner}</p>
        </div>
    );
}
