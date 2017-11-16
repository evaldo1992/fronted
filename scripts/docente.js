app.controller('docentes',function($scope,docente){
	$scope.servicio=docente
	
})

app.controller('registrarDocente',function($scope,docente,curso){
	$scope.cursos=curso.listado
	$scope.data={ide:'',nombre:'',apellido:'',genero:'',cursos:[]}
	
	$scope.guardar=function(){
		if(docente.registrar(angular.copy($scope.data))){
			$scope.data={ide:'',codigo:'',nombre:'',apellido:'',des:''}
			alert('Docente registrado correctamente')
		}else{
			alert('No se registro el docente. La identificacion esta en uso.')
		}
	}
	$scope.seleccionar=function(codigo){
		 var idx = $scope.data.cursos.indexOf(codigo);
		 if (idx > -1) {
		  $scope.data.cursos.splice(idx, 1);
		}
		else {
		  $scope.data.cursos.push(codigo);
		}
	}
})

app.controller('editarDocente',function($scope,docente,curso){
	$scope.cursos=curso.listado
	$scope.servicio=docente
	$scope.desactivar=true
	$scope.data={ide:'',nombre:'',apellido:'',genero:'',cursos:[]}
	
	$scope.guardar=function(){
		$scope.servicio.editar(angular.copy($scope.data))
		alert('Docente editado correctamente')
	}
	$scope.buscar=function(event){
		 event.preventDefault()
		 $scope.desactivar=true
		 $scope.data.nombre=''
		 $scope.data.apellido=''
		 $scope.data.genero=''
		 $scope.data.cursos=[]
		 if(event.which === 13) {
			 if($scope.data.ide!=''){
				if(docente=$scope.servicio.buscar($scope.data.ide)){
					$scope.data=angular.copy(docente)
					$scope.desactivar=false
				}else{
					alert('Docente no encontrado')
				}
			 }else{
				 alert('Ingrese una identificación')
			 }
		 }
	}
	$scope.seleccionar=function(codigo){
		 var idx = $scope.data.cursos.indexOf(codigo);
		 if (idx > -1) {
		  $scope.data.cursos.splice(idx, 1);
		}
		else {
		  $scope.data.cursos.push(codigo);
		}
	}
})

app.controller('eliminarDocente',function($scope,docente,$state){
	
	$scope.servicio=docente
	$scope.desactivar=true
	$scope.data={ide:'',nombre:'',apellido:'',genero:''}
	
	$scope.eliminar=function(){
		$scope.servicio.eliminar($scope.data.ide)
		$state.go('docentes',{codigo:''})
		alert('Docente eliminado')
	}
	$scope.buscar=function(event){
		 event.preventDefault()
		 $scope.desactivar=true
		 $scope.data.nombre=''
		 $scope.data.apellido=''
		 $scope.data.genero=''
		 if(event.which === 13) {
			 if($scope.data.ide!=''){
				if(d=$scope.servicio.buscar($scope.data.ide)){
					$scope.data=angular.copy(d)
					$scope.desactivar=false
				}else{
					alert('Docente no encontrado')
				}
			 }else{
				 alert('Ingrese una identificacion')
			 }
		 }
	}
})