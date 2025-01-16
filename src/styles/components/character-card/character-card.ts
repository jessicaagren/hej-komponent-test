import "./character-card.scss";

export const characterCard = (name: string, age: number, profession: string, imageUrl: string) => {
    const c = document.createElement("article") as HTMLElement;
    c.classList.add("character-card");

    const img = document.createElement("img");
    img.src = imageUrl;
    c.appendChild(img);

    const n = document.createElement("h2") as HTMLElement;
    n.innerHTML = `Name: ${name}`;
    c.appendChild(n);

    const pAge = document.createElement("p") as HTMLParagraphElement;
    pAge.innerHTML = `Age: ${age}`;
    c.appendChild(pAge);

    const pProf = document.createElement("p") as HTMLParagraphElement;
    pProf.innerHTML = `Profession: ${profession}`;
    c.appendChild(pProf);

    return c;
};