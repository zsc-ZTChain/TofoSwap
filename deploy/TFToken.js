module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const { address } = await deploy("TFToken", {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    gasLimit: 5198000,
  })

  console.log(`TF token deployed at ${address}`)
}

module.exports.tags = ["TFToken"]
module.exports.dependencies = ["UniswapV2Factory"]
