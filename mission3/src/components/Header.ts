import Component from "../core/Component";

interface HeaderProps {
  title: string;
}

export default class Header extends Component<HeaderProps> {
  protected render() {
    this.$target.innerHTML = `
      <h1>${this.props.title}</h1>
    `;
  }

  protected addEvent() {}
}
