export function create({type, textContent, classArray}){

    const temp_tag = document.createElement(type);
    temp_tag.textContent=textContent;
    temp_tag.classList.add(...classArray);

}