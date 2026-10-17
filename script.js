// Personnalise les liens ci-dessous. Laisse une chaîne vide si tu ne souhaites pas afficher un réseau.
const liensSociaux = {
  tiktok: "https://www.tiktok.com/@Alioubah628",
  snapchat: "", // Exemple : https://www.snapchat.com/add/TON_NOM
  whatsapp: ""  // Exemple : https://wa.me/NUMERO_INTERNATIONAL_SANS_PLUS
};

document.querySelectorAll("[data-social]").forEach((lien) => {
  const reseau = lien.dataset.social;
  const destination = liensSociaux[reseau];
  if (destination && destination.trim() !== "") {
    lien.href = destination;
  } else {
    // Sans lien renseigné, la carte mène à la page générale du réseau.
    const pagesGenerales = {
      tiktok: "https://www.tiktok.com/",
      snapchat: "https://www.snapchat.com/",
      whatsapp: "https://www.whatsapp.com/"
    };
    lien.href = pagesGenerales[reseau] || "#";
  }
});

document.querySelectorAll("[data-year]").forEach((element) => {
  element.textContent = new Date().getFullYear();
});

const boutonMenu = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
if (boutonMenu && navigation) {
  boutonMenu.addEventListener("click", () => {
    const ouvert = navigation.classList.toggle("open");
    boutonMenu.setAttribute("aria-expanded", String(ouvert));
  });
}
