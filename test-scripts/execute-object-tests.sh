#!/bin/bash

#type-tests
/bin/bash ./execute-test-plan mongodb delete-type type-tests
/bin/bash ./execute-test-plan postgres delete-type type-tests

/bin/bash ./execute-test-plan mongodb create-type type-tests
/bin/bash ./execute-test-plan postgres create-type type-tests

/bin/bash ./execute-test-plan mongodb get-all-types type-tests
/bin/bash ./execute-test-plan postgres get-all-types type-tests

/bin/bash ./execute-test-plan.sh mongodb get-type type-tests
/bin/bash ./execute-test-plan.sh postgres get-type type-tests

/bin/bash ./execute-test-plan mongodb update-type type-tests
/bin/bash ./execute-test-plan postgres update-type type-tests

#object tests
