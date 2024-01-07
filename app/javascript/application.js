// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import Rails from "@rails/ujs";
import './add_jquery'
import Sortable from 'stimulus-sortable';
import "@hotwired/turbo-rails"
import "@nathanvda/cocoon"
import "./controllers"
import application from './controllers/index'
import "./react/src/index.js"

application.register('sortable', Sortable);

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


Rails.start();