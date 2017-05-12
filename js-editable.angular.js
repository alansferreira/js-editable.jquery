function directive() {
    return {

    };
}

function registerEditableDirective(appModule) {

    return appModule.directive('ngEditable', function () {
        return {
            restrict: 'A',
            scope: {
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
                    edtOnCommit:            scope.edtOnCommit(),
                    edtInput:               scope.edtInput()
                }   
                $(element).editable(options);
            },
        };
    });
}

