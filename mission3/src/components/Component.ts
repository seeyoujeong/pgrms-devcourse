export default abstract class Component<
  Props = {},
  State extends Record<string, any> = {}
> {
  protected state?: State;

  constructor(protected $parent: HTMLElement, protected props?: Props) {}

  protected abstract render(): void;
}
