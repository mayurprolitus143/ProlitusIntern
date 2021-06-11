odoo.define('POS_Application.ClientDetailsChanges',function(require){
    "use strict"
    console.log("ClientDetailsEdit Console Are Running")
    const ClientDetailsEdit = require('point_of_sale.ClientDetailsEdit');
    const Registries = require('point_of_sale.Registries');
//    const session = require('web.session');

    const ValidationClass = ClientDetailsEdit=>class extends ClientDetailsEdit{
        saveChanges() {
            console.log("saveChanges Function Calling")
            if(this.changes.adhaar_id && this.changes.adhaar_id.length !== 12){
                return this.showPopup('ErrorPopup',{
                    title:_('Please enter a valid adhaar ID'),
                });
            }
            console.log("First--",this.changes.mobile,"Second",this.changes.mobile == 0,"Third", this.changes.mobile !== 10)
            if(this.changes.mobile && this.changes.mobile.length !== 10){
                return this.showPopup('ErrorPopup',{
                    title:_('Please enter mobile 10 digit number'),
                })
            } else if(this.changes.mobile == ""){
                    return this.showPopup('ErrorPopup',{
                    title:_('mobile Field is Mandatory')})
                } else if (this.changes.mobile && this.changes.mobile.length){
                    const partner_data = this.env.pos.db.partner_by_id;
                    for(var partner in partner_data){
                        if(partner_data[partner].mobile == this.changes.mobile){
                            return this.showPopup('ErrorPopup',{
                                title:_('Mobile number already exists'),
                            });
                        }
                    }
                }
            if(this.changes.adhaar_id && this.changes.adhaar_id.length) {
                const partner_data = this.env.pos.db.partner_by_id;
                for(var partner in partner_data){
                    if(partner_data[partner].adhaar_id == this.changes.adhaar_id){
                         return this.showPopup('ErrorPopup', {
                             title:_('Adhaar ID already exists. Enter different adhaar ID'),
                         });
                    }
                }
            }
        super.saveChanges(...arguments);
        }
        updateClientList(event) {
            super.updateClientList(...arguments);
            const partner_data = this.env.pos.db.partner_by_id;
            for(var partner in partner_data){
                if(partner_data[partner].mobile == this.state.query){
                    this.render()
                }
            }
        }

    };
    Registries.Component.extend(ClientDetailsEdit, ValidationClass);
    return ClientDetailsEdit;
});