var customerExperiencePageBroke = false;
var Config = function () {
    return {
        //main function to initiate the module
        getAppRootUrl: function () {
            //return '..';
            //return 'http://restapp.thehaloworks.com/halo';
            return 'http://roastthatmeat.co.uk/halo';
        },
        getAppRootUrl1: function () {
            return 'http://report.thehaloworks.com/halo';
        },
        getApiRootUrl: function () {
            return 'http://localhost:63547/api';
        },
        getLoginPageUrl: function () {
            return 'http://restapp.thehaloworks.com/halo/pages/client-login.html';
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