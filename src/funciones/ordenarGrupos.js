export const ordenarGruposDeMayorAMenor = (grupos) => {
    return grupos.sort((a, b) => b.miembrosIds.length - a.miembrosIds.length)
}



export const ordenarGruposDeMenorAMayor = (grupos) => {
    return grupos.sort((a, b) => a.miembrosIds.length - b.miembrosIds.length)
}

