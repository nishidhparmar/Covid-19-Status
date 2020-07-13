var app = angular.module("Myapp",[]);
const URL = "https://covid19.mathdro.id/api";
app.controller("Myctrl",($scope,$http)=>{

    $http.get(URL).then((responce)=>{

        $scope.world_data = responce.data;

    },
    (error)=>{
        console.log(error);
    });

    $scope.get_data = ()=>{

        var country = $scope.country_name;
        if(country == "")
        {
            $scope.country_data=undefined;
            return;
        }
        $http.get(URL+"/countries/"+country).then((responce)=>{
            
            $scope.country_data = responce.data;

        },
        (error)=>{

            console.log(error);

        });
    };
    
});