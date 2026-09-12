import "@trunkjs/loader";
import "@trunkjs/content-pane";
import "@trunkjs/responsive";



// Registriert die im Theme verwendeten Web Components; die zugehörigen Styles bleiben parallel in all.scss gepflegt.
// /unstyled lädt kein Light-DOM-CSS: Die konsumierende Theme-/App-Schicht gestaltet es selbst über Sass-Mixins.
import "@nextrap/nte-navbar/unstyled";
import "@nextrap/nte-nav/unstyled";
import "@nextrap/nte-burger/unstyled";
import "@nextrap/nte-offcanvas/unstyled";
import "@nextrap/nte-feedback/unstyled";
import "@trunkjs/element-relocator";
import "@trunkjs/form";
import "@nextrap/nte-input/unstyled";
import "@nextrap/nte-card/unstyled";
import "@nextrap/nte-image/unstyled";

// Registriert projektspezifische Custom Elements für den zentralen Theme-Entry.
import "./src/elements/progress-bar";

import "@micx/lib-js";
import "@leuffen/announcements";

// Registriert die Layout- und Inhaltskomponenten, die Theme-Seiten direkt verwenden.
import "@nextrap/ntl-2col/unstyled";
import "@nextrap/ntl-hero/unstyled";
import "@nextrap/nte-slider/unstyled";
import "@nextrap/ntl-card-row/unstyled";
import "@nextrap/ntl-card-grid/unstyled";
import "@nextrap/nte-accordion/unstyled";
import "@nextrap/nte-consent-blocker/unstyled";
//import "@nextrap/ntl-footer/unstyled";
import "@nextrap/nte-parallax-bg/unstyled";



// Hält den Abschluss des zentralen Komponenten-Entrys für künftige allgemeine Features sichtbar.

