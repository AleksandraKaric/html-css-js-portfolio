

/*Svaki put kada se funkcija toggleMenu pozove, ona proverava klase elemenata 
menu i icon. Ako menu trenutno nema klasu open, ona se dodaje (meni se otvara), 
a ako je ima, klasa se uklanja (meni se zatvara).
Slično, ikona se menja tako da vizuelno odražava trenutno stanje menija.
Ukratko, toggleMenu omogućava da se jednim klikom na ikonu otvori ili zatvori meni, 
menjajući pri tome i izgled ikone. */

function toggleMenu() {


    /*koristi document.querySelector(".menu-links") kako bi pronašla HTML element 
    sa klasom menu-links i sačuvala ga u promenljivu menu. 
    Ovaj element predstavlja deo menija koji će biti prikazan ili sakriven.*/
    const menu = document.querySelector(".menu-links"); 

    /*pronalazi HTML element sa klasom hamburger-icon, koji najčešće 
    predstavlja ikonu menija (kao što je ikona sa tri linije – "hamburger"). 
    Element se čuva u promenljivoj icon.*/
    const icon = document.querySelector(".hamburger-icon");

    
    /* menu.classList.toggle("open") će dakle dodati ili ukloniti klasu open 
    sa elementa menija (menu). Kada je klasa open dodata, 
    u CSS-u se obično definišu stilovi za prikaz menija 
    (npr. menju može postati vidljiv kada ima klasu open).*/
    menu.classList.toggle("open")


    /*icon.classList.toggle("open") radi isto sa elementom icon,
     što obično menja izgled ikone. Na primer, ikona se može promeniti u "X"
      kada je meni otvoren i vratiti na "hamburger" kada je meni zatvoren. */
    icon.classList.toggle("open")
}