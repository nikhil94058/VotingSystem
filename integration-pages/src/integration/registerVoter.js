

export function registerVoter({state}) {
    const register = async () => {
        const {contract} = state;
        const name = "";
        const address = "";
        const transaction = await contract.registerVoter(name, address);
        console.log("Transaction is done");
    }
    return (
        <form onSubmit = {register}>
            <label>Name</label>
            <input type='text' id='name' placeholder='Enter your name'/>
            <label>Address</label>
            <input
                type='text'
                id = 'address'
                placeholder='Enter your address'
            />
            <button
                type='submit'
                disabled = {!state.contract} 
            >Register</button>
        </form>
    );
}