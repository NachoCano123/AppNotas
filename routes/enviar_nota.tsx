//routes/enviar_nota.tsx
import { Handlers, PageProps } from "$fresh/server.ts";
import { Nota, notas } from "../Types.ts";
import Notas from "../components/Notas.tsx";
import { Signal, signal } from "@preact/signals";

export const handler: Handlers = {
  GET(_req, ctx) {
    const notesSignal = signal<Nota[]>(notas);
    return ctx.render({ notes: notesSignal });
  },
};

export default function Page(props: PageProps<{ notes: Signal<Nota[]> }>) {
  return <Notas notes={props.data.notes} />;
}
