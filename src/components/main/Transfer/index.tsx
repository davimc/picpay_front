import Card from '../../elements/Card'

export default function Transfer() {
    return(
        <>
            <form>
                <label htmlFor="chave"></label>
                <input type="text" id="chave"/>
                <label htmlFor="amount"></label>
                <input type="number" id="amount"/>
            </form>
            <div>
            <Card id={1} email='--INSERIR CHAVE--' name='--INSERIR NOME--'/>
            </div>
        </>
    )
}