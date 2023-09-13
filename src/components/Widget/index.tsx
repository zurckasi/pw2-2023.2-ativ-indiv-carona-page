import styles from "./widget.module.css";
import avatar from "../../assets/avatar.png";
import star from "../../assets/star.png";
import telephone from "../../assets/telephone.png";
import shield from "../../assets/shield.png";
import { Stack } from "@mui/material";
import { Comment } from "../Comment";

export const Widget = () => {
  return (
    <div className={styles.container}>
      <header>
        <div className={styles["header-icon"]} />
      </header>
      <section className={styles.text}>
        <h3>
          Encontre <b>Fábio</b> no local de partida
        </h3>
        <p>Chega em 3 minutos (800 metros)</p>
      </section>
      <main className={styles["container-avatar"]}>
        <div>
          <div className={styles["avatar-cont"]}>
            <img
              className={styles.avatar}
              width={80}
              src={avatar}
              alt="avatar"
            />
            <div className={styles["avatar-review"]}>
              <div className={styles.cont}>
                <img className={styles.star} src={star} alt="star"></img>
                <h4>5.0</h4>
              </div>
            </div>
          </div>
          <div className={styles.username}>
            <h5>Fábio D.</h5>
          </div>
        </div>
        <div>
          <h2>BCD0D19</h2>
          <p>Honda Civic Roxo</p>
        </div>
      </main>
      <section className={styles["container-input-search"]}>
        <div>
          <Stack direction="row" spacing={2}>
            <input placeholder="Enviar mensagem para Fábio..."></input>
            <div className={styles["container-btns"]}>
              <button>
                <strong>Publicar</strong>
              </button>
              <img width={30} src={telephone} />
              <img width={30} src={shield} />
            </div>
          </Stack>
        </div>
      </section>
      <footer>
        <Comment/>
      </footer>
    </div>
  );
};