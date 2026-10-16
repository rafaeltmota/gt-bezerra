import Greentings from "../components/Greentings";

const user = window.prompt("Qual o seu nome?") || "Visitante";

function Home () {
    return(
        <Greentings nome={user} />
    );
}

export default Home;