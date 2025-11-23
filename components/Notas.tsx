import { Signal } from "@preact/signals";
import { FunctionComponent } from "preact";
import { Nota } from "../Types.ts";
import Layout from "./Layout.tsx";
import NotasInteractivas from "../islands/NotasInteractivas.tsx";

type Props = {
  notes: Signal<Nota[]>;
};

const Notas: FunctionComponent<Props> = ({ notes }) => {
  return (
    <Layout>
      {!notes || !notes.value || notes.value.length === 0 ? (
        <><h1>No hay notas todavía</h1>
        <img src="images/bloc_triste.jpg" alt="No hay notas" /></>
      ) : (
        <>
        <h1>Notas Creadas</h1>
        <NotasInteractivas notes={notes} />
        </>
      )}
    </Layout>
  );
};

export default Notas;