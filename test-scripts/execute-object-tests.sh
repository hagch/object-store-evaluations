#!/bin/bash

/bin/bash ./execute-test-plan.sh mongodb delete-object object-tests
/bin/bash ./execute-test-plan.sh postgres delete-object object-tests

/bin/bash ./execute-test-plan.sh mongodb create-object object-tests
/bin/bash ./execute-test-plan.sh postgres create-object object-tests

/bin/bash ./execute-test-plan.sh mongodb get-object object-tests
/bin/bash ./execute-test-plan.sh postgres get-object object-tests

/bin/bash ./execute-test-plan.sh mongodb update-object object-tests
/bin/bash ./execute-test-plan.sh postgres update-object object-tests
