import React from 'react'

type Props = {
    text: string
}

const TextContainer: React.FC<Props> = ({ text }) => {

    return (
        <>
            {text.split('\n').map((t, index) => (
                <React.Fragment key={index}>
                    {t}
                    <br />
                </React.Fragment>
            ))}
        </>
    )
}

export default TextContainer
