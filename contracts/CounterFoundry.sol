// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract CounterFoundry {
    uint256 public count;

    function setCount(uint256 _newCount) public {
        count = _newCount;
    }

    // Function  to get the current count
    function getCount() public view returns (uint256) {
        return count;
    }

    // Function to increment the count value by 1
    function incrementCount() public  {
        count += 1;
    }

    // Function to decrement the count value by 1
    function decrementCount() public {
        // Prevent underflow
        require(count > 0, "Counter: cannot decrement value below zero");
        count -= 1;
    }

    // Function to reset the value of the count to zero
    function reset() public {
        count = 0;
    }

}