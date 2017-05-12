function directive() {
    return {

    };
}

function registerEditableDirective(appModule) {

    return appModule.directive('ngEditable', function ($parse) {
        return {
            restrict: 'A',
            scope: {
                edtValue: '@',
                edtAutoUpdate: '&edtAutoUpdate', 
                edtAutoMetrics: '&edtAutoMetrics', 
                edtInfiniteNavigation: '&edtInfiniteNavigation', 
                edtOnCommit: '&edtOnCommit',
                edtInput: '&edtInput'
            },

            link: function (scope, element) {
                var options = {
                    edtAutoUpdate:          scope.edtAutoUpdate(), 
                    edtAutoMetrics:         scope.edtAutoMetrics(), 
                    edtInfiniteNavigation:  scope.edtInfiniteNavigation(), 
                    edtOnCommit:            _onCommit,
                    edtInput:               scope.edtInput()
                }
                function _onCommit(){
                    scope.$apply(function () {$parse(scope.edtValue).assign(scope.$parent, $(scope.edtInput()).val());});                    
                    if(scope.edtOnCommit()) scope.edtOnCommit()();
                }

                $(element).editable(options);
            },
        };
    });
}

