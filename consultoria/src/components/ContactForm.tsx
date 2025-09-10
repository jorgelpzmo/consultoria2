import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
    nombre: string;
    email: string;
    confirmEmail: string;
    telefono: string;
    confirmTelefono: string;
    mensaje: string;
}

function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        email: "",
        confirmEmail: "",
        telefono: "",
        confirmTelefono: "",
        mensaje: "",
    });

    const [enviado, setEnviado] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setEnviado(false);

        // Validación de confirmación de email
        if (formData.email.trim().toLowerCase() !== formData.confirmEmail.trim().toLowerCase()) {
            setError("Los correos electrónicos no coinciden.");
            return;
        }

        // Validación de confirmación de teléfono
        if (formData.telefono.trim() !== formData.confirmTelefono.trim()) {
            setError("Los teléfonos no coinciden.");
            return;
        }

        try {
            await axios.post("http://localhost:3001/send-email", {
                nombre: formData.nombre,
                email: formData.email,
                mensaje: formData.mensaje,
                confirmarEmail: formData.confirmEmail,
                telefono: formData.telefono,
                confirmTelefono: formData.confirmTelefono,
            });
            setEnviado(true);
            setFormData({ nombre: "", email: "", confirmEmail: "", telefono: "", confirmTelefono: "", mensaje: "" });
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
            if (axios.isAxiosError(err)) {
                const backendMessage = err.response?.data?.message || err.response?.data?.error;
                setError(backendMessage || err.message || "Hubo un error al enviar el mensaje.");
            } else {
                setError(err?.message || "Error desconocido al enviar el mensaje.");
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                maxWidth: "300px", // Reduce el ancho máximo del formulario
                margin: "auto", // Centra horizontalmente
                padding: "10px", // Reduce el padding interno
                borderRadius: "8px", // Bordes redondeados
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Centra el contenido horizontalmente
                marginTop: "25px",
            }}
        >
            {/* <h2 style={{ textAlign: "center", color: "#00594f", margin:'0px'}}>Contacto</h2> */}

            <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                style={{
                    width: "100%",
                    padding: "8px", // Reduce el padding interno
                    marginBottom: "10px", // Reduce el margen inferior
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px", // Reduce el tamaño de la fuente
                }}
            />

            <input
                type="email"
                name="email"
                placeholder="Tu correo"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px",
                }}
            />

            <input
                type="email"
                name="confirmEmail"
                placeholder="Confirma tu correo"
                value={formData.confirmEmail}
                onChange={handleChange}
                required
                style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px",
                }}
            />

            <input
                type="text"
                name="telefono"
                placeholder="Tu teléfono"
                value={formData.telefono}
                onChange={handleChange}
                required
                style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px",
                }}
            />

            <input
                type="text"
                name="confirmTelefono"
                placeholder="Confirma tu teléfono"
                value={formData.confirmTelefono}
                onChange={handleChange}
                required
                style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px",
                }}
            />

            <textarea
                name="mensaje"
                placeholder="Escribe la consulta que quieres realizar"
                value={formData.mensaje}
                onChange={handleChange}
                required
                style={{
                    width: "100%",
                    padding: "8px",
                    marginBottom: "10px",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontFamily: "Arial, sans-serif",
                    resize: "none",
                    height: "60px", // Ajusta la altura del textarea
                    
                }}
            />

            <button
                type="submit"
                style={{
                    width: "100%",
                    padding: "10px",
                    backgroundColor: "#00594f",
                    color: "white",
                    border: "none",
                    borderRadius: "4px",
                    fontSize: "14px",
                    cursor: "pointer",
                    marginTop: "20px",
                    transition: "background 0.2s",
                }}
                onMouseOver={e => (e.currentTarget.style.backgroundColor = "#00413a")}
                onMouseOut={e => (e.currentTarget.style.backgroundColor = "#00594f")}
            >
                Enviar
            </button>

            {enviado && <p style={{ color: "green", textAlign: "center", marginTop: "10px" }}>Mensaje enviado con éxito ✅</p>}
            {error && <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>{error}</p>}
        </form>
    );
}

export default ContactForm;
