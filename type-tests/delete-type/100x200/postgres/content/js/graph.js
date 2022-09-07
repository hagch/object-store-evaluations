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
        data: {"result": {"minY": 17.0, "minX": 0.0, "maxY": 324.0, "series": [{"data": [[0.0, 17.0], [0.1, 50.0], [0.2, 63.0], [0.3, 73.0], [0.4, 76.0], [0.5, 79.0], [0.6, 83.0], [0.7, 89.0], [0.8, 92.0], [0.9, 93.0], [1.0, 94.0], [1.1, 94.0], [1.2, 95.0], [1.3, 95.0], [1.4, 95.0], [1.5, 95.0], [1.6, 96.0], [1.7, 96.0], [1.8, 96.0], [1.9, 96.0], [2.0, 96.0], [2.1, 96.0], [2.2, 96.0], [2.3, 97.0], [2.4, 97.0], [2.5, 97.0], [2.6, 97.0], [2.7, 97.0], [2.8, 97.0], [2.9, 97.0], [3.0, 97.0], [3.1, 97.0], [3.2, 97.0], [3.3, 97.0], [3.4, 98.0], [3.5, 98.0], [3.6, 98.0], [3.7, 98.0], [3.8, 98.0], [3.9, 98.0], [4.0, 98.0], [4.1, 98.0], [4.2, 98.0], [4.3, 98.0], [4.4, 98.0], [4.5, 98.0], [4.6, 98.0], [4.7, 98.0], [4.8, 98.0], [4.9, 98.0], [5.0, 98.0], [5.1, 98.0], [5.2, 99.0], [5.3, 99.0], [5.4, 99.0], [5.5, 99.0], [5.6, 99.0], [5.7, 99.0], [5.8, 99.0], [5.9, 99.0], [6.0, 99.0], [6.1, 99.0], [6.2, 99.0], [6.3, 99.0], [6.4, 99.0], [6.5, 99.0], [6.6, 99.0], [6.7, 99.0], [6.8, 99.0], [6.9, 99.0], [7.0, 99.0], [7.1, 99.0], [7.2, 100.0], [7.3, 100.0], [7.4, 100.0], [7.5, 100.0], [7.6, 100.0], [7.7, 100.0], [7.8, 100.0], [7.9, 100.0], [8.0, 100.0], [8.1, 100.0], [8.2, 100.0], [8.3, 100.0], [8.4, 100.0], [8.5, 100.0], [8.6, 100.0], [8.7, 100.0], [8.8, 100.0], [8.9, 100.0], [9.0, 100.0], [9.1, 100.0], [9.2, 100.0], [9.3, 100.0], [9.4, 100.0], [9.5, 100.0], [9.6, 100.0], [9.7, 101.0], [9.8, 101.0], [9.9, 101.0], [10.0, 101.0], [10.1, 101.0], [10.2, 101.0], [10.3, 101.0], [10.4, 101.0], [10.5, 101.0], [10.6, 101.0], [10.7, 101.0], [10.8, 101.0], [10.9, 101.0], [11.0, 101.0], [11.1, 101.0], [11.2, 101.0], [11.3, 101.0], [11.4, 101.0], [11.5, 101.0], [11.6, 101.0], [11.7, 101.0], [11.8, 101.0], [11.9, 101.0], [12.0, 101.0], [12.1, 102.0], [12.2, 102.0], [12.3, 102.0], [12.4, 102.0], [12.5, 102.0], [12.6, 102.0], [12.7, 102.0], [12.8, 102.0], [12.9, 102.0], [13.0, 102.0], [13.1, 102.0], [13.2, 102.0], [13.3, 102.0], [13.4, 102.0], [13.5, 102.0], [13.6, 102.0], [13.7, 102.0], [13.8, 102.0], [13.9, 102.0], [14.0, 102.0], [14.1, 102.0], [14.2, 102.0], [14.3, 102.0], [14.4, 102.0], [14.5, 102.0], [14.6, 102.0], [14.7, 102.0], [14.8, 102.0], [14.9, 102.0], [15.0, 102.0], [15.1, 102.0], [15.2, 102.0], [15.3, 103.0], [15.4, 103.0], [15.5, 103.0], [15.6, 103.0], [15.7, 103.0], [15.8, 103.0], [15.9, 103.0], [16.0, 103.0], [16.1, 103.0], [16.2, 103.0], [16.3, 103.0], [16.4, 103.0], [16.5, 103.0], [16.6, 103.0], [16.7, 103.0], [16.8, 103.0], [16.9, 103.0], [17.0, 103.0], [17.1, 103.0], [17.2, 103.0], [17.3, 103.0], [17.4, 103.0], [17.5, 103.0], [17.6, 103.0], [17.7, 103.0], [17.8, 103.0], [17.9, 103.0], [18.0, 103.0], [18.1, 103.0], [18.2, 103.0], [18.3, 103.0], [18.4, 103.0], [18.5, 103.0], [18.6, 103.0], [18.7, 103.0], [18.8, 104.0], [18.9, 104.0], [19.0, 104.0], [19.1, 104.0], [19.2, 104.0], [19.3, 104.0], [19.4, 104.0], [19.5, 104.0], [19.6, 104.0], [19.7, 104.0], [19.8, 104.0], [19.9, 104.0], [20.0, 104.0], [20.1, 104.0], [20.2, 104.0], [20.3, 104.0], [20.4, 104.0], [20.5, 104.0], [20.6, 104.0], [20.7, 104.0], [20.8, 104.0], [20.9, 104.0], [21.0, 104.0], [21.1, 104.0], [21.2, 104.0], [21.3, 104.0], [21.4, 104.0], [21.5, 104.0], [21.6, 104.0], [21.7, 104.0], [21.8, 104.0], [21.9, 104.0], [22.0, 104.0], [22.1, 104.0], [22.2, 104.0], [22.3, 105.0], [22.4, 105.0], [22.5, 105.0], [22.6, 105.0], [22.7, 105.0], [22.8, 105.0], [22.9, 105.0], [23.0, 105.0], [23.1, 105.0], [23.2, 105.0], [23.3, 105.0], [23.4, 105.0], [23.5, 105.0], [23.6, 105.0], [23.7, 105.0], [23.8, 105.0], [23.9, 105.0], [24.0, 105.0], [24.1, 105.0], [24.2, 105.0], [24.3, 105.0], [24.4, 105.0], [24.5, 105.0], [24.6, 105.0], [24.7, 105.0], [24.8, 105.0], [24.9, 105.0], [25.0, 105.0], [25.1, 105.0], [25.2, 105.0], [25.3, 105.0], [25.4, 105.0], [25.5, 105.0], [25.6, 105.0], [25.7, 105.0], [25.8, 105.0], [25.9, 106.0], [26.0, 106.0], [26.1, 106.0], [26.2, 106.0], [26.3, 106.0], [26.4, 106.0], [26.5, 106.0], [26.6, 106.0], [26.7, 106.0], [26.8, 106.0], [26.9, 106.0], [27.0, 106.0], [27.1, 106.0], [27.2, 106.0], [27.3, 106.0], [27.4, 106.0], [27.5, 106.0], [27.6, 106.0], [27.7, 106.0], [27.8, 106.0], [27.9, 106.0], [28.0, 106.0], [28.1, 106.0], [28.2, 106.0], [28.3, 106.0], [28.4, 106.0], [28.5, 106.0], [28.6, 106.0], [28.7, 106.0], [28.8, 106.0], [28.9, 106.0], [29.0, 106.0], [29.1, 106.0], [29.2, 106.0], [29.3, 106.0], [29.4, 106.0], [29.5, 106.0], [29.6, 107.0], [29.7, 107.0], [29.8, 107.0], [29.9, 107.0], [30.0, 107.0], [30.1, 107.0], [30.2, 107.0], [30.3, 107.0], [30.4, 107.0], [30.5, 107.0], [30.6, 107.0], [30.7, 107.0], [30.8, 107.0], [30.9, 107.0], [31.0, 107.0], [31.1, 107.0], [31.2, 107.0], [31.3, 107.0], [31.4, 107.0], [31.5, 107.0], [31.6, 107.0], [31.7, 107.0], [31.8, 107.0], [31.9, 107.0], [32.0, 107.0], [32.1, 107.0], [32.2, 107.0], [32.3, 107.0], [32.4, 107.0], [32.5, 107.0], [32.6, 107.0], [32.7, 107.0], [32.8, 107.0], [32.9, 107.0], [33.0, 107.0], [33.1, 107.0], [33.2, 107.0], [33.3, 108.0], [33.4, 108.0], [33.5, 108.0], [33.6, 108.0], [33.7, 108.0], [33.8, 108.0], [33.9, 108.0], [34.0, 108.0], [34.1, 108.0], [34.2, 108.0], [34.3, 108.0], [34.4, 108.0], [34.5, 108.0], [34.6, 108.0], [34.7, 108.0], [34.8, 108.0], [34.9, 108.0], [35.0, 108.0], [35.1, 108.0], [35.2, 108.0], [35.3, 108.0], [35.4, 108.0], [35.5, 108.0], [35.6, 108.0], [35.7, 108.0], [35.8, 108.0], [35.9, 108.0], [36.0, 108.0], [36.1, 108.0], [36.2, 108.0], [36.3, 108.0], [36.4, 108.0], [36.5, 108.0], [36.6, 108.0], [36.7, 109.0], [36.8, 109.0], [36.9, 109.0], [37.0, 109.0], [37.1, 109.0], [37.2, 109.0], [37.3, 109.0], [37.4, 109.0], [37.5, 109.0], [37.6, 109.0], [37.7, 109.0], [37.8, 109.0], [37.9, 109.0], [38.0, 109.0], [38.1, 109.0], [38.2, 109.0], [38.3, 109.0], [38.4, 109.0], [38.5, 109.0], [38.6, 109.0], [38.7, 109.0], [38.8, 109.0], [38.9, 109.0], [39.0, 109.0], [39.1, 109.0], [39.2, 109.0], [39.3, 109.0], [39.4, 109.0], [39.5, 109.0], [39.6, 109.0], [39.7, 110.0], [39.8, 110.0], [39.9, 110.0], [40.0, 110.0], [40.1, 110.0], [40.2, 110.0], [40.3, 110.0], [40.4, 110.0], [40.5, 110.0], [40.6, 110.0], [40.7, 110.0], [40.8, 110.0], [40.9, 110.0], [41.0, 110.0], [41.1, 110.0], [41.2, 110.0], [41.3, 110.0], [41.4, 110.0], [41.5, 110.0], [41.6, 110.0], [41.7, 110.0], [41.8, 110.0], [41.9, 110.0], [42.0, 110.0], [42.1, 110.0], [42.2, 110.0], [42.3, 111.0], [42.4, 111.0], [42.5, 111.0], [42.6, 111.0], [42.7, 111.0], [42.8, 111.0], [42.9, 111.0], [43.0, 111.0], [43.1, 111.0], [43.2, 111.0], [43.3, 111.0], [43.4, 111.0], [43.5, 111.0], [43.6, 111.0], [43.7, 111.0], [43.8, 111.0], [43.9, 111.0], [44.0, 111.0], [44.1, 111.0], [44.2, 111.0], [44.3, 111.0], [44.4, 111.0], [44.5, 111.0], [44.6, 112.0], [44.7, 112.0], [44.8, 112.0], [44.9, 112.0], [45.0, 112.0], [45.1, 112.0], [45.2, 112.0], [45.3, 112.0], [45.4, 112.0], [45.5, 112.0], [45.6, 112.0], [45.7, 112.0], [45.8, 112.0], [45.9, 112.0], [46.0, 112.0], [46.1, 112.0], [46.2, 112.0], [46.3, 112.0], [46.4, 112.0], [46.5, 113.0], [46.6, 113.0], [46.7, 113.0], [46.8, 113.0], [46.9, 113.0], [47.0, 113.0], [47.1, 113.0], [47.2, 113.0], [47.3, 113.0], [47.4, 113.0], [47.5, 113.0], [47.6, 113.0], [47.7, 113.0], [47.8, 113.0], [47.9, 113.0], [48.0, 113.0], [48.1, 113.0], [48.2, 113.0], [48.3, 114.0], [48.4, 114.0], [48.5, 114.0], [48.6, 114.0], [48.7, 114.0], [48.8, 114.0], [48.9, 114.0], [49.0, 114.0], [49.1, 114.0], [49.2, 114.0], [49.3, 114.0], [49.4, 114.0], [49.5, 114.0], [49.6, 114.0], [49.7, 114.0], [49.8, 114.0], [49.9, 114.0], [50.0, 114.0], [50.1, 114.0], [50.2, 115.0], [50.3, 115.0], [50.4, 115.0], [50.5, 115.0], [50.6, 115.0], [50.7, 115.0], [50.8, 115.0], [50.9, 115.0], [51.0, 115.0], [51.1, 115.0], [51.2, 115.0], [51.3, 115.0], [51.4, 115.0], [51.5, 115.0], [51.6, 115.0], [51.7, 115.0], [51.8, 115.0], [51.9, 115.0], [52.0, 116.0], [52.1, 116.0], [52.2, 116.0], [52.3, 116.0], [52.4, 116.0], [52.5, 116.0], [52.6, 116.0], [52.7, 116.0], [52.8, 116.0], [52.9, 116.0], [53.0, 116.0], [53.1, 116.0], [53.2, 116.0], [53.3, 116.0], [53.4, 116.0], [53.5, 116.0], [53.6, 116.0], [53.7, 117.0], [53.8, 117.0], [53.9, 117.0], [54.0, 117.0], [54.1, 117.0], [54.2, 117.0], [54.3, 117.0], [54.4, 117.0], [54.5, 117.0], [54.6, 117.0], [54.7, 117.0], [54.8, 117.0], [54.9, 117.0], [55.0, 117.0], [55.1, 117.0], [55.2, 117.0], [55.3, 117.0], [55.4, 117.0], [55.5, 118.0], [55.6, 118.0], [55.7, 118.0], [55.8, 118.0], [55.9, 118.0], [56.0, 118.0], [56.1, 118.0], [56.2, 118.0], [56.3, 118.0], [56.4, 118.0], [56.5, 118.0], [56.6, 118.0], [56.7, 118.0], [56.8, 118.0], [56.9, 118.0], [57.0, 118.0], [57.1, 119.0], [57.2, 119.0], [57.3, 119.0], [57.4, 119.0], [57.5, 119.0], [57.6, 119.0], [57.7, 119.0], [57.8, 119.0], [57.9, 119.0], [58.0, 119.0], [58.1, 119.0], [58.2, 119.0], [58.3, 119.0], [58.4, 119.0], [58.5, 119.0], [58.6, 120.0], [58.7, 120.0], [58.8, 120.0], [58.9, 120.0], [59.0, 120.0], [59.1, 120.0], [59.2, 120.0], [59.3, 120.0], [59.4, 120.0], [59.5, 120.0], [59.6, 120.0], [59.7, 120.0], [59.8, 120.0], [59.9, 120.0], [60.0, 120.0], [60.1, 120.0], [60.2, 121.0], [60.3, 121.0], [60.4, 121.0], [60.5, 121.0], [60.6, 121.0], [60.7, 121.0], [60.8, 121.0], [60.9, 121.0], [61.0, 121.0], [61.1, 121.0], [61.2, 121.0], [61.3, 121.0], [61.4, 121.0], [61.5, 121.0], [61.6, 121.0], [61.7, 121.0], [61.8, 122.0], [61.9, 122.0], [62.0, 122.0], [62.1, 122.0], [62.2, 122.0], [62.3, 122.0], [62.4, 122.0], [62.5, 122.0], [62.6, 122.0], [62.7, 122.0], [62.8, 122.0], [62.9, 122.0], [63.0, 122.0], [63.1, 122.0], [63.2, 122.0], [63.3, 122.0], [63.4, 123.0], [63.5, 123.0], [63.6, 123.0], [63.7, 123.0], [63.8, 123.0], [63.9, 123.0], [64.0, 123.0], [64.1, 123.0], [64.2, 123.0], [64.3, 123.0], [64.4, 123.0], [64.5, 123.0], [64.6, 123.0], [64.7, 123.0], [64.8, 124.0], [64.9, 124.0], [65.0, 124.0], [65.1, 124.0], [65.2, 124.0], [65.3, 124.0], [65.4, 124.0], [65.5, 124.0], [65.6, 124.0], [65.7, 124.0], [65.8, 124.0], [65.9, 124.0], [66.0, 124.0], [66.1, 125.0], [66.2, 125.0], [66.3, 125.0], [66.4, 125.0], [66.5, 125.0], [66.6, 125.0], [66.7, 125.0], [66.8, 125.0], [66.9, 125.0], [67.0, 125.0], [67.1, 125.0], [67.2, 125.0], [67.3, 125.0], [67.4, 125.0], [67.5, 126.0], [67.6, 126.0], [67.7, 126.0], [67.8, 126.0], [67.9, 126.0], [68.0, 126.0], [68.1, 126.0], [68.2, 126.0], [68.3, 126.0], [68.4, 126.0], [68.5, 126.0], [68.6, 126.0], [68.7, 126.0], [68.8, 127.0], [68.9, 127.0], [69.0, 127.0], [69.1, 127.0], [69.2, 127.0], [69.3, 127.0], [69.4, 127.0], [69.5, 127.0], [69.6, 127.0], [69.7, 127.0], [69.8, 127.0], [69.9, 128.0], [70.0, 128.0], [70.1, 128.0], [70.2, 128.0], [70.3, 128.0], [70.4, 128.0], [70.5, 128.0], [70.6, 128.0], [70.7, 128.0], [70.8, 129.0], [70.9, 129.0], [71.0, 129.0], [71.1, 129.0], [71.2, 129.0], [71.3, 129.0], [71.4, 129.0], [71.5, 129.0], [71.6, 129.0], [71.7, 130.0], [71.8, 130.0], [71.9, 130.0], [72.0, 130.0], [72.1, 130.0], [72.2, 130.0], [72.3, 131.0], [72.4, 131.0], [72.5, 131.0], [72.6, 131.0], [72.7, 131.0], [72.8, 132.0], [72.9, 132.0], [73.0, 132.0], [73.1, 132.0], [73.2, 132.0], [73.3, 132.0], [73.4, 133.0], [73.5, 133.0], [73.6, 133.0], [73.7, 134.0], [73.8, 134.0], [73.9, 134.0], [74.0, 134.0], [74.1, 134.0], [74.2, 135.0], [74.3, 135.0], [74.4, 135.0], [74.5, 135.0], [74.6, 136.0], [74.7, 136.0], [74.8, 136.0], [74.9, 136.0], [75.0, 136.0], [75.1, 136.0], [75.2, 137.0], [75.3, 137.0], [75.4, 137.0], [75.5, 137.0], [75.6, 137.0], [75.7, 138.0], [75.8, 138.0], [75.9, 138.0], [76.0, 138.0], [76.1, 138.0], [76.2, 139.0], [76.3, 139.0], [76.4, 139.0], [76.5, 139.0], [76.6, 139.0], [76.7, 139.0], [76.8, 140.0], [76.9, 140.0], [77.0, 140.0], [77.1, 140.0], [77.2, 140.0], [77.3, 140.0], [77.4, 141.0], [77.5, 141.0], [77.6, 141.0], [77.7, 141.0], [77.8, 141.0], [77.9, 142.0], [78.0, 142.0], [78.1, 142.0], [78.2, 142.0], [78.3, 143.0], [78.4, 143.0], [78.5, 143.0], [78.6, 143.0], [78.7, 143.0], [78.8, 144.0], [78.9, 144.0], [79.0, 144.0], [79.1, 144.0], [79.2, 144.0], [79.3, 144.0], [79.4, 145.0], [79.5, 145.0], [79.6, 145.0], [79.7, 145.0], [79.8, 146.0], [79.9, 146.0], [80.0, 146.0], [80.1, 146.0], [80.2, 147.0], [80.3, 147.0], [80.4, 147.0], [80.5, 147.0], [80.6, 148.0], [80.7, 148.0], [80.8, 148.0], [80.9, 149.0], [81.0, 149.0], [81.1, 149.0], [81.2, 150.0], [81.3, 150.0], [81.4, 150.0], [81.5, 151.0], [81.6, 151.0], [81.7, 151.0], [81.8, 152.0], [81.9, 152.0], [82.0, 153.0], [82.1, 153.0], [82.2, 153.0], [82.3, 154.0], [82.4, 154.0], [82.5, 155.0], [82.6, 155.0], [82.7, 156.0], [82.8, 156.0], [82.9, 156.0], [83.0, 157.0], [83.1, 157.0], [83.2, 157.0], [83.3, 158.0], [83.4, 158.0], [83.5, 158.0], [83.6, 159.0], [83.7, 159.0], [83.8, 160.0], [83.9, 160.0], [84.0, 160.0], [84.1, 161.0], [84.2, 161.0], [84.3, 162.0], [84.4, 162.0], [84.5, 162.0], [84.6, 163.0], [84.7, 163.0], [84.8, 163.0], [84.9, 164.0], [85.0, 164.0], [85.1, 165.0], [85.2, 165.0], [85.3, 165.0], [85.4, 166.0], [85.5, 166.0], [85.6, 167.0], [85.7, 167.0], [85.8, 168.0], [85.9, 168.0], [86.0, 168.0], [86.1, 169.0], [86.2, 169.0], [86.3, 170.0], [86.4, 170.0], [86.5, 171.0], [86.6, 171.0], [86.7, 172.0], [86.8, 172.0], [86.9, 172.0], [87.0, 173.0], [87.1, 174.0], [87.2, 174.0], [87.3, 175.0], [87.4, 175.0], [87.5, 176.0], [87.6, 177.0], [87.7, 177.0], [87.8, 178.0], [87.9, 179.0], [88.0, 180.0], [88.1, 181.0], [88.2, 181.0], [88.3, 182.0], [88.4, 182.0], [88.5, 183.0], [88.6, 183.0], [88.7, 184.0], [88.8, 184.0], [88.9, 185.0], [89.0, 185.0], [89.1, 186.0], [89.2, 186.0], [89.3, 187.0], [89.4, 187.0], [89.5, 188.0], [89.6, 188.0], [89.7, 189.0], [89.8, 190.0], [89.9, 190.0], [90.0, 191.0], [90.1, 191.0], [90.2, 192.0], [90.3, 192.0], [90.4, 193.0], [90.5, 193.0], [90.6, 193.0], [90.7, 194.0], [90.8, 195.0], [90.9, 195.0], [91.0, 196.0], [91.1, 197.0], [91.2, 197.0], [91.3, 198.0], [91.4, 199.0], [91.5, 200.0], [91.6, 201.0], [91.7, 202.0], [91.8, 203.0], [91.9, 203.0], [92.0, 204.0], [92.1, 204.0], [92.2, 205.0], [92.3, 205.0], [92.4, 206.0], [92.5, 207.0], [92.6, 207.0], [92.7, 208.0], [92.8, 208.0], [92.9, 209.0], [93.0, 209.0], [93.1, 210.0], [93.2, 211.0], [93.3, 212.0], [93.4, 212.0], [93.5, 213.0], [93.6, 214.0], [93.7, 215.0], [93.8, 215.0], [93.9, 216.0], [94.0, 217.0], [94.1, 217.0], [94.2, 218.0], [94.3, 219.0], [94.4, 220.0], [94.5, 221.0], [94.6, 222.0], [94.7, 223.0], [94.8, 223.0], [94.9, 225.0], [95.0, 226.0], [95.1, 227.0], [95.2, 228.0], [95.3, 230.0], [95.4, 231.0], [95.5, 233.0], [95.6, 235.0], [95.7, 237.0], [95.8, 239.0], [95.9, 241.0], [96.0, 244.0], [96.1, 247.0], [96.2, 249.0], [96.3, 255.0], [96.4, 257.0], [96.5, 263.0], [96.6, 265.0], [96.7, 267.0], [96.8, 269.0], [96.9, 271.0], [97.0, 272.0], [97.1, 274.0], [97.2, 275.0], [97.3, 276.0], [97.4, 277.0], [97.5, 278.0], [97.6, 279.0], [97.7, 280.0], [97.8, 281.0], [97.9, 283.0], [98.0, 284.0], [98.1, 285.0], [98.2, 286.0], [98.3, 287.0], [98.4, 289.0], [98.5, 290.0], [98.6, 292.0], [98.7, 294.0], [98.8, 297.0], [98.9, 298.0], [99.0, 300.0], [99.1, 301.0], [99.2, 304.0], [99.3, 305.0], [99.4, 306.0], [99.5, 307.0], [99.6, 309.0], [99.7, 311.0], [99.8, 315.0], [99.9, 318.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 206.0, "minX": 0.0, "maxY": 16865.0, "series": [{"data": [[0.0, 1428.0], [300.0, 206.0], [100.0, 16865.0], [200.0, 1501.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 300.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20000.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 20000.0, "series": [{"data": [[0.0, 20000.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 98.58968058968055, "minX": 1.66040622E12, "maxY": 99.30828625235416, "series": [{"data": [[1.66040628E12, 99.30828625235416], [1.66040622E12, 98.58968058968055]], "isOverall": false, "label": "Thread Group Create Type", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66040628E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.0, "maxY": 287.0, "series": [{"data": [[2.0, 20.0], [3.0, 27.0], [4.0, 24.0], [5.0, 24.0], [7.0, 30.0], [9.0, 32.0], [10.0, 34.0], [11.0, 41.0], [13.0, 64.0], [16.0, 40.333333333333336], [17.0, 41.0], [18.0, 43.0], [19.0, 51.0], [20.0, 114.0], [21.0, 190.0], [22.0, 50.0], [23.0, 113.0], [24.0, 53.0], [25.0, 87.0], [26.0, 61.0], [27.0, 138.0], [29.0, 124.33333333333334], [30.0, 173.6], [31.0, 106.0], [32.0, 181.0], [33.0, 117.33333333333333], [34.0, 174.0], [35.0, 91.0], [37.0, 112.54545454545455], [36.0, 70.5], [38.0, 93.25], [39.0, 114.0], [40.0, 149.33333333333334], [41.0, 115.2], [43.0, 90.75], [42.0, 74.0], [44.0, 128.33333333333331], [45.0, 121.66666666666667], [47.0, 100.14285714285715], [49.0, 131.6], [51.0, 112.49999999999999], [50.0, 72.0], [52.0, 177.0], [53.0, 75.8], [54.0, 121.55555555555556], [55.0, 87.33333333333334], [56.0, 122.0], [57.0, 138.0], [58.0, 137.0], [59.0, 139.25], [60.0, 169.75], [61.0, 107.57142857142857], [62.0, 117.36363636363637], [63.0, 117.0], [64.0, 126.16666666666667], [66.0, 135.5], [67.0, 116.0], [65.0, 84.75], [68.0, 112.4090909090909], [69.0, 149.6], [70.0, 171.5], [71.0, 191.66666666666666], [72.0, 109.33333333333331], [73.0, 131.5], [74.0, 128.8], [75.0, 145.8], [76.0, 145.71428571428572], [77.0, 179.66666666666666], [78.0, 181.5], [79.0, 192.0], [80.0, 130.75000000000003], [82.0, 216.66666666666666], [83.0, 109.5], [81.0, 107.0], [84.0, 132.14285714285717], [85.0, 270.5], [86.0, 211.0], [87.0, 287.0], [88.0, 150.25000000000003], [89.0, 223.33333333333334], [90.0, 170.54545454545456], [91.0, 108.0], [92.0, 198.39999999999998], [93.0, 168.0], [94.0, 173.5], [95.0, 108.71428571428571], [96.0, 162.99999999999997], [97.0, 286.3333333333333], [98.0, 180.3], [99.0, 160.9], [100.0, 130.63769971323185], [1.0, 17.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[99.16205000000019, 130.7129999999989]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 2577.6666666666665, "minX": 1.66040622E12, "maxY": 66109.5, "series": [{"data": [[1.66040628E12, 10089.0], [1.66040622E12, 2577.6666666666665]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66040628E12, 66109.5], [1.66040622E12, 16890.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66040628E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 113.37074701820558, "minX": 1.66040622E12, "maxY": 198.59066339066348, "series": [{"data": [[1.66040628E12, 113.37074701820558], [1.66040622E12, 198.59066339066348]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66040628E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 113.37018204645328, "minX": 1.66040622E12, "maxY": 198.58918918918937, "series": [{"data": [[1.66040628E12, 113.37018204645328], [1.66040622E12, 198.58918918918937]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66040628E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66040622E12, "maxY": 0.015479115479115466, "series": [{"data": [[1.66040628E12, 0.0], [1.66040622E12, 0.015479115479115466]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66040628E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 17.0, "minX": 1.66040622E12, "maxY": 324.0, "series": [{"data": [[1.66040628E12, 208.0], [1.66040622E12, 324.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66040628E12, 130.0], [1.66040622E12, 283.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66040628E12, 170.6900000000005], [1.66040622E12, 314.28999999999996]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66040628E12, 140.0], [1.66040622E12, 300.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66040628E12, 17.0], [1.66040622E12, 123.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66040628E12, 110.0], [1.66040622E12, 187.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66040628E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 71.5, "minX": 85.0, "maxY": 294.0, "series": [{"data": [[592.0, 179.0], [621.0, 158.0], [687.0, 141.0], [717.0, 131.0], [728.0, 133.5], [781.0, 128.0], [849.0, 117.0], [859.0, 112.0], [892.0, 111.0], [876.0, 107.0], [864.0, 119.0], [890.0, 112.0], [905.0, 113.0], [907.0, 107.0], [920.0, 107.0], [953.0, 103.0], [935.0, 105.0], [940.0, 105.0], [951.0, 105.0], [977.0, 100.0], [85.0, 178.0], [94.0, 71.5], [320.0, 279.0], [371.0, 294.0], [448.0, 220.0], [456.0, 203.0], [490.0, 207.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 977.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 71.5, "minX": 85.0, "maxY": 294.0, "series": [{"data": [[592.0, 179.0], [621.0, 158.0], [687.0, 141.0], [717.0, 131.0], [728.0, 133.5], [781.0, 128.0], [849.0, 117.0], [859.0, 112.0], [892.0, 111.0], [876.0, 107.0], [864.0, 119.0], [890.0, 112.0], [905.0, 113.0], [907.0, 107.0], [920.0, 107.0], [953.0, 103.0], [935.0, 105.0], [940.0, 105.0], [951.0, 105.0], [977.0, 100.0], [85.0, 178.0], [94.0, 71.5], [320.0, 279.0], [371.0, 294.0], [448.0, 220.0], [456.0, 203.0], [490.0, 207.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 977.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 69.48333333333333, "minX": 1.66040622E12, "maxY": 263.85, "series": [{"data": [[1.66040628E12, 263.85], [1.66040622E12, 69.48333333333333]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66040628E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 67.83333333333333, "minX": 1.66040622E12, "maxY": 265.5, "series": [{"data": [[1.66040628E12, 265.5], [1.66040622E12, 67.83333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66040628E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 67.83333333333333, "minX": 1.66040622E12, "maxY": 265.5, "series": [{"data": [[1.66040628E12, 265.5], [1.66040622E12, 67.83333333333333]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66040628E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 67.83333333333333, "minX": 1.66040622E12, "maxY": 265.5, "series": [{"data": [[1.66040628E12, 265.5], [1.66040622E12, 67.83333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66040628E12, "title": "Total Transactions Per Second"}},
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

