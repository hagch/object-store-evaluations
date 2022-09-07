#!/bin/bash

test_db_name=$1 #mongodb or postgres
test_name=$2 #delete-type
test_object=$3 #type-tests or object-tests
test_src_path=~/developers-happy-place/FH/ba/object-store-${test_db_name}-service

test_type="100x200"


cd ${test_src_path}
./shutdown.sh
./startup.sh
sleep 1m

cd ~/developers-happy-place/FH/ba/end-tests/apache-jmeter-5.5-SNAPSHOT/bin
mkdir -p ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}
rm -rf ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}/*

sh jmeter -n -t ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/jmeter-test-scenarios/${test_type}.jmx -l ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}/${test_db_name}.csv -e -o ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}

cd ${test_src_path}
./shutdown.sh

test_type="500x200"


cd ${test_src_path}
./startup.sh
sleep 1m

cd ~/developers-happy-place/FH/ba/end-tests/apache-jmeter-5.5-SNAPSHOT/bin
mkdir -p ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}
rm -rf ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}/*

sh jmeter -n -t ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/jmeter-test-scenarios/${test_type}.jmx -l ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}/${test_db_name}.csv -e -o ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}

cd ${test_src_path}
./shutdown.sh

test_type="1000x200"


cd ${test_src_path}
./startup.sh
sleep 1m

cd ~/developers-happy-place/FH/ba/end-tests/apache-jmeter-5.5-SNAPSHOT/bin
mkdir -p ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}
rm -rf ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}/*

sh jmeter -n -t ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/jmeter-test-scenarios/${test_type}.jmx -l ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}/${test_db_name}.csv -e -o ~/developers-happy-place/FH/ba/end-tests/${test_object}/${test_name}/${test_type}/${test_db_name}

cd ${test_src_path}
./shutdown.sh
