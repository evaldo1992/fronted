/*------------------------------------------------------ Curso -------------------------------*/
app.controller('registrarCurso',function($scope,curso){
	$scope.data={codigo:'',nombre:'',des:''}
	$scope.guardar=function(){
		if(curso.registrar(angular.copy($scope.data))){
			$scope.data={codigo:'',nombre:'',des:''}
			alert('Curso registrado correctamente')
		}else{
			alert('No se registro el curso. El codigo esta en uso.')
		}
	}
})
app.controller('editarCurso',function($scope,curso){
	
	$scope.servicio=curso
	$scope.desactivar=true
	$scope.data={codigo:'',nombre:'',des:''}
	
	$scope.guardar=function(){
		$scope.servicio.editar(angular.copy($scope.data))
		alert('Curso editado correctamente')
	}
	$scope.buscar=function(event){
		 event.preventDefault()
		 $scope.desactivar=true
		 $scope.data.nombre=''
		 $scope.data.des=''
		 if(event.which === 13) {
			 if($scope.data.codigo!=''){
				if(curso=$scope.servicio.buscar($scope.data.codigo)){
					$scope.data=angular.copy(curso)
					$scope.desactivar=false
				}else{
					alert('Curso no encontrado')
				}
			 }else{
				 alert('Ingrese un codigo')
			 }
		 }
	}
})

app.controller('eliminarCurso',function($scope,curso,$state){
	
	$scope.servicio=curso
	$scope.desactivar=true
	$scope.data={codigo:'',nombre:'',des:''}
	
	$scope.eliminar=function(){
		$scope.servicio.eliminar($scope.data.codigo)
		$state.go('cursos',{codigo:''})
		alert('Curso eliminado')
	}
	$scope.buscar=function(event){
		 event.preventDefault()
		 $scope.desactivar=true
		 $scope.data.nombre=''
		 $scope.data.des=''
		 if(event.which === 13) {
			 if($scope.data.codigo!=''){
				if(curso=$scope.servicio.buscar($scope.data.codigo)){
					$scope.data=angular.copy(curso)
					$scope.desactivar=false
				}else{
					alert('Curso no encontrado')
				}
			 }else{
				 alert('Ingrese un codigo')
			 }
		 }
	}
})
app.controller('cursos',function($scope,curso){
	$scope.servicio=curso
	
})