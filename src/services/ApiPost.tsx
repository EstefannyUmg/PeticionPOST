import axios from "axios";

interface Curso {
  nombre: string;
  creditos: number;
  descripcion: string;
}

export const enviarCurso = async (cursoData: Curso) => {
  try {
    const response = await axios.post(
      "https://test-deploy-12.onrender.com/cursos",
      cursoData
    );
    return response.data;
  } catch (error) {
    console.log("Error al enviar el curso", error);
    throw error;
  }
};
