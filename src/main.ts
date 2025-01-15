import { button } from './styles/components/button/button';



const app = document.querySelector("#app") as HTMLDivElement;
app.appendChild(button("Testar nya blåa knappen", "myBlueButton"));
app.appendChild(button("Hej på dig", "myPinkButton"));