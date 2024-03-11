import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from "chroma-js";
import "./ColorBox.css";

export const ColorBox = ({ color, background, noLink }) => {
  const { id } = useParams();
  const [copied, setCopied] = useState(false);

  const { name } = color;

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const isDarkColor = chroma(background).luminance() <= 0.08;
  const isLightColor = chroma(background).luminance() <= 0.8;

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
            <span className={isDarkColor && "light-text"}>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        {!noLink && (
          <Link
            to={`/palette/${id}/${color.id}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={`${isLightColor && "dark-text"} see-more`}>
              more
            </span>
          </Link>
        )}
      </div>
    </CopyToClipboard>
  );
};
