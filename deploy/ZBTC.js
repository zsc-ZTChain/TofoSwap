module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const { address } = await deploy("ZBTC", {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    gasLimit: 5198000,
    args: [deployer, deployer],
  })

  console.log(`ZBTC token deployed at ${address}`)
}

module.exports.tags = ["ZBTC"]
module.exports.dependencies = ["WZTB"]
