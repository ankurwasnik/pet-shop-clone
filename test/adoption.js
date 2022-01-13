const Adoption = artifacts.require("Adoption");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
<<<<<<< HEAD
contract("Adoption", function ( accounts) {
  // it("should assert true", async function () {
  //   await adoption.deployed();
  //   return assert.isTrue(true);
  // });

  describe('First group of tests', () => {
    let instance ;
    before(async() => {
      instance = await Adoption.deployed() ;
    });

    //test 1
    it('User should adopt a pet', async () => {
      await instance.adopt.sendTransaction(8,{from:accounts[0]}) ;
      let adopter = await instance.adopters.call(8) ;
      assert.equal( accounts[0] , adopter , "Incorrect owner address")
    });

    //test 2 
    it("Should record owner address in adopters by pet id", async ()=>{
      let adopters = await instance.getAdopters.call() ;
      assert.equal( adopters[8], accounts[0] , "Owner of pet id should be recoreded") ;
    })

    //test 3 
    it("Should throw error for valid pet id" , async ()=>{
      try{
        await instance.adopt.sendTransaction(17, { from: accounts[0] });
        assert.fail(true, false, "[This function did not throw error]");
      }
      catch(error){
        assert.include(String(error), "revert",`Expected "revert" instead got ${error}`);
      }
      

    })

  });
=======
contract("Adoption", function ( accounts ) {
    describe('First group of tests',()=>{
        let instance;

        before(async ()=>{
            instance = await Adoption.deployed() ;
        });
        
        it('User should adopt a pet' ,async ()=>{
            await instance.adopt.sendTransaction(8,{from:accounts[0]});
            let adopter = await instance.adopters.call(8) ;
            assert.equal(adopter , accounts[0], "incorrect owner address");
        });

        it('Should get adopter address by pet id in array', async ()=>{
            let adopters = await instance.getAdopters.call() ;
            assert.equal(adopters[8],accounts[0],'Owner of pet id should be recorded in the array');
        });

        it('should throw if invalid pet id is given',async ()=>{
            try{
                await instance.adopt.sendTransaction(17,{from:accounts[0]});
                assert.fail(true,false,'This function did not throw');
            }
            catch(error){
                assert.include(String(error),"revert",`Expected "revert" but instead got ${error}`);
            }
        })


    });
>>>>>>> 4af4cb3 (initial commit)
});
