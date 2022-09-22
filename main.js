const assert = require('assert');

function countBatteriesByUsage(cycles) {
  var lowCount=0;
  var mediumCount=0;
  var highCount=0;
  cycles.forEach(cycle=> {
    if(cycle<410){
      lowCount+=1;
    }else if(cycle>=410 && cycle<909){
      mediumCount+=1;
    }else{
      highCount+=1;
    }
  });


  return {
    lowCount,
    mediumCount,
    highCount
  };
}

function testBucketingByNumberOfCycles() {
  console.log('Counting batteries by usage cycles...')
  counts = countBatteriesByUsage([100, 300, 410, 500, 600, 900, 909, 1000]); //test with boundary conditions
  assert(counts["lowCount"] == 2);
  assert(counts["mediumCount"] == 4);
  assert(counts["highCount"] == 2);
  console.log("Done counting :)");
}

testBucketingByNumberOfCycles();
