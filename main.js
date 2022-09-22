const assert = require('assert');

function countBatteriesByUsage(cycles) {
  var low=0;
  var medium=0;
  var high=0;
  cycles.forEach(cycle=> {
    if(cycle<410){
      low+=1;
    }else if(cycle>=410 && cycle<909){
      medium+=1;
    }else{
      high+=1;
    }
  });


  return {
    lowCount:low,
    mediumCount:medium,
    highCount:high
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
