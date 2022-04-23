import React from "react";

export default (props) => {
    return (
        <div>
            {props.children.map((child, i) => {
                return React.cloneElement(child, { ...props, key: i });
            })}
            {/*
                    <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
                    <FamiliaMembro nome="Ana" {...props}/>
                    <FamiliaMembro nome="Gustavo" sobrenome="Silva"/>
                */}
        </div>
    );
};
