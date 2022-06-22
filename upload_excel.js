function generatePdf(){
    var element = document.getElementById('excel_file')
   html2pdf().from(element).save();
   console.log('Pdf saved');
}