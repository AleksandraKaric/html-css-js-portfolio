

/*Svaki put kada se funkcija toggleMenu pozove, ona proverava klase elemenata 
menu i icon. Ako menu trenutno nema klasu open, ona se dodaje (meni se otvara), 
a ako je ima, klasa se uklanja (meni se zatvara).
Slično, ikona se menja tako da vizuelno odražava trenutno stanje menija.
Ukratko, toggleMenu omogućava da se jednim klikom na ikonu otvori ili zatvori meni, 
menjajući pri tome i izgled ikone. */

function toggleMenu() {

    const menu = document.querySelector(".menu-links"); 
    const icon = document.querySelector(".hamburger-icon");
    
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}