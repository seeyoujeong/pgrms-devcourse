interface Attributes {
  [name: string]: string;
}

interface CreateTargetProps {
  (tag: string, attributes: Attributes): HTMLElement;
}

export const createTarget: CreateTargetProps = (tag, attributes = {}) => {
  const $element = document.createElement(tag);
  Object.entries(attributes).forEach(([name, value]) => {
    $element.setAttribute(name, value);
  });
  return $element;
};
