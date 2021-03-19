// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "@openzeppelin/contracts/token/ERC20/ERC20Pausable.sol";

contract ERC20Template is ERC20Pausable {
    address _operator;
    address _pauser;
    constructor(address operator,address pauser,string memory name, string memory symbol,uint8 decimal) public ERC20(name,symbol) {
        _operator = operator;
        _pauser=pauser;
        _setupDecimals(decimal);
    }

    modifier onlyOperator(){
        require(msg.sender == _operator,"not allowed");
        _;
    }
    modifier onlyPauser(){
        require(msg.sender == _pauser,"not allowed");
        _;
    }

    function pause() public  onlyPauser{
        _pause();
    }

    function unpause() public  onlyPauser{
        _unpause();
    }

    function changeOperator(address new_operator) public onlyOperator{
        _operator = new_operator;
    }

    function changePauser(address new_pauser) public onlyPauser{
        _pauser = new_pauser;
    }

    function mint(address account, uint256 amount) public whenNotPaused onlyOperator {
        _mint(account, amount);
    }
    function burn(address account , uint256 amount) public whenNotPaused onlyOperator {
        _burn(account,amount);
    }
}
