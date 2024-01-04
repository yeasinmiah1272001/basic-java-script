// triangle
function calculateTriangleArea(){
       // base
       const triangleBase = document.getElementById("triangle-base")
       const triangleBaseValue = triangleBase.value;
       const base = parseFloat(triangleBaseValue)
       triangleBase.value = "";

       // height
       const triangleHeight = document.getElementById("triangle-height");
       const triangleHeightValue = triangleHeight.value;
       const height = parseFloat(triangleHeightValue);
       const area = 0.5 * base * height;
       triangleHeight.value = "";
       console.log(area)

       const areaSpan= document.getElementById("triangle-area")
       areaSpan.innerText = area;

       // name show
      const containerDiv= document.getElementById("container")
      const triangleNameTag = document.getElementById("triangle-name")
      const triangleName = triangleNameTag.innerText;

      const li = document.createElement("li")
      li.innerText = triangleName + "  " + area;
      containerDiv.appendChild(li)

      if(isNaN(base) || isNaN(height)){
              alert('please provide a number');
              return;
       }

}

// rectangle

function calculateRectangleArea(){
       const rectangleWeight = document.getElementById("rectangle-width")
       const  rectangleWeightValue = rectangleWeight.value;
       const weight = parseFloat(rectangleWeightValue)
       rectangleWeight.value = ""

       // height
       const rectangleHeight = document.getElementById("rectangle-height");
       const rectangleArea = document.getElementById("rectangle-area")
       const rectangleHeightValue = rectangleHeight.value;
       const height = parseFloat(rectangleHeightValue)
       const area = weight * height;
       rectangleArea.innerText = area;
       rectangleHeight.value = "";

       // show rectangle name and area;
       const containerDiv = document.getElementById("container")
       const rectangleNameTag = document.getElementById("rectangleName");
       const rectangleName = rectangleNameTag.innerText;
       // console.log(rectangleName)
       const li = document.createElement("li")
       li.innerText = rectangleName + "  " + area;
       containerDiv.appendChild(li)

}
