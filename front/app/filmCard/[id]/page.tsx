import React, { useEffect, useState } from "react";
import FilmContainer from "./container";

interface FilmPageProps {
    params: { id: string }
}

const FilmP: React.FC<FilmPageProps> = function ({ params }) {
    return <FilmContainer id={params.id} />
}

export default FilmP;