function makeTable(arr) 
{
   
  let pptx = new PptxGenJS();
  let slide = pptx.addSlide();
  slide.addImage({ path: "PPTimg.png",  w: 10 , h:5.55});


  slide.addText("Total Financial Impact: ", { x: 0.2, y: 1, fontFace: "Arial", fontSize: 18, color: "#FF0000", bold: true, italic: false, underline: false });
  slide.addText("Sustainability Savings", { x: 0.8, y: 1.75, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });
  slide.addText("Time/Enrollment Savings (hours)", { x: 3.7, y: 1.75, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });
  slide.addText("Time/Enrollment Savings ($)", { x: 7, y: 1.75, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });

  slide.addText("Increased Transactions", { x: 0.8, y: 3.58, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });
  slide.addText("Customer Experience Value", { x: 3.8, y: 3.58, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });
  slide.addText("Compliance and Legacy Savings", { x: 6.9, y: 3.58, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });

        slide.addText(arr[1][9], { x: 3, y: 1, fontFace: "Arial", fontSize: 18, color: "#FF0000", bold: true, italic: false, underline: false });

        slide.addText(arr[1][8], { x: 1.2, y: 2.3, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide.addText(arr[1][2], { x: 4.5, y: 2.3, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide.addText(arr[1][4], { x: 7.8, y: 2.3, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       

        slide.addText(arr[1][3], { x: 1.2, y: 4.1, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide.addText(arr[1][5], { x: 4.4, y: 4.1, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide.addText(arr[1][6]+"/"+arr[1][7], { x: 7.7, y: 4.1, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        
      
        pptx.writeFile({ fileName: arr[1][0]+""+new Date().toLocaleString()});
        return ; 
}



 // document.getElementById("totalFinancialImpact").innerHTML=array[1][9];
//  document.getElementById('Sustainability Saving').innerHTML=array[1][8]
  //document.getElementById("TEout").innerHTML=array[1][2];
  //document.getElementById("CLout").innerHTML=array[1][6]+"/"+ array[1][7];
  //document.getElementById("ITout").innerHTML=array[1][3];
  //document.getElementById("CEout").innerHTML=array[1][5];
  //document.getElementById("TESout").innerHTML=array[1][4];
  //var rep=document.getElementById("report").innerHTML;

  //return rep;


