export default function Contador({cards, terminada}){
    return (
        <div>{`${terminada.length}/${cards.length}` } CONCLUÍDOS</div>
    );
}
