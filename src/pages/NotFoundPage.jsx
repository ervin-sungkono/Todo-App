import React, { useEffect } from "react";

const NotFoundPage = ({setNav}) => {
    useEffect(() => setNav(false))
    return(
        <section id="error-page">
            404
            {/* Diisi Gambar 404 disini */}
        </section>
    )
}

export default NotFoundPage;