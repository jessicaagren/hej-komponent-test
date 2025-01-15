import "./styles/main.scss";
import { button } from './styles/components/button/button';
import { characterCard } from './styles/components/character-card/character-card';



const app = document.querySelector("#app") as HTMLDivElement;

app.appendChild(button("Testar nya blåa knappen", "myBlueButton"));
app.appendChild(button("Hej på dig", "myPinkButton"));

app.appendChild(characterCard("Blomman", 20, "receptionist", "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg/250px-Leucanthemum_vulgare_%27Filigran%27_Flower_2200px.jpg"));

app.appendChild(characterCard("Bollen", 32, "teacher", "https://www.klubbensport.se/thumbnails/2072324.900.webp?v=638630036140670000"));