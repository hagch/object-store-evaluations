#!/bin/bash

#type-tests
#/bin/bash ./execute-test-plan.sh mongodb delete-type type-tests
#/bin/bash ./execute-test-plan.sh postgres delete-type type-tests

#/bin/bash ./execute-test-plan.sh mongodb get-type type-tests
#/bin/bash ./execute-test-plan.sh postgres get-type type-tests

#/bin/bash ./execute-test-plan.sh mongodb update-type type-tests
#/bin/bash ./execute-test-plan.sh postgres update-type type-tests

#/bin/bash ./execute-test-plan.sh postgres get-all-types type-tests
#/bin/bash ./execute-1000-test-plan.sh postgres create-type type-tests

/bin/bash ./execute-test-plan.sh mongodb get-all-types type-tests

/bin/bash ./execute-test-plan.sh mongodb create-type type-tests

/bin/bash ./execute-test-plan.sh mongodb update-type type-tests

