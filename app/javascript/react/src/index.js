import { define } from 'remount'
import Title from "./components/Title"
import Button from "./components/Button"
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeatureSection from './components/FeatureSection'
import AdvantageSection from './components/AdvantageSection'
import Footer from './components/Footer'
import Copyright from './components/Copyright'
import PropertyCard from './components/PropertyCard'
import PropertyPhotosCarousel from './components/PropertyPhotosCarousel'
import PropertyDetailsCard from './components/PropertyDetailsCard'
                                      
define({ 'title-component': Title }, { root: document.getElementById('title-root') });
define({ 'button-component': Button }, { root: document.getElementById('button-root') });
define({ 'navbar-component': Navbar }, { root: document.getElementById('navbar-root') });
define({ 'hero-component': Hero }, { root: document.getElementById('hero-root') });
define({ 'feature-section-component': FeatureSection }, { root: document.getElementById('feature-section-root') });
define({ 'advantage-section-component': AdvantageSection }, { root: document.getElementById('advantage-section-root') });
define({ 'footer-component': Footer }, { root: document.getElementById('footer-root') });
define({ 'copyright-component': Copyright }, { root: document.getElementById('copyright-root') })
define({ 'property-card-component': PropertyCard }, { root: document.getElementById('property-card-root') });
define({ 'property-photos-carousel-component': PropertyPhotosCarousel }, { root: document.getElementById('property-photos-carousel-root') });
define({ 'property-details-card-component': PropertyDetailsCard }, { root: document.getElementById('property-details-card-root') });