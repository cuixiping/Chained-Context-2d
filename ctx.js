function Ctx(canvas){
	if(!(this instanceof Ctx)){
		return new Ctx(canvas);
	}
	this._canvas = canvas.getContext ? canvas : document.querySelector(canvas);
	this._ctx = this._canvas.getContext('2d');
	if(!this.drawImage){
		var ctx = this._ctx, proto = Ctx.prototype;
		for(var prop in ctx){
			(function (prop){
				proto[prop] = typeof ctx[prop] == "function" ? 
					function (){
						return this._ctx[prop].apply(this._ctx,arguments) || this;
					} :
					function (v){
						return arguments.length ? (this._ctx[prop]=v,this) : this._ctx[prop];
					};
			})(prop);
		}
	}
}
