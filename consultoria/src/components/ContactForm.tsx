import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
    nombre: string;
    email: string;
    confirmEmail: string;
    telefono: string,
    confirmTelefono: string,
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

        // Validación de confirmación de telefono
        if (formData.telefono.trim().toLowerCase() !== formData.confirmTelefono.trim().toLowerCase()) {
            setError("Los telefonos no coinciden.");
            return;
        }


        try {
            await axios.post("http://localhost:3001/send-email", {
                nombre: formData.nombre,
                email: formData.email,
                mensaje: formData.mensaje,
                confirmarEmail: formData.confirmEmail,
                telefono: formData.telefono,
                confirmTelefono: formData.confirmTelefono
            });
            setEnviado(true);
            setFormData({ nombre: "", email: "", confirmEmail: "",telefono:"", confirmTelefono:"", mensaje: ""});
        } catch (err: unknown) {
            if (axios.isAxiosError(err)) {
                // Si el backend envía un mensaje de error en la respuesta
                const backendMessage = err.response?.data?.message || err.response?.data?.error;
                setError(backendMessage || err.message || "Hubo un error al enviar el mensaje.");
            } else if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Error desconocido al enviar el mensaje.");
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
            <h2>Contacto</h2>

            <input
                type="text"
                name="nombre"
                placeholder="Tu nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
            />
            <br />

            <input
                type="email"
                name="email"
                placeholder="Tu correo"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <br />

            <input
                type="email"
                name="confirmEmail"
                placeholder="Confirma tu correo"
                value={formData.confirmEmail}
                onChange={handleChange}
                required
            />
            <br />


            <input
                type="telefono"
                name="telefono"
                placeholder="Tu teléfono"
                value={formData.telefono}
                onChange={handleChange}
                required
            />
            <br />

            <input
                type="telefono"
                name="confirmTelefono"
                placeholder="Confirma tu teléfono"
                value={formData.confirmTelefono}
                onChange={handleChange}
                required
            />
            <br />

            <textarea
                name="mensaje"
                placeholder="Tu mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
            />
            <br />

            <button type="submit">Enviar</button>

            {enviado && <p style={{ color: "green" }}>Mensaje enviado con éxito ✅</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
    );
}

export default ContactForm;
