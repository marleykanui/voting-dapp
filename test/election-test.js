let Election = arifacts.require('./Election.sol');

// Start a test on the Election contract
contract('Election', (accounts) => {
  // Make sure this test initializes two candidates
  it('Initializes with two candidates', () => {
    //   fetch an instance of deployed contract
    return (
      Election.deployed()
        .then((instance) => {
          // Once we have the instance we can then fetch our candidates count
          return instance.candidatesCount();
        })
        // since calling the candidatesCount function is also an asychronous call
        // We should be the return value in a then call
        .then((count) => {
          // Once we have the return value count we can then use the chai library
          // assert to make sure the candidate count equals what we are expecting
          // which is 2
          assert.equal(count, 2);
        })
    );
  });
});
