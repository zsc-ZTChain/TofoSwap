module.exports = async function ({ getNamedAccounts, deployments, ethers }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const { address } = await deploy("ZUSD", {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    gasLimit: 5198000,
    args: [deployer, deployer],
  })

  console.log(`ZUSD token deployed at ${address}`)
}

module.exports.tags = ["ZUSD"]
module.exports.dependencies = ["WZTB"]
