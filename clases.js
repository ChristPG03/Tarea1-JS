class RegistroBase {
    constructor(nombreVisitante, fecha){
        this.nombreVisitante = nombreVisitante
        this.fecha = fecha
    }
}

class Visita extends RegistroBase{
    constructor(nombreVisitante, fecha, hora, motivo){
        super(nombreVisitante, fecha)
        this.hora = hora
        this.motivo = motivo
    }
}

class Menu {
    constructor(){
        this.visitas = []
    }

    menuPrincipal(){
        let bucle = true;

        while(bucle){
            
            const opcion = prompt("1. Registrar visita\n2. Cancelar visita\n3. Lista de visitas\n4. Salir");
            
            switch (opcion) {
                case "1":
                    this.crearVisita();
                    break;
                case "2":
                    this.cancelarVisita();
                    break;
                case "3":
                    this.mostrarLista();
                    break;
                case "4":
                    alert("Bye");
                    bucle = false;
                    break;
                default:
                    console.log("Opción inválida. Inténtalo de nuevo.");
            }
        }
    }

    crearVisita(){
        let nombre = prompt("Introduzca el nombre del visitante");
        let fecha = prompt("Introduza la fecha de la visita como YYYY-MM-DD");
        let hora = prompt("Introduzca la hora en HH:MM");
        let motivo = prompt("Introduzca el motivo de la visita");
    
        this.visitas.push(new Visita(nombre.toLowerCase(), fecha, hora, motivo));
    }

    cancelarVisita(){
        let nombre = prompt("Introduzca el nombre del visitante a cancelar");
        let found = false;

        for(let i = 0; i < this.visitas.length && !found; i++){
            if(this.visitas[i].nombreVisitante === nombre.toLowerCase()){
                this.visitas.splice(i, 1);
                alert("La visita ha sido cancelada");
                found = true;
            }
            else{
                alert("No existe una visita registrada con ese nombre");
            }
        }
    }

    mostrarLista(){
        let registro = ""
        
        this.visitas.forEach((visita) => {
            registro += visita.nombreVisitante + " " + visita.fecha + " " + visita.hora + "\n";
        })

        alert("Las visitas pendientes son:\n" + registro);
        console.log("Las visitas pendientes son:\n" + registro)
    }

}

export default Menu;