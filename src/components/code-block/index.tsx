import React, { useState } from 'react'

export interface CodeBlockProps {

}


function CodeBlock({ ...rest }: CodeBlockProps) {

    const [code, setCode] = useState<string>("")

    return (
        <div {...rest}>
            CodeBlock
        </div>
    )
}

export { CodeBlock }