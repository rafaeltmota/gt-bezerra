import './Greetings.css'

function Greentings({nome, mensagem = "Seja bem-vindo(a)"}) {
    return(
        <div className="greeting">
            <span className="greeting_eyebrow">React - Primeiros Passos</span>
            <h1>{nome}, {mensagem}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rerum numquam beatae sit enim alias nobis dolorem neque, fugit repellat aliquid labore temporibus in debitis nam incidunt repellendus molestias porro.</p>
        </div>
    );
}
export default Greentings;
        