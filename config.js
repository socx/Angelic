var customerExperiencePageBroke = false;
var Config = function () {
    return {
        //main function to initiate the module
        getAppRootUrl: function () {
            //return 'http://restapp.thehaloworks.com/halo';
            //return 'http://report.thehaloworks.com/halo';
            return 'http://roastthatmeat.co.uk/halo';
        },
        getApiRootUrl: function () {
            //return 'http://localhost:63547/api';
            //return 'http://restapp.thehaloworks.com/api';
            return 'http://report.thehaloworks.com/api';
            //return 'http://roastthatmeat.co.uk/api';
        },
        getLoginPageUrl: function () {
            //return 'http://restapp.thehaloworks.com/halo/pages/client-login.html';
            return 'http://report.thehaloworks.com/halo/pages/client-login.html';
            //return 'http://roastthatmeat.co.uk/halo/pages/client-login.html';
        },
        getAppImageUrl: function () {
            //return 'http://restapp.thehaloworks.com/halo/images';
            //return 'http://report.thehaloworks.com/images';
            return 'http://roastthatmeat.co.uk/halo/images';
        },
        getHaloImgPath: function () {
            return 'http://guardiance.thehaloworks.com/Images';
        },
        getDirectInputUrl: function () {
            return 'https://guardiance.thehaloworks.com/client/report-list.aspx';
        },
        getCustomerExperiencePageBroke: function () {
            return customerExperiencePageBroke;
        }
    };

}();