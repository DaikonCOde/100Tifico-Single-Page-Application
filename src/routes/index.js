import Header from "../templates/header";
import Home from "../pages/home";
import Character from "../pages/character";
import Error404 from "../pages/error404";
import getHash from "../utlis/getHash";
import ResolveRoutes from "../utlis/resolveRoutes";

const routes = {
  "/": Home,
  "/:id": Character,
  "/contact": "Contact",
}

const Routers = async () => {
  const header = null || document.getElementById("header");
  const content  = null || document.getElementById("content");


  header.innerHTML = await Header();
  let hash = getHash();
  let route = await ResolveRoutes(hash);
  let render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
}

export default Routers;