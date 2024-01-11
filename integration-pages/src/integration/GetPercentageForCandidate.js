import { useState } from "react";

export function GetPercentageForCandidate({state}) {
    const [percent, setPercent] = useState("");
    const [name, setName] = useState("");
    const getPercentageForCandidate = async(event) => {
        event.preventDefault();
        const {contract} = state;
        
        
        try {
            const per = await contract.getPercentageForCandidate(name);
            await setPercent(per.toString());
            console.log("name: ", name);
        } catch (error){
            console.log(error);
        }
    }
    return (
        <form onSubmit={getPercentageForCandidate}>
        <label>Name: </label>
        <input type='text' 
        value={name} 
        onChange={e => setName(e.target.value)} 
        
         placeholder='Enter your name'/>
        <br/>
        <br/>
        <button
            type='submit'
            disabled = {!state.contract} 
        >Get Percentage</button>
        <p>Percentage: {percent}</p>
    </form>
    );
}
