/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 14.0, "minX": 0.0, "maxY": 9707.0, "series": [{"data": [[0.0, 14.0], [0.1, 195.0], [0.2, 415.0], [0.3, 439.0], [0.4, 446.0], [0.5, 450.0], [0.6, 455.0], [0.7, 460.0], [0.8, 462.0], [0.9, 465.0], [1.0, 468.0], [1.1, 472.0], [1.2, 474.0], [1.3, 477.0], [1.4, 479.0], [1.5, 482.0], [1.6, 485.0], [1.7, 489.0], [1.8, 493.0], [1.9, 497.0], [2.0, 501.0], [2.1, 507.0], [2.2, 510.0], [2.3, 516.0], [2.4, 522.0], [2.5, 529.0], [2.6, 538.0], [2.7, 554.0], [2.8, 570.0], [2.9, 582.0], [3.0, 607.0], [3.1, 630.0], [3.2, 646.0], [3.3, 674.0], [3.4, 715.0], [3.5, 755.0], [3.6, 774.0], [3.7, 807.0], [3.8, 837.0], [3.9, 840.0], [4.0, 848.0], [4.1, 855.0], [4.2, 860.0], [4.3, 864.0], [4.4, 866.0], [4.5, 867.0], [4.6, 869.0], [4.7, 870.0], [4.8, 871.0], [4.9, 872.0], [5.0, 873.0], [5.1, 874.0], [5.2, 875.0], [5.3, 875.0], [5.4, 875.0], [5.5, 876.0], [5.6, 876.0], [5.7, 877.0], [5.8, 877.0], [5.9, 878.0], [6.0, 878.0], [6.1, 878.0], [6.2, 878.0], [6.3, 879.0], [6.4, 879.0], [6.5, 879.0], [6.6, 880.0], [6.7, 880.0], [6.8, 880.0], [6.9, 881.0], [7.0, 881.0], [7.1, 881.0], [7.2, 882.0], [7.3, 882.0], [7.4, 882.0], [7.5, 883.0], [7.6, 883.0], [7.7, 883.0], [7.8, 883.0], [7.9, 884.0], [8.0, 884.0], [8.1, 884.0], [8.2, 884.0], [8.3, 884.0], [8.4, 885.0], [8.5, 885.0], [8.6, 885.0], [8.7, 886.0], [8.8, 886.0], [8.9, 886.0], [9.0, 886.0], [9.1, 886.0], [9.2, 887.0], [9.3, 887.0], [9.4, 887.0], [9.5, 887.0], [9.6, 887.0], [9.7, 888.0], [9.8, 888.0], [9.9, 888.0], [10.0, 888.0], [10.1, 889.0], [10.2, 889.0], [10.3, 889.0], [10.4, 889.0], [10.5, 889.0], [10.6, 890.0], [10.7, 890.0], [10.8, 890.0], [10.9, 890.0], [11.0, 891.0], [11.1, 891.0], [11.2, 891.0], [11.3, 891.0], [11.4, 891.0], [11.5, 892.0], [11.6, 892.0], [11.7, 892.0], [11.8, 892.0], [11.9, 892.0], [12.0, 893.0], [12.1, 893.0], [12.2, 893.0], [12.3, 893.0], [12.4, 894.0], [12.5, 894.0], [12.6, 894.0], [12.7, 894.0], [12.8, 895.0], [12.9, 895.0], [13.0, 895.0], [13.1, 895.0], [13.2, 895.0], [13.3, 896.0], [13.4, 896.0], [13.5, 896.0], [13.6, 896.0], [13.7, 896.0], [13.8, 897.0], [13.9, 897.0], [14.0, 897.0], [14.1, 897.0], [14.2, 897.0], [14.3, 898.0], [14.4, 898.0], [14.5, 898.0], [14.6, 898.0], [14.7, 898.0], [14.8, 898.0], [14.9, 899.0], [15.0, 899.0], [15.1, 899.0], [15.2, 899.0], [15.3, 899.0], [15.4, 899.0], [15.5, 899.0], [15.6, 900.0], [15.7, 900.0], [15.8, 900.0], [15.9, 900.0], [16.0, 900.0], [16.1, 900.0], [16.2, 900.0], [16.3, 901.0], [16.4, 901.0], [16.5, 901.0], [16.6, 901.0], [16.7, 901.0], [16.8, 901.0], [16.9, 901.0], [17.0, 902.0], [17.1, 902.0], [17.2, 902.0], [17.3, 902.0], [17.4, 902.0], [17.5, 902.0], [17.6, 902.0], [17.7, 903.0], [17.8, 903.0], [17.9, 903.0], [18.0, 903.0], [18.1, 903.0], [18.2, 903.0], [18.3, 903.0], [18.4, 904.0], [18.5, 904.0], [18.6, 904.0], [18.7, 904.0], [18.8, 904.0], [18.9, 904.0], [19.0, 904.0], [19.1, 905.0], [19.2, 905.0], [19.3, 905.0], [19.4, 905.0], [19.5, 905.0], [19.6, 905.0], [19.7, 905.0], [19.8, 906.0], [19.9, 906.0], [20.0, 906.0], [20.1, 906.0], [20.2, 906.0], [20.3, 906.0], [20.4, 906.0], [20.5, 906.0], [20.6, 907.0], [20.7, 907.0], [20.8, 907.0], [20.9, 907.0], [21.0, 907.0], [21.1, 907.0], [21.2, 907.0], [21.3, 907.0], [21.4, 908.0], [21.5, 908.0], [21.6, 908.0], [21.7, 908.0], [21.8, 908.0], [21.9, 908.0], [22.0, 909.0], [22.1, 909.0], [22.2, 909.0], [22.3, 909.0], [22.4, 909.0], [22.5, 909.0], [22.6, 909.0], [22.7, 909.0], [22.8, 910.0], [22.9, 910.0], [23.0, 910.0], [23.1, 910.0], [23.2, 910.0], [23.3, 910.0], [23.4, 910.0], [23.5, 911.0], [23.6, 911.0], [23.7, 911.0], [23.8, 911.0], [23.9, 911.0], [24.0, 912.0], [24.1, 912.0], [24.2, 912.0], [24.3, 912.0], [24.4, 912.0], [24.5, 912.0], [24.6, 912.0], [24.7, 913.0], [24.8, 913.0], [24.9, 913.0], [25.0, 913.0], [25.1, 913.0], [25.2, 913.0], [25.3, 913.0], [25.4, 914.0], [25.5, 914.0], [25.6, 914.0], [25.7, 914.0], [25.8, 914.0], [25.9, 914.0], [26.0, 914.0], [26.1, 915.0], [26.2, 915.0], [26.3, 915.0], [26.4, 915.0], [26.5, 915.0], [26.6, 915.0], [26.7, 915.0], [26.8, 916.0], [26.9, 916.0], [27.0, 916.0], [27.1, 916.0], [27.2, 916.0], [27.3, 916.0], [27.4, 916.0], [27.5, 917.0], [27.6, 917.0], [27.7, 917.0], [27.8, 917.0], [27.9, 917.0], [28.0, 917.0], [28.1, 917.0], [28.2, 918.0], [28.3, 918.0], [28.4, 918.0], [28.5, 918.0], [28.6, 918.0], [28.7, 918.0], [28.8, 919.0], [28.9, 919.0], [29.0, 919.0], [29.1, 919.0], [29.2, 919.0], [29.3, 919.0], [29.4, 919.0], [29.5, 920.0], [29.6, 920.0], [29.7, 920.0], [29.8, 920.0], [29.9, 920.0], [30.0, 920.0], [30.1, 920.0], [30.2, 920.0], [30.3, 921.0], [30.4, 921.0], [30.5, 921.0], [30.6, 921.0], [30.7, 921.0], [30.8, 921.0], [30.9, 922.0], [31.0, 922.0], [31.1, 922.0], [31.2, 922.0], [31.3, 922.0], [31.4, 922.0], [31.5, 922.0], [31.6, 923.0], [31.7, 923.0], [31.8, 923.0], [31.9, 923.0], [32.0, 923.0], [32.1, 923.0], [32.2, 923.0], [32.3, 923.0], [32.4, 924.0], [32.5, 924.0], [32.6, 924.0], [32.7, 924.0], [32.8, 924.0], [32.9, 925.0], [33.0, 925.0], [33.1, 925.0], [33.2, 925.0], [33.3, 925.0], [33.4, 925.0], [33.5, 926.0], [33.6, 926.0], [33.7, 926.0], [33.8, 926.0], [33.9, 926.0], [34.0, 927.0], [34.1, 927.0], [34.2, 927.0], [34.3, 927.0], [34.4, 927.0], [34.5, 927.0], [34.6, 928.0], [34.7, 928.0], [34.8, 928.0], [34.9, 928.0], [35.0, 928.0], [35.1, 928.0], [35.2, 928.0], [35.3, 929.0], [35.4, 929.0], [35.5, 929.0], [35.6, 929.0], [35.7, 929.0], [35.8, 930.0], [35.9, 930.0], [36.0, 930.0], [36.1, 930.0], [36.2, 930.0], [36.3, 930.0], [36.4, 930.0], [36.5, 931.0], [36.6, 931.0], [36.7, 931.0], [36.8, 931.0], [36.9, 931.0], [37.0, 931.0], [37.1, 931.0], [37.2, 932.0], [37.3, 932.0], [37.4, 932.0], [37.5, 932.0], [37.6, 932.0], [37.7, 932.0], [37.8, 933.0], [37.9, 933.0], [38.0, 933.0], [38.1, 933.0], [38.2, 933.0], [38.3, 933.0], [38.4, 934.0], [38.5, 934.0], [38.6, 934.0], [38.7, 934.0], [38.8, 934.0], [38.9, 934.0], [39.0, 935.0], [39.1, 935.0], [39.2, 935.0], [39.3, 935.0], [39.4, 935.0], [39.5, 935.0], [39.6, 935.0], [39.7, 936.0], [39.8, 936.0], [39.9, 936.0], [40.0, 936.0], [40.1, 936.0], [40.2, 936.0], [40.3, 937.0], [40.4, 937.0], [40.5, 937.0], [40.6, 937.0], [40.7, 937.0], [40.8, 937.0], [40.9, 938.0], [41.0, 938.0], [41.1, 938.0], [41.2, 938.0], [41.3, 938.0], [41.4, 938.0], [41.5, 938.0], [41.6, 939.0], [41.7, 939.0], [41.8, 939.0], [41.9, 939.0], [42.0, 939.0], [42.1, 939.0], [42.2, 940.0], [42.3, 940.0], [42.4, 940.0], [42.5, 940.0], [42.6, 940.0], [42.7, 940.0], [42.8, 941.0], [42.9, 941.0], [43.0, 941.0], [43.1, 941.0], [43.2, 941.0], [43.3, 941.0], [43.4, 942.0], [43.5, 942.0], [43.6, 942.0], [43.7, 942.0], [43.8, 942.0], [43.9, 942.0], [44.0, 942.0], [44.1, 943.0], [44.2, 943.0], [44.3, 943.0], [44.4, 943.0], [44.5, 943.0], [44.6, 944.0], [44.7, 944.0], [44.8, 944.0], [44.9, 944.0], [45.0, 944.0], [45.1, 944.0], [45.2, 944.0], [45.3, 945.0], [45.4, 945.0], [45.5, 945.0], [45.6, 945.0], [45.7, 945.0], [45.8, 945.0], [45.9, 945.0], [46.0, 946.0], [46.1, 946.0], [46.2, 946.0], [46.3, 946.0], [46.4, 946.0], [46.5, 946.0], [46.6, 946.0], [46.7, 947.0], [46.8, 947.0], [46.9, 947.0], [47.0, 947.0], [47.1, 947.0], [47.2, 947.0], [47.3, 947.0], [47.4, 948.0], [47.5, 948.0], [47.6, 948.0], [47.7, 948.0], [47.8, 948.0], [47.9, 948.0], [48.0, 949.0], [48.1, 949.0], [48.2, 949.0], [48.3, 949.0], [48.4, 949.0], [48.5, 949.0], [48.6, 950.0], [48.7, 950.0], [48.8, 950.0], [48.9, 950.0], [49.0, 950.0], [49.1, 950.0], [49.2, 951.0], [49.3, 951.0], [49.4, 951.0], [49.5, 951.0], [49.6, 951.0], [49.7, 951.0], [49.8, 951.0], [49.9, 952.0], [50.0, 952.0], [50.1, 952.0], [50.2, 952.0], [50.3, 952.0], [50.4, 953.0], [50.5, 953.0], [50.6, 953.0], [50.7, 953.0], [50.8, 953.0], [50.9, 954.0], [51.0, 954.0], [51.1, 954.0], [51.2, 954.0], [51.3, 954.0], [51.4, 954.0], [51.5, 955.0], [51.6, 955.0], [51.7, 955.0], [51.8, 955.0], [51.9, 955.0], [52.0, 955.0], [52.1, 956.0], [52.2, 956.0], [52.3, 956.0], [52.4, 956.0], [52.5, 956.0], [52.6, 956.0], [52.7, 957.0], [52.8, 957.0], [52.9, 957.0], [53.0, 957.0], [53.1, 957.0], [53.2, 957.0], [53.3, 958.0], [53.4, 958.0], [53.5, 958.0], [53.6, 958.0], [53.7, 958.0], [53.8, 958.0], [53.9, 959.0], [54.0, 959.0], [54.1, 959.0], [54.2, 959.0], [54.3, 959.0], [54.4, 959.0], [54.5, 959.0], [54.6, 960.0], [54.7, 960.0], [54.8, 960.0], [54.9, 960.0], [55.0, 960.0], [55.1, 960.0], [55.2, 961.0], [55.3, 961.0], [55.4, 961.0], [55.5, 961.0], [55.6, 961.0], [55.7, 961.0], [55.8, 962.0], [55.9, 962.0], [56.0, 962.0], [56.1, 962.0], [56.2, 962.0], [56.3, 962.0], [56.4, 962.0], [56.5, 963.0], [56.6, 963.0], [56.7, 963.0], [56.8, 963.0], [56.9, 963.0], [57.0, 963.0], [57.1, 963.0], [57.2, 964.0], [57.3, 964.0], [57.4, 964.0], [57.5, 964.0], [57.6, 964.0], [57.7, 965.0], [57.8, 965.0], [57.9, 965.0], [58.0, 965.0], [58.1, 965.0], [58.2, 965.0], [58.3, 966.0], [58.4, 966.0], [58.5, 966.0], [58.6, 966.0], [58.7, 966.0], [58.8, 967.0], [58.9, 967.0], [59.0, 967.0], [59.1, 967.0], [59.2, 967.0], [59.3, 968.0], [59.4, 968.0], [59.5, 968.0], [59.6, 968.0], [59.7, 968.0], [59.8, 969.0], [59.9, 969.0], [60.0, 969.0], [60.1, 969.0], [60.2, 970.0], [60.3, 970.0], [60.4, 970.0], [60.5, 970.0], [60.6, 970.0], [60.7, 970.0], [60.8, 971.0], [60.9, 971.0], [61.0, 971.0], [61.1, 971.0], [61.2, 971.0], [61.3, 971.0], [61.4, 972.0], [61.5, 972.0], [61.6, 972.0], [61.7, 972.0], [61.8, 973.0], [61.9, 973.0], [62.0, 973.0], [62.1, 973.0], [62.2, 973.0], [62.3, 973.0], [62.4, 974.0], [62.5, 974.0], [62.6, 974.0], [62.7, 974.0], [62.8, 974.0], [62.9, 974.0], [63.0, 975.0], [63.1, 975.0], [63.2, 975.0], [63.3, 975.0], [63.4, 975.0], [63.5, 976.0], [63.6, 976.0], [63.7, 976.0], [63.8, 976.0], [63.9, 976.0], [64.0, 976.0], [64.1, 977.0], [64.2, 977.0], [64.3, 977.0], [64.4, 977.0], [64.5, 977.0], [64.6, 978.0], [64.7, 978.0], [64.8, 978.0], [64.9, 978.0], [65.0, 979.0], [65.1, 979.0], [65.2, 979.0], [65.3, 979.0], [65.4, 979.0], [65.5, 980.0], [65.6, 980.0], [65.7, 980.0], [65.8, 980.0], [65.9, 980.0], [66.0, 981.0], [66.1, 981.0], [66.2, 981.0], [66.3, 981.0], [66.4, 981.0], [66.5, 982.0], [66.6, 982.0], [66.7, 982.0], [66.8, 982.0], [66.9, 982.0], [67.0, 983.0], [67.1, 983.0], [67.2, 983.0], [67.3, 983.0], [67.4, 984.0], [67.5, 984.0], [67.6, 984.0], [67.7, 984.0], [67.8, 984.0], [67.9, 985.0], [68.0, 985.0], [68.1, 985.0], [68.2, 985.0], [68.3, 985.0], [68.4, 986.0], [68.5, 986.0], [68.6, 986.0], [68.7, 986.0], [68.8, 987.0], [68.9, 987.0], [69.0, 987.0], [69.1, 987.0], [69.2, 988.0], [69.3, 988.0], [69.4, 988.0], [69.5, 988.0], [69.6, 989.0], [69.7, 989.0], [69.8, 989.0], [69.9, 989.0], [70.0, 989.0], [70.1, 990.0], [70.2, 990.0], [70.3, 990.0], [70.4, 990.0], [70.5, 991.0], [70.6, 991.0], [70.7, 991.0], [70.8, 991.0], [70.9, 992.0], [71.0, 992.0], [71.1, 992.0], [71.2, 992.0], [71.3, 993.0], [71.4, 993.0], [71.5, 993.0], [71.6, 994.0], [71.7, 994.0], [71.8, 994.0], [71.9, 995.0], [72.0, 995.0], [72.1, 995.0], [72.2, 996.0], [72.3, 996.0], [72.4, 996.0], [72.5, 997.0], [72.6, 997.0], [72.7, 998.0], [72.8, 998.0], [72.9, 998.0], [73.0, 999.0], [73.1, 999.0], [73.2, 1000.0], [73.3, 1000.0], [73.4, 1000.0], [73.5, 1001.0], [73.6, 1001.0], [73.7, 1002.0], [73.8, 1002.0], [73.9, 1003.0], [74.0, 1003.0], [74.1, 1004.0], [74.2, 1005.0], [74.3, 1006.0], [74.4, 1007.0], [74.5, 1007.0], [74.6, 1008.0], [74.7, 1009.0], [74.8, 1010.0], [74.9, 1011.0], [75.0, 1012.0], [75.1, 1013.0], [75.2, 1014.0], [75.3, 1015.0], [75.4, 1016.0], [75.5, 1016.0], [75.6, 1017.0], [75.7, 1018.0], [75.8, 1019.0], [75.9, 1020.0], [76.0, 1021.0], [76.1, 1022.0], [76.2, 1022.0], [76.3, 1023.0], [76.4, 1024.0], [76.5, 1025.0], [76.6, 1026.0], [76.7, 1027.0], [76.8, 1028.0], [76.9, 1029.0], [77.0, 1029.0], [77.1, 1030.0], [77.2, 1031.0], [77.3, 1032.0], [77.4, 1033.0], [77.5, 1034.0], [77.6, 1035.0], [77.7, 1036.0], [77.8, 1037.0], [77.9, 1038.0], [78.0, 1039.0], [78.1, 1041.0], [78.2, 1042.0], [78.3, 1044.0], [78.4, 1045.0], [78.5, 1047.0], [78.6, 1048.0], [78.7, 1050.0], [78.8, 1052.0], [78.9, 1053.0], [79.0, 1054.0], [79.1, 1055.0], [79.2, 1056.0], [79.3, 1057.0], [79.4, 1058.0], [79.5, 1059.0], [79.6, 1061.0], [79.7, 1063.0], [79.8, 1065.0], [79.9, 1067.0], [80.0, 1068.0], [80.1, 1070.0], [80.2, 1071.0], [80.3, 1073.0], [80.4, 1075.0], [80.5, 1077.0], [80.6, 1080.0], [80.7, 1082.0], [80.8, 1083.0], [80.9, 1085.0], [81.0, 1087.0], [81.1, 1089.0], [81.2, 1091.0], [81.3, 1092.0], [81.4, 1093.0], [81.5, 1095.0], [81.6, 1097.0], [81.7, 1099.0], [81.8, 1102.0], [81.9, 1104.0], [82.0, 1107.0], [82.1, 1110.0], [82.2, 1113.0], [82.3, 1117.0], [82.4, 1121.0], [82.5, 1123.0], [82.6, 1125.0], [82.7, 1126.0], [82.8, 1127.0], [82.9, 1128.0], [83.0, 1129.0], [83.1, 1130.0], [83.2, 1131.0], [83.3, 1131.0], [83.4, 1132.0], [83.5, 1133.0], [83.6, 1134.0], [83.7, 1135.0], [83.8, 1137.0], [83.9, 1138.0], [84.0, 1139.0], [84.1, 1140.0], [84.2, 1142.0], [84.3, 1145.0], [84.4, 1149.0], [84.5, 1151.0], [84.6, 1153.0], [84.7, 1155.0], [84.8, 1156.0], [84.9, 1158.0], [85.0, 1159.0], [85.1, 1161.0], [85.2, 1163.0], [85.3, 1165.0], [85.4, 1168.0], [85.5, 1169.0], [85.6, 1171.0], [85.7, 1174.0], [85.8, 1177.0], [85.9, 1180.0], [86.0, 1182.0], [86.1, 1184.0], [86.2, 1186.0], [86.3, 1188.0], [86.4, 1191.0], [86.5, 1194.0], [86.6, 1199.0], [86.7, 1205.0], [86.8, 1208.0], [86.9, 1213.0], [87.0, 1216.0], [87.1, 1219.0], [87.2, 1223.0], [87.3, 1225.0], [87.4, 1226.0], [87.5, 1227.0], [87.6, 1230.0], [87.7, 1240.0], [87.8, 1245.0], [87.9, 1252.0], [88.0, 1259.0], [88.1, 1264.0], [88.2, 1275.0], [88.3, 1305.0], [88.4, 1326.0], [88.5, 1336.0], [88.6, 1351.0], [88.7, 1361.0], [88.8, 1371.0], [88.9, 1376.0], [89.0, 1386.0], [89.1, 1392.0], [89.2, 1397.0], [89.3, 1403.0], [89.4, 1408.0], [89.5, 1416.0], [89.6, 1422.0], [89.7, 1428.0], [89.8, 1434.0], [89.9, 1439.0], [90.0, 1445.0], [90.1, 1452.0], [90.2, 1461.0], [90.3, 1470.0], [90.4, 1482.0], [90.5, 1490.0], [90.6, 1504.0], [90.7, 1516.0], [90.8, 1532.0], [90.9, 1538.0], [91.0, 1541.0], [91.1, 1544.0], [91.2, 1548.0], [91.3, 1552.0], [91.4, 1562.0], [91.5, 1571.0], [91.6, 1586.0], [91.7, 1603.0], [91.8, 1612.0], [91.9, 1626.0], [92.0, 1633.0], [92.1, 1647.0], [92.2, 1653.0], [92.3, 1659.0], [92.4, 1665.0], [92.5, 1670.0], [92.6, 1675.0], [92.7, 1681.0], [92.8, 1685.0], [92.9, 1690.0], [93.0, 1693.0], [93.1, 1701.0], [93.2, 1709.0], [93.3, 1721.0], [93.4, 1729.0], [93.5, 1734.0], [93.6, 1740.0], [93.7, 1743.0], [93.8, 1750.0], [93.9, 1754.0], [94.0, 1759.0], [94.1, 1762.0], [94.2, 1767.0], [94.3, 1770.0], [94.4, 1773.0], [94.5, 1782.0], [94.6, 1787.0], [94.7, 1794.0], [94.8, 1804.0], [94.9, 1822.0], [95.0, 1856.0], [95.1, 1895.0], [95.2, 1948.0], [95.3, 1962.0], [95.4, 1974.0], [95.5, 1984.0], [95.6, 2006.0], [95.7, 2033.0], [95.8, 2050.0], [95.9, 2073.0], [96.0, 2141.0], [96.1, 2265.0], [96.2, 2375.0], [96.3, 2459.0], [96.4, 2529.0], [96.5, 2583.0], [96.6, 2628.0], [96.7, 2661.0], [96.8, 2690.0], [96.9, 2728.0], [97.0, 2755.0], [97.1, 2788.0], [97.2, 2870.0], [97.3, 3022.0], [97.4, 3145.0], [97.5, 3285.0], [97.6, 3362.0], [97.7, 3381.0], [97.8, 3442.0], [97.9, 3483.0], [98.0, 3523.0], [98.1, 3563.0], [98.2, 3599.0], [98.3, 3703.0], [98.4, 3834.0], [98.5, 3973.0], [98.6, 4086.0], [98.7, 4188.0], [98.8, 4284.0], [98.9, 4385.0], [99.0, 4408.0], [99.1, 4442.0], [99.2, 4499.0], [99.3, 4614.0], [99.4, 4650.0], [99.5, 4856.0], [99.6, 4991.0], [99.7, 5181.0], [99.8, 5361.0], [99.9, 6070.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 11521.0, "series": [{"data": [[0.0, 13.0], [600.0, 74.0], [700.0, 69.0], [800.0, 2372.0], [900.0, 11521.0], [1000.0, 1710.0], [1100.0, 979.0], [1200.0, 336.0], [1300.0, 188.0], [1400.0, 271.0], [1500.0, 216.0], [1600.0, 284.0], [1700.0, 337.0], [1800.0, 69.0], [1900.0, 93.0], [2000.0, 78.0], [2100.0, 20.0], [2200.0, 14.0], [2300.0, 18.0], [2400.0, 29.0], [2500.0, 31.0], [2600.0, 63.0], [2700.0, 57.0], [2800.0, 17.0], [2900.0, 16.0], [3000.0, 17.0], [3100.0, 13.0], [3300.0, 43.0], [3200.0, 16.0], [3400.0, 44.0], [3500.0, 51.0], [3600.0, 18.0], [3700.0, 15.0], [3800.0, 14.0], [3900.0, 15.0], [4000.0, 19.0], [4100.0, 20.0], [4200.0, 18.0], [4300.0, 29.0], [4400.0, 51.0], [4500.0, 18.0], [4600.0, 29.0], [4700.0, 7.0], [4800.0, 13.0], [4900.0, 14.0], [5000.0, 7.0], [5100.0, 15.0], [5200.0, 10.0], [5300.0, 9.0], [5400.0, 11.0], [5600.0, 2.0], [5500.0, 1.0], [5700.0, 1.0], [5800.0, 1.0], [6000.0, 3.0], [6100.0, 2.0], [6200.0, 1.0], [6300.0, 1.0], [6400.0, 3.0], [6500.0, 2.0], [6600.0, 1.0], [6900.0, 1.0], [6700.0, 1.0], [7100.0, 1.0], [7400.0, 1.0], [7500.0, 1.0], [7800.0, 1.0], [8300.0, 1.0], [9700.0, 1.0], [100.0, 8.0], [200.0, 6.0], [300.0, 11.0], [400.0, 353.0], [500.0, 205.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 9700.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 398.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 17718.0, "series": [{"data": [[0.0, 398.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 17718.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1884.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 94.78758741258737, "minX": 1.66172364E12, "maxY": 100.0, "series": [{"data": [[1.66172382E12, 100.0], [1.66172364E12, 100.0], [1.66172376E12, 100.0], [1.66172388E12, 94.78758741258737], [1.6617237E12, 100.0]], "isOverall": false, "label": "Thread Group Create Type", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66172388E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 46.0, "minX": 1.0, "maxY": 1116.4695175551917, "series": [{"data": [[2.0, 69.0], [3.0, 69.0], [4.0, 73.0], [5.0, 96.0], [6.0, 114.0], [7.0, 134.0], [8.0, 192.0], [9.0, 195.0], [10.0, 212.5], [11.0, 272.0], [12.0, 274.0], [13.0, 298.0], [14.0, 308.3333333333333], [15.0, 336.0], [16.0, 352.0], [17.0, 354.0], [18.0, 358.5], [19.0, 377.0], [20.0, 414.0], [21.0, 415.0], [22.0, 419.0], [23.0, 438.0], [24.0, 449.0], [25.0, 442.0], [26.0, 445.6666666666667], [27.0, 463.75], [28.0, 470.0], [29.0, 470.0], [30.0, 472.0], [31.0, 472.0], [33.0, 477.0], [32.0, 478.0], [35.0, 477.0], [34.0, 478.0], [37.0, 497.0], [36.0, 475.0], [39.0, 799.0], [38.0, 404.0], [41.0, 533.5], [40.0, 697.5], [43.0, 555.5], [42.0, 583.0], [45.0, 574.0], [44.0, 566.6], [47.0, 602.0], [46.0, 584.3333333333334], [49.0, 613.3333333333334], [48.0, 605.0], [51.0, 630.0], [50.0, 627.5], [53.0, 630.0], [52.0, 629.0], [55.0, 589.8571428571428], [54.0, 631.5], [57.0, 635.0], [56.0, 637.0], [59.0, 658.0], [58.0, 645.4285714285714], [61.0, 671.6666666666666], [60.0, 660.0], [63.0, 688.0], [62.0, 676.5], [67.0, 715.0], [66.0, 714.5], [65.0, 708.2], [64.0, 706.3333333333334], [71.0, 753.0], [70.0, 743.3333333333334], [69.0, 735.0], [68.0, 724.1428571428572], [75.0, 773.1538461538462], [74.0, 758.0], [73.0, 757.3750000000001], [72.0, 757.6666666666666], [79.0, 886.8333333333334], [78.0, 865.7777777777778], [77.0, 841.0], [76.0, 839.1666666666666], [83.0, 911.0], [82.0, 909.0], [81.0, 902.7], [80.0, 899.0], [87.0, 916.0], [86.0, 906.125], [85.0, 907.9375], [84.0, 1004.4], [91.0, 864.5000000000001], [90.0, 948.0], [89.0, 943.6153846153845], [88.0, 929.0], [95.0, 887.6], [94.0, 899.5714285714286], [93.0, 905.0], [92.0, 916.8139534883721], [99.0, 970.5163043478261], [98.0, 961.734693877551], [97.0, 928.5142857142857], [96.0, 899.8947368421053], [100.0, 1116.4695175551917], [1.0, 46.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[99.40369999999979, 1107.3178999999936]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 21624.7, "minX": 1.66172364E12, "maxY": 600644.0, "series": [{"data": [[1.66172382E12, 268416.13333333336], [1.66172364E12, 21624.7], [1.66172376E12, 254213.41666666666], [1.66172388E12, 95600.26666666666], [1.6617237E12, 195627.05]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66172382E12, 600644.0], [1.66172364E12, 48413.933333333334], [1.66172376E12, 568961.05], [1.66172388E12, 213928.0], [1.6617237E12, 437867.9166666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66172388E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 935.3983499377365, "minX": 1.66172364E12, "maxY": 3138.9961389961395, "series": [{"data": [[1.66172382E12, 935.3983499377365], [1.66172364E12, 3138.9961389961395], [1.66172376E12, 983.8512980611215], [1.66172388E12, 1083.3610139860134], [1.6617237E12, 1290.5444064901776]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66172388E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 935.3933686176816, "minX": 1.66172364E12, "maxY": 3138.8185328185323, "series": [{"data": [[1.66172382E12, 935.3933686176816], [1.66172364E12, 3138.8185328185323], [1.66172376E12, 983.8462044035471], [1.66172388E12, 1083.3570804195786], [1.6617237E12, 1290.521989752351]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66172388E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.66172364E12, "maxY": 34.239382239382266, "series": [{"data": [[1.66172382E12, 0.006849315068493151], [1.66172364E12, 34.239382239382266], [1.66172376E12, 0.008708511337495914], [1.66172388E12, 0.0], [1.6617237E12, 0.011528608027327051]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66172388E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 14.0, "minX": 1.66172364E12, "maxY": 9707.0, "series": [{"data": [[1.66172382E12, 1893.0], [1.66172364E12, 9707.0], [1.66172376E12, 3367.0], [1.66172388E12, 4127.0], [1.6617237E12, 6682.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66172382E12, 991.0], [1.66172364E12, 5224.6], [1.66172376E12, 1126.0], [1.66172388E12, 1240.1], [1.6617237E12, 1893.5]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66172382E12, 1376.75], [1.66172364E12, 7413.609999999984], [1.66172376E12, 2686.13], [1.66172388E12, 3564.3300000000004], [1.6617237E12, 4448.899999999998]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66172382E12, 1016.0], [1.66172364E12, 5462.25], [1.66172376E12, 1230.0], [1.66172388E12, 1452.1499999999965], [1.6617237E12, 2641.5]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66172382E12, 419.0], [1.66172364E12, 854.0], [1.66172376E12, 14.0], [1.66172388E12, 46.0], [1.6617237E12, 14.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66172382E12, 925.0], [1.66172364E12, 2648.5], [1.66172376E12, 941.0], [1.66172388E12, 969.0], [1.6617237E12, 1010.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66172388E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 336.0, "minX": 7.0, "maxY": 4797.0, "series": [{"data": [[7.0, 2524.0], [15.0, 3506.0], [16.0, 958.0], [18.0, 3964.0], [19.0, 4790.0], [20.0, 4400.5], [21.0, 4346.5], [22.0, 4140.5], [23.0, 4484.5], [28.0, 3198.0], [31.0, 4797.0], [34.0, 1983.0], [35.0, 934.0], [37.0, 3430.5], [41.0, 336.0], [42.0, 4545.5], [43.0, 4234.0], [45.0, 1883.0], [51.0, 2016.0], [50.0, 1402.5], [54.0, 1792.5], [56.0, 1765.0], [57.0, 1737.5], [58.0, 1751.0], [59.0, 2754.0], [61.0, 1706.0], [62.0, 1667.5], [66.0, 1615.0], [65.0, 1548.0], [75.0, 1137.0], [81.0, 1200.0], [80.0, 1134.5], [87.0, 1183.0], [84.0, 2754.0], [86.0, 1258.0], [89.0, 1117.0], [88.0, 1133.0], [90.0, 980.0], [91.0, 1139.0], [95.0, 1075.0], [92.0, 1032.5], [93.0, 961.0], [94.0, 946.5], [98.0, 983.0], [97.0, 941.0], [96.0, 972.5], [99.0, 987.5], [100.0, 975.0], [102.0, 970.0], [103.0, 951.0], [101.0, 948.0], [105.0, 949.0], [106.0, 942.0], [104.0, 944.0], [107.0, 940.0], [108.0, 947.0], [109.0, 916.0], [111.0, 933.0], [110.0, 906.5], [113.0, 917.0], [112.0, 902.0], [114.0, 966.5], [115.0, 929.0], [117.0, 901.0], [116.0, 903.0], [118.0, 646.0], [120.0, 860.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 120.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 336.0, "minX": 7.0, "maxY": 4797.0, "series": [{"data": [[7.0, 2524.0], [15.0, 3506.0], [16.0, 958.0], [18.0, 3964.0], [19.0, 4790.0], [20.0, 4400.5], [21.0, 4346.5], [22.0, 4140.5], [23.0, 4484.5], [28.0, 3197.5], [31.0, 4797.0], [34.0, 1983.0], [35.0, 934.0], [37.0, 3430.5], [41.0, 336.0], [42.0, 4545.5], [43.0, 4234.0], [45.0, 1883.0], [51.0, 2016.0], [50.0, 1402.5], [54.0, 1792.0], [56.0, 1765.0], [57.0, 1737.5], [58.0, 1750.5], [59.0, 2754.0], [61.0, 1706.0], [62.0, 1667.5], [66.0, 1615.0], [65.0, 1548.0], [75.0, 1137.0], [81.0, 1200.0], [80.0, 1134.5], [87.0, 1183.0], [84.0, 2754.0], [86.0, 1258.0], [89.0, 1117.0], [88.0, 1133.0], [90.0, 980.0], [91.0, 1139.0], [95.0, 1075.0], [92.0, 1032.5], [93.0, 961.0], [94.0, 946.5], [98.0, 983.0], [97.0, 941.0], [96.0, 972.5], [99.0, 987.5], [100.0, 975.0], [102.0, 970.0], [103.0, 951.0], [101.0, 948.0], [105.0, 949.0], [106.0, 942.0], [104.0, 944.0], [107.0, 940.0], [108.0, 947.0], [109.0, 916.0], [111.0, 933.0], [110.0, 906.0], [113.0, 917.0], [112.0, 902.0], [114.0, 966.5], [115.0, 929.0], [117.0, 901.0], [116.0, 903.0], [118.0, 646.0], [120.0, 860.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 120.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 10.3, "minX": 1.66172364E12, "maxY": 107.06666666666666, "series": [{"data": [[1.66172382E12, 107.06666666666666], [1.66172364E12, 10.3], [1.66172376E12, 101.43333333333334], [1.66172388E12, 36.46666666666667], [1.6617237E12, 78.06666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66172388E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 8.633333333333333, "minX": 1.66172364E12, "maxY": 107.06666666666666, "series": [{"data": [[1.66172382E12, 107.06666666666666], [1.66172364E12, 8.633333333333333], [1.66172376E12, 101.43333333333334], [1.66172388E12, 38.13333333333333], [1.6617237E12, 78.06666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66172388E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 8.633333333333333, "minX": 1.66172364E12, "maxY": 107.06666666666666, "series": [{"data": [[1.66172382E12, 107.06666666666666], [1.66172364E12, 8.633333333333333], [1.66172376E12, 101.43333333333334], [1.66172388E12, 38.13333333333333], [1.6617237E12, 78.06666666666666]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66172388E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 8.633333333333333, "minX": 1.66172364E12, "maxY": 107.06666666666666, "series": [{"data": [[1.66172382E12, 107.06666666666666], [1.66172364E12, 8.633333333333333], [1.66172376E12, 101.43333333333334], [1.66172388E12, 38.13333333333333], [1.6617237E12, 78.06666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66172388E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 7200000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

