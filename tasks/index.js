const { task } = require("hardhat/config")

// task("masterchef:add", "Add pool to masterchef")
// .setAction(async function (taskArguments, { ethers: { getNamedSigner } }, runSuper) {
//   const masterChef = await ethers.getContract("MasterChef")

//   await (await masterChef.connect(await getNamedSigner("dev")).add(1000, '0xC41d85Ff59C0161E0dBEB77905184F14201b21AB', true)).wait()
//   console.log(111)
// });

async function main() {
  const signer = await ethers.getNamedSigner('dev');
  const masterChef = await ethers.getContract("MasterChef")
  // await (await masterChef.connect(signer).add(1000, '0xC41d85Ff59C0161E0dBEB77905184F14201b21AB', true)).wait()
  await (await masterChef.connect(signer).add(10000, '0xBCB22001C2252F3B722C5E78C26853B17b70a6BC', true)).wait()

  console.log(111)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
