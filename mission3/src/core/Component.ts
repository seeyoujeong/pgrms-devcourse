interface Element {
  $parent: HTMLElement;
  $target: HTMLElement;
}

interface ComponentProps<Props> {
  element: Element;
  props: Props;
}

export default abstract class Component<Props> {
  protected $target: HTMLElement;
  protected props: Props;

  constructor({ element, props }: ComponentProps<Props>) {
    this.$target = element.$target;
    element.$parent.append(this.$target);
    this.props = props;

    this.render();
    this.addEvent();
  }

  protected abstract render(): void;

  protected abstract addEvent(): void;
}
