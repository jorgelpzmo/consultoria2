import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import axios from "axios";

interface FormData {
    nombre: string;
    email: string;
    mensaje: string;
}

function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        nombre: "",
        email: "",
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

        try {
            await axios.post("http://localhost:3001/send-email", formData);
            setEnviado(true);
            setFormData({ nombre: "", email: "", mensaje: "" });
        } catch (err) {
            setError("Hubo un error al enviar el mensaje.");
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
