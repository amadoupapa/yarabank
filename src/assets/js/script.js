document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems);
  });

  document.getElementById('inscriptionForm').addEventListener('change', function() {
    var typeClient = document.querySelector('input[name="type_client"]:checked').value;

    // Afficher les champs spécifiques en fonction du type de client
    if (typeClient === 'particulier') {
      document.getElementById('particulierFields').style.display = 'block';
      document.getElementById('entrepriseFields').style.display = 'none';
      document.getElementById('entrepriseFieldsA').style.display = 'none';
      
      
    } else if (typeClient === 'entreprise') {
      document.getElementById('particulierFields').style.display = 'none';
      document.getElementById('entrepriseFields').style.display = 'block';
      document.getElementById('entrepriseFieldsA').style.display = 'block';
     
      
    } 
  });
  document.getElementById('inscriptionForm').addEventListener('change', function() {
    var typeCompte = document.querySelector('select[name="type_compte"]').value;

    // Afficher les champs spécifiques en fonction du type de compte
    if (typeCompte === 'joint') {
        document.getElementById('Form1').style.display = 'block';
        document.getElementById('Form2').style.display = 'block';
        document.getElementById('Form3').style.display = 'block';
        document.getElementById('Form4').style.display = 'block';
    } else {
        document.getElementById('Form1').style.display = 'none';
        document.getElementById('Form2').style.display = 'none';
        document.getElementById('Form3').style.display = 'none';
        document.getElementById('Form4').style.display = 'none';
    }
});

