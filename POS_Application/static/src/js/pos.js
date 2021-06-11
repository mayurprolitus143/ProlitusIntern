odoo.define('POS_Application.pos', function (require) {
  "use strict";
    console.log("This is PoS.js File  Console")

    var model = require("point_of_sale.models");

//    model.load_fields('res.partner','adhaar_id');
//    model.load_fields('res.partner','voter_id');
    model.load_fields('res.partner',['adhaar_id','voter_id','mobile']);

});