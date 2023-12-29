const hre = require("hardhat");

async function main() {
  
  const election = await hre.ethers.deployContract("Election");

  // await election.waitForDeployment();

  console.log(election.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

//0xC42F04315C41f48E6bEa0941381E4f423799Fc45