

export function InputText(props) {
    return (
        <div className="input-text__container">
            <input className="input-text__field" type={props.type} placeholder={props.placeholder} />
        </div>
    );
}