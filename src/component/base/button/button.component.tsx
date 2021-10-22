export interface IButton {
    type?: 'submit' | 'reset' | 'button' | undefined;
    className?: string;
    title?: string;
    onClick?: () => void;
}

function ButtonComponent(props: IButton) {
    const { title, ...rest } = props;
    return (
        <button className={props.className ? props.className : 'btn btn-primary'} {...rest}>{props.title}</button>
    )
}

export default ButtonComponent
