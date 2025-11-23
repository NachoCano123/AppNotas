// components/Layout.tsx
interface Props {
  children: preact.ComponentChildren;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <div className="layout">
        <a class="link_Layout" href="/">Inicio</a>
        <a class="link_Layout" href="/enviar_nota">Mis Notas</a>
        <a class="link_Layout" href="/crear_nota">Crear</a>
      </div>
      {children}
    </>
  );
}