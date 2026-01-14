import logoImg from "../../assets/logo-desktop-color 2.png";

export function Header() {
  return (
    <header
      className="flex flex-col items-center py-2"
      role="banner"
      aria-label="Miles & Miles header"
    >
      <img src={logoImg} alt="Miles & Miles" className="h-14 w-auto" />
      <div className="w-full max-w-md h-px bg-primary-400 mt-2" aria-hidden="true" />
    </header>
  );
}
