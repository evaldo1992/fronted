app.controller('estudiantes',function($scope,estudiante){
	$scope.servicio=estudiante
	
})

app.controller('registrarEstudiante',function($scope,estudiante,curso){
	$scope.cursos=curso.listado
	$scope.data={ide:'',nombre:'',apellido:'',genero:'',cursos:[]}
	
	$scope.guardar=function(){
		if(estudiante.registrar(angular.copy($scope.data))){
			$scope.data={ide:'',nombre:'',apellido:'',genero:'',cursos:[]}
			alert('Estudiante registrado correctamente')
		}else{
			alert('No se registro al estudiante. La identificacion esta en uso.')
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

app.controller('editarEstudiante',function($scope,estudiante,curso){
	$scope.cursos=curso.listado
	$scope.servicio=estudiante
	$scope.desactivar=true
	$scope.data={ide:'',nombre:'',apellido:'',genero:'',cursos:[]}
	
	$scope.guardar=function(){
		$scope.servicio.editar(angular.copy($scope.data))
		alert('Estudiante editado correctamente')
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
				if(e=$scope.servicio.buscar($scope.data.ide)){
					$scope.data=angular.copy(e)
					$scope.desactivar=false
				}else{
					alert('Estudiante no encontrado')
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

app.controller('eliminarEstudiante',function($scope,estudiante,$state){
	
	$scope.servicio=estudiante
	$scope.desactivar=true
	$scope.data={ide:'',nombre:'',apellido:'',genero:'',cursos:[]}
	
	$scope.eliminar=function(){
		$scope.servicio.eliminar($scope.data.ide)
		$state.go('estudiantes',{codigo:''})
		alert('Estudiante eliminado')
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
					alert('Estudiante no encontrado')
				}
			 }else{
				 alert('Ingrese una identificacion')
			 }
		 }
	}
})