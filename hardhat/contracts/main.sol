pragma solidity ^0.8.5;

contract HelloWorld {
    string public greet = "Hello World!";
    uint count = 100;
    //return count
    function getCount1() public view returns (uint) {
        return count;
    }
}