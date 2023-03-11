/* We are given a set of meeting times. Our job is to implement a solution that can identify the number of 
meeting rooms needed to schedule the required meetings. Each time will contain a startTime and an endTime that are both positive integers. */

const Heap = require('collections/heap');

function minMeetingRooms(meetingTimes) {
  var heap = new Heap();

  if (meetingTimes == null || meetingTimes.length == 0) {
    return 0;
  }

  meetingTimes.sort(function(a, b) {
    return a[0] - b[0];
  });

  heap.push(meetingTimes[0][1]);

  for (var i = 1; i < meetingTimes.length; i++) {
    var currStart = meetingTimes[i][0];
    var currEnding = meetingTimes[i][1];
    earliestEnding = heap.min();

    if (earliestEnding <= currStart) {
      heap.pop();
    }
    //update heap with curr ending
    heap.push(currEnding);
  }

  return heap.length;
}

// Driver code
var meetingTimes = [
  [2, 8],
  [3, 4],
  [3, 9],
  [5, 11],
  [8, 20],
  [11, 15],
];
console.log(minMeetingRooms(meetingTimes));
