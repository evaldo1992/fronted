app.service('estudiante',function($http,$filter){
	var self=this;
	self.listado=[]
	self.init=function(data){
		self.listado=data
	}
	
	
	self.registrar=function(data){
		if(!self.buscar(data.ide)){
			self.listado.push(data)
			return true
		}
		return false
	}
	self.editar=function(data){
		self.listado.map(function(c){
			if(c.codigo==data.codigo){
				c.nombre=data.nombre
				c.apellido=data.apellido
				c.des=data.des
				c.cursos=data.cursos
			}
			return c
		})
	}
	self.eliminar=function(ide){
		self.listado.forEach(function(c,i){
			if(c.ide==ide){
				self.listado.splice(i,1)
			}
		})
	}
	
	self.buscar=function(ide){
		var d=$filter('filter')(self.listado,{ide:ide})
		if(d.length>0){
			return d[0]
		}
		return null;
	}
	self.init()
})