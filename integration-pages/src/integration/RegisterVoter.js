function RegisterVoter({state}) {
    const register = async (event) => {
        event.preventDefault();
        const {contract} = state;
        console.log("contract: ", contract);
        const name = document.querySelector("#name").value;
        const address = document.querySelector("#address").value;
        try {
            const transaction = await contract.registerVoter(name, address);
            console.log("Transaction is done: ", transaction);

        }
        catch (error){
            console.log(error); 
        }
    }
    return (
        <form onSubmit={register}>
            <label>Name: </label>
            <input type='text' id='name' placeholder='Enter your name'/>
            <br/>
            <br/>
            <label>Address: </label>
            <input
                type='text'
                id = 'address'
                placeholder='Enter your address'
            />
            <br/>
            <br/>
            <button
                type='submit'
                disabled = {!state.contract} 
            >Register</button>
        </form>
    )
}

export default RegisterVoter;