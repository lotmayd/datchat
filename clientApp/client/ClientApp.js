/**
 *	Chat Client Main Application 
 *	
 */

var States = {
	"initialize" : {
		enter : function() { 
			$('#state_initialize').addClass('active');
		},

		exit : function() { 
			$('#state_initialize').removeClass('active');
		}
	},

	"default" : {
		enter : function() {
			$('#state_default').addClass('active');
		},
		exit : function() { 
			$('#state_default').removeClass('active');
		}
	},

	"login" : {
		enter : function() { 
			$('#state_login').addClass('active');
		},
		exit : function() { 
			$('#state_login').removeClass('active');
		}
	}
};


var ClientApp = Backbone.Model.extend({
	defaults : function() { 
		return {
			old_state : null,
			state : null,
			debugMode : true
		};
	},

	initialize : function() { 
		console.log('--client model initialize--');
		
	},

	authenticate : function() { 
		// create the user for the application
		this.user = new User;

		// try to authenticate current user
		if(this.user.authenticate()) {
			this.changeState('default')
		} else { 
			this.changeState('login');
		}
	},

	changeState : function(newState) {
		var old = this.get('state'); 
		if(_.has(States, newState) && !_.isEqual(old, newState)) { 
			this.set('old_state', this.get('state'));
			this.set('state', newState);
		}
	}

});


var ClientAppView = Backbone.View.extend({

	el : $('#app_wrapper')[0],

	initialize : function() {
		// initialize model for current app view
		this.model = new ClientApp; 

		// bind all functions from states object to this
		for(var state in States) { 
			_.bind(States[state].enter, this);
			_.bind(States[state].exit, this);
		}

		// listen to state change on model
		this.listenToOnce(this.model, 'change:state', function() {
			// enter the new state
			States[this.model.get('state')].enter();

			// add the real listener
			this.listenTo(this.model, 'change:state', this.changeStateHandler);
		});

		// authenticate the model
		this.model.authenticate();
	},

	changeStateHandler : function() { 
		// exit the previous state
		States[this.model.get('state')].enter();
		

		// enter the new state
		States[this.model.get('state')].exit();
	}
});