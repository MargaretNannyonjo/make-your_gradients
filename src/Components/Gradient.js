import React, { useEffect, useState } from "react";
import randomcolor from "randomcolor";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { IoCopyOutline } from "react-icons/io5";
import { CopyToClipboard } from "react-copy-to-clipboard";

export const Gradient = () => {
  const [color1, setColor1] = useState(randomcolor());
  const [color2, setColor2] = useState(randomcolor());

  const [output, setOutput] = useState("");

  const gradient = `linear-gradient(to right, ${color1}, ${color2}`;

  useEffect(() => {
    document.body.style.background = gradient;
    setOutput(gradient);
  }, [color1, color2]);

  const handleColorChange = (e) => {
    const { name, value } = e.target;
    if (name === "color1") {
      setColor1(value);
    } else if (name === "color2") {
      setColor2(value);
    }
  };

  const handleClick = () => {
    setColor1(randomcolor());
    setColor2(randomcolor());
  };

  return (
    <div className="gradient">
      <h1>COLOR WAVE EXPLORER</h1>
      <h2>Create your own Gradient!</h2>

      <div className="color-picker">
        <input
          type="color"
          name="color1"
          value={color1}
          onChange={handleColorChange}
        />
        <input
          type="color"
          name="color2"
          value={color2}
          onChange={handleColorChange}
        />
      </div>

      <button className="getCode" onClick={handleClick}>
        Generate Random Gradient
      </button>

      <div className="output">
        <SyntaxHighlighter language="css" style={docco}>
          {output}
        </SyntaxHighlighter>

        <CopyToClipboard text={`background: ${output}`}>
          <span>
            <IoCopyOutline className="copyIcon" />
          </span>
        </CopyToClipboard>
      </div>
    </div>
  );
};
