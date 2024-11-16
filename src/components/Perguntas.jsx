import { useState } from "react"
import styled from "styled-components"
import vector from "../img/Vector.png";
import "@fontsource/recursive"

export default function Perguntas({ cards , terminada, setTerminadas}) {
    return (
        <div>
            {cards.map((card, index) => (
                <Pergunta
                    key={index}
                    question={card.question}
                    answer={card.answer}
                    index={index + 1}
                    terminada={terminada}
                    setTerminadas={setTerminadas}
                />
            ))}
        </div>
    );
}

function Pergunta({ question, answer, index , terminada, setTerminadas}) {
    const [displayCaixa, setDisplayCaixa] = useState("flex");
    const [displayPergunta, setDisplayPergunta] = useState("none");
    const [displayResposta, setDisplayResposta] = useState("none");
    const [desabilitaBotao, setDesabilitaBotao] = useState(false);
    const [corPergunta, setCorpergunta] = useState("#333333");

    const clickPergunta = () => {
        if(!desabilitaBotao){
            setDisplayCaixa("none");
            setDisplayPergunta("flex");
            setDesabilitaBotao(true);

        }
    };

    const clickResposta = () => {
        setDisplayPergunta("none");
        setDisplayResposta("flex");
    };

    function clickMarcaResposta(answer, cor) {
        setDisplayCaixa("flex");
        setDisplayResposta("none");
        const novoArray = [...terminada, answer]
        setTerminadas(novoArray);
        setCorpergunta(cor);

    };

    return (
        <PerguntaContainer
            heigth={`${
                displayPergunta === "flex" || displayResposta === "flex"
                    ? "131px"
                    : "65px"
            }`}
            flex={`${displayResposta === "flex" ? "column" : "row"}`}

            textodecorado={`${terminada.includes(answer) ? "line-through": "none"}`}
            corpergunta = {corPergunta}
            corfundopergunta = {`${displayCaixa==="none"? "#FFFFD4": "#FFFFFF" }`}
            marginsapan = {`${displayCaixa==="none"? "18px": "25px" }`}
            fontspan = {`${displayCaixa==="none"? "400": "700" }`}
            fonttexto =  {`${displayCaixa==="none"? "18px": "16px" }`}
        >
            <span>
                {displayCaixa === "flex"
                    ? `Pergunta ${index}`
                    : displayPergunta === "flex"
                    ? question
                    : answer}
            </span>

            <BotaoCaixa onClick={clickPergunta} display={displayCaixa} cor={corPergunta}>
                <ion-icon name={corPergunta==="#333333" ? "play-outline": corPergunta==="#FF3030" ? "close-circle-sharp": corPergunta==="#FF922E" ? "help-circle-sharp" :"chevron-down-circle-sharp" }></ion-icon>
            </BotaoCaixa>

            <BotaoPergunta onClick={clickResposta} display={displayPergunta}>
                <img src={vector}></img>
            </BotaoPergunta>

            <BotoesPerguntas display={displayResposta} color1={"#FF3030"} color2={"#FF922E"} color3={"#2FBE34"}>
                <button onClick={() => clickMarcaResposta(answer, "#FF3030")}>Não lembrei</button>
                <button onClick={() => clickMarcaResposta(answer, "#FF922E")}>Quase não lembrei</button>
                <button onClick={() => clickMarcaResposta(answer, "#2FBE34")}>Zap!</button>
            </BotoesPerguntas>
        </PerguntaContainer>
    );
}

const PerguntaContainer= styled.div`
    width:300px;
    height:${props => props.heigth};
    background-color: ${props => props.corfundopergunta};
    border-radius:5px;
    display: flex;
    flex-direction: ${props => props.flex};
    justify-content: space-between;
    border:none;
    span{
        margin-top:${props => props.marginsapan};
        margin-left:15px;
        text-decoration:${props => props.textodecorado};
        color: ${props => props.corpergunta};
        font-weight:${props => props.fontspan};
        font-size: ${props => props.fonttexto};
        font-family: 'Recursive', sans-serif;
    }
    

    margin-top:25px;
    flex-shrink: 0;

`;

const BotaoCaixa = styled.div`
    display: ${props => props.display};
    background-color:transparent;
    border:none;
    position:relative;
    margin-right:10px;
    bottom:-20px;
    ion-icon{
        width:20px;
        height:23px;
        color:${props => props.cor};
    }
`;

const BotaoPergunta = styled.button`
    display: ${props => props.display};
    margin-right:15px;
    position:relative;
    bottom:-105px;
    right:-5px;
    border:none;
    background-color:transparent;
    img{
        width:30px;
        height:20px;
    }

`;

const BotoesPerguntas = styled.div`
    display:${props => props.display};
    justify-content:space-evenly;
    button{
        margin-bottom:10px;
        width:85.17px;
        height:37.17px;
        border-radius:5px;
        border:none;
        font-family: 'Recursive', sans-serif;
        font-size:12px;
        color:#FFFFFF;
        width:400;
        line-height:14.4px;
    }
    button:nth-child(1){
        background-color: ${props => props.color1};
    }
    button:nth-child(2){
        background-color:${props => props.color2};
    }
    button:nth-child(3){
        background-color:${props => props.color3};
    }
    
`;