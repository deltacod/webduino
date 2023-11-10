document.write('<div id="region_trackingcolor" style="z-index:998;"><video id="gamevideo_trackingcolor" style="position:absolute;visibility:hidden;" preload autoplay loop muted></video><img id="gameimage_trackingcolor" style="position:absolute;visibility:hidden;" crossorigin="anonymous"><canvas id="gamecanvas_trackingcolor"></canvas><canvas id="gamecanvas_custom"></canvas></div>');
document.write('<div id="redrect" style="z-index:999;position:absolute;display:none;">Red Rect<br>R <input type="range" id="myColor_r_min1" min="0" max="255" value="0" step="1" onchange="myColor_r_min_v1.innerHTML=this.value;"><span id="myColor_r_min_v1">0</span><input type="range" id="myColor_r_max1" min="0" max="255" value="0" step="1" onchange="myColor_r_max_v1.innerHTML=this.value;"><span id="myColor_r_max_v1">0</span><br>G <input type="range" id="myColor_g_min1" min="0" max="255" value="0" step="1" onchange="myColor_g_min_v1.innerHTML=this.value;"><span id="myColor_g_min_v1">0</span><input type="range" id="myColor_g_max1" min="0" max="255" value="0" step="1" onchange="myColor_g_max_v1.innerHTML=this.value;"><span id="myColor_g_max_v1">0</span><br>B <input type="range" id="myColor_b_min1" min="0" max="255" value="0" step="1" onchange="myColor_b_min_v1.innerHTML=this.value;"><span id="myColor_b_min_v1">0</span><input type="range" id="myColor_b_max1" min="0" max="255" value="0" step="1" onchange="myColor_b_max_v1.innerHTML=this.value;"><span id="myColor_b_max_v1">0</span></div>');
document.write('<div id="greenrect" style="z-index:999;position:absolute;display:none;">Green Rect<br>R <input type="range" id="myColor_r_min2" min="0" max="255" value="0" step="1" onchange="myColor_r_min_v2.innerHTML=this.value;"><span id="myColor_r_min_v2">0</span><input type="range" id="myColor_r_max2" min="0" max="255" value="0" step="1" onchange="myColor_r_max_v2.innerHTML=this.value;"><span id="myColor_r_max_v2">0</span><br>G <input type="range" id="myColor_g_min2" min="0" max="255" value="0" step="1" onchange="myColor_g_min_v2.innerHTML=this.value;"><span id="myColor_g_min_v2">0</span><input type="range" id="myColor_g_max2" min="0" max="255" value="0" step="1" onchange="myColor_g_max_v2.innerHTML=this.value;"><span id="myColor_g_max_v2">0</span><br>B <input type="range" id="myColor_b_min2" min="0" max="255" value="0" step="1" onchange="myColor_b_min_v2.innerHTML=this.value;"><span id="myColor_b_min_v2">0</span><input type="range" id="myColor_b_max2" min="0" max="255" value="0" step="1" onchange="myColor_b_max_v2.innerHTML=this.value;"><span id="myColor_b_max_v2">0</span></div>');
document.write('<div id="bluerect" style="z-index:999;position:absolute;display:none;">Blue Rect<br>R <input type="range" id="myColor_r_min3" min="0" max="255" value="0" step="1" onchange="myColor_r_min_v3.innerHTML=this.value;"><span id="myColor_r_min_v3">0</span><input type="range" id="myColor_r_max3" min="0" max="255" value="0" step="1" onchange="myColor_r_max_v3.innerHTML=this.value;"><span id="myColor_r_max_v3">0</span><br>G <input type="range" id="myColor_g_min3" min="0" max="255" value="0" step="1" onchange="myColor_g_min_v3.innerHTML=this.value;"><span id="myColor_g_min_v3">0</span><input type="range" id="myColor_g_max3" min="0" max="255" value="0" step="1" onchange="myColor_g_max_v3.innerHTML=this.value;"><span id="myColor_g_max_v3">0</span><br>B <input type="range" id="myColor_b_min3" min="0" max="255" value="0" step="1" onchange="myColor_b_min_v3.innerHTML=this.value;"><span id="myColor_b_min_v3">0</span><input type="range" id="myColor_b_max3" min="0" max="255" value="0" step="1" onchange="myColor_b_max_v3.innerHTML=this.value;"><span id="myColor_b_max_v3">0</span></div>');
document.write('<select id="mirrorimage_trackingcolor" style="position:absolute;visibility:hidden;"><option value="1">Y</option><option value="0">N</option></select><div id="gamediv_trackingcolor" style="color:red;"></div>');
document.write('<div id="trackingcolorState" style="position:absolute;display:none;">1</div>');
document.write('<div id="sourceId_trackingcolor" style="position:absolute;display:none;"></div>');

window.onload = function () {
    var video = document.getElementById('gamevideo_trackingcolor');
    var canvas = document.getElementById('gamecanvas_trackingcolor');
    var context = canvas.getContext('2d');
    var canvas_custom = document.getElementById('gamecanvas_custom');
	var trackingcolorState = document.getElementById('trackingcolorState');
    var context_custom = canvas_custom.getContext('2d');
    var result = document.getElementById('gamediv_trackingcolor');
    var mirrorimage = document.getElementById("mirrorimage_trackingcolor");
    var region = document.getElementById("region_trackingcolor");
    var myColor_r_min1,myColor_r_max1,myColor_g_min1,myColor_g_max1,myColor_b_min1,myColor_b_max1;
    var myColor_r_min2,myColor_r_max2,myColor_g_min2,myColor_g_max2,myColor_b_min2,myColor_b_max2;
    var myColor_r_min3,myColor_r_max3,myColor_g_min3,myColor_g_max3,myColor_b_min3,myColor_b_max3;
	var sourceTimer;
	var obj;
	var source = document.getElementById("sourceId_trackingcolor");
	
	var tracker = new tracking.ColorTracker();
	
	start();
	function start(){
		if (source.innerHTML!="") {
			obj = document.getElementById(source.innerHTML);
			if (obj.tagName=="IMG") {
				if (obj.src=="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7") {
					setTimeout(function() {start();}, 100);	
					return;
				}
			}			
			console.log(obj);
			obj.style.width = obj.width + 'px';
			obj.style.height = obj.height + 'px';
			canvas.setAttribute("width", obj.width);
			canvas.setAttribute("height", obj.height);
			canvas.style.width = obj.width + "px";
			canvas.style.height = obj.height + "px";
			canvas_custom.setAttribute("width", obj.width);
			canvas_custom.setAttribute("height", obj.height);
			canvas_custom.style.width = obj.width + "px";
			canvas_custom.style.height = obj.height + "px";

			if (mirrorimage.value == 1) {
				context.translate((canvas.width + obj.width) / 2, 0);
				context.scale(-1, 1);
				context.drawImage(obj, 0, 0, obj.width, obj.height);
				context.setTransform(1, 0, 0, 1, 0, 0);
			} else
				context.drawImage(obj, 0, 0, obj.width, obj.height);

			tracking.track('#gamecanvas_trackingcolor', tracker);
		}
		setTimeout(function() {start();}, 100);		
	}
		
	tracker.on('track', function(event) {			  

		myColor_r_min1 = document.getElementById('myColor_r_min1').value;
		myColor_r_max1 = document.getElementById('myColor_r_max1').value;
		myColor_g_min1 = document.getElementById('myColor_g_min1').value;
		myColor_g_max1 = document.getElementById('myColor_g_max1').value;
		myColor_b_min1 = document.getElementById('myColor_b_min1').value;
		myColor_b_max1 = document.getElementById('myColor_b_max1').value;

		myColor_r_min2 = document.getElementById('myColor_r_min2').value;
		myColor_r_max2 = document.getElementById('myColor_r_max2').value;
		myColor_g_min2 = document.getElementById('myColor_g_min2').value;
		myColor_g_max2 = document.getElementById('myColor_g_max2').value;
		myColor_b_min2 = document.getElementById('myColor_b_min2').value;
		myColor_b_max2 = document.getElementById('myColor_b_max2').value;

		myColor_r_min3 = document.getElementById('myColor_r_min3').value;
		myColor_r_max3 = document.getElementById('myColor_r_max3').value;
		myColor_g_min3 = document.getElementById('myColor_g_min3').value;
		myColor_g_max3 = document.getElementById('myColor_g_max3').value;
		myColor_b_min3 = document.getElementById('myColor_b_min3').value;
		myColor_b_max3 = document.getElementById('myColor_b_max3').value;

		result.innerHTML = "";

		var imgData=context.getImageData(0,0,canvas.width,canvas.height);

		for (var i=0;i<imgData.data.length;i+=4) {
			var r=0;
			var g=0;
			var b=0;
			if ((imgData.data[i]>=myColor_r_min1&&imgData.data[i]<=myColor_r_max1)&&(imgData.data[i+1]>=myColor_g_min1&&imgData.data[i+1]<=myColor_g_max1)&&(imgData.data[i+2]>=myColor_b_min1&&imgData.data[i+2]<=myColor_b_max1)) {
			  r=255;
			}
			if ((imgData.data[i]>=myColor_r_min2&&imgData.data[i]<=myColor_r_max2)&&(imgData.data[i+1]>=myColor_g_min2&&imgData.data[i+1]<=myColor_g_max2)&&(imgData.data[i+2]>=myColor_b_min2&&imgData.data[i+2]<=myColor_b_max2)) {
			  g=255;
			}
			if ((imgData.data[i]>=myColor_r_min3&&imgData.data[i]<=myColor_r_max3)&&(imgData.data[i+1]>=myColor_g_min3&&imgData.data[i+1]<=myColor_g_max3)&&(imgData.data[i+2]>=myColor_b_min3&&imgData.data[i+2]<=myColor_b_max3)) {
			  b=255;
			}

			imgData.data[i]=r;
			imgData.data[i+1]=g;
			imgData.data[i+2]=b;
			imgData.data[i+3]=255;
		}

		context_custom.putImageData(imgData,0,0);

		event.data.forEach(function(rect) {
			context.strokeStyle = rect.color;
			context.strokeRect(rect.x, rect.y, rect.width, rect.height);
			result.innerHTML+= rect.color+","+rect.x+","+rect.y+","+rect.width+","+rect.height+"<br>";
		});

		if (result.innerHTML!="")
			result.innerHTML = result.innerHTML.substr(0,result.innerHTML.length-4);
		if (typeof trackingcolor_recognitionFinish === 'function') trackingcolor_recognitionFinish();
	});
	
	tracking.ColorTracker.registerColor('red', function(r, g, b) {
		if ((r>=myColor_r_min1&&r<=myColor_r_max1)&&(g>=myColor_g_min1&&g<=myColor_g_max1)&&(b>=myColor_b_min1&&b<=myColor_b_max1)) {
		  return true;
		}
		return false;
	});

	tracking.ColorTracker.registerColor('green', function(r, g, b) {
		if ((r>=myColor_r_min2&&r<=myColor_r_max2)&&(g>=myColor_g_min2&&g<=myColor_g_max2)&&(b>=myColor_b_min2&&b<=myColor_b_max2)) {
		  return true;
		}
		return false;
	});

	tracking.ColorTracker.registerColor('blue', function(r, g, b) {
		if ((r>=myColor_r_min3&&r<=myColor_r_max3)&&(g>=myColor_g_min3&&g<=myColor_g_max3)&&(b>=myColor_b_min3&&b<=myColor_b_max3)) {
		  return true;
		}
		return false;
	});

	var trackedColors = {
	  custom: true
	};

	Object.keys(tracking.ColorTracker.knownColors_).forEach(function(color) {
	  trackedColors[color] = true;
	});


	var colors = [];
	for (var color in trackedColors) {
	  if (trackedColors[color]) {
		colors.push(color);
	  }
	}
	tracker.setColors(colors);			
  
    function changeColor(detectColor, n) {
      var val = detectColor.split("_");
      document.getElementById('myColor_r_min'+n).value = val[1].split(",")[0];
      document.getElementById('myColor_r_min_v'+n).innerHTML = val[1].split(",")[0];
      document.getElementById('myColor_r_max'+n).value = val[1].split(",")[0];
      document.getElementById('myColor_r_max_v'+n).innerHTML = val[1].split(",")[0];
      document.getElementById('myColor_g_min'+n).value = val[1].split(",")[1];
      document.getElementById('myColor_g_min_v'+n).innerHTML = val[1].split(",")[1];
      document.getElementById('myColor_g_max'+n).value = val[1].split(",")[1];
      document.getElementById('myColor_g_max_v'+n).innerHTML = val[1].split(",")[1];
      document.getElementById('myColor_b_min'+n).value = val[1].split(",")[2];
      document.getElementById('myColor_b_min_v'+n).innerHTML = val[1].split(",")[2];
      document.getElementById('myColor_b_max'+n).value = val[1].split(",")[2];
      document.getElementById('myColor_b_max_v'+n).innerHTML = val[1].split(",")[2];
    }    
}
