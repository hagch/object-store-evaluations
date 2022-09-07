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
        data: {"result": {"minY": 28.0, "minX": 0.0, "maxY": 840.0, "series": [{"data": [[0.0, 28.0], [0.1, 162.0], [0.2, 170.0], [0.3, 173.0], [0.4, 174.0], [0.5, 176.0], [0.6, 177.0], [0.7, 177.0], [0.8, 178.0], [0.9, 178.0], [1.0, 179.0], [1.1, 179.0], [1.2, 180.0], [1.3, 180.0], [1.4, 180.0], [1.5, 181.0], [1.6, 181.0], [1.7, 181.0], [1.8, 182.0], [1.9, 182.0], [2.0, 182.0], [2.1, 183.0], [2.2, 183.0], [2.3, 183.0], [2.4, 183.0], [2.5, 184.0], [2.6, 184.0], [2.7, 184.0], [2.8, 184.0], [2.9, 185.0], [3.0, 185.0], [3.1, 185.0], [3.2, 185.0], [3.3, 185.0], [3.4, 186.0], [3.5, 186.0], [3.6, 186.0], [3.7, 186.0], [3.8, 187.0], [3.9, 187.0], [4.0, 187.0], [4.1, 187.0], [4.2, 187.0], [4.3, 188.0], [4.4, 188.0], [4.5, 188.0], [4.6, 188.0], [4.7, 188.0], [4.8, 188.0], [4.9, 188.0], [5.0, 189.0], [5.1, 189.0], [5.2, 189.0], [5.3, 189.0], [5.4, 189.0], [5.5, 189.0], [5.6, 190.0], [5.7, 190.0], [5.8, 190.0], [5.9, 190.0], [6.0, 190.0], [6.1, 190.0], [6.2, 190.0], [6.3, 191.0], [6.4, 191.0], [6.5, 191.0], [6.6, 191.0], [6.7, 191.0], [6.8, 191.0], [6.9, 191.0], [7.0, 191.0], [7.1, 191.0], [7.2, 192.0], [7.3, 192.0], [7.4, 192.0], [7.5, 192.0], [7.6, 192.0], [7.7, 192.0], [7.8, 192.0], [7.9, 192.0], [8.0, 193.0], [8.1, 193.0], [8.2, 193.0], [8.3, 193.0], [8.4, 193.0], [8.5, 193.0], [8.6, 193.0], [8.7, 193.0], [8.8, 193.0], [8.9, 193.0], [9.0, 194.0], [9.1, 194.0], [9.2, 194.0], [9.3, 194.0], [9.4, 194.0], [9.5, 194.0], [9.6, 194.0], [9.7, 194.0], [9.8, 194.0], [9.9, 194.0], [10.0, 194.0], [10.1, 194.0], [10.2, 195.0], [10.3, 195.0], [10.4, 195.0], [10.5, 195.0], [10.6, 195.0], [10.7, 195.0], [10.8, 195.0], [10.9, 195.0], [11.0, 195.0], [11.1, 195.0], [11.2, 195.0], [11.3, 196.0], [11.4, 196.0], [11.5, 196.0], [11.6, 196.0], [11.7, 196.0], [11.8, 196.0], [11.9, 196.0], [12.0, 196.0], [12.1, 196.0], [12.2, 196.0], [12.3, 197.0], [12.4, 197.0], [12.5, 197.0], [12.6, 197.0], [12.7, 197.0], [12.8, 197.0], [12.9, 197.0], [13.0, 197.0], [13.1, 197.0], [13.2, 197.0], [13.3, 197.0], [13.4, 197.0], [13.5, 198.0], [13.6, 198.0], [13.7, 198.0], [13.8, 198.0], [13.9, 198.0], [14.0, 198.0], [14.1, 198.0], [14.2, 198.0], [14.3, 198.0], [14.4, 198.0], [14.5, 198.0], [14.6, 198.0], [14.7, 199.0], [14.8, 199.0], [14.9, 199.0], [15.0, 199.0], [15.1, 199.0], [15.2, 199.0], [15.3, 199.0], [15.4, 199.0], [15.5, 199.0], [15.6, 199.0], [15.7, 199.0], [15.8, 199.0], [15.9, 200.0], [16.0, 200.0], [16.1, 200.0], [16.2, 200.0], [16.3, 200.0], [16.4, 200.0], [16.5, 200.0], [16.6, 200.0], [16.7, 200.0], [16.8, 200.0], [16.9, 200.0], [17.0, 201.0], [17.1, 201.0], [17.2, 201.0], [17.3, 201.0], [17.4, 201.0], [17.5, 201.0], [17.6, 201.0], [17.7, 201.0], [17.8, 201.0], [17.9, 201.0], [18.0, 201.0], [18.1, 201.0], [18.2, 202.0], [18.3, 202.0], [18.4, 202.0], [18.5, 202.0], [18.6, 202.0], [18.7, 202.0], [18.8, 202.0], [18.9, 202.0], [19.0, 202.0], [19.1, 202.0], [19.2, 202.0], [19.3, 202.0], [19.4, 203.0], [19.5, 203.0], [19.6, 203.0], [19.7, 203.0], [19.8, 203.0], [19.9, 203.0], [20.0, 203.0], [20.1, 203.0], [20.2, 203.0], [20.3, 203.0], [20.4, 203.0], [20.5, 203.0], [20.6, 204.0], [20.7, 204.0], [20.8, 204.0], [20.9, 204.0], [21.0, 204.0], [21.1, 204.0], [21.2, 204.0], [21.3, 204.0], [21.4, 204.0], [21.5, 204.0], [21.6, 204.0], [21.7, 204.0], [21.8, 205.0], [21.9, 205.0], [22.0, 205.0], [22.1, 205.0], [22.2, 205.0], [22.3, 205.0], [22.4, 205.0], [22.5, 205.0], [22.6, 205.0], [22.7, 205.0], [22.8, 205.0], [22.9, 206.0], [23.0, 206.0], [23.1, 206.0], [23.2, 206.0], [23.3, 206.0], [23.4, 206.0], [23.5, 206.0], [23.6, 206.0], [23.7, 206.0], [23.8, 206.0], [23.9, 206.0], [24.0, 207.0], [24.1, 207.0], [24.2, 207.0], [24.3, 207.0], [24.4, 207.0], [24.5, 207.0], [24.6, 207.0], [24.7, 207.0], [24.8, 207.0], [24.9, 207.0], [25.0, 207.0], [25.1, 207.0], [25.2, 208.0], [25.3, 208.0], [25.4, 208.0], [25.5, 208.0], [25.6, 208.0], [25.7, 208.0], [25.8, 208.0], [25.9, 208.0], [26.0, 208.0], [26.1, 208.0], [26.2, 208.0], [26.3, 208.0], [26.4, 208.0], [26.5, 209.0], [26.6, 209.0], [26.7, 209.0], [26.8, 209.0], [26.9, 209.0], [27.0, 209.0], [27.1, 209.0], [27.2, 209.0], [27.3, 209.0], [27.4, 210.0], [27.5, 210.0], [27.6, 210.0], [27.7, 210.0], [27.8, 210.0], [27.9, 210.0], [28.0, 210.0], [28.1, 210.0], [28.2, 210.0], [28.3, 210.0], [28.4, 211.0], [28.5, 211.0], [28.6, 211.0], [28.7, 211.0], [28.8, 211.0], [28.9, 211.0], [29.0, 211.0], [29.1, 211.0], [29.2, 211.0], [29.3, 212.0], [29.4, 212.0], [29.5, 212.0], [29.6, 212.0], [29.7, 212.0], [29.8, 212.0], [29.9, 212.0], [30.0, 212.0], [30.1, 212.0], [30.2, 212.0], [30.3, 212.0], [30.4, 213.0], [30.5, 213.0], [30.6, 213.0], [30.7, 213.0], [30.8, 213.0], [30.9, 213.0], [31.0, 213.0], [31.1, 213.0], [31.2, 214.0], [31.3, 214.0], [31.4, 214.0], [31.5, 214.0], [31.6, 214.0], [31.7, 214.0], [31.8, 214.0], [31.9, 214.0], [32.0, 214.0], [32.1, 215.0], [32.2, 215.0], [32.3, 215.0], [32.4, 215.0], [32.5, 215.0], [32.6, 215.0], [32.7, 215.0], [32.8, 215.0], [32.9, 215.0], [33.0, 215.0], [33.1, 216.0], [33.2, 216.0], [33.3, 216.0], [33.4, 216.0], [33.5, 216.0], [33.6, 216.0], [33.7, 216.0], [33.8, 216.0], [33.9, 216.0], [34.0, 217.0], [34.1, 217.0], [34.2, 217.0], [34.3, 217.0], [34.4, 217.0], [34.5, 217.0], [34.6, 217.0], [34.7, 217.0], [34.8, 217.0], [34.9, 218.0], [35.0, 218.0], [35.1, 218.0], [35.2, 218.0], [35.3, 218.0], [35.4, 218.0], [35.5, 218.0], [35.6, 218.0], [35.7, 218.0], [35.8, 218.0], [35.9, 219.0], [36.0, 219.0], [36.1, 219.0], [36.2, 219.0], [36.3, 219.0], [36.4, 219.0], [36.5, 219.0], [36.6, 219.0], [36.7, 219.0], [36.8, 220.0], [36.9, 220.0], [37.0, 220.0], [37.1, 220.0], [37.2, 220.0], [37.3, 220.0], [37.4, 220.0], [37.5, 220.0], [37.6, 220.0], [37.7, 220.0], [37.8, 220.0], [37.9, 221.0], [38.0, 221.0], [38.1, 221.0], [38.2, 221.0], [38.3, 221.0], [38.4, 221.0], [38.5, 221.0], [38.6, 221.0], [38.7, 221.0], [38.8, 221.0], [38.9, 221.0], [39.0, 222.0], [39.1, 222.0], [39.2, 222.0], [39.3, 222.0], [39.4, 222.0], [39.5, 222.0], [39.6, 222.0], [39.7, 222.0], [39.8, 222.0], [39.9, 222.0], [40.0, 223.0], [40.1, 223.0], [40.2, 223.0], [40.3, 223.0], [40.4, 223.0], [40.5, 223.0], [40.6, 223.0], [40.7, 223.0], [40.8, 223.0], [40.9, 223.0], [41.0, 224.0], [41.1, 224.0], [41.2, 224.0], [41.3, 224.0], [41.4, 224.0], [41.5, 224.0], [41.6, 224.0], [41.7, 224.0], [41.8, 224.0], [41.9, 224.0], [42.0, 225.0], [42.1, 225.0], [42.2, 225.0], [42.3, 225.0], [42.4, 225.0], [42.5, 225.0], [42.6, 225.0], [42.7, 225.0], [42.8, 225.0], [42.9, 226.0], [43.0, 226.0], [43.1, 226.0], [43.2, 226.0], [43.3, 226.0], [43.4, 226.0], [43.5, 226.0], [43.6, 226.0], [43.7, 226.0], [43.8, 226.0], [43.9, 226.0], [44.0, 227.0], [44.1, 227.0], [44.2, 227.0], [44.3, 227.0], [44.4, 227.0], [44.5, 227.0], [44.6, 227.0], [44.7, 227.0], [44.8, 227.0], [44.9, 227.0], [45.0, 227.0], [45.1, 228.0], [45.2, 228.0], [45.3, 228.0], [45.4, 228.0], [45.5, 228.0], [45.6, 228.0], [45.7, 228.0], [45.8, 228.0], [45.9, 228.0], [46.0, 228.0], [46.1, 229.0], [46.2, 229.0], [46.3, 229.0], [46.4, 229.0], [46.5, 229.0], [46.6, 229.0], [46.7, 229.0], [46.8, 229.0], [46.9, 229.0], [47.0, 229.0], [47.1, 229.0], [47.2, 229.0], [47.3, 230.0], [47.4, 230.0], [47.5, 230.0], [47.6, 230.0], [47.7, 230.0], [47.8, 230.0], [47.9, 230.0], [48.0, 230.0], [48.1, 230.0], [48.2, 230.0], [48.3, 230.0], [48.4, 230.0], [48.5, 231.0], [48.6, 231.0], [48.7, 231.0], [48.8, 231.0], [48.9, 231.0], [49.0, 231.0], [49.1, 231.0], [49.2, 231.0], [49.3, 231.0], [49.4, 231.0], [49.5, 231.0], [49.6, 231.0], [49.7, 232.0], [49.8, 232.0], [49.9, 232.0], [50.0, 232.0], [50.1, 232.0], [50.2, 232.0], [50.3, 232.0], [50.4, 232.0], [50.5, 232.0], [50.6, 232.0], [50.7, 232.0], [50.8, 232.0], [50.9, 232.0], [51.0, 233.0], [51.1, 233.0], [51.2, 233.0], [51.3, 233.0], [51.4, 233.0], [51.5, 233.0], [51.6, 233.0], [51.7, 233.0], [51.8, 233.0], [51.9, 233.0], [52.0, 233.0], [52.1, 234.0], [52.2, 234.0], [52.3, 234.0], [52.4, 234.0], [52.5, 234.0], [52.6, 234.0], [52.7, 234.0], [52.8, 234.0], [52.9, 234.0], [53.0, 234.0], [53.1, 234.0], [53.2, 234.0], [53.3, 234.0], [53.4, 235.0], [53.5, 235.0], [53.6, 235.0], [53.7, 235.0], [53.8, 235.0], [53.9, 235.0], [54.0, 235.0], [54.1, 235.0], [54.2, 235.0], [54.3, 235.0], [54.4, 235.0], [54.5, 235.0], [54.6, 235.0], [54.7, 236.0], [54.8, 236.0], [54.9, 236.0], [55.0, 236.0], [55.1, 236.0], [55.2, 236.0], [55.3, 236.0], [55.4, 236.0], [55.5, 236.0], [55.6, 236.0], [55.7, 236.0], [55.8, 237.0], [55.9, 237.0], [56.0, 237.0], [56.1, 237.0], [56.2, 237.0], [56.3, 237.0], [56.4, 237.0], [56.5, 237.0], [56.6, 237.0], [56.7, 237.0], [56.8, 238.0], [56.9, 238.0], [57.0, 238.0], [57.1, 238.0], [57.2, 238.0], [57.3, 238.0], [57.4, 238.0], [57.5, 238.0], [57.6, 238.0], [57.7, 238.0], [57.8, 238.0], [57.9, 239.0], [58.0, 239.0], [58.1, 239.0], [58.2, 239.0], [58.3, 239.0], [58.4, 239.0], [58.5, 239.0], [58.6, 239.0], [58.7, 239.0], [58.8, 239.0], [58.9, 239.0], [59.0, 240.0], [59.1, 240.0], [59.2, 240.0], [59.3, 240.0], [59.4, 240.0], [59.5, 240.0], [59.6, 240.0], [59.7, 240.0], [59.8, 240.0], [59.9, 241.0], [60.0, 241.0], [60.1, 241.0], [60.2, 241.0], [60.3, 241.0], [60.4, 241.0], [60.5, 241.0], [60.6, 241.0], [60.7, 241.0], [60.8, 241.0], [60.9, 242.0], [61.0, 242.0], [61.1, 242.0], [61.2, 242.0], [61.3, 242.0], [61.4, 242.0], [61.5, 242.0], [61.6, 242.0], [61.7, 242.0], [61.8, 242.0], [61.9, 243.0], [62.0, 243.0], [62.1, 243.0], [62.2, 243.0], [62.3, 243.0], [62.4, 243.0], [62.5, 243.0], [62.6, 243.0], [62.7, 244.0], [62.8, 244.0], [62.9, 244.0], [63.0, 244.0], [63.1, 244.0], [63.2, 244.0], [63.3, 244.0], [63.4, 244.0], [63.5, 244.0], [63.6, 244.0], [63.7, 245.0], [63.8, 245.0], [63.9, 245.0], [64.0, 245.0], [64.1, 245.0], [64.2, 245.0], [64.3, 245.0], [64.4, 245.0], [64.5, 245.0], [64.6, 246.0], [64.7, 246.0], [64.8, 246.0], [64.9, 246.0], [65.0, 246.0], [65.1, 246.0], [65.2, 246.0], [65.3, 246.0], [65.4, 246.0], [65.5, 247.0], [65.6, 247.0], [65.7, 247.0], [65.8, 247.0], [65.9, 247.0], [66.0, 247.0], [66.1, 247.0], [66.2, 248.0], [66.3, 248.0], [66.4, 248.0], [66.5, 248.0], [66.6, 248.0], [66.7, 248.0], [66.8, 248.0], [66.9, 248.0], [67.0, 248.0], [67.1, 249.0], [67.2, 249.0], [67.3, 249.0], [67.4, 249.0], [67.5, 249.0], [67.6, 249.0], [67.7, 249.0], [67.8, 249.0], [67.9, 250.0], [68.0, 250.0], [68.1, 250.0], [68.2, 250.0], [68.3, 250.0], [68.4, 250.0], [68.5, 250.0], [68.6, 251.0], [68.7, 251.0], [68.8, 251.0], [68.9, 251.0], [69.0, 251.0], [69.1, 251.0], [69.2, 251.0], [69.3, 252.0], [69.4, 252.0], [69.5, 252.0], [69.6, 252.0], [69.7, 252.0], [69.8, 252.0], [69.9, 252.0], [70.0, 253.0], [70.1, 253.0], [70.2, 253.0], [70.3, 253.0], [70.4, 253.0], [70.5, 253.0], [70.6, 254.0], [70.7, 254.0], [70.8, 254.0], [70.9, 254.0], [71.0, 254.0], [71.1, 254.0], [71.2, 255.0], [71.3, 255.0], [71.4, 255.0], [71.5, 255.0], [71.6, 255.0], [71.7, 255.0], [71.8, 255.0], [71.9, 256.0], [72.0, 256.0], [72.1, 256.0], [72.2, 256.0], [72.3, 256.0], [72.4, 256.0], [72.5, 257.0], [72.6, 257.0], [72.7, 257.0], [72.8, 257.0], [72.9, 257.0], [73.0, 258.0], [73.1, 258.0], [73.2, 258.0], [73.3, 258.0], [73.4, 258.0], [73.5, 259.0], [73.6, 259.0], [73.7, 259.0], [73.8, 259.0], [73.9, 259.0], [74.0, 260.0], [74.1, 260.0], [74.2, 260.0], [74.3, 260.0], [74.4, 261.0], [74.5, 261.0], [74.6, 261.0], [74.7, 261.0], [74.8, 261.0], [74.9, 262.0], [75.0, 262.0], [75.1, 262.0], [75.2, 262.0], [75.3, 262.0], [75.4, 262.0], [75.5, 263.0], [75.6, 263.0], [75.7, 263.0], [75.8, 263.0], [75.9, 264.0], [76.0, 264.0], [76.1, 264.0], [76.2, 264.0], [76.3, 264.0], [76.4, 265.0], [76.5, 265.0], [76.6, 265.0], [76.7, 265.0], [76.8, 265.0], [76.9, 266.0], [77.0, 266.0], [77.1, 266.0], [77.2, 266.0], [77.3, 267.0], [77.4, 267.0], [77.5, 267.0], [77.6, 267.0], [77.7, 268.0], [77.8, 268.0], [77.9, 268.0], [78.0, 268.0], [78.1, 268.0], [78.2, 268.0], [78.3, 269.0], [78.4, 269.0], [78.5, 269.0], [78.6, 269.0], [78.7, 270.0], [78.8, 270.0], [78.9, 270.0], [79.0, 270.0], [79.1, 270.0], [79.2, 270.0], [79.3, 271.0], [79.4, 271.0], [79.5, 271.0], [79.6, 271.0], [79.7, 271.0], [79.8, 272.0], [79.9, 272.0], [80.0, 272.0], [80.1, 272.0], [80.2, 273.0], [80.3, 273.0], [80.4, 273.0], [80.5, 273.0], [80.6, 274.0], [80.7, 274.0], [80.8, 274.0], [80.9, 274.0], [81.0, 274.0], [81.1, 275.0], [81.2, 275.0], [81.3, 275.0], [81.4, 275.0], [81.5, 275.0], [81.6, 276.0], [81.7, 276.0], [81.8, 276.0], [81.9, 276.0], [82.0, 277.0], [82.1, 277.0], [82.2, 277.0], [82.3, 277.0], [82.4, 278.0], [82.5, 278.0], [82.6, 278.0], [82.7, 279.0], [82.8, 279.0], [82.9, 279.0], [83.0, 280.0], [83.1, 280.0], [83.2, 280.0], [83.3, 280.0], [83.4, 281.0], [83.5, 281.0], [83.6, 281.0], [83.7, 282.0], [83.8, 282.0], [83.9, 282.0], [84.0, 283.0], [84.1, 283.0], [84.2, 284.0], [84.3, 284.0], [84.4, 284.0], [84.5, 284.0], [84.6, 285.0], [84.7, 285.0], [84.8, 286.0], [84.9, 286.0], [85.0, 286.0], [85.1, 287.0], [85.2, 287.0], [85.3, 288.0], [85.4, 288.0], [85.5, 288.0], [85.6, 289.0], [85.7, 289.0], [85.8, 289.0], [85.9, 290.0], [86.0, 290.0], [86.1, 291.0], [86.2, 291.0], [86.3, 292.0], [86.4, 292.0], [86.5, 293.0], [86.6, 293.0], [86.7, 293.0], [86.8, 294.0], [86.9, 294.0], [87.0, 295.0], [87.1, 295.0], [87.2, 295.0], [87.3, 296.0], [87.4, 297.0], [87.5, 297.0], [87.6, 297.0], [87.7, 298.0], [87.8, 298.0], [87.9, 299.0], [88.0, 299.0], [88.1, 300.0], [88.2, 300.0], [88.3, 300.0], [88.4, 301.0], [88.5, 301.0], [88.6, 302.0], [88.7, 302.0], [88.8, 303.0], [88.9, 303.0], [89.0, 303.0], [89.1, 304.0], [89.2, 304.0], [89.3, 305.0], [89.4, 306.0], [89.5, 306.0], [89.6, 307.0], [89.7, 307.0], [89.8, 308.0], [89.9, 308.0], [90.0, 309.0], [90.1, 309.0], [90.2, 309.0], [90.3, 310.0], [90.4, 311.0], [90.5, 311.0], [90.6, 311.0], [90.7, 312.0], [90.8, 312.0], [90.9, 313.0], [91.0, 314.0], [91.1, 314.0], [91.2, 315.0], [91.3, 315.0], [91.4, 316.0], [91.5, 317.0], [91.6, 318.0], [91.7, 318.0], [91.8, 319.0], [91.9, 320.0], [92.0, 320.0], [92.1, 322.0], [92.2, 322.0], [92.3, 323.0], [92.4, 324.0], [92.5, 325.0], [92.6, 326.0], [92.7, 327.0], [92.8, 327.0], [92.9, 328.0], [93.0, 329.0], [93.1, 330.0], [93.2, 331.0], [93.3, 333.0], [93.4, 334.0], [93.5, 335.0], [93.6, 336.0], [93.7, 337.0], [93.8, 338.0], [93.9, 340.0], [94.0, 341.0], [94.1, 342.0], [94.2, 343.0], [94.3, 344.0], [94.4, 345.0], [94.5, 346.0], [94.6, 346.0], [94.7, 347.0], [94.8, 348.0], [94.9, 349.0], [95.0, 350.0], [95.1, 351.0], [95.2, 352.0], [95.3, 353.0], [95.4, 355.0], [95.5, 355.0], [95.6, 356.0], [95.7, 357.0], [95.8, 358.0], [95.9, 359.0], [96.0, 360.0], [96.1, 362.0], [96.2, 363.0], [96.3, 364.0], [96.4, 365.0], [96.5, 367.0], [96.6, 370.0], [96.7, 374.0], [96.8, 379.0], [96.9, 384.0], [97.0, 387.0], [97.1, 390.0], [97.2, 392.0], [97.3, 394.0], [97.4, 396.0], [97.5, 399.0], [97.6, 406.0], [97.7, 419.0], [97.8, 433.0], [97.9, 443.0], [98.0, 449.0], [98.1, 457.0], [98.2, 476.0], [98.3, 491.0], [98.4, 502.0], [98.5, 510.0], [98.6, 519.0], [98.7, 529.0], [98.8, 537.0], [98.9, 544.0], [99.0, 551.0], [99.1, 556.0], [99.2, 565.0], [99.3, 575.0], [99.4, 644.0], [99.5, 747.0], [99.6, 752.0], [99.7, 757.0], [99.8, 764.0], [99.9, 774.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 4.0, "minX": 0.0, "maxY": 14451.0, "series": [{"data": [[0.0, 4.0], [600.0, 19.0], [300.0, 1886.0], [700.0, 105.0], [800.0, 7.0], [400.0, 172.0], [200.0, 14451.0], [100.0, 3160.0], [500.0, 196.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 325.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 19675.0, "series": [{"data": [[0.0, 19675.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 325.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 99.71190000000009, "minX": 1.66054998E12, "maxY": 99.71190000000009, "series": [{"data": [[1.66054998E12, 99.71190000000009]], "isOverall": false, "label": "Thread Group Create Type", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66054998E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.0, "maxY": 775.0, "series": [{"data": [[2.0, 127.0], [3.0, 108.0], [4.0, 107.0], [5.0, 117.0], [6.0, 74.0], [9.0, 100.0], [11.0, 147.5], [12.0, 137.0], [14.0, 156.0], [15.0, 138.0], [16.0, 151.0], [17.0, 183.0], [19.0, 161.0], [21.0, 150.0], [22.0, 150.0], [23.0, 181.0], [24.0, 163.0], [25.0, 179.0], [26.0, 181.0], [28.0, 180.5], [30.0, 190.5], [33.0, 204.0], [32.0, 203.66666666666666], [35.0, 200.0], [34.0, 202.0], [36.0, 191.0], [39.0, 201.0], [38.0, 200.5], [40.0, 200.0], [43.0, 201.0], [45.0, 209.0], [44.0, 215.0], [47.0, 215.0], [46.0, 204.0], [49.0, 214.0], [48.0, 202.0], [51.0, 199.0], [50.0, 201.0], [52.0, 210.0], [55.0, 220.33333333333334], [57.0, 218.5], [61.0, 221.5], [63.0, 231.0], [62.0, 229.0], [67.0, 218.66666666666666], [66.0, 222.0], [65.0, 226.0], [71.0, 210.0], [70.0, 219.0], [68.0, 217.0], [75.0, 238.5], [74.0, 235.0], [73.0, 237.0], [72.0, 234.0], [79.0, 212.0], [78.0, 218.33333333333334], [77.0, 237.0], [76.0, 235.5], [83.0, 224.0], [82.0, 224.33333333333334], [81.0, 226.0], [80.0, 221.0], [87.0, 763.5], [86.0, 223.0], [85.0, 225.0], [84.0, 220.8], [88.0, 775.0], [89.0, 309.5], [90.0, 449.6], [91.0, 645.0], [92.0, 516.75], [93.0, 601.8333333333334], [94.0, 423.75], [95.0, 390.0], [96.0, 728.0], [97.0, 356.00000000000006], [98.0, 355.7692307692308], [99.0, 308.08333333333337], [100.0, 246.03332323538373], [1.0, 28.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[99.71190000000009, 246.5365499999997]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 835481.5666666667, "minX": 1.66054998E12, "maxY": 1869814.9, "series": [{"data": [[1.66054998E12, 835481.5666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66054998E12, 1869814.9]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66054998E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 246.5365499999997, "minX": 1.66054998E12, "maxY": 246.5365499999997, "series": [{"data": [[1.66054998E12, 246.5365499999997]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66054998E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 246.52914999999965, "minX": 1.66054998E12, "maxY": 246.52914999999965, "series": [{"data": [[1.66054998E12, 246.52914999999965]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66054998E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.020149999999999807, "minX": 1.66054998E12, "maxY": 0.020149999999999807, "series": [{"data": [[1.66054998E12, 0.020149999999999807]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66054998E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 28.0, "minX": 1.66054998E12, "maxY": 840.0, "series": [{"data": [[1.66054998E12, 840.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66054998E12, 309.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66054998E12, 551.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66054998E12, 350.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66054998E12, 28.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66054998E12, 232.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66054998E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 194.0, "minX": 74.0, "maxY": 646.0, "series": [{"data": [[74.0, 646.0], [198.0, 503.5], [205.0, 521.0], [251.0, 223.0], [281.0, 388.0], [303.0, 316.0], [306.0, 341.5], [354.0, 284.0], [361.0, 266.0], [355.0, 270.0], [364.0, 238.0], [380.0, 270.0], [381.0, 221.0], [387.0, 268.0], [394.0, 257.0], [396.0, 245.0], [395.0, 253.0], [385.0, 266.0], [398.0, 246.0], [413.0, 240.0], [403.0, 248.0], [404.0, 230.0], [410.0, 214.0], [422.0, 246.0], [421.0, 225.0], [416.0, 233.0], [429.0, 203.0], [445.0, 224.0], [447.0, 230.0], [440.0, 220.5], [444.0, 229.0], [435.0, 226.0], [458.0, 226.0], [457.0, 224.0], [454.0, 200.0], [455.0, 199.0], [452.0, 223.0], [462.0, 225.0], [468.0, 223.0], [464.0, 220.0], [481.0, 203.0], [483.0, 208.0], [487.0, 202.0], [508.0, 198.0], [496.0, 194.0], [500.0, 200.0], [499.0, 200.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 508.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 194.0, "minX": 74.0, "maxY": 646.0, "series": [{"data": [[74.0, 646.0], [198.0, 503.5], [205.0, 521.0], [251.0, 223.0], [281.0, 388.0], [303.0, 316.0], [306.0, 341.5], [354.0, 284.0], [361.0, 266.0], [355.0, 270.0], [364.0, 238.0], [380.0, 270.0], [381.0, 221.0], [387.0, 268.0], [394.0, 257.0], [396.0, 245.0], [395.0, 253.0], [385.0, 266.0], [398.0, 246.0], [413.0, 240.0], [403.0, 248.0], [404.0, 230.0], [410.0, 214.0], [422.0, 246.0], [421.0, 225.0], [416.0, 233.0], [429.0, 203.0], [445.0, 224.0], [447.0, 230.0], [440.0, 220.5], [444.0, 229.0], [435.0, 226.0], [458.0, 226.0], [457.0, 224.0], [454.0, 200.0], [455.0, 199.0], [452.0, 223.0], [462.0, 225.0], [468.0, 223.0], [464.0, 220.0], [481.0, 203.0], [483.0, 208.0], [487.0, 202.0], [508.0, 198.0], [496.0, 194.0], [500.0, 200.0], [499.0, 200.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 508.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 333.3333333333333, "minX": 1.66054998E12, "maxY": 333.3333333333333, "series": [{"data": [[1.66054998E12, 333.3333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66054998E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 333.3333333333333, "minX": 1.66054998E12, "maxY": 333.3333333333333, "series": [{"data": [[1.66054998E12, 333.3333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66054998E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 333.3333333333333, "minX": 1.66054998E12, "maxY": 333.3333333333333, "series": [{"data": [[1.66054998E12, 333.3333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66054998E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 333.3333333333333, "minX": 1.66054998E12, "maxY": 333.3333333333333, "series": [{"data": [[1.66054998E12, 333.3333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66054998E12, "title": "Total Transactions Per Second"}},
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

