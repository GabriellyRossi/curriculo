function saveAsPDF() {
  const content = document.getElementById('content');
  const pdf = new jsPDF();

  pdf.html(content, {
    callback: function(pdf) {
      pdf.save('curriculo.pdf');
    }
  });
}
