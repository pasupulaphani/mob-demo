angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout) {
	// Form data for the login modal
	$scope.loginData = {};
	$scope.isExpanded = false;
	$scope.hasHeaderFabLeft = false;
	$scope.hasHeaderFabRight = false;

	var navIcons = document.getElementsByClassName('ion-navicon');
	for (var i = 0; i < navIcons.length; i++) {
		navIcons.addEventListener('click', function() {
			this.classList.toggle('active');
		});
	}

	////////////////////////////////////////
	// Layout Methods
	////////////////////////////////////////

	$scope.hideNavBar = function() {
		document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
	};

	$scope.showNavBar = function() {
		document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
	};

	$scope.noHeader = function() {
		var content = document.getElementsByTagName('ion-content');
		for (var i = 0; i < content.length; i++) {
			if (content[i].classList.contains('has-header')) {
				content[i].classList.toggle('has-header');
			}
		}
	};

	$scope.setExpanded = function(bool) {
		$scope.isExpanded = bool;
	};

	$scope.setHeaderFab = function(location) {
		var hasHeaderFabLeft = false;
		var hasHeaderFabRight = false;

		switch (location) {
			case 'left':
				hasHeaderFabLeft = true;
				break;
			case 'right':
				hasHeaderFabRight = true;
				break;
		}

		$scope.hasHeaderFabLeft = hasHeaderFabLeft;
		$scope.hasHeaderFabRight = hasHeaderFabRight;
	};

	$scope.hasHeader = function() {
		var content = document.getElementsByTagName('ion-content');
		for (var i = 0; i < content.length; i++) {
			if (!content[i].classList.contains('has-header')) {
				content[i].classList.toggle('has-header');
			}
		}

	};

	$scope.hideHeader = function() {
		$scope.hideNavBar();
		$scope.noHeader();
	};

	$scope.showHeader = function() {
		$scope.showNavBar();
		$scope.hasHeader();
	};

	$scope.clearFabs = function() {
		var fabs = document.getElementsByClassName('button-fab');
		if (fabs.length && fabs.length > 1) {
			fabs[0].remove();
		}
	};
})

.controller('LoginCtrl', function($scope, $timeout, $stateParams) {
	$scope.$parent.clearFabs();
	$timeout(function() {
		$scope.$parent.hideHeader();
	}, 0);
	ionic.material.ink.displayEffect();
})

.controller('FriendsCtrl', function($scope, $stateParams, $timeout) {
	// Set Header
	$scope.$parent.showHeader();
	$scope.$parent.clearFabs();
	$scope.$parent.setHeaderFab('left');

	// Delay expansion
	$timeout(function() {
		$scope.isExpanded = true;
		$scope.$parent.setExpanded(true);
	}, 300);

	// Set Motion
	ionic.material.motion.fadeSlideInRight();

	// Set Ink
	ionic.material.ink.displayEffect();

	$scope.links = [{
		'name': 'Foxxcon',
	}, {
		'name': 'Safaire',
	}];
	console.log($scope.links)
})

.controller('ProfileCtrl', function($scope, $stateParams, $timeout, $http) {
	// Set Header
	$scope.$parent.showHeader();
	$scope.$parent.clearFabs();
	$scope.isExpanded = false;
	$scope.$parent.setExpanded(false);
	$scope.$parent.setHeaderFab(false);

	// Set Motion
	$timeout(function() {
		ionic.material.motion.slideUp({
			selector: '.slide-up'
		});
	}, 300);

	$timeout(function() {
		ionic.material.motion.fadeSlideInRight({
			startVelocity: 3000
		});
	}, 700);

	// Set Ink
	ionic.material.ink.displayEffect();

	$http.get('http://yahoo-fin.herokuapp.com/now/AAPL').then(function(resp) {
		// console.log('Success', resp);
		// For JSON responses, resp.data contains the result
		$scope.companyStock = resp['data'];
		console.log($scope.companyStock);
	}, function(err) {
		console.error('ERR', err);
		// err.status will contain the status code
	})

	$scope.company = {
		'name': 'Apple'
	}
})

.controller('ActivityCtrl', function($scope, $stateParams, $timeout) {
	$scope.$parent.showHeader();
	$scope.$parent.clearFabs();
	$scope.isExpanded = true;
	$scope.$parent.setExpanded(true);
	$scope.$parent.setHeaderFab('right');

	$timeout(function() {
		ionic.material.motion.fadeSlideIn({
			selector: '.animate-fade-slide-in .item'
		});
	}, 200);

	// Activate ink for controller
	ionic.material.ink.displayEffect();
	$scope.tweets = [{
		'tweet': 'The first smarthome gadgets that work with <strong>Apple\'s</strong> HomeKit will arrive next month: http://on.wsj.com/1IE0mTt  ',
		'retweet': '0',
		'fav': '1',
		'time': '11 June'
	}, {
		'tweet': 'Test',
		'retweet': '0',
		'fav': '1',
		'time': '11 June'
	}, {
		'tweet': 'Test',
		'retweet': '0',
		'fav': '1',
		'time': '11 June'
	}, ];
})

.controller('GalleryCtrl', function($scope, $stateParams, $timeout) {
	$scope.$parent.showHeader();
	$scope.$parent.clearFabs();
	$scope.isExpanded = true;
	$scope.$parent.setExpanded(true);
	$scope.$parent.setHeaderFab(false);

	// Activate ink for controller
	ionic.material.ink.displayEffect();

	ionic.material.motion.pushDown({
		selector: '.push-down'
	});
	ionic.material.motion.fadeSlideInRight({
		selector: '.animate-fade-slide-in .item'
	});

})

;
