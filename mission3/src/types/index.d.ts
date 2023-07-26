export interface TodoState {
  text: string;
  isCompleted: boolean;
}

export interface Element {
  $parent: HTMLElement;
  $target: HTMLElement;
}

export interface ComponentProps<Props> {
  element: Element;
  props: Props;
}
