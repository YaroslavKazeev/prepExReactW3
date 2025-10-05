/* eslint-disable react/display-name */
import { useState } from "react"
import ReactMarkdown from "react-markdown"
import {
    PrettyHeader,
    SimpleLink,
    OnClickText,
    BorderedDiv,
} from "components/pretty-defaults"
import CodeBlock from "./dynamic-code-block"

const Code = ({ children, language }) => {
    const [showCode, setShowCode] = useState(false)
    return (
        <BorderedDiv
            style={{ margin: "20px 0", borderStyle: "dashed", display: "block" }}
        >
            <OnClickText onClick={() => setShowCode(!showCode)}>
                <PrettyHeader style={{ margin: "10px" }}>
                    {showCode ? "Hide Code" : "Show Code"}
                </PrettyHeader>
            </OnClickText>
            {showCode && <CodeBlock {...{ language }}>{children}</CodeBlock>}
        </BorderedDiv>
    )
}

const renderers = {
    code: ({ language, value }) => {
        return <Code language={language}>{value}</Code>
    },
    heading: ({ children, level }) => {
        return (
            <PrettyHeader Component={`h${level}`} style={{ marginTop: "10px" }}>
                {children}
            </PrettyHeader>
        )
    },
    link: props => {
        return <SimpleLink {...props} />
    },
}

const MarkdownRender = ({ children }) => <ReactMarkdown {...{ renderers, children }} />

export default MarkdownRender
