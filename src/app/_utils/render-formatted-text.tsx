import { Fragment } from "react";

export const RenderFormattedText = (text: string) => {
    const parts = text.split(/<(.*?)>/);
    return parts.map((part, index) => {
        if (index % 4 === 0) {
            return <Fragment key={index}>{part}</Fragment>;
        } else {
            if (parts[index - 1] === "u") {
                return <u key={index}>{part}</u>;
            } else if (parts[index - 1] === "strong") {
                return <strong key={index}>{part}</strong>;
            } else if (parts[index - 1] === "b") {
                return <b key={index}>{part}</b>
            } else {
                return null; // handle other tags if needed
            }
        }
    });
};