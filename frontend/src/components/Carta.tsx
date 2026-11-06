import styles from "./Carta.module.css"

//props - propiedades

interface Props {
    imagen: string;
    titulo: string;
    descripcion: string;
}

export default function Carta({ imagen, titulo, descripcion}: Props) {
    return (
        <div className={styles.carta}>
            <img
                src={imagen}
                alt="producto"
                className={styles.imagen}
            />
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    )
}