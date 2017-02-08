## 简单地图展示

**功能描述**

> 简单使用地图类库加载地图，不直接调用openlayer3

<head>
	<link rel="stylesheet" href="https://openlayers.org/en/v3.19.1/css/ol.css" type="text/css">
  <script src="https://openlayers.org/en/v3.19.1/build/ol.js"></script>
  <style>
    .map {
      width: 100%;
      height: 300px;
    }
  </style>
</head>
<body>
	<div id="map" class="map" style="width: 100%"></div>
	<script>
	  new ol.Map({
			layers: [
				new ol.layer.Tile({source: new ol.source.OSM()})
			],
			view: new ol.View({
				center: [0, 0],
				zoom: 2
			}),
			target: 'map'
	  });
	</script>
</body>

> 要显示上面这个地图，仅需要新建一个html文档，在其中编写如下代码即可：
