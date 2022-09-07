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
        data: {"result": {"minY": 3.0, "minX": 0.0, "maxY": 823.0, "series": [{"data": [[0.0, 3.0], [0.1, 7.0], [0.2, 11.0], [0.3, 14.0], [0.4, 19.0], [0.5, 24.0], [0.6, 29.0], [0.7, 37.0], [0.8, 40.0], [0.9, 43.0], [1.0, 44.0], [1.1, 46.0], [1.2, 49.0], [1.3, 50.0], [1.4, 52.0], [1.5, 54.0], [1.6, 55.0], [1.7, 56.0], [1.8, 58.0], [1.9, 59.0], [2.0, 60.0], [2.1, 60.0], [2.2, 61.0], [2.3, 61.0], [2.4, 62.0], [2.5, 63.0], [2.6, 63.0], [2.7, 63.0], [2.8, 64.0], [2.9, 64.0], [3.0, 65.0], [3.1, 65.0], [3.2, 66.0], [3.3, 66.0], [3.4, 67.0], [3.5, 67.0], [3.6, 67.0], [3.7, 67.0], [3.8, 68.0], [3.9, 68.0], [4.0, 69.0], [4.1, 69.0], [4.2, 69.0], [4.3, 70.0], [4.4, 70.0], [4.5, 71.0], [4.6, 71.0], [4.7, 71.0], [4.8, 72.0], [4.9, 72.0], [5.0, 72.0], [5.1, 73.0], [5.2, 73.0], [5.3, 74.0], [5.4, 74.0], [5.5, 75.0], [5.6, 75.0], [5.7, 76.0], [5.8, 76.0], [5.9, 76.0], [6.0, 77.0], [6.1, 77.0], [6.2, 78.0], [6.3, 78.0], [6.4, 78.0], [6.5, 79.0], [6.6, 79.0], [6.7, 80.0], [6.8, 80.0], [6.9, 80.0], [7.0, 81.0], [7.1, 81.0], [7.2, 81.0], [7.3, 82.0], [7.4, 82.0], [7.5, 82.0], [7.6, 83.0], [7.7, 83.0], [7.8, 84.0], [7.9, 84.0], [8.0, 84.0], [8.1, 85.0], [8.2, 85.0], [8.3, 85.0], [8.4, 85.0], [8.5, 86.0], [8.6, 86.0], [8.7, 86.0], [8.8, 87.0], [8.9, 87.0], [9.0, 87.0], [9.1, 88.0], [9.2, 88.0], [9.3, 88.0], [9.4, 89.0], [9.5, 89.0], [9.6, 89.0], [9.7, 90.0], [9.8, 90.0], [9.9, 90.0], [10.0, 90.0], [10.1, 91.0], [10.2, 91.0], [10.3, 91.0], [10.4, 91.0], [10.5, 92.0], [10.6, 92.0], [10.7, 92.0], [10.8, 92.0], [10.9, 93.0], [11.0, 93.0], [11.1, 93.0], [11.2, 94.0], [11.3, 94.0], [11.4, 94.0], [11.5, 94.0], [11.6, 94.0], [11.7, 95.0], [11.8, 95.0], [11.9, 95.0], [12.0, 96.0], [12.1, 96.0], [12.2, 96.0], [12.3, 96.0], [12.4, 97.0], [12.5, 97.0], [12.6, 97.0], [12.7, 97.0], [12.8, 98.0], [12.9, 98.0], [13.0, 98.0], [13.1, 99.0], [13.2, 99.0], [13.3, 99.0], [13.4, 99.0], [13.5, 99.0], [13.6, 100.0], [13.7, 100.0], [13.8, 100.0], [13.9, 100.0], [14.0, 100.0], [14.1, 101.0], [14.2, 101.0], [14.3, 101.0], [14.4, 101.0], [14.5, 102.0], [14.6, 102.0], [14.7, 102.0], [14.8, 102.0], [14.9, 103.0], [15.0, 103.0], [15.1, 103.0], [15.2, 103.0], [15.3, 104.0], [15.4, 104.0], [15.5, 104.0], [15.6, 104.0], [15.7, 104.0], [15.8, 105.0], [15.9, 105.0], [16.0, 105.0], [16.1, 105.0], [16.2, 106.0], [16.3, 106.0], [16.4, 106.0], [16.5, 106.0], [16.6, 107.0], [16.7, 107.0], [16.8, 107.0], [16.9, 107.0], [17.0, 107.0], [17.1, 108.0], [17.2, 108.0], [17.3, 108.0], [17.4, 108.0], [17.5, 109.0], [17.6, 109.0], [17.7, 109.0], [17.8, 109.0], [17.9, 110.0], [18.0, 110.0], [18.1, 110.0], [18.2, 110.0], [18.3, 110.0], [18.4, 111.0], [18.5, 111.0], [18.6, 111.0], [18.7, 112.0], [18.8, 112.0], [18.9, 112.0], [19.0, 112.0], [19.1, 113.0], [19.2, 113.0], [19.3, 113.0], [19.4, 113.0], [19.5, 114.0], [19.6, 114.0], [19.7, 114.0], [19.8, 114.0], [19.9, 115.0], [20.0, 115.0], [20.1, 115.0], [20.2, 115.0], [20.3, 116.0], [20.4, 116.0], [20.5, 116.0], [20.6, 116.0], [20.7, 117.0], [20.8, 117.0], [20.9, 117.0], [21.0, 117.0], [21.1, 117.0], [21.2, 118.0], [21.3, 118.0], [21.4, 118.0], [21.5, 118.0], [21.6, 119.0], [21.7, 119.0], [21.8, 119.0], [21.9, 120.0], [22.0, 120.0], [22.1, 120.0], [22.2, 121.0], [22.3, 121.0], [22.4, 121.0], [22.5, 121.0], [22.6, 122.0], [22.7, 122.0], [22.8, 122.0], [22.9, 122.0], [23.0, 123.0], [23.1, 123.0], [23.2, 123.0], [23.3, 123.0], [23.4, 124.0], [23.5, 124.0], [23.6, 124.0], [23.7, 124.0], [23.8, 124.0], [23.9, 125.0], [24.0, 125.0], [24.1, 125.0], [24.2, 125.0], [24.3, 125.0], [24.4, 126.0], [24.5, 126.0], [24.6, 126.0], [24.7, 126.0], [24.8, 126.0], [24.9, 127.0], [25.0, 127.0], [25.1, 127.0], [25.2, 127.0], [25.3, 127.0], [25.4, 128.0], [25.5, 128.0], [25.6, 128.0], [25.7, 128.0], [25.8, 129.0], [25.9, 129.0], [26.0, 129.0], [26.1, 129.0], [26.2, 129.0], [26.3, 130.0], [26.4, 130.0], [26.5, 130.0], [26.6, 130.0], [26.7, 130.0], [26.8, 131.0], [26.9, 131.0], [27.0, 131.0], [27.1, 131.0], [27.2, 132.0], [27.3, 132.0], [27.4, 132.0], [27.5, 132.0], [27.6, 133.0], [27.7, 133.0], [27.8, 133.0], [27.9, 133.0], [28.0, 134.0], [28.1, 134.0], [28.2, 134.0], [28.3, 134.0], [28.4, 135.0], [28.5, 135.0], [28.6, 135.0], [28.7, 135.0], [28.8, 136.0], [28.9, 136.0], [29.0, 136.0], [29.1, 136.0], [29.2, 136.0], [29.3, 137.0], [29.4, 137.0], [29.5, 137.0], [29.6, 137.0], [29.7, 138.0], [29.8, 138.0], [29.9, 138.0], [30.0, 138.0], [30.1, 138.0], [30.2, 139.0], [30.3, 139.0], [30.4, 139.0], [30.5, 139.0], [30.6, 140.0], [30.7, 140.0], [30.8, 140.0], [30.9, 140.0], [31.0, 141.0], [31.1, 141.0], [31.2, 141.0], [31.3, 141.0], [31.4, 142.0], [31.5, 142.0], [31.6, 142.0], [31.7, 142.0], [31.8, 143.0], [31.9, 143.0], [32.0, 143.0], [32.1, 143.0], [32.2, 143.0], [32.3, 144.0], [32.4, 144.0], [32.5, 144.0], [32.6, 144.0], [32.7, 144.0], [32.8, 145.0], [32.9, 145.0], [33.0, 145.0], [33.1, 145.0], [33.2, 146.0], [33.3, 146.0], [33.4, 146.0], [33.5, 146.0], [33.6, 147.0], [33.7, 147.0], [33.8, 147.0], [33.9, 147.0], [34.0, 148.0], [34.1, 148.0], [34.2, 148.0], [34.3, 148.0], [34.4, 149.0], [34.5, 149.0], [34.6, 149.0], [34.7, 149.0], [34.8, 150.0], [34.9, 150.0], [35.0, 150.0], [35.1, 150.0], [35.2, 151.0], [35.3, 151.0], [35.4, 151.0], [35.5, 151.0], [35.6, 152.0], [35.7, 152.0], [35.8, 152.0], [35.9, 152.0], [36.0, 152.0], [36.1, 152.0], [36.2, 153.0], [36.3, 153.0], [36.4, 153.0], [36.5, 153.0], [36.6, 154.0], [36.7, 154.0], [36.8, 154.0], [36.9, 154.0], [37.0, 154.0], [37.1, 155.0], [37.2, 155.0], [37.3, 155.0], [37.4, 155.0], [37.5, 155.0], [37.6, 156.0], [37.7, 156.0], [37.8, 156.0], [37.9, 156.0], [38.0, 157.0], [38.1, 157.0], [38.2, 157.0], [38.3, 157.0], [38.4, 157.0], [38.5, 158.0], [38.6, 158.0], [38.7, 158.0], [38.8, 158.0], [38.9, 159.0], [39.0, 159.0], [39.1, 159.0], [39.2, 159.0], [39.3, 159.0], [39.4, 160.0], [39.5, 160.0], [39.6, 160.0], [39.7, 160.0], [39.8, 161.0], [39.9, 161.0], [40.0, 161.0], [40.1, 161.0], [40.2, 161.0], [40.3, 162.0], [40.4, 162.0], [40.5, 162.0], [40.6, 162.0], [40.7, 163.0], [40.8, 163.0], [40.9, 163.0], [41.0, 163.0], [41.1, 163.0], [41.2, 164.0], [41.3, 164.0], [41.4, 164.0], [41.5, 164.0], [41.6, 164.0], [41.7, 165.0], [41.8, 165.0], [41.9, 165.0], [42.0, 165.0], [42.1, 165.0], [42.2, 166.0], [42.3, 166.0], [42.4, 166.0], [42.5, 166.0], [42.6, 166.0], [42.7, 167.0], [42.8, 167.0], [42.9, 167.0], [43.0, 167.0], [43.1, 168.0], [43.2, 168.0], [43.3, 168.0], [43.4, 168.0], [43.5, 169.0], [43.6, 169.0], [43.7, 169.0], [43.8, 169.0], [43.9, 170.0], [44.0, 170.0], [44.1, 170.0], [44.2, 170.0], [44.3, 170.0], [44.4, 171.0], [44.5, 171.0], [44.6, 171.0], [44.7, 171.0], [44.8, 172.0], [44.9, 172.0], [45.0, 172.0], [45.1, 172.0], [45.2, 172.0], [45.3, 173.0], [45.4, 173.0], [45.5, 173.0], [45.6, 173.0], [45.7, 174.0], [45.8, 174.0], [45.9, 174.0], [46.0, 175.0], [46.1, 175.0], [46.2, 175.0], [46.3, 175.0], [46.4, 175.0], [46.5, 176.0], [46.6, 176.0], [46.7, 176.0], [46.8, 177.0], [46.9, 177.0], [47.0, 177.0], [47.1, 177.0], [47.2, 177.0], [47.3, 178.0], [47.4, 178.0], [47.5, 178.0], [47.6, 178.0], [47.7, 178.0], [47.8, 179.0], [47.9, 179.0], [48.0, 179.0], [48.1, 179.0], [48.2, 179.0], [48.3, 180.0], [48.4, 180.0], [48.5, 180.0], [48.6, 180.0], [48.7, 181.0], [48.8, 181.0], [48.9, 181.0], [49.0, 181.0], [49.1, 182.0], [49.2, 182.0], [49.3, 182.0], [49.4, 182.0], [49.5, 182.0], [49.6, 183.0], [49.7, 183.0], [49.8, 183.0], [49.9, 184.0], [50.0, 184.0], [50.1, 184.0], [50.2, 184.0], [50.3, 184.0], [50.4, 185.0], [50.5, 185.0], [50.6, 185.0], [50.7, 185.0], [50.8, 185.0], [50.9, 186.0], [51.0, 186.0], [51.1, 186.0], [51.2, 186.0], [51.3, 186.0], [51.4, 187.0], [51.5, 187.0], [51.6, 187.0], [51.7, 187.0], [51.8, 188.0], [51.9, 188.0], [52.0, 188.0], [52.1, 188.0], [52.2, 188.0], [52.3, 189.0], [52.4, 189.0], [52.5, 189.0], [52.6, 189.0], [52.7, 190.0], [52.8, 190.0], [52.9, 190.0], [53.0, 190.0], [53.1, 191.0], [53.2, 191.0], [53.3, 191.0], [53.4, 191.0], [53.5, 191.0], [53.6, 192.0], [53.7, 192.0], [53.8, 192.0], [53.9, 193.0], [54.0, 193.0], [54.1, 193.0], [54.2, 193.0], [54.3, 193.0], [54.4, 193.0], [54.5, 194.0], [54.6, 194.0], [54.7, 194.0], [54.8, 194.0], [54.9, 195.0], [55.0, 195.0], [55.1, 195.0], [55.2, 195.0], [55.3, 195.0], [55.4, 196.0], [55.5, 196.0], [55.6, 196.0], [55.7, 196.0], [55.8, 197.0], [55.9, 197.0], [56.0, 197.0], [56.1, 197.0], [56.2, 197.0], [56.3, 198.0], [56.4, 198.0], [56.5, 198.0], [56.6, 198.0], [56.7, 199.0], [56.8, 199.0], [56.9, 199.0], [57.0, 199.0], [57.1, 200.0], [57.2, 200.0], [57.3, 200.0], [57.4, 200.0], [57.5, 201.0], [57.6, 201.0], [57.7, 201.0], [57.8, 201.0], [57.9, 202.0], [58.0, 202.0], [58.1, 202.0], [58.2, 202.0], [58.3, 203.0], [58.4, 203.0], [58.5, 203.0], [58.6, 203.0], [58.7, 204.0], [58.8, 204.0], [58.9, 204.0], [59.0, 204.0], [59.1, 205.0], [59.2, 205.0], [59.3, 205.0], [59.4, 206.0], [59.5, 206.0], [59.6, 206.0], [59.7, 206.0], [59.8, 207.0], [59.9, 207.0], [60.0, 207.0], [60.1, 207.0], [60.2, 208.0], [60.3, 208.0], [60.4, 208.0], [60.5, 209.0], [60.6, 209.0], [60.7, 209.0], [60.8, 209.0], [60.9, 210.0], [61.0, 210.0], [61.1, 210.0], [61.2, 210.0], [61.3, 211.0], [61.4, 211.0], [61.5, 211.0], [61.6, 212.0], [61.7, 212.0], [61.8, 212.0], [61.9, 212.0], [62.0, 213.0], [62.1, 213.0], [62.2, 213.0], [62.3, 213.0], [62.4, 214.0], [62.5, 214.0], [62.6, 214.0], [62.7, 214.0], [62.8, 215.0], [62.9, 215.0], [63.0, 215.0], [63.1, 216.0], [63.2, 216.0], [63.3, 216.0], [63.4, 216.0], [63.5, 217.0], [63.6, 217.0], [63.7, 217.0], [63.8, 218.0], [63.9, 218.0], [64.0, 218.0], [64.1, 219.0], [64.2, 219.0], [64.3, 219.0], [64.4, 220.0], [64.5, 220.0], [64.6, 220.0], [64.7, 220.0], [64.8, 220.0], [64.9, 221.0], [65.0, 221.0], [65.1, 221.0], [65.2, 221.0], [65.3, 222.0], [65.4, 222.0], [65.5, 222.0], [65.6, 223.0], [65.7, 223.0], [65.8, 223.0], [65.9, 224.0], [66.0, 224.0], [66.1, 224.0], [66.2, 224.0], [66.3, 225.0], [66.4, 225.0], [66.5, 225.0], [66.6, 226.0], [66.7, 226.0], [66.8, 226.0], [66.9, 226.0], [67.0, 227.0], [67.1, 227.0], [67.2, 227.0], [67.3, 228.0], [67.4, 228.0], [67.5, 228.0], [67.6, 229.0], [67.7, 229.0], [67.8, 229.0], [67.9, 230.0], [68.0, 230.0], [68.1, 230.0], [68.2, 230.0], [68.3, 231.0], [68.4, 231.0], [68.5, 231.0], [68.6, 232.0], [68.7, 232.0], [68.8, 232.0], [68.9, 232.0], [69.0, 233.0], [69.1, 233.0], [69.2, 233.0], [69.3, 233.0], [69.4, 234.0], [69.5, 234.0], [69.6, 234.0], [69.7, 235.0], [69.8, 235.0], [69.9, 235.0], [70.0, 236.0], [70.1, 236.0], [70.2, 236.0], [70.3, 236.0], [70.4, 236.0], [70.5, 237.0], [70.6, 237.0], [70.7, 237.0], [70.8, 237.0], [70.9, 238.0], [71.0, 238.0], [71.1, 238.0], [71.2, 238.0], [71.3, 239.0], [71.4, 239.0], [71.5, 239.0], [71.6, 240.0], [71.7, 240.0], [71.8, 240.0], [71.9, 241.0], [72.0, 241.0], [72.1, 241.0], [72.2, 241.0], [72.3, 242.0], [72.4, 242.0], [72.5, 242.0], [72.6, 243.0], [72.7, 243.0], [72.8, 243.0], [72.9, 243.0], [73.0, 244.0], [73.1, 244.0], [73.2, 244.0], [73.3, 245.0], [73.4, 245.0], [73.5, 245.0], [73.6, 246.0], [73.7, 246.0], [73.8, 246.0], [73.9, 246.0], [74.0, 246.0], [74.1, 247.0], [74.2, 247.0], [74.3, 247.0], [74.4, 248.0], [74.5, 248.0], [74.6, 248.0], [74.7, 249.0], [74.8, 249.0], [74.9, 249.0], [75.0, 250.0], [75.1, 250.0], [75.2, 250.0], [75.3, 251.0], [75.4, 251.0], [75.5, 251.0], [75.6, 252.0], [75.7, 252.0], [75.8, 252.0], [75.9, 253.0], [76.0, 253.0], [76.1, 253.0], [76.2, 254.0], [76.3, 254.0], [76.4, 254.0], [76.5, 254.0], [76.6, 255.0], [76.7, 255.0], [76.8, 256.0], [76.9, 256.0], [77.0, 256.0], [77.1, 257.0], [77.2, 257.0], [77.3, 257.0], [77.4, 258.0], [77.5, 258.0], [77.6, 259.0], [77.7, 259.0], [77.8, 259.0], [77.9, 260.0], [78.0, 260.0], [78.1, 260.0], [78.2, 261.0], [78.3, 261.0], [78.4, 262.0], [78.5, 262.0], [78.6, 263.0], [78.7, 263.0], [78.8, 263.0], [78.9, 264.0], [79.0, 264.0], [79.1, 265.0], [79.2, 265.0], [79.3, 266.0], [79.4, 266.0], [79.5, 267.0], [79.6, 267.0], [79.7, 267.0], [79.8, 268.0], [79.9, 269.0], [80.0, 269.0], [80.1, 269.0], [80.2, 270.0], [80.3, 270.0], [80.4, 271.0], [80.5, 271.0], [80.6, 272.0], [80.7, 272.0], [80.8, 273.0], [80.9, 273.0], [81.0, 274.0], [81.1, 274.0], [81.2, 275.0], [81.3, 275.0], [81.4, 275.0], [81.5, 276.0], [81.6, 276.0], [81.7, 277.0], [81.8, 277.0], [81.9, 278.0], [82.0, 278.0], [82.1, 279.0], [82.2, 279.0], [82.3, 279.0], [82.4, 280.0], [82.5, 280.0], [82.6, 281.0], [82.7, 282.0], [82.8, 282.0], [82.9, 282.0], [83.0, 283.0], [83.1, 283.0], [83.2, 284.0], [83.3, 284.0], [83.4, 285.0], [83.5, 285.0], [83.6, 286.0], [83.7, 286.0], [83.8, 287.0], [83.9, 287.0], [84.0, 287.0], [84.1, 288.0], [84.2, 289.0], [84.3, 289.0], [84.4, 290.0], [84.5, 290.0], [84.6, 291.0], [84.7, 291.0], [84.8, 292.0], [84.9, 292.0], [85.0, 293.0], [85.1, 293.0], [85.2, 294.0], [85.3, 295.0], [85.4, 295.0], [85.5, 296.0], [85.6, 296.0], [85.7, 297.0], [85.8, 297.0], [85.9, 298.0], [86.0, 298.0], [86.1, 299.0], [86.2, 299.0], [86.3, 300.0], [86.4, 301.0], [86.5, 301.0], [86.6, 302.0], [86.7, 302.0], [86.8, 303.0], [86.9, 303.0], [87.0, 304.0], [87.1, 304.0], [87.2, 305.0], [87.3, 305.0], [87.4, 306.0], [87.5, 307.0], [87.6, 307.0], [87.7, 308.0], [87.8, 309.0], [87.9, 310.0], [88.0, 310.0], [88.1, 311.0], [88.2, 312.0], [88.3, 312.0], [88.4, 313.0], [88.5, 314.0], [88.6, 314.0], [88.7, 315.0], [88.8, 315.0], [88.9, 316.0], [89.0, 317.0], [89.1, 317.0], [89.2, 318.0], [89.3, 319.0], [89.4, 319.0], [89.5, 320.0], [89.6, 321.0], [89.7, 322.0], [89.8, 322.0], [89.9, 323.0], [90.0, 324.0], [90.1, 325.0], [90.2, 325.0], [90.3, 326.0], [90.4, 327.0], [90.5, 328.0], [90.6, 329.0], [90.7, 330.0], [90.8, 331.0], [90.9, 332.0], [91.0, 333.0], [91.1, 334.0], [91.2, 335.0], [91.3, 336.0], [91.4, 337.0], [91.5, 338.0], [91.6, 339.0], [91.7, 341.0], [91.8, 341.0], [91.9, 343.0], [92.0, 345.0], [92.1, 346.0], [92.2, 347.0], [92.3, 348.0], [92.4, 349.0], [92.5, 350.0], [92.6, 351.0], [92.7, 352.0], [92.8, 353.0], [92.9, 355.0], [93.0, 357.0], [93.1, 358.0], [93.2, 360.0], [93.3, 362.0], [93.4, 363.0], [93.5, 364.0], [93.6, 365.0], [93.7, 366.0], [93.8, 368.0], [93.9, 369.0], [94.0, 371.0], [94.1, 372.0], [94.2, 374.0], [94.3, 375.0], [94.4, 377.0], [94.5, 378.0], [94.6, 380.0], [94.7, 382.0], [94.8, 383.0], [94.9, 386.0], [95.0, 387.0], [95.1, 389.0], [95.2, 391.0], [95.3, 393.0], [95.4, 394.0], [95.5, 395.0], [95.6, 397.0], [95.7, 398.0], [95.8, 400.0], [95.9, 402.0], [96.0, 403.0], [96.1, 405.0], [96.2, 407.0], [96.3, 409.0], [96.4, 411.0], [96.5, 413.0], [96.6, 415.0], [96.7, 417.0], [96.8, 418.0], [96.9, 420.0], [97.0, 423.0], [97.1, 426.0], [97.2, 430.0], [97.3, 433.0], [97.4, 436.0], [97.5, 439.0], [97.6, 443.0], [97.7, 447.0], [97.8, 450.0], [97.9, 454.0], [98.0, 458.0], [98.1, 464.0], [98.2, 468.0], [98.3, 476.0], [98.4, 481.0], [98.5, 486.0], [98.6, 490.0], [98.7, 493.0], [98.8, 499.0], [98.9, 504.0], [99.0, 512.0], [99.1, 520.0], [99.2, 529.0], [99.3, 537.0], [99.4, 544.0], [99.5, 555.0], [99.6, 575.0], [99.7, 591.0], [99.8, 614.0], [99.9, 675.0], [100.0, 823.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 2.0, "minX": 0.0, "maxY": 8705.0, "series": [{"data": [[0.0, 2705.0], [300.0, 1906.0], [600.0, 38.0], [700.0, 10.0], [100.0, 8705.0], [200.0, 5834.0], [400.0, 610.0], [800.0, 2.0], [500.0, 190.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 800.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 236.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 19764.0, "series": [{"data": [[0.0, 19764.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 236.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 86.9137931034481, "minX": 1.66173288E12, "maxY": 99.56699419383655, "series": [{"data": [[1.66173294E12, 86.9137931034481], [1.66173288E12, 99.56699419383655]], "isOverall": false, "label": "Thread Group Create Type", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66173294E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 3.5, "minX": 1.0, "maxY": 247.7142857142857, "series": [{"data": [[2.0, 3.5], [3.0, 7.0], [4.0, 8.5], [5.0, 11.0], [6.0, 6.0], [7.0, 7.0], [8.0, 7.5], [9.0, 11.0], [10.0, 90.66666666666667], [11.0, 19.22222222222222], [12.0, 24.333333333333332], [13.0, 12.142857142857144], [14.0, 34.75], [15.0, 36.0], [16.0, 20.5], [17.0, 18.333333333333332], [18.0, 11.5], [19.0, 25.9], [20.0, 45.333333333333336], [21.0, 31.875], [22.0, 68.0], [24.0, 38.333333333333336], [25.0, 34.666666666666664], [26.0, 45.0], [27.0, 46.99999999999999], [28.0, 87.0], [29.0, 44.875], [30.0, 71.4], [31.0, 49.333333333333336], [33.0, 74.0], [32.0, 54.5], [34.0, 53.666666666666664], [35.0, 34.333333333333336], [36.0, 72.16666666666666], [37.0, 92.4], [38.0, 60.0], [39.0, 27.0], [41.0, 46.88888888888889], [40.0, 36.4], [42.0, 87.0], [43.0, 77.0], [44.0, 60.5], [45.0, 42.26315789473684], [46.0, 95.5], [47.0, 40.142857142857146], [48.0, 51.285714285714285], [49.0, 56.307692307692314], [50.0, 50.18181818181818], [51.0, 34.5], [53.0, 65.6], [52.0, 26.25], [55.0, 39.875], [57.0, 77.72972972972973], [58.0, 138.33333333333331], [59.0, 59.333333333333336], [60.0, 154.5], [61.0, 93.33333333333333], [62.0, 132.75], [63.0, 66.39999999999999], [64.0, 88.5], [65.0, 77.33333333333333], [66.0, 153.66666666666666], [67.0, 144.0], [68.0, 84.12195121951218], [69.0, 85.0], [70.0, 132.5], [71.0, 102.00000000000001], [73.0, 247.7142857142857], [74.0, 116.30000000000001], [75.0, 112.80645161290323], [72.0, 69.66666666666667], [77.0, 99.30000000000001], [78.0, 228.8], [79.0, 99.99999999999999], [76.0, 81.19999999999999], [80.0, 112.0], [83.0, 104.63333333333333], [82.0, 91.71428571428571], [81.0, 95.29166666666669], [84.0, 88.30434782608698], [86.0, 197.35000000000002], [87.0, 81.6], [85.0, 78.0], [88.0, 149.6], [89.0, 106.2], [90.0, 162.0], [91.0, 221.16666666666669], [92.0, 114.95833333333334], [93.0, 149.35714285714283], [94.0, 92.66942148760329], [95.0, 137.578947368421], [98.0, 102.01639344262293], [99.0, 138.16666666666669], [97.0, 101.82], [96.0, 102.33333333333336], [100.0, 206.44466456068963], [1.0, 4.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[98.24599999999975, 198.79309999999992]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 1322.4, "minX": 1.66173288E12, "maxY": 74334.8, "series": [{"data": [[1.66173294E12, 1322.4], [1.66173288E12, 11344.266666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66173294E12, 8665.2], [1.66173288E12, 74334.8]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66173294E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 91.51197318007664, "minX": 1.66173288E12, "maxY": 211.29884993300496, "series": [{"data": [[1.66173294E12, 91.51197318007664], [1.66173288E12, 211.29884993300496]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66173294E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 91.51101532567051, "minX": 1.66173288E12, "maxY": 211.29806833407815, "series": [{"data": [[1.66173294E12, 91.51101532567051], [1.66173288E12, 211.29806833407815]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66173294E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66173288E12, "maxY": 0.00513622152746768, "series": [{"data": [[1.66173294E12, 0.0], [1.66173288E12, 0.00513622152746768]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66173294E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 3.0, "minX": 1.66173288E12, "maxY": 823.0, "series": [{"data": [[1.66173294E12, 269.0], [1.66173288E12, 823.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66173294E12, 138.0], [1.66173288E12, 334.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66173294E12, 200.11000000000013], [1.66173288E12, 520.869999999999]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66173294E12, 159.54999999999995], [1.66173288E12, 396.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66173294E12, 3.0], [1.66173288E12, 16.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66173294E12, 90.0], [1.66173288E12, 195.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66173294E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 13.5, "minX": 65.0, "maxY": 406.0, "series": [{"data": [[538.0, 182.0], [524.0, 187.0], [536.0, 181.0], [527.0, 185.0], [512.0, 193.0], [529.0, 181.0], [569.0, 175.0], [642.0, 153.0], [651.0, 149.0], [677.0, 144.0], [735.0, 128.0], [757.0, 131.0], [849.0, 109.0], [926.0, 102.0], [935.0, 104.0], [65.0, 77.0], [1051.0, 84.0], [102.0, 13.5], [220.0, 303.0], [245.0, 406.0], [270.0, 357.5], [256.0, 383.5], [262.0, 362.5], [275.0, 358.0], [329.0, 303.0], [343.0, 276.0], [350.0, 279.0], [363.0, 262.0], [374.0, 259.5], [376.0, 251.0], [390.0, 243.5], [411.0, 241.0], [408.0, 246.0], [416.0, 239.0], [420.0, 221.0], [424.0, 233.0], [437.0, 226.0], [439.0, 223.0], [463.0, 208.0], [490.0, 201.0], [498.0, 191.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1051.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 13.5, "minX": 65.0, "maxY": 406.0, "series": [{"data": [[538.0, 182.0], [524.0, 187.0], [536.0, 181.0], [527.0, 185.0], [512.0, 193.0], [529.0, 181.0], [569.0, 175.0], [642.0, 153.0], [651.0, 149.0], [677.0, 144.0], [735.0, 128.0], [757.0, 131.0], [849.0, 109.0], [926.0, 102.0], [935.0, 104.0], [65.0, 77.0], [1051.0, 84.0], [102.0, 13.5], [220.0, 303.0], [245.0, 406.0], [270.0, 357.5], [256.0, 383.5], [262.0, 362.5], [275.0, 358.0], [329.0, 303.0], [343.0, 276.0], [350.0, 279.0], [363.0, 262.0], [374.0, 259.5], [376.0, 251.0], [390.0, 243.5], [411.0, 241.0], [408.0, 246.0], [416.0, 239.0], [420.0, 221.0], [424.0, 233.0], [437.0, 226.0], [439.0, 223.0], [463.0, 208.0], [490.0, 201.0], [498.0, 191.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 1051.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 33.13333333333333, "minX": 1.66173288E12, "maxY": 300.2, "series": [{"data": [[1.66173294E12, 33.13333333333333], [1.66173288E12, 300.2]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66173294E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 34.8, "minX": 1.66173288E12, "maxY": 298.53333333333336, "series": [{"data": [[1.66173294E12, 34.8], [1.66173288E12, 298.53333333333336]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66173294E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 34.8, "minX": 1.66173288E12, "maxY": 298.53333333333336, "series": [{"data": [[1.66173294E12, 34.8], [1.66173288E12, 298.53333333333336]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66173294E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 34.8, "minX": 1.66173288E12, "maxY": 298.53333333333336, "series": [{"data": [[1.66173294E12, 34.8], [1.66173288E12, 298.53333333333336]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66173294E12, "title": "Total Transactions Per Second"}},
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

