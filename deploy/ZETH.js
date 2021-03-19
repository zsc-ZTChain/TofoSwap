module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const { address } = await deploy("ZETH", {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    gasLimit: 5198000,
    args: [deployer, deployer],
  })

  console.log(`ZETH token deployed at ${address}`)
}

module.exports.tags = ["ZETH"]
module.exports.dependencies = ["WZTB"]
