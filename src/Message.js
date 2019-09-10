import React from 'react';
import PropTypes from "prop-types";
import {Container,} from "@yosmy/simple-ui";
import {Error} from "@yosmy/compound-ui";

class InternalErrorMessage extends React.Component {
    render() {
        return <Message
            texts={[
                "Se ha producido un error interno",
                "Nuestro equipo trabajará para solucionarlo",
                "Por favor intenta más tarde"
            ]}
        />
    }
}

class ConnectionErrorMessage extends React.Component {
    render() {
        return <Message
            texts={[
                "Se ha producido un problema con la red",
                "Por favor comprueba tu conexión a internet"
            ]}
        />
    }
}

class Message extends React.Component {
    static propTypes = {
        texts: PropTypes.array.isRequired,
    };

    render() {
        const {texts, margin} = this.props;

        return <Container
            flow="column"
            align={{
                justifyContent: "flex-start",
                alignItems: "center"
            }}
            margin={margin}
        >
            {texts.map((message, i) => {
                return <Error
                    key={i}
                    margin={{
                        top: i !== 0 ? 1 : undefined
                    }}
                >
                    {message}
                </Error>
            })}
        </Container>
    };
}

export {
    InternalErrorMessage,
    ConnectionErrorMessage
}