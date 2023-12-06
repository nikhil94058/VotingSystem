import abi from "./abi/Election.json";
const ethers = require('ethers');

export async function walletConnection() {
    const contractAddress = "0xA968B1898BD4f3bBCb414FcF353d0807d5DB23E6";
    const contractABI = abi.abi;
    try {
        const {ethereum} = window;
        if (ethereum){
            const account = await ethereum.request({
                method: "eth_requestAccounts",
            });
            window.ethereum.on("chainChanges", () => {
                window.location.reload();
            });
            window.ethereum.on("accountChanged", () => {
                window.location.reload();
            });
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(contractAddress, contractABI, signer);
            const state = {
                provider: provider,
                signer: signer,
                contract: contract
            };
            console.log(state);
            return(
                <div className="walletConnection">
                    <p>Connected Account: {account}</p>
                    <registerVoter state = {state}/>
                </div>
            );

        }
        else {
            alert("Please install Metamask");
        }
    }
    catch (error){
        console.log(error);
    }
}