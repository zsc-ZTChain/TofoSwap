// SPDX-License-Identifier: MIT
pragma solidity 0.6.12;

import "./ERC20Template.sol";

contract ZBTC is ERC20Template {
    constructor(address operator, address pauser) public ERC20Template(operator, pauser, "ZT BTC Token", "ZBTC", 18) {
    }
}
