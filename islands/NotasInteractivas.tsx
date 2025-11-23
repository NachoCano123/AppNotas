import { Signal } from "@preact/signals";
import { useState } from "preact/hooks";
import { Nota } from "../Types.ts";

type Props = {
  notes: Signal<Nota[]>;
};

export default function NotasInteractivas({ notes }: Props) {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editForm, setEditForm] = useState({
    title: "",
    content: "",
    category: ""
  });

  const BorrarNota = (id: number) => {
    notes.value = notes.value.filter(nota => nota.id !== id);
    console.log("Nota borrada con ID:", id);
  };

  const IniciarEdicion = (nota: Nota) => {
    setEditingId(nota.id);
    setEditForm({
      title: nota.title,
      content: nota.content,
      category: nota.category
    });
  };

  const GuardarEdicion = () => {
    if (editingId === null) return;

    notes.value = notes.value.map(nota => {
      if (nota.id === editingId) {
        return {...nota, ...editForm};
      }
      else {
        return nota;
      }
    });
    
    CancelarEdicion();
    console.log("Nota editada con ID:", editingId);
  };

  const CancelarEdicion = () => {
    setEditingId(null);
    setEditForm({ title: "", content: "", category: "" });
  };

  const ManejarCambio = (field: string, value: string) => {
    setEditForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="notes-container">
      {notes.value.map((nota) => (
        <div key={nota.id} className="note-card">
          {editingId === nota.id ? (
            <div className="edit-form">
              <input
                type="text"
                value={editForm.title}
                onChange={(e) => ManejarCambio("title", (e.target as HTMLInputElement).value)}
                className="edit-input"
                placeholder="Título"
              />
              <input
                type="text"
                value={editForm.category}
                onChange={(e) => ManejarCambio("category", (e.target as HTMLInputElement).value)}
                className="edit-input"
                placeholder="Categoría"
              />
              <textarea
                value={editForm.content}
                onChange={(e) => ManejarCambio("content", (e.target as HTMLTextAreaElement).value)}
                className="edit-textarea"
                placeholder="Contenido"
              />
              <div className="edit-actions">
                <button className="save-button" onClick={GuardarEdicion}>
                  Guardar
                </button>
                <button className="cancel-button" onClick={CancelarEdicion}>
                  Cancelar
                </button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="note-title">{nota.title}</h2>
              <p className="note-category">{nota.category}</p>
              <div className="note-content">{nota.content}</div>
              <div className="note-actions">
                <button 
                  className="edit-button"
                  onClick={() => IniciarEdicion(nota)}
                >
                  Editar
                </button>
                <button
                  className="delete-button"
                  onClick={() => BorrarNota(nota.id)}
                >
                  Borrar
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
} 