/*
    Exemplo de estrutura aplicada no App.jsx:

    <If test={exp}>
        <span>...</span>
        <span>...</span>
        <span>...</span>
    </If>
*/

export default props => {
    const elseChild = props.children.filter(child => {
        return child.type && child.type.name === "Else"
    })[0];

    const ifChildren = props.children.filter(child => {
        return child != elseChild
    });

    /*console.log(elseChild);

    console.log(ifChildren);*/

    return props.test ? ifChildren : elseChild ? elseChild : false;
}

export const Else = props => props.children;
