//import {bulbasaur,pokemons} from './bases/02-objects';
import { charmander } from './bases/04-injection';
import './style.css'






const app=document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML=`
<h1> VITE  ${charmander.name }${charmander.id }</h1>
`;