import ComponFilho from "./ComponFilho"

function ComponPai()
{
    const namePai = "Clécio"

    return (
    <div>        
        <p>Componente Pai {namePai}</p>
        <ComponFilho />
    </div>
    )
}

export default ComponPai