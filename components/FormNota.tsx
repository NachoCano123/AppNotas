import { FunctionComponent } from "preact";

export const FormNota: FunctionComponent = () => {
  return(
    <div>
      <h1 class="form_title">Nueva nota</h1>
      <form action="/obtenerFormulario" method="POST">
      <div>

        <div>
          <label for="title">Titulo</label>
        </div>
        <div>
          <input type="text" id="title" name="title" required />
        </div>

        <div>
          <label for="content">Contenido</label>
        </div>
        <div>
          <textarea id="content" name="content" required />
        </div>

        <div>
          <label for="category">Categoria</label>
        </div>
        <div>
          <input type="text" id="category" name="category" required />
        </div>

      </div>
      <button class="create-button" type="submit"> Crear </button>

      <a class="link_cancelar" href="/"> Cancelar </a>
      </form>
    </div>
  );
};