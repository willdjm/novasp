import { BannerHome } from "./components/Banner";
import { Blog } from "./components/Blog";
import { Empreendimentos } from "./components/Empreendimentos";
import { Footer } from "./components/Footer";
import { Parceiros } from "./components/Parceiros";
import { Produtos } from "./components/Produtos";
import { ScrollTop } from "./components/ScrollToTopp";
import { Siga } from "./components/Siga";
import { Video } from "./components/Video";
import { Whatsapp } from "./components/Whatsapp";

export default function Home() {
  return (
<main>
  <BannerHome/>
  <Empreendimentos/>
  <Produtos/>
  <Video/>
  <Parceiros/>
  <Blog/>
  <Siga/>
<Footer/>
<Whatsapp />
<ScrollTop/>
</main>
  );
}
