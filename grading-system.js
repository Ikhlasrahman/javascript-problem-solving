/** Build a grading system using a
 *  marks variable (A+, A, B, C, F) —
 * it must have at least 5 condition branches.
 */

const mark = 39;

if (mark >= 80) {
  console.log("Your grade is A+");
} else if (mark >= 70) {
  console.log("Your grade is A");
} else if (mark >= 60) {
  console.log("Your grade is B");
} else if (mark >= 50) {
  console.log("Your grade is C");
} else {
  console.log("Your are failed");
}
