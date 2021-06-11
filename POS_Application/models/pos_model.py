from odoo import api, models, fields


class PosDB(models.Model):
    _inherit = 'res.partner'

    adhaar_id = fields.Char(string="Addhaar ID")
    voter_id = fields.Char(string="Voter ID Number")
