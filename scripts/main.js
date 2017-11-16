var app=angular.module('app',['ui.router'])

app.config(function($stateProvider,$httpProvider, $urlRouterProvider){
	
	$urlRouterProvider.otherwise("/")
	
	$stateProvider
		.state({
			name:'master',
			abstract:true,
			templateUrl:'plantillas/master.html',
			controller:'master',
			resolve:{
						data:function($http){
							return $http.get('data.json')
						}
					}
		})
		.state({
			parent:'master',
			name:'inicio',
			url:'/',
			views:{
				main:{
					templateUrl:'plantillas/inicio.html',
					controller:'inicio'
					
				}
			}
			
		})
		/*----------------------------------------------Cursos-----------------------------*/
		.state({
			parent:'master',
			name:'registrarCurso',
			url:'/registrar-curso',
			views:{
				main:{
					templateUrl:'plantillas/curso/registrar.html',
					controller:'registrarCurso'
					
				}
			}
		})
		.state({
			parent:'master',
			name:'editarCurso',
			url:'/editar-curso/:codigo',
			params:{codigo:''},
			views:{
				main:{
					templateUrl:'plantillas/curso/editar.html',
					controller:'editarCurso'
				}
			}
		})
		.state({
			parent:'master',
			name:'eliminarCurso',
			url:'/eliminar-curso/:codigo',
			params:{codigo:''},
			views:{
				main:{
					templateUrl:'plantillas/curso/eliminar.html',
					controller:'eliminarCurso'
				}
			}
		})
		.state({
			parent:'master',
			name:'cursos',
			url:'/cursos',
			views:{
				main:{
					templateUrl:'plantillas/curso/listado.html',
					controller:'cursos'
				}
			}
			
		})
		/*----------------------------------------------Docente-----------------------------*/
		.state({
			parent:'master',
			name:'registrarDocente',
			url:'/registrar-docente',
			views:{
				main:{
					templateUrl:'plantillas/docente/registrar.html',
					controller:'registrarDocente'
					
				}
			}
		})
		.state({
			parent:'master',
			name:'editarDocente',
			url:'/editar-docente/:codigo',
			params:{codigo:''},
			views:{
				main:{
					templateUrl:'plantillas/docente/editar.html',
					controller:'editarDocente'
				}
			}
		})
		.state({
			parent:'master',
			name:'eliminarDocente',
			url:'/eliminar-docente/:codigo',
			params:{codigo:''},
			views:{
				main:{
					templateUrl:'plantillas/docente/eliminar.html',
					controller:'eliminarDocente'
				}
			}
		})
		.state({
			parent:'master',
			name:'docentes',
			url:'/docentes',
			views:{
				main:{
					templateUrl:'plantillas/docente/listado.html',
					controller:'docentes'
				}
			}
			
		})
		
		/*----------------------------------------------Estudiante-----------------------------*/
		.state({
			parent:'master',
			name:'registrarEstudiante',
			url:'/registrar-estudiante',
			views:{
				main:{
					templateUrl:'plantillas/estudiante/registrar.html',
					controller:'registrarEstudiante'
					
				}
			}
		})
		.state({
			parent:'master',
			name:'editarEstudiante',
			url:'/editar-estudiante/:codigo',
			params:{codigo:''},
			views:{
				main:{
					templateUrl:'plantillas/estudiante/editar.html',
					controller:'editarEstudiante'
				}
			}
		})
		.state({
			parent:'master',
			name:'eliminarEstudiante',
			url:'/eliminar-estudiante/:codigo',
			params:{codigo:''},
			views:{
				main:{
					templateUrl:'plantillas/estudiante/eliminar.html',
					controller:'eliminarEstudiante'
				}
			}
		})
		.state({
			parent:'master',
			name:'estudiantes',
			url:'/estudiantes',
			views:{
				main:{
					templateUrl:'plantillas/estudiante/listado.html',
					controller:'estudiantes'
				}
			}
			
		})
})

app.filter('cursos',function(curso){
	return function(input) {
		var salida=[]
		if(Array.isArray(input)){
			input.forEach(function(c){
				if(cu=curso.buscar(c)){
					salida.push(cu.nombre)
				}
			})
		}
		return salida.join('-')
	}
})


app.controller('master',function(data,curso,docente,estudiante){
	curso.init(data.data.cursos)
	docente.init(data.data.docentes)
	estudiante.init(data.data.estudiantes)
})
app.controller('inicio',function($scope,curso,docente,estudiante){
	$scope.cursos=curso.listado
	$scope.docentes=docente.listado
	$scope.estudiantes=estudiante.listado
})
