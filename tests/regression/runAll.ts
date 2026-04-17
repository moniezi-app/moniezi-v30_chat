import { runMileageDraftTests } from "./mileageDraft.test.js";
import { runHashRoutingTests } from "./hashRouting.test.js";

runMileageDraftTests();
runHashRoutingTests();

console.log("Regression tests passed: mileage draft + hash routing");
