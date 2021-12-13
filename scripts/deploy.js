const hre = require("hardhat");

async function main() {
  const NazlilToken = await hre.ethers.getContractFactory("NazlilToken");
  const nazlilToken = await NazlilToken.deploy("1000000000000000000000000000");

  await nazlilToken.deployed();

  console.log("Token deployed to:", nazlilToken.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
