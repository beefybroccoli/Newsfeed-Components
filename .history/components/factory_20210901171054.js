export function create_tag({ type, textContent, classArray = null }) {
  const temp_tag = document.createElement(type);
  temp_tag.textContent = textContent;
  classArray && temp_tag.classList.add(...classArray);
  return temp_tag;
}
