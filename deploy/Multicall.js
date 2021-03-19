module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const { address } = await deploy("Multicall", {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    gasLimit: 5198000,
  })

  console.log(`Multicall deployed at ${address}`)
}

module.exports.tags = ["Multicall"]