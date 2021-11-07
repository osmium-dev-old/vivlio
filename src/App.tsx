import React, {useState} from 'react';
import './App.css';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeSanitize from 'rehype-sanitize';
import remarkToc from "remark-toc";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css' // `rehype-katex` does not import the CSS for you

function App() {

    const [text, setText] = useState("");

    const onChange = (e: any) => {
        // @ts-ignore
        setText(document.getElementById("input").value);
    }
    return (
        <div className="App flex justify-center">
            <textarea onChange={onChange} name="input" id="input" className="bg-blue-200 w-full h-full"/>
            <div id="output" className="bg-gradient-to-r from-red-400 to-red-500 w-full justify-start text-left">
                <ReactMarkdown
                    children={text}
                    remarkPlugins={[remarkMath, remarkGfm, remarkToc]}
                    rehypePlugins={[rehypeKatex, [rehypeHighlight, {ignoreMissing: true}], rehypeRaw]}
                />
            </div>
        </div>
    );
}

export default App;
