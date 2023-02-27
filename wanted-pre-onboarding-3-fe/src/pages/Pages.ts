import Main from "./Main";
import PageB from "./PabeB";
import PageA from "./PageA";
import PageC from "./PageC";

interface Page {
  name: string;
  path: string;
  component: () => JSX.Element;
}

export const Pages: Page[] = [
  {
    name: "Main",
    path: "/",
    component: Main,
  },
  {
    name: "Page A",
    path: "/pagea",
    component: PageA,
  },
  {
    name: "Page B",
    path: "/pageb",
    component: PageB,
  },
  {
    name: "Page C",
    path: "/pagec",
    component: PageC,
  },
];
