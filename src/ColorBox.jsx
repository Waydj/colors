import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import "./ColorBox.css";

export const ColorBox = ({ color }) => {
  const { name, hex: background } = color;

  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <CopyToClipboard text={background} onCopy={onCopy}>
      <div style={{ background }} className="color-box">
        <div
          style={{ background }}
          className={`copy-overlay ${copied && "show"}`}
        ></div>
        <div className={`copy-message ${copied && "show"}`}>
          <h1>copied!</h1>
          <p>{background}</p>
        </div>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">more</span>
      </div>
    </CopyToClipboard>
  );
};
