export function create_tag({ type, textContent, classArray }) {
  const temp_tag = document.createElement(type);
  temp_tag.textContent = textContent;
  temp_tag && temp_tag.classList.add(...classArray);
  return temp_tag;
}
