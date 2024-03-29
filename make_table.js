function makeTable(arr,assumptions,curr,thirdSlide) 
{
   
  let pptx = new PptxGenJS();

  //Assumptions slide
  let slide1 = pptx.addSlide();
  slide1.addImage({ path: "Slide1Background.png",  w: 10 , h:5.55});


  let rows = [["Percentage of annual digital enrollment transactions:",assumptions[0][0]],
            ["Mailing/shipping cost savings, per transaction (in $/€/£):",assumptions[0][1]],
            ["Printing/scanning/faxing cost savings per transaction (in $/€/£):",assumptions[0][2]],
            ["Average time savings for employees per transaction (hours):",assumptions[0][3]],
            ["Average time savings per digital enrollment (hours):",assumptions[0][4]],
            ["Average hourly fully loaded compensation, end user for transactions (in $/€/£):",assumptions[0][5]],
            ["Average hourly fully loaded compensation, end user for digital enrollments (in $/€/£):",assumptions[0][6]],
            ["Reduction in drop off rate due to digitization of processes (in %):",assumptions[0][7]],
            ["Average revenue per transaction (in $/€/£):",assumptions[0][8]],
            ["Average number of pages per transaction:",assumptions[0][9]],
            ["Employees working on compliance and regulatory reviews:",assumptions[0][10]],
            ["Hours per employee per week spent on compliance and regulatory reviews:",assumptions[0][11]],
            ["Percentage reduction in time spent on compliance and regulatory reviews:",assumptions[0][12]],
            ["Average hourly fully loaded compensation for a compliance and regulatory staff member (in $/€/£):",assumptions[0][13]],
            ["How much more would the legacy e-signature solution cost to accomplish the same transaction volume? (in %):",assumptions[0][14]]];
            
  let heading = [["Assumption Label", "Assumptions"]]; 
            slide1.addTable(heading,{x:0.9, y:0.7, colW:[7,1.3] , bold: true}),
            slide1.addTable(rows, {x:0.7, y:1,rowH:0.1, colW:[7.5,1.3], fontSize:11  });

            slide1.addText(curr, {x: 6.4, y: 0.3, color:'ffff00'})




// VR slide
  let slide2 = pptx.addSlide();
  slide2.addImage({ path: "slide2background.png",  w: 10 , h:5.55});


  slide2.addText("Total Financial Impact: ", { x: 0.2, y: 1, fontFace: "Arial", fontSize: 18, color: "#FF0000", bold: true, italic: false, underline: false });
  slide2.addText("Sustainability Savings", { x: 0.8, y: 1.75, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });
  slide2.addText("Time/Enrollment Savings (hours)", { x: 3.7, y: 1.75, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });
  slide2.addText("Time/Enrollment Savings ($)", { x: 7, y: 1.75, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });

  slide2.addText("Increased Transactions", { x: 0.8, y: 3.58, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });
  slide2.addText("Customer Experience Value", { x: 3.8, y: 3.58, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });
  slide2.addText("Compliance and Legacy Savings", { x: 6.9, y: 3.58, fontFace: "Arial", fontSize: 13, color: "#000000", bold: false, italic: false, underline: false });

        slide2.addText(arr[1][9], { x: 3, y: 1, fontFace: "Arial", fontSize: 18, color: "#FF0000", bold: true, italic: false, underline: false });

        slide2.addText(arr[1][8], { x: 1.2, y: 2.3, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide2.addText(arr[1][2], { x: 4.5, y: 2.3, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide2.addText(arr[1][4], { x: 7.8, y: 2.3, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       

        slide2.addText(arr[1][3], { x: 1.2, y: 4.1, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide2.addText(arr[1][5], { x: 4.4, y: 4.1, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        slide2.addText(arr[1][6]+"/"+arr[1][7], { x: 7.7, y: 4.1, fontFace: "Arial", fontSize: 15, color: "#FF0000", bold: false, italic: false, underline: false });
       
        //Enviornment slide

        let slide3 = pptx.addSlide();
  slide3.addImage({ path: "slide3background.png",  w: 10 , h:5.55});

  slide3.addImage({ path: "blankSpace.png", w:1, h:0.2 , x: 0.8, y: 2.95})
  slide3.addImage({ path: "blankSpace.png", w:1, h:0.2 , x: 2.5, y: 2.95})
  slide3.addImage({ path: "blankSpace.png", w:1, h:0.2 , x: 4.5, y: 2.95})
  slide3.addImage({ path: "blankSpace.png", w:1, h:0.2 , x: 6.2, y: 2.95})
  slide3.addImage({ path: "blankSpace.png", w:1, h:0.2 , x: 8.1, y: 2.95})

  slide3.addText(thirdSlide[0][0], {x: 0.8, y: 2.23, color:'ffffff', bold: true})
  slide3.addText(thirdSlide[0][2], {x: 2.8, y: 2.23, color:'ffffff', bold: true})
  slide3.addText(thirdSlide[0][4], {x: 4.7, y: 2.23, color:'ffffff', bold: true})
  slide3.addText(thirdSlide[0][6], {x: 6.7, y: 2.23, color:'ffffff', bold: true})
  slide3.addText(thirdSlide[0][8], {x: 8.55, y: 2.23, color:'ffffff', bold: true})

  slide3.addText(thirdSlide[0][1], {x: 0.9, y: 3.03, color:'000000', bold: true , fontSize: 15})
  slide3.addText(thirdSlide[0][3], {x: 2.9, y: 3.03, color:'000000', bold: true , fontSize: 15})
  slide3.addText(thirdSlide[0][5], {x: 4.8, y: 3.03, color:'000000', bold: true , fontSize: 15})
  slide3.addText(thirdSlide[0][7], {x: 6.8, y: 3.03, color:'000000', bold: true , fontSize: 15})
  slide3.addText(thirdSlide[0][9], {x:8.75, y: 3.03, color:'000000', bold: true , fontSize: 15})
        
  slide3.addText(thirdSlide[0][10], {x: 3.3, y: 4.65, color:'000000', bold: true , fontSize: 20})
  slide3.addText(thirdSlide[0][11], {x:5.3, y: 4.65, color:'000000', bold: true , fontSize: 18})
      
        pptx.writeFile({ fileName: arr[1][0]+"("+new Date().toLocaleString()+")"});
        return ; 
}



 


