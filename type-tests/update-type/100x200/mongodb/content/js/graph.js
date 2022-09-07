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
        data: {"result": {"minY": 13.0, "minX": 0.0, "maxY": 1497.0, "series": [{"data": [[0.0, 13.0], [0.1, 20.0], [0.2, 26.0], [0.3, 29.0], [0.4, 32.0], [0.5, 34.0], [0.6, 37.0], [0.7, 40.0], [0.8, 43.0], [0.9, 45.0], [1.0, 47.0], [1.1, 49.0], [1.2, 51.0], [1.3, 53.0], [1.4, 54.0], [1.5, 55.0], [1.6, 56.0], [1.7, 57.0], [1.8, 58.0], [1.9, 60.0], [2.0, 61.0], [2.1, 62.0], [2.2, 64.0], [2.3, 65.0], [2.4, 65.0], [2.5, 66.0], [2.6, 67.0], [2.7, 68.0], [2.8, 68.0], [2.9, 69.0], [3.0, 70.0], [3.1, 71.0], [3.2, 71.0], [3.3, 72.0], [3.4, 72.0], [3.5, 73.0], [3.6, 74.0], [3.7, 74.0], [3.8, 75.0], [3.9, 76.0], [4.0, 76.0], [4.1, 76.0], [4.2, 77.0], [4.3, 78.0], [4.4, 79.0], [4.5, 79.0], [4.6, 80.0], [4.7, 80.0], [4.8, 81.0], [4.9, 81.0], [5.0, 82.0], [5.1, 82.0], [5.2, 83.0], [5.3, 83.0], [5.4, 84.0], [5.5, 84.0], [5.6, 85.0], [5.7, 85.0], [5.8, 85.0], [5.9, 86.0], [6.0, 86.0], [6.1, 87.0], [6.2, 87.0], [6.3, 88.0], [6.4, 88.0], [6.5, 88.0], [6.6, 88.0], [6.7, 89.0], [6.8, 89.0], [6.9, 90.0], [7.0, 90.0], [7.1, 90.0], [7.2, 91.0], [7.3, 91.0], [7.4, 91.0], [7.5, 92.0], [7.6, 92.0], [7.7, 93.0], [7.8, 93.0], [7.9, 93.0], [8.0, 94.0], [8.1, 94.0], [8.2, 95.0], [8.3, 95.0], [8.4, 95.0], [8.5, 96.0], [8.6, 96.0], [8.7, 96.0], [8.8, 97.0], [8.9, 97.0], [9.0, 98.0], [9.1, 98.0], [9.2, 98.0], [9.3, 99.0], [9.4, 99.0], [9.5, 99.0], [9.6, 100.0], [9.7, 100.0], [9.8, 100.0], [9.9, 101.0], [10.0, 101.0], [10.1, 102.0], [10.2, 102.0], [10.3, 102.0], [10.4, 103.0], [10.5, 103.0], [10.6, 103.0], [10.7, 104.0], [10.8, 104.0], [10.9, 104.0], [11.0, 105.0], [11.1, 105.0], [11.2, 105.0], [11.3, 105.0], [11.4, 106.0], [11.5, 106.0], [11.6, 106.0], [11.7, 107.0], [11.8, 107.0], [11.9, 107.0], [12.0, 107.0], [12.1, 108.0], [12.2, 108.0], [12.3, 109.0], [12.4, 109.0], [12.5, 109.0], [12.6, 109.0], [12.7, 109.0], [12.8, 110.0], [12.9, 110.0], [13.0, 110.0], [13.1, 111.0], [13.2, 111.0], [13.3, 111.0], [13.4, 112.0], [13.5, 112.0], [13.6, 112.0], [13.7, 113.0], [13.8, 113.0], [13.9, 113.0], [14.0, 113.0], [14.1, 113.0], [14.2, 114.0], [14.3, 114.0], [14.4, 114.0], [14.5, 115.0], [14.6, 115.0], [14.7, 115.0], [14.8, 115.0], [14.9, 116.0], [15.0, 116.0], [15.1, 116.0], [15.2, 117.0], [15.3, 117.0], [15.4, 117.0], [15.5, 117.0], [15.6, 118.0], [15.7, 118.0], [15.8, 118.0], [15.9, 119.0], [16.0, 119.0], [16.1, 119.0], [16.2, 120.0], [16.3, 120.0], [16.4, 120.0], [16.5, 121.0], [16.6, 121.0], [16.7, 121.0], [16.8, 122.0], [16.9, 122.0], [17.0, 122.0], [17.1, 123.0], [17.2, 123.0], [17.3, 123.0], [17.4, 123.0], [17.5, 124.0], [17.6, 124.0], [17.7, 124.0], [17.8, 125.0], [17.9, 125.0], [18.0, 125.0], [18.1, 126.0], [18.2, 126.0], [18.3, 126.0], [18.4, 126.0], [18.5, 127.0], [18.6, 127.0], [18.7, 127.0], [18.8, 128.0], [18.9, 128.0], [19.0, 128.0], [19.1, 128.0], [19.2, 129.0], [19.3, 129.0], [19.4, 129.0], [19.5, 130.0], [19.6, 130.0], [19.7, 130.0], [19.8, 130.0], [19.9, 130.0], [20.0, 131.0], [20.1, 131.0], [20.2, 131.0], [20.3, 132.0], [20.4, 132.0], [20.5, 132.0], [20.6, 132.0], [20.7, 133.0], [20.8, 133.0], [20.9, 133.0], [21.0, 134.0], [21.1, 134.0], [21.2, 134.0], [21.3, 134.0], [21.4, 135.0], [21.5, 135.0], [21.6, 135.0], [21.7, 135.0], [21.8, 136.0], [21.9, 136.0], [22.0, 136.0], [22.1, 137.0], [22.2, 137.0], [22.3, 137.0], [22.4, 137.0], [22.5, 138.0], [22.6, 138.0], [22.7, 138.0], [22.8, 139.0], [22.9, 139.0], [23.0, 139.0], [23.1, 139.0], [23.2, 140.0], [23.3, 140.0], [23.4, 140.0], [23.5, 141.0], [23.6, 141.0], [23.7, 141.0], [23.8, 142.0], [23.9, 142.0], [24.0, 142.0], [24.1, 142.0], [24.2, 143.0], [24.3, 143.0], [24.4, 143.0], [24.5, 144.0], [24.6, 144.0], [24.7, 144.0], [24.8, 145.0], [24.9, 145.0], [25.0, 145.0], [25.1, 145.0], [25.2, 146.0], [25.3, 146.0], [25.4, 146.0], [25.5, 146.0], [25.6, 147.0], [25.7, 147.0], [25.8, 147.0], [25.9, 147.0], [26.0, 148.0], [26.1, 148.0], [26.2, 148.0], [26.3, 148.0], [26.4, 149.0], [26.5, 149.0], [26.6, 149.0], [26.7, 150.0], [26.8, 150.0], [26.9, 150.0], [27.0, 150.0], [27.1, 151.0], [27.2, 151.0], [27.3, 151.0], [27.4, 151.0], [27.5, 152.0], [27.6, 152.0], [27.7, 152.0], [27.8, 153.0], [27.9, 153.0], [28.0, 153.0], [28.1, 153.0], [28.2, 154.0], [28.3, 154.0], [28.4, 154.0], [28.5, 155.0], [28.6, 155.0], [28.7, 155.0], [28.8, 155.0], [28.9, 156.0], [29.0, 156.0], [29.1, 156.0], [29.2, 156.0], [29.3, 157.0], [29.4, 157.0], [29.5, 157.0], [29.6, 158.0], [29.7, 158.0], [29.8, 158.0], [29.9, 158.0], [30.0, 159.0], [30.1, 159.0], [30.2, 159.0], [30.3, 159.0], [30.4, 160.0], [30.5, 160.0], [30.6, 160.0], [30.7, 160.0], [30.8, 161.0], [30.9, 161.0], [31.0, 161.0], [31.1, 161.0], [31.2, 162.0], [31.3, 162.0], [31.4, 162.0], [31.5, 162.0], [31.6, 163.0], [31.7, 163.0], [31.8, 163.0], [31.9, 163.0], [32.0, 164.0], [32.1, 164.0], [32.2, 164.0], [32.3, 164.0], [32.4, 165.0], [32.5, 165.0], [32.6, 165.0], [32.7, 165.0], [32.8, 166.0], [32.9, 166.0], [33.0, 166.0], [33.1, 166.0], [33.2, 167.0], [33.3, 167.0], [33.4, 167.0], [33.5, 168.0], [33.6, 168.0], [33.7, 168.0], [33.8, 168.0], [33.9, 169.0], [34.0, 169.0], [34.1, 169.0], [34.2, 169.0], [34.3, 170.0], [34.4, 170.0], [34.5, 170.0], [34.6, 170.0], [34.7, 171.0], [34.8, 171.0], [34.9, 171.0], [35.0, 171.0], [35.1, 172.0], [35.2, 172.0], [35.3, 172.0], [35.4, 172.0], [35.5, 173.0], [35.6, 173.0], [35.7, 173.0], [35.8, 174.0], [35.9, 174.0], [36.0, 174.0], [36.1, 174.0], [36.2, 175.0], [36.3, 175.0], [36.4, 175.0], [36.5, 175.0], [36.6, 176.0], [36.7, 176.0], [36.8, 176.0], [36.9, 177.0], [37.0, 177.0], [37.1, 177.0], [37.2, 177.0], [37.3, 178.0], [37.4, 178.0], [37.5, 178.0], [37.6, 179.0], [37.7, 179.0], [37.8, 179.0], [37.9, 179.0], [38.0, 180.0], [38.1, 180.0], [38.2, 180.0], [38.3, 180.0], [38.4, 181.0], [38.5, 181.0], [38.6, 181.0], [38.7, 181.0], [38.8, 182.0], [38.9, 182.0], [39.0, 182.0], [39.1, 182.0], [39.2, 183.0], [39.3, 183.0], [39.4, 183.0], [39.5, 184.0], [39.6, 184.0], [39.7, 184.0], [39.8, 184.0], [39.9, 185.0], [40.0, 185.0], [40.1, 185.0], [40.2, 186.0], [40.3, 186.0], [40.4, 186.0], [40.5, 186.0], [40.6, 187.0], [40.7, 187.0], [40.8, 187.0], [40.9, 188.0], [41.0, 188.0], [41.1, 188.0], [41.2, 188.0], [41.3, 189.0], [41.4, 189.0], [41.5, 189.0], [41.6, 189.0], [41.7, 190.0], [41.8, 190.0], [41.9, 190.0], [42.0, 190.0], [42.1, 191.0], [42.2, 191.0], [42.3, 191.0], [42.4, 191.0], [42.5, 192.0], [42.6, 192.0], [42.7, 192.0], [42.8, 192.0], [42.9, 193.0], [43.0, 193.0], [43.1, 193.0], [43.2, 193.0], [43.3, 194.0], [43.4, 194.0], [43.5, 194.0], [43.6, 195.0], [43.7, 195.0], [43.8, 195.0], [43.9, 195.0], [44.0, 196.0], [44.1, 196.0], [44.2, 196.0], [44.3, 197.0], [44.4, 197.0], [44.5, 197.0], [44.6, 197.0], [44.7, 198.0], [44.8, 198.0], [44.9, 198.0], [45.0, 199.0], [45.1, 199.0], [45.2, 199.0], [45.3, 200.0], [45.4, 200.0], [45.5, 200.0], [45.6, 200.0], [45.7, 201.0], [45.8, 201.0], [45.9, 201.0], [46.0, 201.0], [46.1, 202.0], [46.2, 202.0], [46.3, 202.0], [46.4, 203.0], [46.5, 203.0], [46.6, 203.0], [46.7, 203.0], [46.8, 204.0], [46.9, 204.0], [47.0, 204.0], [47.1, 204.0], [47.2, 205.0], [47.3, 205.0], [47.4, 205.0], [47.5, 206.0], [47.6, 206.0], [47.7, 206.0], [47.8, 207.0], [47.9, 207.0], [48.0, 207.0], [48.1, 207.0], [48.2, 208.0], [48.3, 208.0], [48.4, 208.0], [48.5, 209.0], [48.6, 209.0], [48.7, 209.0], [48.8, 210.0], [48.9, 210.0], [49.0, 210.0], [49.1, 211.0], [49.2, 211.0], [49.3, 211.0], [49.4, 211.0], [49.5, 212.0], [49.6, 212.0], [49.7, 213.0], [49.8, 213.0], [49.9, 213.0], [50.0, 214.0], [50.1, 214.0], [50.2, 214.0], [50.3, 215.0], [50.4, 215.0], [50.5, 215.0], [50.6, 215.0], [50.7, 216.0], [50.8, 216.0], [50.9, 216.0], [51.0, 217.0], [51.1, 217.0], [51.2, 217.0], [51.3, 218.0], [51.4, 218.0], [51.5, 218.0], [51.6, 219.0], [51.7, 219.0], [51.8, 220.0], [51.9, 220.0], [52.0, 220.0], [52.1, 220.0], [52.2, 221.0], [52.3, 221.0], [52.4, 221.0], [52.5, 222.0], [52.6, 222.0], [52.7, 222.0], [52.8, 223.0], [52.9, 223.0], [53.0, 223.0], [53.1, 224.0], [53.2, 224.0], [53.3, 224.0], [53.4, 225.0], [53.5, 225.0], [53.6, 225.0], [53.7, 226.0], [53.8, 226.0], [53.9, 226.0], [54.0, 227.0], [54.1, 227.0], [54.2, 227.0], [54.3, 228.0], [54.4, 228.0], [54.5, 228.0], [54.6, 229.0], [54.7, 229.0], [54.8, 229.0], [54.9, 230.0], [55.0, 230.0], [55.1, 230.0], [55.2, 230.0], [55.3, 231.0], [55.4, 231.0], [55.5, 231.0], [55.6, 232.0], [55.7, 232.0], [55.8, 232.0], [55.9, 233.0], [56.0, 233.0], [56.1, 233.0], [56.2, 234.0], [56.3, 234.0], [56.4, 234.0], [56.5, 235.0], [56.6, 235.0], [56.7, 235.0], [56.8, 236.0], [56.9, 236.0], [57.0, 236.0], [57.1, 237.0], [57.2, 237.0], [57.3, 237.0], [57.4, 238.0], [57.5, 238.0], [57.6, 238.0], [57.7, 239.0], [57.8, 239.0], [57.9, 239.0], [58.0, 239.0], [58.1, 240.0], [58.2, 240.0], [58.3, 241.0], [58.4, 241.0], [58.5, 241.0], [58.6, 241.0], [58.7, 242.0], [58.8, 242.0], [58.9, 242.0], [59.0, 243.0], [59.1, 243.0], [59.2, 243.0], [59.3, 244.0], [59.4, 244.0], [59.5, 244.0], [59.6, 245.0], [59.7, 245.0], [59.8, 245.0], [59.9, 246.0], [60.0, 246.0], [60.1, 246.0], [60.2, 247.0], [60.3, 247.0], [60.4, 247.0], [60.5, 248.0], [60.6, 248.0], [60.7, 248.0], [60.8, 249.0], [60.9, 249.0], [61.0, 250.0], [61.1, 250.0], [61.2, 250.0], [61.3, 251.0], [61.4, 251.0], [61.5, 251.0], [61.6, 252.0], [61.7, 252.0], [61.8, 252.0], [61.9, 253.0], [62.0, 253.0], [62.1, 253.0], [62.2, 254.0], [62.3, 254.0], [62.4, 254.0], [62.5, 255.0], [62.6, 255.0], [62.7, 255.0], [62.8, 255.0], [62.9, 256.0], [63.0, 256.0], [63.1, 257.0], [63.2, 257.0], [63.3, 257.0], [63.4, 258.0], [63.5, 258.0], [63.6, 259.0], [63.7, 259.0], [63.8, 259.0], [63.9, 259.0], [64.0, 260.0], [64.1, 260.0], [64.2, 260.0], [64.3, 261.0], [64.4, 261.0], [64.5, 261.0], [64.6, 262.0], [64.7, 262.0], [64.8, 262.0], [64.9, 263.0], [65.0, 263.0], [65.1, 263.0], [65.2, 264.0], [65.3, 264.0], [65.4, 264.0], [65.5, 265.0], [65.6, 265.0], [65.7, 266.0], [65.8, 266.0], [65.9, 266.0], [66.0, 267.0], [66.1, 267.0], [66.2, 268.0], [66.3, 268.0], [66.4, 268.0], [66.5, 269.0], [66.6, 269.0], [66.7, 269.0], [66.8, 270.0], [66.9, 270.0], [67.0, 270.0], [67.1, 271.0], [67.2, 271.0], [67.3, 272.0], [67.4, 272.0], [67.5, 272.0], [67.6, 273.0], [67.7, 273.0], [67.8, 273.0], [67.9, 274.0], [68.0, 274.0], [68.1, 274.0], [68.2, 275.0], [68.3, 275.0], [68.4, 275.0], [68.5, 276.0], [68.6, 276.0], [68.7, 276.0], [68.8, 277.0], [68.9, 277.0], [69.0, 277.0], [69.1, 278.0], [69.2, 278.0], [69.3, 279.0], [69.4, 279.0], [69.5, 279.0], [69.6, 280.0], [69.7, 280.0], [69.8, 281.0], [69.9, 281.0], [70.0, 282.0], [70.1, 282.0], [70.2, 282.0], [70.3, 283.0], [70.4, 283.0], [70.5, 283.0], [70.6, 284.0], [70.7, 284.0], [70.8, 284.0], [70.9, 285.0], [71.0, 286.0], [71.1, 286.0], [71.2, 286.0], [71.3, 287.0], [71.4, 287.0], [71.5, 288.0], [71.6, 288.0], [71.7, 288.0], [71.8, 289.0], [71.9, 289.0], [72.0, 289.0], [72.1, 290.0], [72.2, 290.0], [72.3, 291.0], [72.4, 291.0], [72.5, 291.0], [72.6, 292.0], [72.7, 292.0], [72.8, 293.0], [72.9, 293.0], [73.0, 294.0], [73.1, 294.0], [73.2, 294.0], [73.3, 295.0], [73.4, 295.0], [73.5, 296.0], [73.6, 296.0], [73.7, 297.0], [73.8, 297.0], [73.9, 298.0], [74.0, 298.0], [74.1, 299.0], [74.2, 299.0], [74.3, 300.0], [74.4, 300.0], [74.5, 301.0], [74.6, 301.0], [74.7, 302.0], [74.8, 302.0], [74.9, 303.0], [75.0, 303.0], [75.1, 303.0], [75.2, 304.0], [75.3, 305.0], [75.4, 305.0], [75.5, 306.0], [75.6, 306.0], [75.7, 307.0], [75.8, 307.0], [75.9, 308.0], [76.0, 308.0], [76.1, 309.0], [76.2, 310.0], [76.3, 310.0], [76.4, 311.0], [76.5, 311.0], [76.6, 312.0], [76.7, 312.0], [76.8, 313.0], [76.9, 313.0], [77.0, 314.0], [77.1, 314.0], [77.2, 315.0], [77.3, 315.0], [77.4, 316.0], [77.5, 316.0], [77.6, 317.0], [77.7, 317.0], [77.8, 318.0], [77.9, 318.0], [78.0, 319.0], [78.1, 319.0], [78.2, 320.0], [78.3, 320.0], [78.4, 321.0], [78.5, 322.0], [78.6, 322.0], [78.7, 323.0], [78.8, 323.0], [78.9, 324.0], [79.0, 324.0], [79.1, 325.0], [79.2, 325.0], [79.3, 326.0], [79.4, 327.0], [79.5, 327.0], [79.6, 328.0], [79.7, 328.0], [79.8, 329.0], [79.9, 330.0], [80.0, 330.0], [80.1, 331.0], [80.2, 331.0], [80.3, 332.0], [80.4, 332.0], [80.5, 333.0], [80.6, 333.0], [80.7, 334.0], [80.8, 335.0], [80.9, 335.0], [81.0, 336.0], [81.1, 336.0], [81.2, 337.0], [81.3, 337.0], [81.4, 338.0], [81.5, 338.0], [81.6, 339.0], [81.7, 339.0], [81.8, 340.0], [81.9, 341.0], [82.0, 341.0], [82.1, 342.0], [82.2, 343.0], [82.3, 343.0], [82.4, 344.0], [82.5, 345.0], [82.6, 345.0], [82.7, 346.0], [82.8, 347.0], [82.9, 347.0], [83.0, 348.0], [83.1, 349.0], [83.2, 349.0], [83.3, 350.0], [83.4, 351.0], [83.5, 351.0], [83.6, 352.0], [83.7, 353.0], [83.8, 353.0], [83.9, 354.0], [84.0, 354.0], [84.1, 355.0], [84.2, 356.0], [84.3, 356.0], [84.4, 357.0], [84.5, 358.0], [84.6, 358.0], [84.7, 359.0], [84.8, 360.0], [84.9, 360.0], [85.0, 361.0], [85.1, 361.0], [85.2, 363.0], [85.3, 363.0], [85.4, 364.0], [85.5, 365.0], [85.6, 365.0], [85.7, 366.0], [85.8, 367.0], [85.9, 368.0], [86.0, 369.0], [86.1, 369.0], [86.2, 370.0], [86.3, 371.0], [86.4, 371.0], [86.5, 372.0], [86.6, 372.0], [86.7, 374.0], [86.8, 375.0], [86.9, 375.0], [87.0, 376.0], [87.1, 377.0], [87.2, 377.0], [87.3, 378.0], [87.4, 379.0], [87.5, 380.0], [87.6, 380.0], [87.7, 381.0], [87.8, 382.0], [87.9, 383.0], [88.0, 385.0], [88.1, 386.0], [88.2, 387.0], [88.3, 388.0], [88.4, 389.0], [88.5, 390.0], [88.6, 391.0], [88.7, 392.0], [88.8, 393.0], [88.9, 395.0], [89.0, 396.0], [89.1, 397.0], [89.2, 398.0], [89.3, 399.0], [89.4, 400.0], [89.5, 401.0], [89.6, 403.0], [89.7, 404.0], [89.8, 405.0], [89.9, 407.0], [90.0, 408.0], [90.1, 409.0], [90.2, 410.0], [90.3, 411.0], [90.4, 413.0], [90.5, 414.0], [90.6, 416.0], [90.7, 417.0], [90.8, 419.0], [90.9, 420.0], [91.0, 421.0], [91.1, 423.0], [91.2, 424.0], [91.3, 426.0], [91.4, 427.0], [91.5, 428.0], [91.6, 430.0], [91.7, 432.0], [91.8, 433.0], [91.9, 434.0], [92.0, 437.0], [92.1, 439.0], [92.2, 441.0], [92.3, 443.0], [92.4, 445.0], [92.5, 447.0], [92.6, 449.0], [92.7, 451.0], [92.8, 453.0], [92.9, 455.0], [93.0, 457.0], [93.1, 459.0], [93.2, 460.0], [93.3, 461.0], [93.4, 464.0], [93.5, 465.0], [93.6, 468.0], [93.7, 471.0], [93.8, 473.0], [93.9, 476.0], [94.0, 478.0], [94.1, 480.0], [94.2, 484.0], [94.3, 486.0], [94.4, 489.0], [94.5, 492.0], [94.6, 495.0], [94.7, 498.0], [94.8, 500.0], [94.9, 503.0], [95.0, 506.0], [95.1, 509.0], [95.2, 513.0], [95.3, 516.0], [95.4, 519.0], [95.5, 522.0], [95.6, 525.0], [95.7, 528.0], [95.8, 533.0], [95.9, 536.0], [96.0, 541.0], [96.1, 542.0], [96.2, 546.0], [96.3, 550.0], [96.4, 553.0], [96.5, 556.0], [96.6, 561.0], [96.7, 565.0], [96.8, 569.0], [96.9, 572.0], [97.0, 577.0], [97.1, 580.0], [97.2, 583.0], [97.3, 589.0], [97.4, 593.0], [97.5, 601.0], [97.6, 605.0], [97.7, 609.0], [97.8, 615.0], [97.9, 620.0], [98.0, 626.0], [98.1, 633.0], [98.2, 638.0], [98.3, 643.0], [98.4, 651.0], [98.5, 660.0], [98.6, 668.0], [98.7, 680.0], [98.8, 693.0], [98.9, 705.0], [99.0, 718.0], [99.1, 738.0], [99.2, 770.0], [99.3, 790.0], [99.4, 822.0], [99.5, 836.0], [99.6, 869.0], [99.7, 918.0], [99.8, 1015.0], [99.9, 1146.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 7137.0, "series": [{"data": [[0.0, 1911.0], [600.0, 280.0], [700.0, 94.0], [800.0, 66.0], [200.0, 5798.0], [900.0, 25.0], [1000.0, 13.0], [1100.0, 16.0], [300.0, 3025.0], [1200.0, 10.0], [1300.0, 1.0], [1400.0, 2.0], [400.0, 1082.0], [100.0, 7137.0], [500.0, 540.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 131.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 19134.0, "series": [{"data": [[0.0, 735.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 131.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [[3.0, 19134.0]], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 3.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 98.30979999999997, "minX": 1.6617315E12, "maxY": 98.30979999999997, "series": [{"data": [[1.6617315E12, 98.30979999999997]], "isOverall": false, "label": "Thread Group Create Type", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6617315E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.0, "maxY": 349.3, "series": [{"data": [[2.0, 15.666666666666666], [3.0, 17.428571428571427], [4.0, 23.142857142857142], [5.0, 18.666666666666668], [6.0, 21.0], [7.0, 30.0], [8.0, 27.0], [10.0, 19.5], [11.0, 36.75], [12.0, 28.0], [13.0, 35.111111111111114], [15.0, 27.75], [16.0, 24.5], [17.0, 26.5], [18.0, 32.25], [19.0, 41.0], [20.0, 69.85714285714286], [21.0, 53.0], [22.0, 47.833333333333336], [23.0, 54.0], [24.0, 44.0], [25.0, 39.6], [26.0, 34.0], [28.0, 34.833333333333336], [29.0, 32.333333333333336], [30.0, 41.125], [31.0, 34.8], [33.0, 75.8], [32.0, 51.0], [35.0, 38.333333333333336], [37.0, 46.0], [36.0, 48.0], [38.0, 111.5], [41.0, 81.75], [40.0, 74.18181818181819], [43.0, 80.61904761904763], [42.0, 59.0], [45.0, 59.333333333333336], [44.0, 64.0], [47.0, 61.0], [46.0, 62.52631578947369], [49.0, 50.125], [48.0, 58.0], [51.0, 103.83333333333333], [50.0, 79.81818181818181], [53.0, 134.40740740740745], [52.0, 96.66666666666667], [55.0, 59.375], [54.0, 52.333333333333336], [57.0, 225.33333333333337], [56.0, 173.14285714285714], [58.0, 111.5], [61.0, 213.5], [60.0, 209.53846153846155], [63.0, 270.0], [62.0, 240.5], [65.0, 349.3], [66.0, 146.96428571428572], [67.0, 192.54545454545456], [64.0, 218.83333333333331], [70.0, 177.62500000000003], [71.0, 168.07142857142858], [69.0, 169.0], [68.0, 56.5], [72.0, 222.85714285714286], [73.0, 168.16666666666666], [74.0, 211.66666666666663], [75.0, 148.77272727272728], [77.0, 127.84210526315789], [79.0, 267.125], [78.0, 109.66666666666666], [76.0, 67.5], [81.0, 203.36363636363637], [82.0, 341.8], [83.0, 196.0], [80.0, 162.1904761904762], [85.0, 95.04166666666667], [86.0, 151.3636363636364], [87.0, 210.60000000000002], [84.0, 154.8235294117647], [91.0, 145.36363636363637], [90.0, 121.83823529411764], [89.0, 107.06976744186046], [88.0, 114.68181818181819], [94.0, 240.55882352941177], [95.0, 221.69999999999996], [93.0, 212.65217391304347], [92.0, 141.96], [96.0, 193.51724137931032], [97.0, 241.07317073170734], [98.0, 230.72222222222226], [99.0, 151.65727699530507], [100.0, 248.70009632880178], [1.0, 13.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.30979999999997, 241.69830000000024]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 129437.06666666667, "minX": 1.6617315E12, "maxY": 1904000.0, "series": [{"data": [[1.6617315E12, 129437.06666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.6617315E12, 1904000.0]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6617315E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 241.69830000000024, "minX": 1.6617315E12, "maxY": 241.69830000000024, "series": [{"data": [[1.6617315E12, 241.69830000000024]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6617315E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 241.69030000000043, "minX": 1.6617315E12, "maxY": 241.69030000000043, "series": [{"data": [[1.6617315E12, 241.69030000000043]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6617315E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.004000000000000044, "minX": 1.6617315E12, "maxY": 0.004000000000000044, "series": [{"data": [[1.6617315E12, 0.004000000000000044]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6617315E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 13.0, "minX": 1.6617315E12, "maxY": 1497.0, "series": [{"data": [[1.6617315E12, 1497.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.6617315E12, 612.6000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.6617315E12, 1134.65]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.6617315E12, 778.9499999999999]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.6617315E12, 13.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.6617315E12, 233.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6617315E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 17.0, "minX": 37.0, "maxY": 948.0, "series": [{"data": [[533.0, 250.0], [519.0, 207.0], [526.0, 146.0], [514.0, 172.0], [558.0, 166.0], [547.0, 152.0], [549.0, 155.0], [571.0, 159.0], [575.0, 129.0], [587.0, 118.0], [631.0, 155.0], [643.0, 156.0], [37.0, 17.0], [67.0, 766.0], [166.0, 705.0], [176.0, 948.0], [198.0, 836.5], [221.0, 520.0], [278.0, 246.0], [296.0, 347.0], [299.0, 326.0], [305.0, 399.0], [308.0, 357.0], [316.0, 297.5], [311.0, 337.0], [327.0, 248.5], [329.0, 273.0], [351.0, 324.0], [348.0, 286.0], [340.0, 241.0], [341.0, 296.0], [358.0, 395.5], [378.0, 348.0], [383.0, 247.0], [381.0, 242.5], [370.0, 274.0], [385.0, 238.5], [390.0, 303.0], [409.0, 208.0], [455.0, 204.5], [448.0, 180.0], [452.0, 209.0], [453.0, 185.5], [472.0, 211.0], [470.0, 184.0], [476.0, 242.5], [489.0, 184.5], [482.0, 145.0], [485.0, 175.0], [497.0, 182.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[533.0, 170.0], [519.0, 190.0], [526.0, 180.0], [514.0, 183.5], [558.0, 163.0], [547.0, 194.0], [549.0, 162.5], [571.0, 163.0], [575.0, 173.5], [587.0, 81.0], [631.0, 147.0], [643.0, 141.0], [37.0, 20.0], [67.0, 551.0], [166.0, 565.0], [176.0, 479.0], [198.0, 518.0], [221.0, 402.0], [278.0, 269.0], [296.0, 339.5], [299.0, 306.0], [305.0, 336.0], [308.0, 330.0], [316.0, 301.0], [311.0, 294.5], [327.0, 274.0], [329.0, 290.5], [351.0, 262.5], [348.0, 265.0], [340.0, 269.0], [341.0, 263.0], [358.0, 264.5], [378.0, 241.0], [383.0, 282.0], [381.0, 242.0], [370.0, 250.0], [385.0, 253.0], [390.0, 249.0], [409.0, 243.0], [455.0, 222.0], [448.0, 195.0], [452.0, 196.0], [453.0, 212.0], [472.0, 199.0], [470.0, 203.0], [476.0, 212.0], [489.0, 193.0], [482.0, 198.0], [485.0, 164.0], [497.0, 211.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 643.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 17.0, "minX": 37.0, "maxY": 948.0, "series": [{"data": [[533.0, 250.0], [519.0, 207.0], [526.0, 146.0], [514.0, 172.0], [558.0, 166.0], [547.0, 152.0], [549.0, 155.0], [571.0, 159.0], [575.0, 129.0], [587.0, 118.0], [631.0, 155.0], [643.0, 156.0], [37.0, 17.0], [67.0, 766.0], [166.0, 705.0], [176.0, 948.0], [198.0, 836.0], [221.0, 520.0], [278.0, 246.0], [296.0, 347.0], [299.0, 326.0], [305.0, 399.0], [308.0, 357.0], [316.0, 297.5], [311.0, 337.0], [327.0, 248.5], [329.0, 273.0], [351.0, 324.0], [348.0, 286.0], [340.0, 241.0], [341.0, 296.0], [358.0, 395.5], [378.0, 348.0], [383.0, 247.0], [381.0, 242.5], [370.0, 274.0], [385.0, 238.5], [390.0, 303.0], [409.0, 208.0], [455.0, 204.5], [448.0, 180.0], [452.0, 209.0], [453.0, 185.5], [472.0, 211.0], [470.0, 184.0], [476.0, 242.5], [489.0, 184.5], [482.0, 145.0], [485.0, 175.0], [497.0, 182.0]], "isOverall": false, "label": "Successes", "isController": false}, {"data": [[533.0, 170.0], [519.0, 190.0], [526.0, 180.0], [514.0, 183.5], [558.0, 163.0], [547.0, 194.0], [549.0, 162.5], [571.0, 163.0], [575.0, 173.5], [587.0, 81.0], [631.0, 147.0], [643.0, 141.0], [37.0, 20.0], [67.0, 551.0], [166.0, 565.0], [176.0, 479.0], [198.0, 518.0], [221.0, 402.0], [278.0, 269.0], [296.0, 339.5], [299.0, 306.0], [305.0, 336.0], [308.0, 330.0], [316.0, 301.0], [311.0, 294.5], [327.0, 274.0], [329.0, 290.5], [351.0, 262.5], [348.0, 265.0], [340.0, 269.0], [341.0, 263.0], [358.0, 264.5], [378.0, 241.0], [383.0, 282.0], [381.0, 242.0], [370.0, 250.0], [385.0, 253.0], [390.0, 249.0], [409.0, 243.0], [455.0, 222.0], [448.0, 195.0], [452.0, 196.0], [453.0, 212.0], [472.0, 199.0], [470.0, 203.0], [476.0, 212.0], [489.0, 193.0], [482.0, 198.0], [485.0, 164.0], [497.0, 211.5]], "isOverall": false, "label": "Failures", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 643.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 333.3333333333333, "minX": 1.6617315E12, "maxY": 333.3333333333333, "series": [{"data": [[1.6617315E12, 333.3333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6617315E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 14.433333333333334, "minX": 1.6617315E12, "maxY": 318.9, "series": [{"data": [[1.6617315E12, 14.433333333333334]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.6617315E12, 318.9]], "isOverall": false, "label": "500", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.6617315E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 14.433333333333334, "minX": 1.6617315E12, "maxY": 318.9, "series": [{"data": [[1.6617315E12, 318.9]], "isOverall": false, "label": "HTTP Request-failure", "isController": false}, {"data": [[1.6617315E12, 14.433333333333334]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6617315E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 14.433333333333334, "minX": 1.6617315E12, "maxY": 318.9, "series": [{"data": [[1.6617315E12, 14.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [[1.6617315E12, 318.9]], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.6617315E12, "title": "Total Transactions Per Second"}},
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

