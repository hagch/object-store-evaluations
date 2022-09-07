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
        data: {"result": {"minY": 251.0, "minX": 0.0, "maxY": 1297.0, "series": [{"data": [[0.0, 251.0], [0.1, 492.0], [0.2, 548.0], [0.3, 605.0], [0.4, 619.0], [0.5, 624.0], [0.6, 631.0], [0.7, 633.0], [0.8, 635.0], [0.9, 637.0], [1.0, 638.0], [1.1, 640.0], [1.2, 641.0], [1.3, 642.0], [1.4, 643.0], [1.5, 644.0], [1.6, 645.0], [1.7, 646.0], [1.8, 647.0], [1.9, 648.0], [2.0, 648.0], [2.1, 649.0], [2.2, 650.0], [2.3, 650.0], [2.4, 651.0], [2.5, 652.0], [2.6, 653.0], [2.7, 654.0], [2.8, 654.0], [2.9, 655.0], [3.0, 655.0], [3.1, 656.0], [3.2, 656.0], [3.3, 656.0], [3.4, 657.0], [3.5, 657.0], [3.6, 657.0], [3.7, 658.0], [3.8, 658.0], [3.9, 658.0], [4.0, 659.0], [4.1, 659.0], [4.2, 660.0], [4.3, 660.0], [4.4, 660.0], [4.5, 661.0], [4.6, 661.0], [4.7, 662.0], [4.8, 662.0], [4.9, 662.0], [5.0, 663.0], [5.1, 663.0], [5.2, 663.0], [5.3, 664.0], [5.4, 664.0], [5.5, 664.0], [5.6, 665.0], [5.7, 665.0], [5.8, 666.0], [5.9, 666.0], [6.0, 666.0], [6.1, 667.0], [6.2, 667.0], [6.3, 667.0], [6.4, 668.0], [6.5, 668.0], [6.6, 668.0], [6.7, 668.0], [6.8, 669.0], [6.9, 669.0], [7.0, 669.0], [7.1, 669.0], [7.2, 669.0], [7.3, 669.0], [7.4, 670.0], [7.5, 670.0], [7.6, 670.0], [7.7, 670.0], [7.8, 670.0], [7.9, 671.0], [8.0, 671.0], [8.1, 671.0], [8.2, 671.0], [8.3, 672.0], [8.4, 672.0], [8.5, 672.0], [8.6, 672.0], [8.7, 672.0], [8.8, 672.0], [8.9, 673.0], [9.0, 673.0], [9.1, 673.0], [9.2, 673.0], [9.3, 673.0], [9.4, 674.0], [9.5, 674.0], [9.6, 674.0], [9.7, 674.0], [9.8, 674.0], [9.9, 675.0], [10.0, 675.0], [10.1, 675.0], [10.2, 675.0], [10.3, 675.0], [10.4, 675.0], [10.5, 676.0], [10.6, 676.0], [10.7, 676.0], [10.8, 676.0], [10.9, 676.0], [11.0, 677.0], [11.1, 677.0], [11.2, 677.0], [11.3, 677.0], [11.4, 677.0], [11.5, 677.0], [11.6, 678.0], [11.7, 678.0], [11.8, 678.0], [11.9, 678.0], [12.0, 678.0], [12.1, 678.0], [12.2, 679.0], [12.3, 679.0], [12.4, 679.0], [12.5, 679.0], [12.6, 679.0], [12.7, 679.0], [12.8, 680.0], [12.9, 680.0], [13.0, 680.0], [13.1, 680.0], [13.2, 680.0], [13.3, 680.0], [13.4, 680.0], [13.5, 681.0], [13.6, 681.0], [13.7, 681.0], [13.8, 681.0], [13.9, 681.0], [14.0, 681.0], [14.1, 681.0], [14.2, 682.0], [14.3, 682.0], [14.4, 682.0], [14.5, 682.0], [14.6, 682.0], [14.7, 682.0], [14.8, 682.0], [14.9, 683.0], [15.0, 683.0], [15.1, 683.0], [15.2, 683.0], [15.3, 683.0], [15.4, 683.0], [15.5, 684.0], [15.6, 684.0], [15.7, 684.0], [15.8, 684.0], [15.9, 684.0], [16.0, 684.0], [16.1, 684.0], [16.2, 684.0], [16.3, 685.0], [16.4, 685.0], [16.5, 685.0], [16.6, 685.0], [16.7, 685.0], [16.8, 685.0], [16.9, 686.0], [17.0, 686.0], [17.1, 686.0], [17.2, 686.0], [17.3, 686.0], [17.4, 686.0], [17.5, 687.0], [17.6, 687.0], [17.7, 687.0], [17.8, 687.0], [17.9, 687.0], [18.0, 687.0], [18.1, 687.0], [18.2, 687.0], [18.3, 688.0], [18.4, 688.0], [18.5, 688.0], [18.6, 688.0], [18.7, 688.0], [18.8, 688.0], [18.9, 688.0], [19.0, 689.0], [19.1, 689.0], [19.2, 689.0], [19.3, 689.0], [19.4, 689.0], [19.5, 689.0], [19.6, 689.0], [19.7, 690.0], [19.8, 690.0], [19.9, 690.0], [20.0, 690.0], [20.1, 690.0], [20.2, 690.0], [20.3, 690.0], [20.4, 690.0], [20.5, 691.0], [20.6, 691.0], [20.7, 691.0], [20.8, 691.0], [20.9, 691.0], [21.0, 691.0], [21.1, 692.0], [21.2, 692.0], [21.3, 692.0], [21.4, 692.0], [21.5, 692.0], [21.6, 692.0], [21.7, 692.0], [21.8, 693.0], [21.9, 693.0], [22.0, 693.0], [22.1, 693.0], [22.2, 693.0], [22.3, 693.0], [22.4, 693.0], [22.5, 693.0], [22.6, 694.0], [22.7, 694.0], [22.8, 694.0], [22.9, 694.0], [23.0, 694.0], [23.1, 694.0], [23.2, 694.0], [23.3, 695.0], [23.4, 695.0], [23.5, 695.0], [23.6, 695.0], [23.7, 695.0], [23.8, 695.0], [23.9, 695.0], [24.0, 696.0], [24.1, 696.0], [24.2, 696.0], [24.3, 696.0], [24.4, 696.0], [24.5, 696.0], [24.6, 696.0], [24.7, 697.0], [24.8, 697.0], [24.9, 697.0], [25.0, 697.0], [25.1, 697.0], [25.2, 697.0], [25.3, 697.0], [25.4, 698.0], [25.5, 698.0], [25.6, 698.0], [25.7, 698.0], [25.8, 698.0], [25.9, 698.0], [26.0, 698.0], [26.1, 699.0], [26.2, 699.0], [26.3, 699.0], [26.4, 699.0], [26.5, 699.0], [26.6, 699.0], [26.7, 699.0], [26.8, 700.0], [26.9, 700.0], [27.0, 700.0], [27.1, 700.0], [27.2, 700.0], [27.3, 700.0], [27.4, 700.0], [27.5, 700.0], [27.6, 701.0], [27.7, 701.0], [27.8, 701.0], [27.9, 701.0], [28.0, 701.0], [28.1, 701.0], [28.2, 701.0], [28.3, 702.0], [28.4, 702.0], [28.5, 702.0], [28.6, 702.0], [28.7, 702.0], [28.8, 702.0], [28.9, 702.0], [29.0, 702.0], [29.1, 702.0], [29.2, 703.0], [29.3, 703.0], [29.4, 703.0], [29.5, 703.0], [29.6, 703.0], [29.7, 703.0], [29.8, 703.0], [29.9, 703.0], [30.0, 704.0], [30.1, 704.0], [30.2, 704.0], [30.3, 704.0], [30.4, 704.0], [30.5, 704.0], [30.6, 704.0], [30.7, 705.0], [30.8, 705.0], [30.9, 705.0], [31.0, 705.0], [31.1, 705.0], [31.2, 705.0], [31.3, 705.0], [31.4, 705.0], [31.5, 706.0], [31.6, 706.0], [31.7, 706.0], [31.8, 706.0], [31.9, 706.0], [32.0, 706.0], [32.1, 706.0], [32.2, 706.0], [32.3, 707.0], [32.4, 707.0], [32.5, 707.0], [32.6, 707.0], [32.7, 707.0], [32.8, 707.0], [32.9, 707.0], [33.0, 707.0], [33.1, 708.0], [33.2, 708.0], [33.3, 708.0], [33.4, 708.0], [33.5, 708.0], [33.6, 708.0], [33.7, 708.0], [33.8, 709.0], [33.9, 709.0], [34.0, 709.0], [34.1, 709.0], [34.2, 709.0], [34.3, 709.0], [34.4, 709.0], [34.5, 709.0], [34.6, 710.0], [34.7, 710.0], [34.8, 710.0], [34.9, 710.0], [35.0, 710.0], [35.1, 710.0], [35.2, 711.0], [35.3, 711.0], [35.4, 711.0], [35.5, 711.0], [35.6, 711.0], [35.7, 711.0], [35.8, 712.0], [35.9, 712.0], [36.0, 712.0], [36.1, 712.0], [36.2, 712.0], [36.3, 712.0], [36.4, 713.0], [36.5, 713.0], [36.6, 713.0], [36.7, 713.0], [36.8, 713.0], [36.9, 713.0], [37.0, 713.0], [37.1, 714.0], [37.2, 714.0], [37.3, 714.0], [37.4, 714.0], [37.5, 714.0], [37.6, 714.0], [37.7, 714.0], [37.8, 715.0], [37.9, 715.0], [38.0, 715.0], [38.1, 715.0], [38.2, 715.0], [38.3, 715.0], [38.4, 716.0], [38.5, 716.0], [38.6, 716.0], [38.7, 716.0], [38.8, 716.0], [38.9, 716.0], [39.0, 717.0], [39.1, 717.0], [39.2, 717.0], [39.3, 717.0], [39.4, 717.0], [39.5, 717.0], [39.6, 718.0], [39.7, 718.0], [39.8, 718.0], [39.9, 718.0], [40.0, 718.0], [40.1, 718.0], [40.2, 718.0], [40.3, 719.0], [40.4, 719.0], [40.5, 719.0], [40.6, 719.0], [40.7, 719.0], [40.8, 719.0], [40.9, 720.0], [41.0, 720.0], [41.1, 720.0], [41.2, 720.0], [41.3, 720.0], [41.4, 721.0], [41.5, 721.0], [41.6, 721.0], [41.7, 721.0], [41.8, 721.0], [41.9, 721.0], [42.0, 722.0], [42.1, 722.0], [42.2, 722.0], [42.3, 722.0], [42.4, 722.0], [42.5, 722.0], [42.6, 723.0], [42.7, 723.0], [42.8, 723.0], [42.9, 723.0], [43.0, 723.0], [43.1, 724.0], [43.2, 724.0], [43.3, 724.0], [43.4, 724.0], [43.5, 724.0], [43.6, 724.0], [43.7, 725.0], [43.8, 725.0], [43.9, 725.0], [44.0, 725.0], [44.1, 725.0], [44.2, 725.0], [44.3, 726.0], [44.4, 726.0], [44.5, 726.0], [44.6, 726.0], [44.7, 726.0], [44.8, 726.0], [44.9, 726.0], [45.0, 726.0], [45.1, 727.0], [45.2, 727.0], [45.3, 727.0], [45.4, 727.0], [45.5, 727.0], [45.6, 727.0], [45.7, 728.0], [45.8, 728.0], [45.9, 728.0], [46.0, 728.0], [46.1, 728.0], [46.2, 728.0], [46.3, 729.0], [46.4, 729.0], [46.5, 729.0], [46.6, 729.0], [46.7, 729.0], [46.8, 729.0], [46.9, 730.0], [47.0, 730.0], [47.1, 730.0], [47.2, 730.0], [47.3, 730.0], [47.4, 730.0], [47.5, 731.0], [47.6, 731.0], [47.7, 731.0], [47.8, 731.0], [47.9, 731.0], [48.0, 731.0], [48.1, 732.0], [48.2, 732.0], [48.3, 732.0], [48.4, 732.0], [48.5, 732.0], [48.6, 733.0], [48.7, 733.0], [48.8, 733.0], [48.9, 733.0], [49.0, 733.0], [49.1, 733.0], [49.2, 734.0], [49.3, 734.0], [49.4, 734.0], [49.5, 734.0], [49.6, 734.0], [49.7, 735.0], [49.8, 735.0], [49.9, 735.0], [50.0, 735.0], [50.1, 735.0], [50.2, 735.0], [50.3, 736.0], [50.4, 736.0], [50.5, 736.0], [50.6, 736.0], [50.7, 736.0], [50.8, 736.0], [50.9, 737.0], [51.0, 737.0], [51.1, 737.0], [51.2, 737.0], [51.3, 737.0], [51.4, 737.0], [51.5, 738.0], [51.6, 738.0], [51.7, 738.0], [51.8, 738.0], [51.9, 738.0], [52.0, 738.0], [52.1, 739.0], [52.2, 739.0], [52.3, 739.0], [52.4, 739.0], [52.5, 739.0], [52.6, 739.0], [52.7, 740.0], [52.8, 740.0], [52.9, 740.0], [53.0, 740.0], [53.1, 740.0], [53.2, 740.0], [53.3, 741.0], [53.4, 741.0], [53.5, 741.0], [53.6, 741.0], [53.7, 741.0], [53.8, 742.0], [53.9, 742.0], [54.0, 742.0], [54.1, 742.0], [54.2, 742.0], [54.3, 743.0], [54.4, 743.0], [54.5, 743.0], [54.6, 743.0], [54.7, 743.0], [54.8, 744.0], [54.9, 744.0], [55.0, 744.0], [55.1, 744.0], [55.2, 744.0], [55.3, 745.0], [55.4, 745.0], [55.5, 745.0], [55.6, 745.0], [55.7, 745.0], [55.8, 746.0], [55.9, 746.0], [56.0, 746.0], [56.1, 746.0], [56.2, 746.0], [56.3, 746.0], [56.4, 747.0], [56.5, 747.0], [56.6, 747.0], [56.7, 747.0], [56.8, 747.0], [56.9, 748.0], [57.0, 748.0], [57.1, 748.0], [57.2, 748.0], [57.3, 748.0], [57.4, 748.0], [57.5, 749.0], [57.6, 749.0], [57.7, 749.0], [57.8, 749.0], [57.9, 749.0], [58.0, 749.0], [58.1, 750.0], [58.2, 750.0], [58.3, 750.0], [58.4, 750.0], [58.5, 750.0], [58.6, 750.0], [58.7, 751.0], [58.8, 751.0], [58.9, 751.0], [59.0, 751.0], [59.1, 751.0], [59.2, 751.0], [59.3, 752.0], [59.4, 752.0], [59.5, 752.0], [59.6, 752.0], [59.7, 752.0], [59.8, 753.0], [59.9, 753.0], [60.0, 753.0], [60.1, 753.0], [60.2, 753.0], [60.3, 754.0], [60.4, 754.0], [60.5, 754.0], [60.6, 754.0], [60.7, 754.0], [60.8, 755.0], [60.9, 755.0], [61.0, 755.0], [61.1, 755.0], [61.2, 755.0], [61.3, 755.0], [61.4, 756.0], [61.5, 756.0], [61.6, 756.0], [61.7, 756.0], [61.8, 756.0], [61.9, 756.0], [62.0, 757.0], [62.1, 757.0], [62.2, 757.0], [62.3, 757.0], [62.4, 757.0], [62.5, 758.0], [62.6, 758.0], [62.7, 758.0], [62.8, 758.0], [62.9, 758.0], [63.0, 758.0], [63.1, 759.0], [63.2, 759.0], [63.3, 759.0], [63.4, 759.0], [63.5, 759.0], [63.6, 760.0], [63.7, 760.0], [63.8, 760.0], [63.9, 760.0], [64.0, 760.0], [64.1, 760.0], [64.2, 761.0], [64.3, 761.0], [64.4, 761.0], [64.5, 761.0], [64.6, 761.0], [64.7, 762.0], [64.8, 762.0], [64.9, 762.0], [65.0, 762.0], [65.1, 762.0], [65.2, 763.0], [65.3, 763.0], [65.4, 763.0], [65.5, 763.0], [65.6, 763.0], [65.7, 764.0], [65.8, 764.0], [65.9, 764.0], [66.0, 764.0], [66.1, 764.0], [66.2, 765.0], [66.3, 765.0], [66.4, 765.0], [66.5, 765.0], [66.6, 765.0], [66.7, 766.0], [66.8, 766.0], [66.9, 766.0], [67.0, 767.0], [67.1, 767.0], [67.2, 767.0], [67.3, 768.0], [67.4, 768.0], [67.5, 768.0], [67.6, 769.0], [67.7, 769.0], [67.8, 769.0], [67.9, 770.0], [68.0, 770.0], [68.1, 770.0], [68.2, 770.0], [68.3, 771.0], [68.4, 771.0], [68.5, 771.0], [68.6, 771.0], [68.7, 772.0], [68.8, 772.0], [68.9, 772.0], [69.0, 772.0], [69.1, 772.0], [69.2, 773.0], [69.3, 773.0], [69.4, 773.0], [69.5, 773.0], [69.6, 774.0], [69.7, 774.0], [69.8, 774.0], [69.9, 774.0], [70.0, 774.0], [70.1, 775.0], [70.2, 775.0], [70.3, 775.0], [70.4, 775.0], [70.5, 775.0], [70.6, 776.0], [70.7, 776.0], [70.8, 776.0], [70.9, 776.0], [71.0, 777.0], [71.1, 777.0], [71.2, 777.0], [71.3, 777.0], [71.4, 778.0], [71.5, 778.0], [71.6, 778.0], [71.7, 778.0], [71.8, 778.0], [71.9, 779.0], [72.0, 779.0], [72.1, 779.0], [72.2, 779.0], [72.3, 779.0], [72.4, 780.0], [72.5, 780.0], [72.6, 780.0], [72.7, 780.0], [72.8, 780.0], [72.9, 780.0], [73.0, 781.0], [73.1, 781.0], [73.2, 781.0], [73.3, 781.0], [73.4, 782.0], [73.5, 782.0], [73.6, 782.0], [73.7, 782.0], [73.8, 783.0], [73.9, 783.0], [74.0, 783.0], [74.1, 783.0], [74.2, 783.0], [74.3, 784.0], [74.4, 784.0], [74.5, 784.0], [74.6, 784.0], [74.7, 785.0], [74.8, 785.0], [74.9, 785.0], [75.0, 785.0], [75.1, 786.0], [75.2, 786.0], [75.3, 786.0], [75.4, 786.0], [75.5, 787.0], [75.6, 787.0], [75.7, 787.0], [75.8, 787.0], [75.9, 788.0], [76.0, 788.0], [76.1, 788.0], [76.2, 789.0], [76.3, 789.0], [76.4, 789.0], [76.5, 789.0], [76.6, 790.0], [76.7, 790.0], [76.8, 790.0], [76.9, 790.0], [77.0, 791.0], [77.1, 791.0], [77.2, 791.0], [77.3, 791.0], [77.4, 792.0], [77.5, 792.0], [77.6, 792.0], [77.7, 793.0], [77.8, 793.0], [77.9, 793.0], [78.0, 793.0], [78.1, 794.0], [78.2, 794.0], [78.3, 794.0], [78.4, 794.0], [78.5, 795.0], [78.6, 795.0], [78.7, 796.0], [78.8, 796.0], [78.9, 796.0], [79.0, 797.0], [79.1, 797.0], [79.2, 797.0], [79.3, 798.0], [79.4, 798.0], [79.5, 798.0], [79.6, 799.0], [79.7, 799.0], [79.8, 800.0], [79.9, 800.0], [80.0, 800.0], [80.1, 801.0], [80.2, 801.0], [80.3, 801.0], [80.4, 802.0], [80.5, 802.0], [80.6, 802.0], [80.7, 802.0], [80.8, 803.0], [80.9, 803.0], [81.0, 803.0], [81.1, 804.0], [81.2, 804.0], [81.3, 805.0], [81.4, 805.0], [81.5, 805.0], [81.6, 806.0], [81.7, 806.0], [81.8, 807.0], [81.9, 807.0], [82.0, 808.0], [82.1, 808.0], [82.2, 809.0], [82.3, 809.0], [82.4, 809.0], [82.5, 810.0], [82.6, 810.0], [82.7, 811.0], [82.8, 811.0], [82.9, 811.0], [83.0, 812.0], [83.1, 812.0], [83.2, 813.0], [83.3, 813.0], [83.4, 814.0], [83.5, 814.0], [83.6, 814.0], [83.7, 815.0], [83.8, 815.0], [83.9, 816.0], [84.0, 816.0], [84.1, 817.0], [84.2, 817.0], [84.3, 818.0], [84.4, 818.0], [84.5, 819.0], [84.6, 820.0], [84.7, 820.0], [84.8, 821.0], [84.9, 821.0], [85.0, 822.0], [85.1, 822.0], [85.2, 823.0], [85.3, 823.0], [85.4, 824.0], [85.5, 824.0], [85.6, 825.0], [85.7, 825.0], [85.8, 826.0], [85.9, 826.0], [86.0, 827.0], [86.1, 827.0], [86.2, 828.0], [86.3, 828.0], [86.4, 829.0], [86.5, 829.0], [86.6, 830.0], [86.7, 830.0], [86.8, 831.0], [86.9, 831.0], [87.0, 831.0], [87.1, 832.0], [87.2, 833.0], [87.3, 833.0], [87.4, 834.0], [87.5, 834.0], [87.6, 835.0], [87.7, 835.0], [87.8, 836.0], [87.9, 837.0], [88.0, 837.0], [88.1, 838.0], [88.2, 839.0], [88.3, 839.0], [88.4, 839.0], [88.5, 840.0], [88.6, 840.0], [88.7, 841.0], [88.8, 841.0], [88.9, 842.0], [89.0, 843.0], [89.1, 843.0], [89.2, 844.0], [89.3, 845.0], [89.4, 846.0], [89.5, 847.0], [89.6, 847.0], [89.7, 848.0], [89.8, 849.0], [89.9, 849.0], [90.0, 850.0], [90.1, 850.0], [90.2, 851.0], [90.3, 851.0], [90.4, 852.0], [90.5, 853.0], [90.6, 853.0], [90.7, 854.0], [90.8, 855.0], [90.9, 856.0], [91.0, 857.0], [91.1, 857.0], [91.2, 858.0], [91.3, 859.0], [91.4, 860.0], [91.5, 861.0], [91.6, 861.0], [91.7, 862.0], [91.8, 863.0], [91.9, 864.0], [92.0, 865.0], [92.1, 865.0], [92.2, 867.0], [92.3, 868.0], [92.4, 870.0], [92.5, 871.0], [92.6, 872.0], [92.7, 873.0], [92.8, 875.0], [92.9, 876.0], [93.0, 877.0], [93.1, 878.0], [93.2, 879.0], [93.3, 880.0], [93.4, 881.0], [93.5, 882.0], [93.6, 883.0], [93.7, 884.0], [93.8, 885.0], [93.9, 885.0], [94.0, 886.0], [94.1, 887.0], [94.2, 888.0], [94.3, 890.0], [94.4, 892.0], [94.5, 894.0], [94.6, 895.0], [94.7, 896.0], [94.8, 897.0], [94.9, 898.0], [95.0, 899.0], [95.1, 901.0], [95.2, 902.0], [95.3, 903.0], [95.4, 905.0], [95.5, 907.0], [95.6, 909.0], [95.7, 912.0], [95.8, 914.0], [95.9, 916.0], [96.0, 917.0], [96.1, 918.0], [96.2, 920.0], [96.3, 921.0], [96.4, 924.0], [96.5, 928.0], [96.6, 934.0], [96.7, 938.0], [96.8, 943.0], [96.9, 946.0], [97.0, 951.0], [97.1, 954.0], [97.2, 957.0], [97.3, 960.0], [97.4, 962.0], [97.5, 965.0], [97.6, 973.0], [97.7, 978.0], [97.8, 981.0], [97.9, 984.0], [98.0, 991.0], [98.1, 1000.0], [98.2, 1007.0], [98.3, 1009.0], [98.4, 1015.0], [98.5, 1023.0], [98.6, 1035.0], [98.7, 1039.0], [98.8, 1049.0], [98.9, 1054.0], [99.0, 1061.0], [99.1, 1070.0], [99.2, 1074.0], [99.3, 1076.0], [99.4, 1081.0], [99.5, 1107.0], [99.6, 1138.0], [99.7, 1170.0], [99.8, 1203.0], [99.9, 1237.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 3.0, "minX": 200.0, "maxY": 10598.0, "series": [{"data": [[1100.0, 63.0], [300.0, 8.0], [600.0, 5283.0], [1200.0, 45.0], [700.0, 10598.0], [200.0, 3.0], [400.0, 9.0], [800.0, 3063.0], [900.0, 616.0], [500.0, 39.0], [1000.0, 273.0]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 20.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 19980.0, "series": [{"data": [[0.0, 20.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 19980.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 98.17779783393503, "minX": 1.66047948E12, "maxY": 100.0, "series": [{"data": [[1.66047948E12, 98.1928166351607], [1.66047966E12, 98.17779783393503], [1.6604796E12, 100.0], [1.66047954E12, 100.0]], "isOverall": false, "label": "Thread Group Create Type", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66047966E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 321.0, "minX": 1.0, "maxY": 753.200100959113, "series": [{"data": [[2.0, 369.0], [3.0, 365.0], [4.0, 423.0], [5.0, 436.0], [6.0, 438.0], [7.0, 359.0], [8.0, 432.0], [9.0, 503.0], [10.0, 481.0], [11.0, 509.0], [12.0, 510.0], [13.0, 524.0], [14.0, 503.0], [15.0, 524.0], [16.0, 528.0], [17.0, 527.0], [18.0, 540.0], [19.0, 540.0], [20.0, 548.0], [21.0, 580.0], [22.0, 542.0], [23.0, 543.0], [24.0, 546.0], [25.0, 548.0], [26.0, 551.0], [27.0, 556.0], [28.0, 539.0], [29.0, 546.0], [30.0, 577.0], [31.0, 584.0], [33.0, 585.0], [32.0, 584.0], [35.0, 596.0], [34.0, 583.0], [36.0, 431.0], [37.0, 608.0], [38.0, 431.5], [39.0, 605.0], [41.0, 458.5], [40.0, 620.0], [43.0, 631.0], [42.0, 617.0], [44.0, 440.5], [45.0, 621.0], [46.0, 530.3333333333334], [47.0, 645.0], [48.0, 496.5], [49.0, 659.0], [51.0, 514.0], [50.0, 659.0], [53.0, 601.5], [52.0, 656.0], [55.0, 596.6666666666666], [54.0, 666.0], [57.0, 575.0], [56.0, 676.0], [59.0, 692.0], [58.0, 682.0], [60.0, 626.0], [61.0, 693.0], [62.0, 645.8], [63.0, 698.0], [64.0, 613.0], [66.0, 612.0], [67.0, 688.0], [65.0, 697.0], [69.0, 609.5], [71.0, 628.0], [70.0, 692.0], [68.0, 693.0], [73.0, 648.6666666666666], [74.0, 636.6666666666666], [75.0, 676.0], [72.0, 677.25], [76.0, 625.0], [77.0, 661.0], [79.0, 689.375], [78.0, 680.5], [80.0, 647.0], [82.0, 645.5], [83.0, 676.5], [81.0, 655.0], [84.0, 680.5], [86.0, 677.6666666666666], [87.0, 681.2857142857142], [85.0, 703.0], [89.0, 663.5], [91.0, 673.0], [90.0, 711.5], [88.0, 701.0], [93.0, 693.0], [95.0, 698.0], [94.0, 723.0], [92.0, 705.8], [97.0, 719.0], [99.0, 716.5], [98.0, 730.75], [96.0, 736.5], [100.0, 753.200100959113], [1.0, 321.0]], "isOverall": false, "label": "HTTP Request", "isController": false}, {"data": [[99.64935000000011, 751.9828499999984]], "isOverall": false, "label": "HTTP Request-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 22094.566666666666, "minX": 1.66047948E12, "maxY": 804535.2, "series": [{"data": [[1.66047948E12, 22094.566666666666], [1.66047966E12, 138832.4], [1.6604796E12, 352970.1], [1.66047954E12, 321436.26666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.66047948E12, 50360.8], [1.66047966E12, 316444.8], [1.6604796E12, 804535.2], [1.66047954E12, 732659.2]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66047966E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 709.9041533546347, "minX": 1.66047948E12, "maxY": 1012.533081285444, "series": [{"data": [[1.66047948E12, 1012.533081285444], [1.66047966E12, 751.4879663056572], [1.6604796E12, 709.9041533546347], [1.66047954E12, 780.4938929313935]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66047966E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 709.899893503725, "minX": 1.66047948E12, "maxY": 1012.4971644612482, "series": [{"data": [[1.66047948E12, 1012.4971644612482], [1.66047966E12, 751.4855595667872], [1.6604796E12, 709.899893503725], [1.66047954E12, 780.4834979209975]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66047966E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 0.0, "minX": 1.66047948E12, "maxY": 0.17202268431001877, "series": [{"data": [[1.66047948E12, 0.17202268431001877], [1.66047966E12, 0.0], [1.6604796E12, 0.0030765589871021137], [1.66047954E12, 0.003638253638253635]], "isOverall": false, "label": "HTTP Request", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66047966E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 251.0, "minX": 1.66047948E12, "maxY": 1297.0, "series": [{"data": [[1.66047948E12, 1297.0], [1.66047966E12, 916.0], [1.6604796E12, 921.0], [1.66047954E12, 1042.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.66047948E12, 1192.0], [1.66047966E12, 851.0], [1.6604796E12, 791.0], [1.66047954E12, 879.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.66047948E12, 1278.0], [1.66047966E12, 879.0], [1.6604796E12, 880.0], [1.66047954E12, 962.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.66047948E12, 1231.0], [1.66047966E12, 863.0], [1.6604796E12, 814.0], [1.66047954E12, 914.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.66047948E12, 251.0], [1.66047966E12, 321.0], [1.6604796E12, 608.0], [1.66047954E12, 641.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.66047948E12, 1038.0], [1.66047966E12, 740.0], [1.6604796E12, 697.0], [1.66047954E12, 765.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66047966E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 423.0, "minX": 9.0, "maxY": 1150.0, "series": [{"data": [[9.0, 423.0], [52.0, 628.5], [81.0, 1077.0], [93.0, 1150.0], [94.0, 1068.5], [99.0, 1034.0], [104.0, 958.0], [107.0, 940.0], [110.0, 983.5], [109.0, 916.0], [114.0, 805.5], [113.0, 767.0], [115.0, 876.0], [116.0, 771.0], [117.0, 839.0], [119.0, 750.0], [118.0, 839.0], [121.0, 831.0], [120.0, 828.0], [122.0, 706.0], [125.0, 794.0], [127.0, 788.0], [124.0, 811.0], [126.0, 817.0], [129.0, 789.0], [133.0, 750.0], [128.0, 778.0], [134.0, 750.0], [131.0, 764.0], [132.0, 744.0], [135.0, 739.0], [130.0, 775.0], [138.0, 732.0], [140.0, 705.0], [139.0, 735.0], [143.0, 704.0], [141.0, 710.0], [137.0, 738.0], [142.0, 701.0], [136.0, 734.0], [146.0, 687.0], [144.0, 705.0], [147.0, 686.0], [145.0, 688.0], [148.0, 682.0], [150.0, 680.0], [151.0, 658.0], [149.0, 679.0], [155.0, 656.0], [154.0, 657.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 423.0, "minX": 9.0, "maxY": 1150.0, "series": [{"data": [[9.0, 423.0], [52.0, 628.5], [81.0, 1077.0], [93.0, 1150.0], [94.0, 1068.5], [99.0, 1034.0], [104.0, 958.0], [107.0, 940.0], [110.0, 983.5], [109.0, 916.0], [114.0, 805.5], [113.0, 767.0], [115.0, 876.0], [116.0, 771.0], [117.0, 839.0], [119.0, 750.0], [118.0, 839.0], [121.0, 831.0], [120.0, 828.0], [122.0, 706.0], [125.0, 794.0], [127.0, 788.0], [124.0, 811.0], [126.0, 817.0], [129.0, 789.0], [133.0, 750.0], [128.0, 778.0], [134.0, 750.0], [131.0, 764.0], [132.0, 744.0], [135.0, 739.0], [130.0, 775.0], [138.0, 732.0], [140.0, 705.0], [139.0, 735.0], [143.0, 704.0], [141.0, 710.0], [137.0, 738.0], [142.0, 701.0], [136.0, 734.0], [146.0, 687.0], [144.0, 705.0], [147.0, 686.0], [145.0, 688.0], [148.0, 682.0], [150.0, 680.0], [151.0, 658.0], [149.0, 679.0], [155.0, 656.0], [154.0, 657.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 155.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 10.483333333333333, "minX": 1.66047948E12, "maxY": 140.86666666666667, "series": [{"data": [[1.66047948E12, 10.483333333333333], [1.66047966E12, 53.733333333333334], [1.6604796E12, 140.86666666666667], [1.66047954E12, 128.25]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66047966E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 8.816666666666666, "minX": 1.66047948E12, "maxY": 140.85, "series": [{"data": [[1.66047948E12, 8.816666666666666], [1.66047966E12, 55.4], [1.6604796E12, 140.85], [1.66047954E12, 128.26666666666668]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.66047966E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 8.816666666666666, "minX": 1.66047948E12, "maxY": 140.85, "series": [{"data": [[1.66047948E12, 8.816666666666666], [1.66047966E12, 55.4], [1.6604796E12, 140.85], [1.66047954E12, 128.26666666666668]], "isOverall": false, "label": "HTTP Request-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66047966E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 8.816666666666666, "minX": 1.66047948E12, "maxY": 140.85, "series": [{"data": [[1.66047948E12, 8.816666666666666], [1.66047966E12, 55.4], [1.6604796E12, 140.85], [1.66047954E12, 128.26666666666668]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.66047966E12, "title": "Total Transactions Per Second"}},
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

