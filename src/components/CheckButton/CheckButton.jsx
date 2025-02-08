import React from "react";
import { Button } from "primereact/button";
import styles from "./CheckButton.module.scss";

export function CheckButton() {
  return (
    <Button className={styles.button}>
      <span>Подтвердить</span>
      <span>
        <i className="pi pi-check"></i>
      </span>
    </Button>
  );
}
