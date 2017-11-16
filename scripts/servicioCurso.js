app.service('curso',function($http,$filter){
	var self=this;
	self.listado=[]
	self.init=function(data){
		self.listado=data
	}
	self.persistir=function(){
		localStorage.setItem('nativeapp_cursos',JSON.stringify(self.listado))
	}
	
	self.registrar=function(data){
		if(!self.buscar(data.codigo)){
			self.listado.push(data)
			return true
		}
		return false
	}
	self.editar=function(data){
		self.listado.map(function(c){
			if(c.codigo==data.codigo){
				c.nombre=data.nombre
				c.des=data.des
			}
			return c
		})
	}
	self.eliminar=function(codigo){
		self.listado.forEach(function(c,i){
			if(c.codigo==codigo){
				self.listado.splice(i,1)
			}
		})
	}
	
	self.buscar=function(codigo){
		var curso=$filter('filter')(self.listado,{codigo:codigo})
		if(curso.length>0){
			return curso[0]
		}
		return null;
	}
	
})