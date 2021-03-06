// A non-empty array A consisting of N integers is given. A pair of integers (P, Q), such that 0 ≤ P < Q < N, is called a slice of array A (notice that the slice contains at least two elements). The average of a slice (P, Q) is the sum of A[P] + A[P + 1] + ... + A[Q] divided by the length of the slice. To be precise, the average equals (A[P] + A[P + 1] + ... + A[Q]) / (Q − P + 1).

// For example, array A such that:

//     A[0] = 4
//     A[1] = 2
//     A[2] = 2
//     A[3] = 5
//     A[4] = 1
//     A[5] = 5
//     A[6] = 8
// contains the following example slices:

// slice (1, 2), whose average is (2 + 2) / 2 = 2;
// slice (3, 4), whose average is (5 + 1) / 2 = 3;
// slice (1, 4), whose average is (2 + 2 + 5 + 1) / 4 = 2.5.
// The goal is to find the starting position of a slice whose average is minimal.

// Write a function:

// function solution(A);

// that, given a non-empty array A consisting of N integers, returns the starting position of the slice with the minimal average. If there is more than one slice with a minimal average, you should return the smallest starting position of such a slice.

// For example, given array A such that:

//     A[0] = 4
//     A[1] = 2
//     A[2] = 2
//     A[3] = 5
//     A[4] = 1
//     A[5] = 5
//     A[6] = 8
// the function should return 1, as explained above.

// Write an efficient algorithm for the following assumptions:

// N is an integer within the range [2..100,000];
// each element of array A is an integer within the range [−10,000..10,000].

function solutionA(A) {
  const B = []
  const C = []
  let min = Number.POSITIVE_INFINITY
  let result
  for (let i = 0; i < A.length - 1; i++) {
    B[i] = (A[i] + A[i + 1]) / 2
    if (B[i] < min) {
      min = B[i]
      result = i
    }
  }

  for (let i = 0; i < A.length - 2; i++) {
    C[i] = (A[i] + A[i + 1] + A[i + 2]) / 3
    if (C[i] < min) {
      min = C[i]
      result = i
    }
  }

  return result
}

function solution(A) {
  let temp = A[0] + A[1]
  let resultAvg = temp / 2
  let result = 0

  for (let i = 2; i < A.length; i++) {
    temp += A[i]
    let minAvg = temp / 3
    if (minAvg < resultAvg) {
      resultAvg = minAvg
      result = i - 2
      console.log('3', i)
    }

    temp -= A[i - 2]
    minAvg = temp / 2
    if (minAvg < resultAvg) {
      resultAvg = minAvg
      result = i - 1
      console.log('2', i)
    }

    console.log('loop', i)
  }

  return result
}

function solutionB(A) {
  let start = 0
  let currentSum = A[0] + A[1]
  let minAvgSlice = currentSum / 2
  for (let i = 2; i < A.length; i++) {
    currentSum += A[i]
    let newAvg = currentSum / 3
    if (newAvg < minAvgSlice) {
      minAvgSlice = newAvg
      start = i - 2
    }

    currentSum -= A[i - 2]
    newAvg = currentSum / 2
    if (newAvg < minAvgSlice) {
      minAvgSlice = newAvg
      start = i - 1
    }
    console.log('loop', i)
  }

  return start
}

const arr = [4, 2, 2, 5, 1, 5, 8]
// We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

console.log(solution(arr)) // 5
