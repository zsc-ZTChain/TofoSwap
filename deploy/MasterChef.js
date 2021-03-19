module.exports = async function ({ ethers, deployments, getNamedAccounts }) {
  const { deploy } = deployments

  const { deployer, dev } = await getNamedAccounts()

  const tf = await deployments.get("TFToken")

  console.log("Deploying Master Chef", deployer)

  const { address, newlyDeployed } = await deploy("MasterChef", {
    from: deployer,
    args: [tf.address, "20000000000000000000", "0"],
    log: true,
    deterministicDeployment: false,
    gasLimit: 5198000,
  })

  if (newlyDeployed) {
    const tf = await ethers.getContract("TFToken")

    // Transfer tf Ownership to Chef
    await (await tf.transferOwnership(address, { gasLimit: 5198000 })).wait()

    // Transfer ownership of MasterChef to dev
    const masterChef = await ethers.getContract("MasterChef")
    await (await masterChef.transferOwnership(dev, { gasLimit: 5198000 })).wait()
  }

  console.log("Master Chef Deployed")
}

module.exports.tags = ["MasterChef"]
module.exports.dependencies = ["UniswapV2Factory", "TFToken"]
