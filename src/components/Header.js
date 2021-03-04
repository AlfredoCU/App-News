import { memo } from "react";

const Header = () => (
  <header className="bg-green-500 m-auto p-5">
    <h1 className="text-center text-white text-2xl font-medium">
      BUSCADOR DE NOTICIAS
    </h1>
  </header>
);

const HeaderMemo = memo(Header);
export { HeaderMemo as Header };
