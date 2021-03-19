module.exports = async function ({ getNamedAccounts, deployments, ethers }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const { address } = await deploy("BONBON", {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    gasLimit: 5198000,
    args: [deployer, deployer],
  })

  console.log(`BONBON token deployed at ${address}`)
}

module.exports.tags = ["BONBON"]
module.exports.dependencies = ["WZTB"]
