export const scrollToSection = (hash: string) => {
  if (!hash || typeof window === "undefined") return;
  const targetId = hash.replace("#", "");
  const elem = document.getElementById(targetId);
  if (elem) {
    elem.scrollIntoView({ behavior: "smooth" });
    if (window.location.hash !== hash) {
      window.history.pushState(null, "", hash);
    }
  }
};
