import Sortable from 'sortablejs';

document.addEventListener("DOMContentLoaded", function () {
  const imageWrapper = document.querySelector(".image-wrapper");
  
  if (imageWrapper) {
    const sortable = new Sortable(imageWrapper, {
      onUpdate: function (evt) {
        // Obtenez la liste des éléments triables
        const photos = sortable.toArray();
        
        // Parcourez les éléments et mettez à jour l'attribut data-position
        photos.forEach((photo, index) => {
          const element = document.querySelector(`[data-id="${photo}"]`);
          element.dataset.position = index + 1;
        });

        // Ajout du console log
        console.log("Script de tri exécuté avec succès !");
      },
    });
  }
});
