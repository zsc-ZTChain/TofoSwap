module.exports = async function ({ getNamedAccounts, deployments, ...rest }) {
  const { deploy } = deployments

  const { deployer } = await getNamedAccounts()

  const { address } = await deploy("WZTB", {
    from: deployer,
    log: true,
    deterministicDeployment: false,
    gasLimit: 5198000,
  })

  console.log((await ethers.getContractFactory("WZTB", deployer)).address)

  console.log(`WZTB token deployed at ${address}`)
}

module.exports.tags = ["WZTB"]
