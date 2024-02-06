const version = 'V1.0';
var obj=JSON.parse($request.body),noAD={};"0007"==obj.placementNo?(noAD.materialsList=[{billMaterialsId:"6491",filePath:"https://api.bimg.cc/today?w=1920&h=1080&mkt=zh-CN",creativeType:1}],noAD.advertParam={skipTime:1},noAD.code="00"):noAD="G0054"==obj.placementNo?{code:"00",materialsList:[{}]}:{code:"00",message:"无广告返回"},$done({body:JSON.stringify(noAD)});

#感谢:@ddgksf2013,@flow2000
