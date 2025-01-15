import "./button.scss";

export const button = (buttonText: string, classText: `myPinkButton` | `myBlueButton`) => {
    const b = document.createElement("button");
    b.classList.add(classText);
    b.textContent = buttonText;
    return b;
};
