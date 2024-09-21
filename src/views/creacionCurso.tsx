import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { enviarCurso } from "../services/ApiPost";

interface FormValues {
  nombre: string;
  creditos: number;
  descripcion: string;
}

const CreacionCurso = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    setSuccess(null);
    setError(null);

    try {
      const response = await enviarCurso({
        nombre: data.nombre,
        creditos: data.creditos,
        descripcion: data.descripcion,
      });
      setSuccess("El curso se ha enviado correctamente.");
      console.log(response);
      reset();
    } catch (error) {
      console.error("Error al enviar el curso", error);
      setError("Ocurrió un error al enviar el curso.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ fontFamily: "Product Sans", fontSize: "25px" }}
    >
      <div
        className="card w-100 shadow-lg rounded-4"
        style={{ maxWidth: "800px", backgroundColor: "#ffffff" }}
      >
        <div className="card-body">
          <h2 className="text-center mb-4 text-primary">Formulario de Creación de Cursos</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">Nombre del Curso:</label>
              <input
                type="text"
                className={`form-control ${errors.nombre ? "is-invalid" : ""}`}
                {...register("nombre", { required: "El nombre es obligatorio" })}
              />
              {errors.nombre && (
                <div className="invalid-feedback">{errors.nombre.message}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Créditos:</label>
              <input
                type="number"
                className={`form-control ${errors.creditos ? "is-invalid" : ""}`}
                {...register("creditos", {
                  required: "Los créditos son obligatorios",
                })}
              />
              {errors.creditos && (
                <div className="invalid-feedback">
                  {errors.creditos.message}
                </div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Descripción:</label>
              <textarea
                className={`form-control ${
                  errors.descripcion ? "is-invalid" : ""
                }`}
                {...register("descripcion", {
                  required: "La descripción es obligatoria",
                })}
              />
              {errors.descripcion && (
                <div className="invalid-feedback">
                  {errors.descripcion.message}
                </div>
              )}
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? "Enviando..." : "Enviar Curso"}
              </button>
            </div>
          </form>

          {success && (
            <div className="alert alert-success mt-3 text-center">
              {success}
            </div>
          )}
          {error && (
            <div className="alert alert-danger mt-3 text-center">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CreacionCurso;
