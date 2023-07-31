import App from "./App";
import "./styles/main.scss";

const $target = document.querySelector<HTMLBodyElement>("body");

new App({ $parent: $target! });
