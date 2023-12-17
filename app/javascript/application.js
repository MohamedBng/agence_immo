// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import Rails from "@rails/ujs";
import './add_jquery'
import "@hotwired/turbo-rails"
import "@nathanvda/cocoon"
import "./controllers"
import "./react/src/index.js"

Rails.start();