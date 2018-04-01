var linea_seleccionada;

function registrar() {

// Recupero los datos del formulario
	var empresa = document.getElementById("empresa").value;
	var nif = document.getElementById("nif").value;
	var direccion = document.getElementById("direccion").value;
	var localidad = document.getElementById("localidad").value;
	var telefono = document.getElementById("telefono").value;
	var email = document.getElementById("email").value;

// Realizo algunas validaciones sobre los datos
	if( empresa === '' && nif === '' && direccion === '' && localidad === '' && telefono === '' && email === '' ) {
		alert("Debe informar algún campo");
	} else {
		if (confirm("¿Esta seguro de que quiere registrar el proveedor?")) {
// Inserto los datos
			addLineToHTMLTable(empresa, nif, direccion, localidad, telefono, email);
			limpiarCamposFormulario();
		}
	}
	
}

function addLineToHTMLTable(empresa, nif, direccion, localidad, telefono, email) {
	
	var tableBody = document.querySelector('#tableContactBody');

// Inserto los datos del formulario en la tabla
	var newRow = tableBody.insertRow();

    var empresaCell  = newRow.insertCell();
    empresaCell.innerHTML = empresa;

	var nifcell = newRow.insertCell();
	nifcell.innerHTML = nif;
	
    var direccionCell  = newRow.insertCell();
    direccionCell.innerHTML = direccion;

	var localidadCell  = newRow.insertCell();
    localidadCell.innerHTML = localidad;

    var telefonoCell  = newRow.insertCell();
    telefonoCell.innerHTML = telefono;
	
	var emailCell  = newRow.insertCell();
    emailCell.innerHTML = email;

// Inserto los botones de Editar y Eliminar
	var editarCell = newRow.insertCell();
	editarCell.innerHTML = '<button type="button" onClick="editar(this)">Editar</button>';
	
	var eliminarCell = newRow.insertCell();
	eliminarCell.innerHTML = '<button type="button" onClick="eliminar(this)">Eliminar</button>';

}

function limpiarCamposFormulario() {

// Vacio los campos del formulario al insertar el proveedor
	document.getElementById("empresa").value = '';
	document.getElementById("nif").value = '';
	document.getElementById("direccion").value = '';
	document.getElementById("localidad").value = '';
	document.getElementById("telefono").value = '';
	document.getElementById("email").value = '';
}

function eliminar(rowButton) {

// Confirmo que realmente quiere borrar los datos
	if (confirm("¿Esta seguro de que quiere eliminar el proveedor?")) {
// Obtengo la linea a borrar
		var pos = rowButton.parentNode.parentNode.rowIndex;
// Borro la linea
		document.getElementById("miTabla").deleteRow(pos);
		
// Limpio los datos del formulario
		limpiarCamposFormulario();
		
	}

}

function editar(rowButton){

// Recupero los datos de la linea a editar
	var pos = rowButton.parentNode.parentNode.rowIndex;
	
// Recupero los valores de la fila seleccionada
	var nodosTd = document.getElementsByTagName('td');
	
	linea_seleccionada = pos;
	
	pos = (pos-1)*8;
	
	var empresa = nodosTd[pos].textContent;
	pos++;
	
	var nif = nodosTd[pos].textContent;
	pos++;
	
	var direccion = nodosTd[pos].textContent;
	pos++;
	
	var localidad = nodosTd[pos].textContent;
	pos++;
	
	var telefono = nodosTd[pos].textContent;
	pos++;
	
	var email = nodosTd[pos].textContent;

// Relleno los campos en el formulario
	rellenarFormulario(empresa, nif, direccion, localidad, telefono, email);
	
// modifico la apariencia de los botones
	document.getElementById("registrar").disabled = true;
	document.getElementById("guardarCambios").disabled = false;
	document.getElementById("cancelar").disabled = false;
}

function rellenarFormulario(empresa, nif, direccion, localidad, telefono, email ) {

// Relleno los datos del formulario
	document.getElementById("empresa").value = empresa;
	document.getElementById("nif").value = nif;
	document.getElementById("direccion").value = direccion;
	document.getElementById("localidad").value = localidad;
	document.getElementById("telefono").value = telefono;
	document.getElementById("email").value = email;
	
}

function guardarCambios() {
	
// Confirmo que realmente quiere borrar los datos
	if (confirm("¿Esta seguro de que quiere guardar los cambios del proveedor?")) {

// Recupero los datos del formulario
		var empresa = document.getElementById("empresa").value;
		var nif = document.getElementById("nif").value;
		var direccion = document.getElementById("direccion").value;
		var localidad = document.getElementById("localidad").value;
		var telefono = document.getElementById("telefono").value;
		var email = document.getElementById("email").value;

// Modifico los datos de la tabla
		var nodosTd = document.getElementsByTagName('td');
		
		var pos = (linea_seleccionada-1)*8;
		
		nodosTd[pos].textContent = empresa;
		pos++;
		
		nodosTd[pos].textContent = nif;
		pos++;
		
		nodosTd[pos].textContent = direccion;
		pos++;
		
		nodosTd[pos].textContent = localidad;
		pos++;
		
		nodosTd[pos].textContent = telefono;
		pos++;
		
		nodosTd[pos].textContent = email;
	
// Modifico la apariencia de los botones
		document.getElementById("registrar").disabled = false;
		document.getElementById("guardarCambios").disabled = true;
		document.getElementById("cancelar").disabled = true;

// Limpio los datos del formulario
		limpiarCamposFormulario();
	}
	
}

function cancelar() {
	
// Modifico la apariencia de los botones
	document.getElementById("registrar").disabled = false;
	document.getElementById("guardarCambios").disabled = true;
	document.getElementById("cancelar").disabled = true;
	
// Limpio los datos del formulario
	limpiarCamposFormulario();

}