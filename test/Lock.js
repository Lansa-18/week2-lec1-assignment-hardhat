const { expect } = require("chai");
const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("CounterFoundry", function () {
  async function deployCounterFixture() {
    const Counter = await ethers.getContractFactory("CounterFoundry");
    const counter = await Counter.deploy();
    return { counter };
  }

  describe("Deployment", function () {
    it("Should initialize with count of 0", async function () {
      const { counter } = await loadFixture(deployCounterFixture);
      expect(await counter.getCount()).to.equal(0);
    });
  });

  describe("Counter Operations", function () {
    it("Should set count to specified value", async function () {
      const { counter } = await loadFixture(deployCounterFixture);
      await counter.setCount(5);
      expect(await counter.getCount()).to.equal(5);
    });

    it("Should increment by 1", async function () {
      const { counter } = await loadFixture(deployCounterFixture);
      await counter.incrementCount();
      expect(await counter.getCount()).to.equal(1);
    });

    it("Should decrement count by 1", async function () {
      const { counter } = await loadFixture(deployCounterFixture);
      await counter.setCount(2);
      await counter.decrementCount();
      expect(await counter.getCount()).to.equal(1);
    });

    it("Should revert when decrementing at zero", async function () {
      const { counter } = await loadFixture(deployCounterFixture);
      await expect(counter.decrementCount()).to.be.revertedWith(
        "Counter: cannot decrement value below zero"
      );
    });

    it("Should reset count to zero", async function () {
      const { counter } = await loadFixture(deployCounterFixture);
      await counter.setCount(5);
      await counter.reset();
      expect(await counter.getCount()).to.equal(0);
    });
  });
});
