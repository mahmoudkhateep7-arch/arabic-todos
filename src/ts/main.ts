import "../css/genral.css";
import iconify from "@iconify/iconify";
import { fn_even_l_grid_el } from "./grid_el";
if (iconify) {
}
export interface I_confug_obj {
  title: string;
  desc: string;
  y: string;
  month: string;
  day: string;
  id: number;
  h: string;
  second: string;
}
export const confug_obj: { arr: I_confug_obj[] } = { arr: [] };
fn_even_l_grid_el();
