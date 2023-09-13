import { Stack } from "@mui/material";
import avatar2 from "../../assets/avatar2.png";
import avatar from "../../assets/avatar.png";
import trash from "../../assets/trash.png";
import styles from "./comment.module.css";

export const Comment = () => {
  return (
    <>
      <div className={styles["comment-card"]}>
        <Stack alignItems={"center"} direction="row" spacing={2}>

            <img
              className={styles.avatar}
              width={35}
              src={avatar2}
              alt="avatar"
            />
            <p>
              Fábio estou no local já lhe esperando. estou com camisa azul e calça
              jeans
            </p>

            <img
              className={styles["card-btn"]}
              width={22}
              height={22}
              src={trash}
              alt="deletar"
            />  
        </Stack>
      </div>
      <div className={styles["comment-card"]}>
        <Stack alignItems={"center"} direction="row" spacing={2}>
          <img
                className={styles.avatar}
                width={35}
                src={avatar}
                alt="avatar"
              />
              <p>
                Acabei de lhe ver. Vou estacionar o carro próximo.
              </p>

              <img
                className={styles["card-btn"]}
                width={22}
                height={22}
                src={trash}
                alt="deletar"
              />
          </Stack>
        </div>
    </>
  );
};