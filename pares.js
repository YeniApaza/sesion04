function mensajeInicial(){

    let timerInterval
    Swal.fire({
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        })

}

function calcularPares(numero, textarea){
    textarea.value = "";

    for (let index = 0; index <= numero; index++) {
        if (index % 2 == 0){
            if (!index == 0) {
                textarea.value += index+"; ";
                console.log(index);
            }
        }
    }

}

function main(){

    var numero = document.getElementById("txtNumero").value;
    const textarea = document.getElementById('txtResultado');

     if (!numero == "") {
        if(numero<=0){
            //alert("!!!..Ingrese un valor númerico mayor a 0..!!!.");
            Swal.fire(
              'Verificar!',
              'Ingrese un valor númerico mayor a 0!',
              'warning'
            );
            return;
        }
         
        if(isNaN(numero)){
            //alert("!!!..Ingrese un valor númerico válido..!!!.");
            Swal.fire(
              'Verificar!',
              'Ingrese un valor númerico válido!',
              'warning'
            );
            return;
        }

        mensajeInicial();
        setTimeout(() => { 
           calcularPares(numero, textarea);
        }, 3000);
        
    }

}


